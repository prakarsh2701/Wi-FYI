using EmailService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System.Net.Mail;
using System.Net;

namespace EmailService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
    {

        private readonly IMongoCollection<EmailModel> _emailCollection;

        public EmailController()
        {
            // MongoDB connection string and database name
            string connectionString = "mongodb://localhost:27017";
            string databaseName = "recipientemaildb";

            var client = new MongoClient(connectionString);
            var database = client.GetDatabase(databaseName);

            // Initialize the email collection (you can create an EmailModel class with the desired properties)
            _emailCollection = database.GetCollection<EmailModel>("emails");
        }
        [HttpPost("SendEmail")]
        public IActionResult SendEmail([FromBody]EmailModel emailModel)
        {
            try
            {
                // Gmail SMTP settings
                var smtpServer = "smtp.gmail.com";
                var smtpPort = 587; // 587 is the standard TLS port, use 465 for SSL
                var smtpUsername = "kumarashishsim53@gmail.com";
                var smtpPassword = "cjdj mufo ilsa ersp";

                using (var smtpClient = new SmtpClient(smtpServer))
                {
                    smtpClient.Port = smtpPort;
                    smtpClient.Credentials = new NetworkCredential(smtpUsername, smtpPassword);
                    smtpClient.EnableSsl = true; // Use SSL for Gmail

                    var mailMessage = new MailMessage
                    {
                        From = new MailAddress(smtpUsername),
                        Subject = emailModel.Subject,
                        Body = emailModel.Body,
                        IsBodyHtml = true // Set to true if you want to send HTML emails
                    };

                    mailMessage.To.Add(emailModel.To);

                    smtpClient.Send(mailMessage);

                    // Store the email data in MongoDB
                    _emailCollection.InsertOne(emailModel);

                    return Ok("Email sent and saved successfully.");
                }
            }
            catch (Exception ex)
            {
                // Handle exceptions here
                return StatusCode(500,ex.Message);
            }
        }
    }
}

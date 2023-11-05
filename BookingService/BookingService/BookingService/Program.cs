using BookingService;
using BookingService.Models;
using BookingService.Repository;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<DataContext>();
builder.Services.AddScoped<IBookingRepository, BookingRepository>();


//builder.Services.AddSingleton<KafkaConsumerFactory>();
//builder.Services.AddSingleton<IHostedService>(provider =>
//{
//    var factory = provider.GetRequiredService<KafkaConsumerFactory>();
//    return factory.CreateUser();
//});
//builder.Services.AddSingleton<IHostedService>(provider =>
//{
//    var factory = provider.GetRequiredService<KafkaConsumerFactory>();
//    return factory.CreatePackage();
//});

builder.Services.AddCors(op=>op.AddPolicy("mypolicy",plcy=>plcy.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("mypolicy");
app.UseAuthorization();

app.MapControllers();

app.Run();

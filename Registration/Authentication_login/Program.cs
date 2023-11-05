using Authentication_login;
using Authentication_login.Models;
using Authentication_login.Repository;
using Authentication_login.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();


builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle


builder.Services.AddScoped<DataContext>();

builder.Services.AddScoped<ITokenGenerator, TokenGenerator>();


builder.Services.AddSingleton<KafkaConsumerFactory>();
builder.Services.AddSingleton<IHostedService>(provider =>
{
    var factory = provider.GetRequiredService<KafkaConsumerFactory>();
    return factory.Create();
});
//builder.Services.AddDbContext<LoginDbContext>(o => o.UseSqlServer(builder.Configuration.GetConnectionString("MyCon")));

builder.Services.AddScoped<ITokenGenerator, TokenGenerator>();
builder.Services.AddScoped<ILoginRepository,LoginRepository>();
builder.Services.AddCors(op => op.AddPolicy("AllowAngularOrigins", plcy => plcy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseAuthorization();
app.UseCors("AllowAngularOrigins");
app.MapControllers();

app.Run();

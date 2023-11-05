using Ocelot.DependencyInjection;
using Ocelot.Middleware;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("Ocelot.json");
builder.Services.AddOcelot();
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(op => op.AddPolicy("AllowAngularOrigins", plcy => plcy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod()));



var app = builder.Build();
app.UseCors("AllowAngularOrigins");
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseOcelot();
app.MapGet("/", () => "Hello World!");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
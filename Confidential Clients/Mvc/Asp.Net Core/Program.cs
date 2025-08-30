using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;

var builder = WebApplication.CreateBuilder(args);

builder
    .Services
    .AddAuthentication(o =>
    {
        o.DefaultAuthenticateScheme = CookieAuthenticationDefaults.AuthenticationScheme;
        o.DefaultChallengeScheme = "entrypage";
        o.DefaultSignInScheme = CookieAuthenticationDefaults.AuthenticationScheme;
    })
    .AddCookie(o =>
    {
        o.Cookie.SameSite = SameSiteMode.Strict;
        o.Cookie.HttpOnly = true;
    }).AddOpenIdConnect("entrypage", options =>
    {
        options.Authority = "https://exemple-test.sandbox.entrypage.io";
        options.ClientId = "aspnetcore-mvc-app";
        options.ClientSecret = "paste-your-client-secret-here";
        options.SaveTokens = true;
        options.UsePkce = true;
        options.ResponseType = "code";
    });

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseRouting();

app.UseAuthorization();
app.UseAuthorization();

app.MapGet("/login", async (context) =>
{
    var authenticationOptions = new AuthenticationProperties
    {
        RedirectUri = "/",
    };
    
    await context.ChallengeAsync("entrypage", authenticationOptions);
});

app.MapGet("/my/secret/resource", (context) =>
    {
        var result = Results.Ok();
        return Task.FromResult(result);
    })
    .RequireAuthorization();

app.MapStaticAssets();
app.MapRazorPages()
   .WithStaticAssets();

app.Run();

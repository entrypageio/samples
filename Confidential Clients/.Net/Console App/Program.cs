using Duende.IdentityModel.Client;

Console.WriteLine("Entrypage Console App Demo");
Console.WriteLine("");

Console.Write("authority (e.g. https://yourserver.sandbox.entrypage.io): ");
var authority = Console.ReadLine();

Console.Write("client_id: ");
var clientId = Console.ReadLine();

Console.Write("client_secret: ");
var clientSecret = Console.ReadLine();

var httpClient = new HttpClient();

// Obtain the discovery document to find the location of the token-endpoint
var discoveryDocument = await httpClient.GetDiscoveryDocumentAsync(authority);
if (discoveryDocument.IsError)
{
    Console.Error.WriteLine("Failed to obtain discovery document: {discoveryDocument.Error}");
    return;
}

// Post the client_id, the client_secret, and the scope to the token endpoint to obtain the token
var token = await httpClient.RequestClientCredentialsTokenAsync(new ClientCredentialsTokenRequest()
{
    Address = discoveryDocument.TokenEndpoint,
    ClientId = clientId,
    ClientSecret = clientSecret,
    Scope = "openid"
});

if (token.IsError)
{
    Console.Error.WriteLine($"Failed to obtain token: {token.Error}");
    return;
}

Console.WriteLine($"Token: {token.AccessToken}");

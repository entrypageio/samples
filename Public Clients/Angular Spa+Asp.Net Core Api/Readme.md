# Angular Spa + Asp.Net Core Api

This sample demonstrates how to obtain an `id_token` and an `access_token` via an Angular app. It uses the `id_token` to display the username and it uses the `access_token` to access the API.

## Prerequisites:
- Angular 19
- .NET Core 9
- An [Entrypage.io account](https://www.entrypage.io/how-to/register/)
    - Configure a confidential client (PKCE + Client Secret) named `api-demo-entrypage-io`
    - Configure a public client (PKCE without Client Secret) named `demo-entrypage-io`

## How to Run

### 1. Configure the Authority
After you register your account at Entrypage.io, you will be assigned a domain. This domain serves as the **authority** that you need to configure in your sample application to get it running.

* Configure the correct authority in the following file:
    * [/Public%20Clients/Angular%20Spa%2BAsp.Net%20Core%20Api/Spa/src/app/auth.config.module.ts](https://github.com/entrypageio/samples/blob/main/Public%20Clients/Angular%20Spa%2BAsp.Net%20Core%20Api/Spa/src/app/auth.config.module.ts)
* Also, configure the appropriate authority in this file:
    * [/Public%20Clients/Angular%20Spa%2BAsp.Net%20Core%20Api/Api/Program.cs](https://github.com/entrypageio/samples/blob/main/Public%20Clients/Angular%20Spa%2BAsp.Net%20Core%20Api/Api/Program.cs)

### 2. Run the Projects
Open the `.sln` file with Visual Studio or JetBrains Rider and run both projects simultaneously.
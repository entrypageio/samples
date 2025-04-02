# Entrypage Samples

This repository demonstrates various ways to implement Entrypage in bespoke applications. As with any OAuth implementation, it is important to obtain tokens in the appropriate manner and validate them properly.

Entrypage is a Single Sign-On server. That means:
- People are signed in to an Entrypage and have a session there
- These people have delegated permissions to use Clients (e.g. Single-Page-Apps, APIs, Web Applications, and Mobile Apps).

We recommend following the principle of least privilege and minimizing the use of personally identifiable information. In other words, carefully decide when to use `access_tokens` and when to use `id_tokens`. What is appropriate depends on the context; therefore, we provide samples for various scenarios.

## Confidential clients
Confidential clients obtain tokens with a `client_secret`. By using a `client_secret`, the applications that are able to obtain tokens can be strictly regulated. Currently, we have the following samples which demonstrate how to implement a confidential client:

- [Confidential Clients](Confidential%20Clients)

## Public clients
Public clients obtain tokens without a `client_secret`. Those are typically Single Page Applications (without a BFF pattern).

- [Asp.Net Core API + Angular](Public%20Clients/Angular%20Spa+Asp.Net%20Core%20Api/Readme.md)
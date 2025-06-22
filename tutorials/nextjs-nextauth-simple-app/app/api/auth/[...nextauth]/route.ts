import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        {
            id: "entrypage",
            name: "Entrypage.io",
            issuer: process.env.OAUTH_ISSUER,
            type: "oauth",
            clientId: process.env.OAUTH_CLIENT_ID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            wellKnown: process.env.OAUTH_WELL_KNOWN,
            idToken: true,
            checks: ["pkce","state"],
            authorization: {
                params: {
                    scope: "openid profile",
                }
            },
            profile(profile) {
                return {
                    id: profile.sub,
                    name: profile.name
                }
            }
        }
    ]
})

export { handler as GET, handler as POST }
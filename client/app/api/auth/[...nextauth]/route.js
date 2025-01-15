import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name:'Email',
            credentials:{
                username:{ label: 'Email', type:'text', placeholder: 'joe@example.com'},
                password:{ label: 'Password', type: 'password', placeholder: 'xxxxxx'}
            },
            async authorize(credentials) {

                // validation using the database
                credentials.username = "ABC"

                return {
                    id: 1,
                    email: "qwe@gmail.com",
                    name: "XYZ"
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // callbacks: {
    //     jwt: ({token, user}) => {
    //         return token;
    //     },
    //     session: ({session, token, user}) => {
    //         session.user.id = token.sub; // passes id to the frontend in the session object
    //         return session
    //     }
    // }
});

export { handler as GET, handler as POST }
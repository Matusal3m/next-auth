import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authConfig = ({
  providers: [
    GitHubProvider ({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider ({
      clientId: process.env.GOOGLE_ID,
      cleintSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider ({
      name: "Email Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "example@gmail.com"},
        password: {label: "Password", type: "password", placeholder: "your-password"}
      },
      async authorize(credentials) {

        // Como fazer uma lógica mais flexível?
        // Como pegar esses dados uma API?

        const user = {
          id: "1",
          name: "Matusalém",
          email: "matusalem@gmail.com",
          password: "123456",
          role: "admin"
        }

        const isValidUser = user.email === credentials?.email && user.password === credentials?.password;

        if(isValidUser) {
          return user
        }

        return null;
      }
      
    })
  ], 
  session: {
    strategy: "jwt"
  }
})

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    // OAuth authentication providers
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_OAUTH_ID,
      clientSecret: process.env.NEXT_PUBLIC_OAUTH_SECRET,
    })
  ],
  pages: {
    signIn: "/signin",
  }
})
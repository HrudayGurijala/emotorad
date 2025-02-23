import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/auth", // Ensure your auth page exists
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl + "/dashboard" // Redirect to dashboard after login
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }

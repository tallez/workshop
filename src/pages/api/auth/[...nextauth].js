import { PrismaAdapter } from "@next-auth/prisma-adapter"
import EmailProvider from "next-auth/providers/email"
import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth"

import prisma from "../../../../lib/prisma"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
})

//

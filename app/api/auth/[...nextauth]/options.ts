import type { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { dbConnect } from "@/lib/mongodb"
import User from "@/models/User"
import bcrypt from "bcrypt"

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        await dbConnect()
        const user = await User.findOne({ email: credentials?.email })
        if (!user) throw new Error("No user found")
        
        const isValid = await bcrypt.compare(credentials?.password || '', user.password)
        if (!isValid) throw new Error("Invalid password")

        return {
          id: user._id.toString(),
          email: user.email,
          name: `${user.firstName} ${user.lastName}`
        }
      }
    })
  ],
  pages: {
    signIn: '/user/auth'
  },
  session: { strategy: "jwt" }
}

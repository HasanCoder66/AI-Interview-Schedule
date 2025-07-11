// // /lib/authOptions.js
// import GoogleProvider from "next-auth/providers/google";
// import User from "@/models/User";
// import connectDB from "@/lib/mongodb";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],

//   callbacks: {
//     async signIn({ user }) {
//       await connectDB();

//       const existingUser = await User.findOne({ email: user.email });
//       if (!existingUser) {
//         await User.create({
//           name: user.name,
//           email: user.email,
//           image: user.image,
//         });
//       }

//       return true;
//     },
//     async session({ session }) {
//       // If needed, you can modify session object here
//       return session;
//     },
//   },
// };











// import GoogleProvider from "next-auth/providers/google";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   secret: process.env.NEXTAUTH_SECRET,
// };

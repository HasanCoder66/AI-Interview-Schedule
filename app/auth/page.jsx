"use client"

import { AiRecruiterImg, HiringMineLogo } from "@/assets";
import { Button } from "@/components/ui/button";
import { supabase } from "@/services/supabase";
import Image from "next/image";
import React from "react";

const Login = () => {
  // Use this Function for Login With Google with Supabase

  // const signInWithGoogle = async () => {
  //   const { error } = await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //   });

  //   if(error) {
  //     console.error("Error:" , error.message)
  //   }
  // };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center border rounded-2xl p-8">
        <Image
          src={HiringMineLogo}
          width={120}
          height={50}
          alt="Logo"
          className="w-[200px]  mb-3 "
        />
        <div className="flex flex-col items-center">
          <Image
            src={AiRecruiterImg}
            width={600}
            height={400}
            alt="Login"
            className="w-[400px] h-[250px] rounded-2xl"
          />
          <h2 className="text-center text-2xl font-bold mt-5">
            Welcome to HiringMine's AI Recruiter!
          </h2>
          <p className="text-center text-gray-500">
            Sign In with Google Authentication
          </p>
          <Button className="mt-7 w-full"
          // onClick={signInWithGoogle}
          >Login with Google </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;




// "use client";

// import { signIn, signOut, useSession } from "next-auth/react";
// import { Button } from "@/components/ui/button";

// export default function GoogleLoginBtn() {
//   const { data: session } = useSession();

//   if (session) {
//     return (
//       <div>
//         <p>Welcome, {session.user.name}</p>
//         <Button onClick={() => signOut()}>Logout</Button>
//       </div>
//     );
//   }

//   return (
//     <Button onClick={() => signIn("google")}>
//       Login with Google
//     </Button>
//   );
// }

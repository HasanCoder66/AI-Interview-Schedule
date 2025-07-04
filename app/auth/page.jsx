import { AiRecruiterImg, HiringMineLogo } from "@/assets";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <Image
          src={
            HiringMineLogo
          }
          width={200}
          height={100}
          alt="Logo"
          className="w-[180px]  mb-3"
        />
        <div className="flex flex-col items-center">
          <Image
            src={AiRecruiterImg}
            width={600}
            height={400}
            alt="Login"
            className="w-[400px] h-[250px]"
          />
          <h2 className="text-center text-2xl font-bold mt-5">
            Welcome to HiringMine's AI Recruiter!
          </h2>
          <p className="text-center text-gray-500">
            Sign In with Google Authentication
          </p>
          <Button className="mt-7 w-full">Login with Google </Button>
        </div>

      </div>
    </div>
  );
};

export default Login;

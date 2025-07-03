import Image from "next/image";
import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center">
        <Image
          src={
            "https://www.hiringmine.com/assets/Hiring%20Mine%20Logo-453a72d3.png"
          }
          width={200}
          height={100}
          alt="Logo"
          // className="w-[180px]"
        />
        <div>
          <Image
            src={
              "https://www.hiringmine.com/assets/Hiring%20Mine%20Logo-453a72d3.png"
            }
            width={600}
            height={400}
            alt="Login"
            className="w-[400px] h-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

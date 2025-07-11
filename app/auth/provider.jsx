"use client";

import { supabase } from "@/services/supabase";
import React, { useEffect } from "react";

const Provider = ({ children }) => {
  const createNewUser = () => {
    supabase.auth.getUser().then(async ({ data: { user } }) => {
      // check if user is not exist
      let { data: Users, error } = await supabase
        .from("Users")
        .select("*")
        .eq("email", user?.email);

      console.log(Users);
      // then create a new user
      if (Users?.length == 0) {
        const { data, error } = await supabase.from("Users").insert([
          {
            name: user?.user_metadata?.name,
            email: user?.email,
            picture: user?.user_metadata?.picture,
          },
        ])
if (error) {
    console.error("INSERT ERROR:", error);
  } else {
    console.log("INSERT SUCCESS:", data);
  }

        // console.log("Data:", data);
      }
    });
  };

  useEffect(() => {
    createNewUser();
  }, []);
  return <div>{children}</div>;
};

export default Provider;





// "use client"

// import { supabase } from "@/services/supabase";
// import React, { useEffect } from "react";

// const Provider = ({ children }) => {
//   const createNewUser = async () => {
//     const { data: { user }, error: userError } = await supabase.auth.getUser();

//     if (userError) {
//       console.error("AUTH ERROR:", userError);
//       return;
//     }

//     if (!user) {
//       console.log("No user logged in");
//       return;
//     }

//     let { data: Users, error: selectError } = await supabase
//       .from("Users")
//       .select("*")
//       .eq("email", user.email);

//     if (selectError) {
//       console.error("SELECT ERROR:", selectError);
//       return;
//     }

//     console.log("Found Users:", Users);

//     if (Users?.length === 0) {
//       const { data: insertData, error: insertError } = await supabase
//         .from("Users")
//         .insert([{
//           name: user.user_metadata?.name,
//           email: user.email,
//           picture: user.user_metadata?.picture,
//           credits: 0
//         }]);

//       if (insertError) {
//         console.error("INSERT ERROR:", insertError);
//       } else {
//         console.log("INSERT SUCCESS:", insertData);
//       }
//     }
//   };

//   useEffect(() => {
//     createNewUser();
//   }, []);

//   return <div>{children}</div>;
// };

// export default Provider;

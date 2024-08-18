// import { Staff as importedstaff} from "@/sections"
// import Head from "next/head"
// import React from "react"

// const Staff = () => {
//   return (
//     <>
//       <Head>
//         <title>Staff - Curl Up and Dye</title>
//       </Head>
//       <Staff />
//     </>
//   )
// }

// export default Staff





//GPT CODE TO RUN BUILD
// pages/staff.js
import { Staff as StaffSection } from "@/sections"; // Renamed import
import Head from "next/head";
import React from "react";

const Staff = () => {
  return (
    <>
      <Head>
        <title>Staff - Curl Up and Dye</title>
      </Head>
      <StaffSection /> {/* Render the imported component */}
    </>
  );
};

export default Staff;

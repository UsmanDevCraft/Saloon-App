// pages/booking.js
import { Appointment } from "@/sections";
import Head from "next/head";

const appointment = () => {
  return (
    <>
      <Head>
        <title>BookingPage - Curl Up and Dye</title>
      </Head>
      <Appointment />
    </>
  );
};

export default appointment;

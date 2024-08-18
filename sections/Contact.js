import { Title, TitleSm } from "@/components/common/Title"
import React, { useRef, useState } from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import emailjs from '@emailjs/browser';

const Contact = () => {

  // ----------------------- > CODE FOR EMAIL SENDING USING EMAILJS ----------------------- >
  const form = useRef();
  const [ data, setData] = useState({
    name: "", email: "", message: ""
  })
  const onSubmit = (e) => {
    e.preventDefault();
    try {
      emailjs
      .sendForm('service_gjix0cq', 'template_a8u4lvz', form.current, {
        publicKey: 'F2xkqSG0iRw2F74t3',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      alert("Email Sent Successfully!")
    } catch (error) {
      console.log(error)
    }
  }
  const onChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
    // console.log(e.target.value)
  };


  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3>1-001-234-5678</h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>New York</h3>
                  <span>990 Madison Ave, Midtown Manhattan, 2th Floor, NY 10022</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>info@dream-theme.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>hr@CURL-HAIR.com</h3>
                  <span>Career at CURL HAIR AND DYE</span>
                </div>
              </div>
              <ul>
                <li className='icon'>
                  <BsFacebook size={25} />
                </li>
                <li className='icon'>
                  <AiFillBehanceCircle size={25} />
                </li>
                <li className='icon'>
                  <AiFillInstagram size={25} />
                </li>
                <li className='icon'>
                  <AiFillLinkedin size={25} />
                </li>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Fill out the form below to get our proposal. </p>


              {/* ---------------------- FORM FOR GETTIGN THE Email ---------------------- */}
              <form onSubmit={onSubmit} ref={form}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name</span>
                    <input type='text' id="name" name="name" onChange={onChange}/>
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input type='text' id="email" name="email" onChange={onChange}/>
                  </div>
                </div>
                {/* <div className='grid-2'>
                  <div className='inputs'>
                    <span>your budget</span>
                    <input type='text' />
                  </div>
                  <div className='inputs'>
                    <span>timeframe</span>
                    <input type='text' />
                  </div>
                </div> */}
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea cols='30' rows='10' id="message" name="message" onChange={onChange}></textarea>
                </div>
                <button className='button-primary'>Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

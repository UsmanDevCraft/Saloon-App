import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Salon = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT SALON' /> <br />
            <br />
            <Title title='The Salon you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Experience Beauty and Expertise at Curl Up And Dye' />
              <p className='desc-p'>At Curl Up & Dye, we believe that everyone deserves to look and feel their best.
                 Our salon is more than just a place to get a haircut—it's a space where beauty, 
                 creativity, and self-care come together.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>MANY</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>MANY</h1>
                  <h3>Satisfied Clients</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>USES</h1>
                  <h3>Quality Products</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>
              At Curl Up and Dye, our mission is to enhance the natural beauty of every client 
              through exceptional hair care. We are dedicated to providing personalized services
               in a warm and welcoming environment. Our experienced team ensures you leave feeling confident, 
               refreshed, and ready to embrace your unique style.
               We aim to make every visit a positive and uplifting experience.
                    </p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Salon

import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import ServiceCard from "@/components/ServiceCard"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React from "react"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='Curl Up and Dye'  className='logobg' />
          <h1 className='hero-title'>Transform Your Look with Us</h1>

          <div className='sub-heading'>
            <TitleSm title='Expert Stylists' /> <span>.</span>
            <TitleSm title='Luxurious Treatments' /> <span>.</span>
            <TitleSm title='Relax and Unwind' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Your Ultimate Hair Sanctuary' />
            <p>At Curl Up & Dye, we believe that beauty is a journey, not a destination. Our salon is dedicated to providing you with a luxurious and personalized experience that will leave you feeling refreshed, confident, and radiant. Whether you're seeking a bold new look or a subtle touch-up, our skilled stylists are here to make your hair dreams come true.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ServiceCard/>
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
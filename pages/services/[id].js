import { expertise } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import { Title, TitleSm } from "@/components/common/Title"
import Head from "next/head"
import { useRouter } from "next/router"
import React, { useState } from "react"
import Header from "@/components/common/Header"

const SinglePost = () => {
  const router = useRouter()
  const { id } = router.query;

    // If the id is undefined (when page first loads), return null or a loading state
    if (!id) {
      return <div>Loading...</div>;
    }

    
  const [cartdata,setCartdata]=useState();
  const post = expertise.find((post) => post.id === parseInt(id));

    // If no post is found with the given id, return an error message or redirect
    if (!post) {
      return <div>Post not found</div>;
    }
    
const addToCart=(post) =>{
setCartdata(post);
}
  return (
    <>
    {false && (
        <Header cartdata={cartdata} setCartdata={setCartdata} />
      )}

      <Head>
        <title>{post.title}</title>
      </Head >
      <section className='post-details bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='Why Curl Up & Dye is Your Hair Haven' /> <br />
            <br />
            <Title title={post.title} className='title-bg' />
            <div className='img py'>
              <img src={post.cover} alt={post.title} width='100%' height='100%' className='round' />
            </div>
            {/* <button className="button-primary-class" onClick={()=>addToCart(post)} >ADD TO CART</button> */}
            <div className='desc'>
              <TitleSm title='Discover the Magic of a Hair Salon: Transform Your Look' />
              <p className='desc-p'> Life is a series of transformations, and sometimes, a fresh start begins with a change in your hair. Whether you're craving a bold new color, a chic new cut, or simply a touch of pampering, a visit to a hair salon can be a powerful act of self-care and self-expression.</p>
              <p className='desc-p'>A hair salon is more than just a haircut; it's a space for transformation, a chance to express your unique style and emerge feeling confident and empowered. </p>
              <p className='desc-p'> At Curl Up & Dye, we offer a range of services designed to enhance your natural beauty, from classic cuts and trendy styles to vibrant colors and personalized treatments.
              We're here to guide you through the process, offering expert advice and creating an experience that leaves you feeling pampered, inspired, and ready to embrace your best self.
              </p>
            </div>
          </div>
          <Banner />

          <div className='heading-title'>
            <div className='desc'>
              <TitleSm title='WHY CHOOSE CURL HAIR AND DYE' />

              <p className='desc-p'> We all know that feeling: the moment you step into a hair salon, a sense of calm washes over you. It's a place where you can escape the everyday, indulge in a little self-care, and emerge feeling refreshed and empowered.</p>
              <p className='desc-p'>But at Curl Up & Dye, we believe in taking that experience to a whole new level. We're not just a hair salon; we're a haven for your hair and your well-being. Here's why:</p>
              <p className='desc-p'>We're more than just stylists; we're a team of passionate individuals who genuinely care about our clients. We take the time to listen to your needs, understand your hair goals, and create a personalized experience that leaves you feeling confident and beautiful.</p>
              <p className='desc-p'> Our stylists are highly trained professionals who stay up-to-date on the latest trends and techniques. Whether you're looking for a classic cut, a trendy style, or a vibrant new color, we have the expertise to make your hair dreams a reality.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SinglePost
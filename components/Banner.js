import React from "react"
import { Title, TitleLogo } from "./common/Title"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='Look & Feel Your Best at Curl Up & Dye' /> <br />
            <TitleLogo title='Your Style, Our Expertise": Curl Up & Dye!' />
          </div>
          <div>
            <button className='button-primary'>Request a call-back</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner

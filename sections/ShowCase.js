import { showcase } from "@/assets/data/dummydata"
import  ShowCase  from "@/components/ShowCase"
import { Title, TitleSm } from "@/components/common/Title"

import React from "react"

const showCase = () => {
  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SHOWCASE' /> <br />
            <br />
            <Title title='Fresh ideas. Bold design. Smart realisation.' className='title-bg' />
          </div>
          <br />
          <br />
          <div >
            <ShowCase/>
          </div>
          <div className='py btn'>
            <button className='secondary-button'>View More</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default showCase
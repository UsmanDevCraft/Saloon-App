import { expertise } from "@/assets/data/dummydata"
// import { Card } from "@/components/common/Card"
import { Title, TitleSm } from "@/components/common/Title"
import ServiceCard from "@/components/ServiceCard"
import React from "react"

const Services = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SERVICES' /> <br />
            <br />
            <Title title='Unique technologies & modern approach' className='title-bg' />
          </div>
          <div>
              <ServiceCard />
          </div>
        </div>
      </section>
    </>
  )
}

export default Services

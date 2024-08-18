import React from "react"
import { Card } from "./common/Card"
import { expertise } from "@/assets/data/dummydata"

const ServiceCard = () => {
  return (
    <>
      <div className='container blog-card grid-2 py'>
      {expertise.map((item) => (
              <Card data={item} key={item.id} caption={item.post} show={true}   path='services' />
            ))}
      
      </div>
    </>
  )
}

export default ServiceCard
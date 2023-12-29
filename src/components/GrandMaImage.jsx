import Image from 'next/image'
import React from 'react'

function GrandMaImage() {
  return (
    <div className='grandma'>
      <div className='shake'>
        <div className='blink'>
          <Image
            width={200}
            height={200}
            alt={'Cristina Pazos'}
            priority
            src={`https://res.cloudinary.com/dmbyamscv/image/upload/v1703789298/WhatsApp_Image_2023-12-28_at_15.44.59-removebg-preview_tnhzas.png`}
          ></Image>
        </div>
      </div>
    </div>
  )
}

export default GrandMaImage

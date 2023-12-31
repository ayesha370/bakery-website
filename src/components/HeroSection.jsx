import React from 'react'
import image from '../assets/images/image 2.png'

function HeroSection() {
  return (
    <div className='bg-dark text-white '>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 p-4 mt-5'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            vitae nostrum quod delectus ex consequatur provident hic neque culpa
            veritatis veniam tempora aperiam sequi id voluptatibus cum, illo
            repellendus soluta! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ut aspernatur cum dolorem! Mollitia, suscipit?
            Earum modi, aliquam velit veritatis, animi impedit eum libero,
            aperiam at deserunt necessitatibus in neque incidunt! Lorem ipsum
            dolor sit amet consectetur, adipisicing elit. Adipisci earum
            asperiores consectetur ab praesentium. Beatae debitis vitae
            exercitationem eos dolorem assumenda sed, corrupti accusantium
            voluptatem accusamus modi nam molestias voluptatum?
          </div>
          <div className='col-md-6 p-4'>
            <img src={image} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

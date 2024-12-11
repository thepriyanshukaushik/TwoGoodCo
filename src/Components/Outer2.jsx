import React from 'react'

const Outer2 = () => {
  return (
    <div  data-scroll-container className='outer2container'>
      <div className="outer2component1">
        <h1>Our Impact.</h1>
        <p>The thing is, we don't save anyone.</p>
        <p>What we do is provide a safe space for women to change the course of their own lives.</p>
        <p>After many years of living in crisis, abuse and complex trauma, restoring self-worth is foundational for independence. We believe that through experiences that promote love and respect, we can spark and nurture a sense of self-worth for those on the path of healing.</p>
        <div className='outer2foot'>
          <p >HERE'S HOW WE DO IT</p>
          <hr />

        </div>


      </div>
      <div className="outer2component2">
        <img className="outer2img" data-scroll data-scroll-speed = "1" src="https://cdn.sanity.io/images/w8f1ak3c/production/943f8f43b76b4e030f41deddca1edd44170fee39-5504x8256.jpg/Christina-Maria-Jes-Lindsay-9143.jpg?fp-x=0.5&fp-y=0.5&w=640&h=947&fit=crop&crop=focalpoint&auto=format" alt="" />
        <img className="outer2img" data-scroll data-scroll-speed = "1" src="https://cdn.sanity.io/images/w8f1ak3c/production/84da7b8b510e006ce0ca22769d93bb6c044945f6-5504x8256.jpg/Patricia-Work-Work-Good-Stories-Two-Good-Co.jpg?rect=0,56,5504,8144&w=640&h=947&fit=min&auto=format" alt="" />
      </div>

    </div>


  )
}

export default Outer2

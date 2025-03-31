import React from 'react'

export default function ContactCard() {
  return (
    <div className='CardContent'>
      <h1 className='cardh1'>Contact Me</h1>
      <div className="card">
        <img src="https://media.licdn.com/dms/image/v2/D4D03AQFINjv5LzdJTA/profile-displayphoto-shrink_400_400/B4DZXiAjmjHAAg-/0/1743253552286?e=1748476800&v=beta&t=CIyiI_h3ZPLuKT2hZn82iZn95qtKN7KPg9jGGZCOi44" alt="Myimg" style={{animationDelay: '0.5s',height:'200px'}} />
        <h2>Saksham Gupta</h2>
        <h3>Frontend Developer</h3>
        <p>Phone: +91-9911912563</p>
        <p>Email: sakshamkgupta01@gmail.com</p>
      </div>
    </div>
  )
}

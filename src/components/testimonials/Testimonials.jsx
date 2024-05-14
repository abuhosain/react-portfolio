import React from 'react'
import "./testimonial.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"
const data = [
  {
    "avatar": AVTR1,
    "name": "Tina Snow",
    "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aperiam aut facilis rem asperiores est animi similique quis, reiciendis blanditiis."
  },
  {
    "avatar": AVTR2,
    "name": "John Doe",
    "review": "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    "avatar": AVTR3,
    "name": "Alice Wonderland",
    "review": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    "avatar": AVTR4,
    "name": "Bob Builder",
    "review": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
  }
]

const Testimonials = () => {
  
  return (
    <section id='testimonials'>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <article key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="client photo" />
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                   {review}
                </small>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Testimonials
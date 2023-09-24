import React from 'react'
import Profile from '../../assets/home.jpg'
import { Link } from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa"
import './home.css'

const Home = () => {
  return (
    <section className='home section grid'>
      <img src={Profile} alt='profile' className='home__img' />

      <div className='home__content'>
        <div className='home__data'>
          <h1 className='home__title'>
            <span>I'm Harshal Modhave.</span> Competitive Programmer and Web Designer
          </h1>

          <p className='home__description'>
            I am a driven competitive programmer with a deep passion for tackling real-world challenges using my knowledge in data structures and algorithms. My dedication lies in crafting exceptional web solutions that have a positive impact on people's lives. With a love for problem-solving and a knack for innovation, I strive to create web pages that not only meet high standards but also bring tangible improvements to those who interact with them.
          </p>

          <Link to='/about' className='button'>
            More About Me <span className='button__icon'><FaArrowRight /></span>
          </Link>
        </div>
      </div>

      <div className="color__block"></div>

    </section>
  )
}

export default Home

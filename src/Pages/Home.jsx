import React from 'react'
import Nav from '../Components/nav'
import Hero from '../Sections/Hero'
import Move from '../Sections/Move'
import Cursor from '../Sections/Cursor'
import Award from '../Sections/Award'
import Portfolio from '../Sections/Portfolio'
import Services from '../Sections/Services'
import Copywright from '../Components/Copywright'

const Home = () => {
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Move></Move>
      <Cursor></Cursor>
      <Portfolio></Portfolio>
      <Services></Services>
      <Award></Award>
      <Copywright></Copywright>
    </>
  )
}

export default Home
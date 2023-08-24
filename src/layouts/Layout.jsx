import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

import { Outlet } from 'react-router-dom'



function Layouts() {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  )
}

export default Layouts
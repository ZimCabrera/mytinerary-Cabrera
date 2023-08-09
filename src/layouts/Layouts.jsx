import Header from '../components/Header'
import Footer from '../components/Footer'

function Layouts({children}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layouts
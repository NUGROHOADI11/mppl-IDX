import NavigationBar from '../components/NavBar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Best from '../components/Best'
import About from '../components/About'
import Chat from '../components/Chat'
function Landing() {
  return (
    <>
      <div>
        <NavigationBar/>
        <Hero/>
        <Best/>
        <About/>
        <Chat/>
        <Footer/>
      </div>      
    </>
  )
}

export default Landing
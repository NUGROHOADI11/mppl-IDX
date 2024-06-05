import Category from "../components/Category"
import Footer from "../components/Footer"
import NavigationBar from "../components/NavBar2"
import Chat from "../components/Chat"

function Menu() {
  return (
    <>      
      <div>
        <Chat/>
        <NavigationBar/>
        <Category/>
        <Footer />   
      </div>      
    </>
  )
}

export default Menu
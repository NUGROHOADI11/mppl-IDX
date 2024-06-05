import Category from "../components/Category"
import Product from '../components/Product'
import NavigationBar from "../components/NavBar2"
import Footer from "../components/Footer"
import Bread from "../components/categories/Bread"
import Cakes from "../components/categories/Cakes"

function Menu() {
  return (
    <>      
      <div>
        <NavigationBar/>
        <Category/>
        <Product/>
        <Bread/>
        <Cakes/>
        <Footer/>   
      </div>      
    </>
  )
}

export default Menu
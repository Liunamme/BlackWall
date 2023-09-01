import About from "./components/About/About"
import Areas from "./components/Areas/Areas"
import Careers from "./components/Careers/Careers"
import ContactUs from "./components/ContactUs/ContactUs"
import Footer from "./components/Footer/Footer"
import BurgerMenu from "./components/Home/BurgerMenu/BurgerMenu"
import Home from "./components/Home/Home"
import MultiChainSupport from "./components/MultiChainSupport/MultiChainSupport"
import Solutions from "./components/Solutions/Solutions"

function App() {

  return (
    <>
      <BurgerMenu/>
      <Home/>
      <About/>
      <Areas/>
      <MultiChainSupport/>
      <Solutions/>
      <ContactUs/>
      <Careers/>
      <Footer/>
    </>
  )
}

export default App

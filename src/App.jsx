
import { BrowserRouter } from "react-router-dom"
import { Navbar, Hero, About, Main, Reviews, KeyFeatures, Footer, Contact, Side } from "./components"
function App() {

  return (
    <BrowserRouter>
      <div className="z-0 relative">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-bottom">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <KeyFeatures/>
        <div className="bg-mc-bg bg-cover bg-no-repeat bg-bottom">
          <Main/>
        </div>
        <Side/>
        <Reviews/>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-bottom mt-24">
          <Footer/>
        </div>
        <Contact/>
      </div>
    </BrowserRouter>
  )
}

export default App

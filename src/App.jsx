
import { BrowserRouter } from "react-router-dom"
import { Navbar, Hero, About, Characters, Reviews, KeyFeatures, SystemRequirements, Contact } from "./components"
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
          <Characters/>
        </div>
        <Reviews/>   
        <SystemRequirements/>
        <Contact/>
      </div>
    </BrowserRouter>
  )
}

export default App

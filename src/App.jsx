import './App.css'
import Footer from './Layouts/Footer'
import Navbar from './Layouts/Navbar'
import Home from './Pages/Home'

function App() {
  return (
    <div className='md:px-[116px] px-[33px]'>
      <Navbar />
      <Home />
      <Footer />
    </div>
  )
}

export default App

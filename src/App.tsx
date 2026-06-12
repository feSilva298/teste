import './App.css'
import Navbar from './components/navbar'
import Cards from './components/cards'
import CardsLaterais from './components/cardsLateral'
import { MobileInfo } from './components/mobileInfo'

function App() {
  return (
    <>
    <div className='h-full w-full bg-[#F5EFE6]'>
    <Navbar/>
    <Cards/>
    <div className='hidden xl:flex'>
      <CardsLaterais/>
    </div>
    <div className='xl:hidden'>
      <MobileInfo/>
    </div>
    </div>
    </>
  )
}

export default App

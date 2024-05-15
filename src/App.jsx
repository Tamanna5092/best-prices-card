import './App.css'
import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import NavBar from './assets/components/NavBar/NavBar'
import PricesOptions from './assets/components/PricesOptions/PricesOptions'

function App() {

  return (
    <>
      <NavBar></NavBar>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-5xl'>Vite + React</h1>
      <PricesOptions></PricesOptions>
    </>
  )
}

export default App

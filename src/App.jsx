import './App.css'
import LineChart from './assets/components/LineChart/LineChart'
import NavBar from './assets/components/NavBar/NavBar'
import PricesOptions from './assets/components/PricesOptions/PricesOptions'

function App() {

  return (
    <>
      <NavBar></NavBar>
      <h1 className='text-5xl'>Vite + React</h1>
      <PricesOptions></PricesOptions>
      <LineChart></LineChart>
    </>
  )
}

export default App

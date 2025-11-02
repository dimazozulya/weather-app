import './App.css'
import Header from './components/header/Header' 
import WeatherCard from './components/body/WeatherCard'

function App() {
  return (
    <div className="fixed inset-0 bg-blue-700 text-white">
        <Header/>
        <WeatherCard/>
    </div>
  )
}

export default App

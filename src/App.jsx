import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [timeData, setTimeData] = useState({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const targetDate = new Date('2027-07-07T19:07:00')
    
    const updateTimer = () => {
      const now = new Date()
      const diff = targetDate - now
      
      if (diff <= 0) {
        setTimeData({ years: 0, months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      setTimeData({ years, months, days, hours, minutes, seconds })
    }
    
    updateTimer()
    const timer = setInterval(updateTimer, 1000)
    
    return () => clearInterval(timer)
  }, [])

  const FlipTimer = ({ value, label }) => {
    const displayValue = value.toString().padStart(2, '0')
    
    return (
      <div className="flip-unit">
        <div className="flip-container">
          <div className="simple-digit">{displayValue[0]}</div>
          <div className="simple-digit">{displayValue[1]}</div>
        </div>
        <div className="flip-label">{label}</div>
      </div>
    )
  }

  return (
    <>
      <div className="container"></div>
      <div className="loader">
        <span>NikeBet</span>
        <span>NikeBet</span>
      </div>
      <h1>Comming 7/7/2027 as 7:07 💪💪</h1>
      <div className="countdown-wrapper">
        <FlipTimer value={timeData.years} label="Anos" />
        <FlipTimer value={timeData.months} label="Meses" />
        <FlipTimer value={timeData.days} label="Dias" />
        <FlipTimer value={timeData.hours} label="Horas" />
        <FlipTimer value={timeData.minutes} label="Min" />
        <FlipTimer value={timeData.seconds} label="Seg" />
      </div>
    </>
  )
}

export default App

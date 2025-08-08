import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    const targetDate = new Date('2027-07-07T19:07:00')
    
    const updateTimer = () => {
      const now = new Date()
      const diff = targetDate - now
      
      if (diff <= 0) {
        setTimeLeft('Tempo esgotado!')
        return
      }
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
      const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((diff % (1000 * 60)) / 1000)
      
      setTimeLeft(`${years}a ${months}m ${days}d ${hours}h ${minutes}min ${seconds}s`)
    }
    
    updateTimer()
    const timer = setInterval(updateTimer, 1000)
    
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <h1>NikeBet</h1>
      <h1>Comming 7/7/2027 as 7:07 💪💪</h1>
      <div className="card">
        <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#646cff' }}>
          {timeLeft}
        </div>
      </div>
    </>
  )
}

export default App

import { useEffect, useState } from 'react'

function App() {
  const [apiStatus, setApiStatus] = useState('Checking...')

  useEffect(() => {
    fetch('/api/health')
      .then(res => res.json())
      .then(data => setApiStatus(data.status))
      .catch(() => setApiStatus('Unavailable'))
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">PhotoApp</h1>
      <div className="space-y-2">
        <p>Backend Status: {apiStatus}</p>
      </div>
    </div>
  )
}

export default App 
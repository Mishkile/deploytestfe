import React from 'react'
import axios from "axios"
function App() {
  const [data, setData] = React.useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api')
      setData(response.data.message)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <h1>Data: </h1>
      {data}
    </div>
  )
}

export default App

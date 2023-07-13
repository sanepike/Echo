import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

export default function Output() {
  const navigate = useNavigate()
  const [result, setResult] = useState('LOADING...')
  
  useEffect(() => {
    const fetchResult = async () => {
      try {
        const response = await fetch('/run_echo',
        {
          method: 'get'
        })
        const data = await response.json();
        setResult(data['response']);
      } catch (error) {
        console.error('Error fetching data:', error);
        setResult('ERROR');
      }
    }
    fetchResult()
  },[])
  return (
    <div className="Upload">
      <div className="Form">{result}</div>
      <button className='Continue Bounce' onClick={() => navigate('/')}>HOME</button>  
    </div>
  )
}

import { useState } from 'react'
import { FiSend } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

export default function Options() {
  const [option, setOption] = useState('')
  const handleChange = (e) => {
    setOption(e.target.value)
  }
  const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()
    if (!option) {
      document.querySelector('#show-error').innerHTML = 'Select an option!'
      return
    }
    try {
      const response = await fetch("https://ai-code-enhancer.onrender.com/choose_service",
      {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({'option' : option})
      })
      if (!response.ok) throw new Error('Something went wrong!')
      navigate('/done')
    } catch(error) {
      document.querySelector('#show-error').innerHTML = error
    }
  }
  return (
    <form className="Upload" onSubmit={handleSubmit}>
      <div className="Form">
        <b>Choose Code Review Type:</b><br />
        <div className="Row">
          <div className="Cell">
            <input type="radio" name="type" value="1" onChange={handleChange}/>
            Security review & Recommendation
          </div>
          <div className="Cell">
            <input type="radio" name="type" value="2" onChange={handleChange}/>
            Create Documentation
          </div>
        </div>
        <div className="Row">
          <div className="Cell">
            <input type="radio" name="type" value="3" onChange={handleChange}/>
            Errors and Improvements
          </div>
          <div className="Cell">
            <input type="radio" name="type" value="4" onChange={handleChange}/>
            Provide Feedback on Coding Styles
          </div>
        </div>
        <br />
      </div>
      <button className='Continue Bounce'><FiSend /> &nbsp; Run Echo</button>  
      <span id="show-error"></span>  
    </form>
  )
}

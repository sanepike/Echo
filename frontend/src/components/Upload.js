import { useNavigate } from 'react-router-dom'
import { FiUploadCloud, FiSend } from 'react-icons/fi'

export default function Upload() {
  
  function startUpload(){
    document.querySelector('#input').click()
  }
  const navigate = useNavigate()

  async function uploadFile(e) {
    const file = e.target.files[0];

    const data = new FormData();
    data.append('file_from_react', file);
    try {
      const response = await fetch('https://ai-code-enhancer.onrender.com/url_route',
      {
        method: 'post',
        // headers: {'Content-Type': 'application/json'},
        body: data
      })
      if (!response.ok) throw new Error('Something went wrong!')
      navigate('/next')
    } catch(error) {
      document.querySelector('#show-error').innerHTML = error
    }
  }

  async function uploadText(e) {
    e.preventDefault()
    const data = {
      'url' : e.target[0].value,
      'accessToken' : e.target[1].value
    } 
    if (!(data.url && data.accessToken)) {
      document.querySelector('#show-error').innerHTML = 'Enter the values!'
      return
    }
    try {
    const response = await fetch('https://ai-code-enhancer.onrender.com/upload_text_url_route',
      {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      if (!response.ok) throw new Error('Something went wrong!')
      navigate('/next')
    } catch(error) {
      document.querySelector('#show-error').innerHTML = error
    }
  }

  return (
    <main className="Upload">
      <form className="Form" onClick={startUpload}>
        <input id='input' type="file"  hidden onChange={uploadFile}/>
        <center>
          <FiUploadCloud id="Cloud" className='Bounce'/>
          <div id="uploadtext">Choose File</div>
        </center>
      </form>

      <p><i>Or</i></p>

      <form className="GithubInput" onSubmit={uploadText}>
        <input type="text" placeholder="Github File Link"/>
        <input type="password" style={{'marginTop': '10px'}} placeholder="Github Access Key"/>
        <button className='Continue Bounce'><FiSend /> &nbsp; Continue</button>   
        <span id="show-error"></span>  
      </form>
    </main>
  )
}
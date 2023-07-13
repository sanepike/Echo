import logo from '../logo.png'

function Sidebar() {
  return (
    <div className="Sidebar">
      <center className="LogoCard">
        <img src={logo} alt="Logo of Echo" className="Logo"/>
      </center>
      <div className="SidebarData">
        AI Personal Assistant based on the OpenAI's ChatGPT-3.5 Large Language Model which can analyse and review the uploaded code file for security review & recommendation, errors and improvements and provides feedback on coding styles
      </div>
    </div>
  )
}

export default Sidebar;
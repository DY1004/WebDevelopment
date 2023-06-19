import "./Social-Media-Hover-Animation.css"
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import github from "./github.png";
import twitter from "./twitter.png";
import youtube from "./youtube.png";

function App() {
  return(
    <div className="wrapper">
      <div className="container container1">
        <span className="tooltip">Instagram</span> 
        <img src={instagram} alt="" className="icon"></img>
      </div>

      <div className="container container2">
        <span className="tooltip">Linkedin</span> 
        <img src={linkedin} alt="" className="icon"></img>
      </div>

      <div className="container container3">
        <span className="tooltip">Github</span> 
        <img src={github} alt="" className="icon"></img>
      </div>

      <div className="container container4">
        <span className="tooltip">Twitter</span> 
        <img src={twitter} alt="" className="icon"></img>
      </div>

      <div className="container container5">
        <span className="tooltip">Youtube</span> 
        <img src={youtube} alt="" className="icon"></img>
      </div>
    </div>
  )
  }

export default App;

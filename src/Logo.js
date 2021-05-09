
import logo from './img_logo_portfolio2.jpg';
import './App.css';

function Logo() {
  return (
    <div className="App">
      <section className="App-section">        
          <div className="App-div">
            <img src={logo} className="App-logo" alt="logo"/>
          </div>          
          <p className="App-p">
            <a
              className="App-link"
              href="https://github.com/ThomasPANIER"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mon GitHub
            </a>
          </p>      
      </section>
    </div>
  );
}

export default Logo;

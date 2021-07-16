import React, { useEffect } from 'react';
import './App.css';
import { NavbarTop } from './components/NavbarTop';
import { About } from './components/About';
import './assets/css/styles.css'
import './assets/css/bootstrap-better-nav.css'
import './assets/css/spacex.css'
import './assets/css/hover.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/img/logo.png'
import { Team } from './components/Team';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
AOS.init();
function App() {

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
    <div style={{  backgroundColor: 'black',
      color: 'white' }} className="App">
      <NavbarTop />
      <section id="hero">
        <div className="container" id="con">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" >
                <img src={logo}  alt="" width="130px" />
                <h3>2 years of excellence in</h3>
                <h1>Education Industry</h1>
                <h3>World is the new school</h3>
                <a href="about" className="button hvr-sweep-to-top">LEARN MORE</a>
            </div>
        </div>
    </section>
    <About />
    <Team />
    </div>
  );
}

export default App;

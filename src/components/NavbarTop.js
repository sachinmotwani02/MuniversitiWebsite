import React from 'react'
import '../assets/css/styles.css'
import '../assets/css/bootstrap-better-nav.css'
import '../assets/css/spacex.css'
import '../assets/css/hover.css'
import { Container, Navbar } from 'react-bootstrap'

export const NavbarTop = () => {
    return (
        <div>
           {/* <div class="preloader d-flex align-items-center justify-content-center">
    <div class="logo-preloader">
    </div>
</div> */}
<Navbar id="navbar" sticky="top" class="navbar navbar-expand-lg navbar-dark fixed-top">
    <Container>
    <Navbar.Brand class="navbar-brand ml-4" href="home">Muniversiti
    </Navbar.Brand>
    {/* <Navbar.Toggle  /> */}
    <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div data-aos="fade-right" class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mt-4 mb-4 ml-2">
            <li class="nav-item ml-4">
                <a style={{fontSize: 14, letterSpacing: .5}} class="nav-link hvr-underline-from-left" href="about">About</a>
            </li>
            <li class="nav-item ml-4">
                <a style={{fontSize: 14, letterSpacing: .5}} class="nav-link hvr-underline-from-left" href="ws">World Summits</a>
            </li>
            <li class="nav-item ml-4">
                <a style={{fontSize: 14, letterSpacing: .5}} class="nav-link hvr-underline-from-left" href="yilp">YILP</a>
            </li>
            <li class="nav-item ml-4">
                <a style={{fontSize: 14, letterSpacing: .5}} class="nav-link hvr-underline-from-left" href="yisp">YISP</a>
            </li>
            <li class="nav-item ml-4">
                <a style={{fontSize: 14, letterSpacing: .5}} class="nav-link hvr-underline-from-left" href="yitp">YITP</a>
            </li>
            <li class="nav-item ml-4">
                <a style={{fontSize: 14, letterSpacing: .5}} class="nav-link hvr-underline-from-left" href="yics">YICS</a>
            </li>
            <li class="nav-item ml-4">
                <a style={{fontSize: 14, letterSpacing: .5}} class="nav-link hvr-underline-from-left" href="muniversify">Muniversify</a>
            </li>
        </ul>
    </div>
    </Container>
</Navbar> 
        </div>
    )
}

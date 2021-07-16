import React from 'react'
import '../assets/css/styles.css'
import '../assets/css/bootstrap-better-nav.css'
import '../assets/css/spacex.css'
import '../assets/css/hover.css'
import vmion from '../assets/img/vmion.jpg'
import { Col, Container, Row } from 'react-bootstrap'
export const About = () => {
    return (
        <div>
            <section id="about">
        <div className="container">
            <div data-aos="fade-up" data-aos-delay="800" class="text-center vertical-center-full">
                <div class="big">
                    <h1>About us</h1>
                    <h3>Who we are and what we do</h3>
                </div>
            </div>
        </div>
    </section>
    
    <section id="about-text">
        <div className="container text-center">
            <p>Muniversiti is a youth-based organization which is structured with an objective to galvanize the young
                minds of today so that they become the world leaders of tomorrow. We believe that collaborative and
                directional efforts can aid in creating a positive change in society. We hold onto a mission of uniting
                the ignited minds and strongly believe in the power of building a better tomorrow, with a sole purpose
                of making this world a better place to live in by inculcating in people the necessity to visualize
                themselves not just as local, but global citizens.</p>
        </div>
    </section>
    <section id="numbers">
        <Container fluid="true" style={{display: 'flex', alignItems: 'center'}}>
            <Row>
                {/* <Col>
                heluu
                </Col>
                <Col>
                heluu
                </Col>
                <Col>
                heluu
                </Col> */}
                <Col id="num" className="col-lg-4 col-md-4 col-sm-4 col-4">
                        <span className="number">5</span>
                        <h3>Programmes</h3>
                </Col>
                <Col id="num" className="col-lg-4 col-md-4 col-sm-4 col-4">
                        <span className="number">40k+</span>
                        <h3>Students</h3>
                </Col>
                <Col id="num" className="col-lg-4 col-md-4 col-sm-4 col-4">
                        <span className="number">3</span>
                        <h3>Offices Across India</h3>
                </Col>
            </Row>
        </Container>
    </section>
    <section id="vmion">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-lg-5 justify-content-start">
                    <div className="mx-1" data-aos="fade-up">
                        <h1>Vision and Mission</h1>
                        <h3>Our Vision</h3>
                        <p>In the world that profits from insecurity, the vision is to move, spur and push young
                            enthusiasts in accomplishing their capability without limitations. It's tied in with
                            enabling them to compose their own encounters of life. The idea is to make the learners
                            practice the art of winning a no-win situation by rewriting the rules and setting new
                            standards, without jeopardizing the ethics, morals, and values. The thought likewise
                            comprises of building up the colossally supplied and versatile young minds holistically so
                            that they evolve to be the future pioneers and dignitaries.</p>
                        <h3>Our Mission</h3>
                        <p>The mission of the organization is to stir the insight and soul of unselfishness, brood love
                            for nature and apprehension for humanity. The association endeavors to give the country's
                            youth
                            the
                            chance to wind up noticeably best forms of themselves. The mission is to develop the leaders
                            who
                            are well equipped with the art of knitting a team with an objective, who do not restrict
                            themselves to only one community, state, religion or nation and consider themselves to be
                            global
                            citizens.</p>
                    </div>
                </div>
                <div className="col-lg-7">
                    
                        <img src={vmion} className="img-fluid" alt="" />
                    
                </div>
            </div>
            </div>
        </section>
        </div>
    )
}

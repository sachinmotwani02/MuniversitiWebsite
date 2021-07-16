import React from 'react'
import tejas from '../assets/img/team/tejas-min.jpg'
import madhur from '../assets/img/team/madhur-min.jpg'
import tanuj from '../assets/img/team/tanuj-min.jpg'
import ashwin from '../assets/img/team/ashwin-min.jpg'
import sarthak from '../assets/img/team/sarthak-min.jpg'
import tanushree from '../assets/img/team/tanushree-min.jpg'

export const Team = () => {
    return (
        <section id="team">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="mx-1 mb-5" data-aos="fadeUp">
                        <img src={tejas} alt="Tejas" class="img-fluid" />
                        <h2>Chief Executive officer</h2>
                        <h3>Tejas Kumar Jain</h3>
                        <a href="https://www.instagram.com/tejasj_10/">Instagram</a><a class="ml-2" href="https://www.linkedin.com/in/tejas-jain-72715b191/">Linkedin</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="mx-1 mb-5" data-aos="fadeUp">
                        <img src={madhur} alt="Tejas" class="img-fluid" />
                        <h2>Chief Marketing Officer</h2>
                        <h3>Madhur Oza</h3>
                        <a href="https://www.instagram.com/madhur_oza/">Instagram</a><a class="ml-2" href="https://www.linkedin.com/in/madhur-oza-17722a142/">Linkedin</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="mx-1 mb-5" data-aos="fadeUp">
                    <img src={tanuj} alt="Tejas" class="img-fluid" />
                        <h2>Chief Technical Officer</h2>
                        <h3>Tanuj Namdeo</h3>
                        <a href="https://www.instagram.com/tanujn45/">Instagram</a><a class="ml-2" href="https://www.linkedin.com/in/tanuj-namdeo-973333192/">Linkedin</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="mx-1 mb-5" data-aos="fadeUp">
                    <img src={ashwin} alt="Tejas" class="img-fluid" />
                        <h2>Head of operations</h2>
                        <h3>Ashwin Sameul</h3>
                        <a href="https://www.instagram.com/_ashwiinn/">Instagram</a><a class="ml-2" href="https://www.linkedin.com/in/ashwin-samuel-731a45161/">Linkedin</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="mx-1 mb-5" data-aos="fadeUp">
                    <img src={sarthak} alt="Tejas" class="img-fluid" />
                        <h2>Chief Communications Officer</h2>
                        <h3>Sarthak Singh Parihar</h3>
                        <a href="https://www.instagram.com/sarthaksingh14/">Instagram</a><a class="ml-2" href="https://www.linkedin.com/in/sarthak-singh-a3b722170/">Linkedin</a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="mx-1 mb-5" data-aos="fadeUp">
                    <img src={tanushree} alt="Tejas" class="img-fluid" />
                        <h2>Head of Administration</h2>
                        <h3>Tanushree talreja</h3>
                        <a href="https://www.instagram.com/tanushree_talreja/">Instagram</a><a class="ml-2" href="https://www.linkedin.com/in/tanushree-talreja-5507b3136/">Linkedin</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

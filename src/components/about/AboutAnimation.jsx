import React from "react";
import Social from "../Social";
import Services from "../service/ServiceAnimation";
// import Awards from "../award/AwardsAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/WayneBio.png" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Front-End Developer</p>
                  <h3>Godwin Ogu</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Meet Me!!!</h3>
                </div>

                <div className="about-text">
                  <p>
                   Hi there, I'm a front-end engineer with over 3 years of experience working with React and Next.js.</p>
                   <p> My journey in web development began in 2018 when I started learning HTML and CSS, followed by JavaScript. In 2017, I learned the basics of C++, which sparked my interest in coding and problem-solving.</p>
                   <p> As a UI/UX designer, I have a unique perspective on front-end development. I have an eye for detail and a passion for pixel-perfect design, which helps me build visually appealing and functional websites. 
  My experience as a designer also helps me understand how to build complex concepts with simple tools, ensuring that every website I build meets the user's needs while looking great.</p>

<p> I'm also a writer and poet, and my creative background influences my work as a front-end developer. I enjoy finding creative solutions to problems and thinking outside the box to develop innovative designs.</p>



                  
                  <p>                   When I'm not coding, you can find me pursuing my other creative passions. I'm a video editor, bass guitarist, and songwriter, always exploring new avenues to express my creativity.
</p>
                  <p>

I'm passionate about working with people, learning, and growing on my journey as a front-end developer. I love to collaborate with others and find innovative solutions to challenges.

Thank you for taking the time to learn more about me. I hope to work with you soon and contribute to your project.  
                  </p>
                </div>
             
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          {/* <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div> */}
          {/* End separated */}

          {/* <div className="title">
            <h3>Awards.</h3>
          </div>

          <Awards /> */}
          {/* End Awards */}

          
        </div>
      </section>
    </>
  );
};

export default About;

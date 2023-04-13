import React from "react";
import TextLoop from "react-text-loop";

const conctInfo = {
  phone: "+90 539 106 1897",
  email: " ayowayne123@gmail.com",
};

const sliderContent = {
  name: "Godwin Ogu",
  designation: "Front-End Developer",
  description: `I design and develop pixel-perfect websites.`,
  btnText: "See my CV",
};

const Slider = () => {
  return (
    <>
      {/*  Home Banner */}
      <section id="home" className="home-banner">
        <div className="hb-top-fixed d-flex">
          <div className="hb-info">
            <a href="tel:+905391061897">{conctInfo.phone}</a>
            <a href="mailto:ayowayne123@gmail.com">
              {conctInfo.email}
            </a>
          </div>
         
        </div>
        {/* End hp-top-fixed */}

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col-lg-7">
              <div className="type-box">
                <h6 data-aos="fade-up" data-aos-duration="1200">
                  Hello there, It's
                </h6>
                <h1
                  className="font-alt"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {sliderContent.name}
                </h1>
                <div
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <TextLoop>
                    <p className="loop-text lead">Front-End Developer</p>
                    <p className="loop-text lead"> UI/UX Designer</p>
                    <p className="loop-text lead"> Web Developer</p>
                  </TextLoop>
                </div>

                <p
                  className="desc"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  {sliderContent.description}
                </p>
                <div
                  className="mt-4"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <a
                    className="px-btn px-btn-white"
                    href="img/Godwin_resume.pdf"
                    download
                  >
                    {sliderContent.btnText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Container*/}
        <div
          className="hb-me"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "img/wayneNoBg.png"
            })`,
          }}
        ></div>
      </section>

      {/* End Home Banner  */}
    </>
  );
};

export default Slider;

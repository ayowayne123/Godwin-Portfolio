import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `UI/UX Designer and Front-End Developer`,
    jobType: `FCV | Lefkosa, Cyprus`,
    jobDuration: `Sep 2021 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "First Class Visuals",
    jobDescription: [
    'Developed a merch store using Next.js and WordPress Headless Api as backend',
    'Designed and Developed Cyprus International University Christian fellowships website with a team of 4 other developers',
    'Designed the UI for the CIUCF devotional app',
    'Developed Admin Panel and Backend Website for Devotional app'
    ] 
  },
  {
    jobPosition: `FrontEnd Developer`,
    jobType: `Kithen Diary | Remote`,
    jobDuration: `Mar 2020 - Present`,
    timeDuraton: `Part Time`,
    compnayName: "Kitchen Diary.co",
    jobDescription: [
      'Developed a merch store using Next.js and WordPress Headless Api as backend',
      'Provided Consultancy on projects and carried out market researches',
      ] 
  },
  {
    jobPosition: `Web Content Creator/Consultant`,
    jobType: `Page IT |  Lefkosa, Cyprus`,
    jobDuration: `Aug 2022 - Dec 2022`,
    timeDuraton: `Full Time`,
    compnayName: "Page IT",
    jobDescription: [
      'Developed a merch store using Next.js and WordPress Headless Api as backend',
      'Provided Consultancy on projects and carried out market researches',
   
      ] 
  },
];

const educatonContent = [
  {
    passingYear: "2019-Current",
    degreeTitle: "Mechatronics Engineering",
    instituteName: "Cyprus International University",
  },
 
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      {val.jobDescription.map((val, i) => (
                        <ul>
                            <li key={i}>
                    <p>{val}</p>
                    
                  </li> </ul>
                
                ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;

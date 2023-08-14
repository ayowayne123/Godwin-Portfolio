import React from "react";
import { FaDesktop, FaCode, FaLightbulb } from "react-icons/fa";

const ServiceContent = [
  {
    icon: <FaDesktop />,
    title: "User-Centric Web Experiences",
    descriptions:
      "Crafting visually engaging websites with a user-centric approach. Leveraging over 3 years of React and Next.js experience, I specialize in delivering seamless and captivating digital experiences that resonate with users.",
    delayAnimation: "100",
  },
  {
    icon: <FaCode />,
    title: "Design-Driven Development",
    descriptions:
      "Bridging creativity and functionality in web development. My UI/UX design background fuels my ability to create visually appealing and functional websites. With a strong coding foundation, I bring innovation to life through elegant, user-centric designs.",
    delayAnimation: "300",
  },
  {
    icon: <FaLightbulb />,
    title: "Creative Problem-Solving",
    descriptions:
      "Beyond code, I'm a creative thinker. My background as a writer and poet influences my work as a front-end developer. Collaborative by nature, I excel in finding unique solutions to challenges. I'm passionate about pushing boundaries to create impactful and innovative designs.",
    delayAnimation: "500",
  },
];

export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">{val.icon}</div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}

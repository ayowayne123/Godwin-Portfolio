import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";
import { FiLink } from "react-icons/fi";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1,
};

const tabList = ["All", "Web Design", "UI/UX", "Web Content"];
const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/pecbico.png",
        width: 450,
        height: 350,
        title: "PECBICO ",
        subTitle: "Web Design",
        alterText: "Website Image",
        delayAnimation: "",
        portfolioLink: "https://pecbico.vercel.app/",
      },
      {
        img: "/img/portfolio/tssynergy.png",
        width: 450,
        height: 350,
        title: "Ts Synergy Consult ",
        subTitle: "Web Design",
        alterText: "Website Image",
        delayAnimation: "200",
        portfolioLink: "https://tssynergyconsult.com/",
      },
      {
        img: "/img/portfolio/godwin-artist.png",
        width: 450,
        height: 350,
        title: "Godwin ",
        subTitle: "Web Design and Ui/Ux Design",
        alterText: "Website Image",
        delayAnimation: "400",
        portfolioLink: "https://godwin-tau.vercel.app/",
      },
      {
        img: "/img/portfolio/game.png",
        width: 590,
        height: 800,
        title: "Guessing Game ",
        subTitle: "Web Design and Ui/Ux Design",
        alterText: "Website Image",
        delayAnimation: "",
        portfolioLink: "https://mightymeld-build.vercel.app/",
      },
     
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/pecbico.png",
        width: 450,
        height: 350,
        title: "PECBICO ",
        subTitle: "Web Design",
        alterText: "Website Image",
        delayAnimation: "",
        portfolioLink: "https://pecbico.vercel.app/",
      },
      {
        img: "/img/portfolio/tssynergy.png",
        width: 450,
        height: 350,
        title: "Ts Synergy Consult ",
        subTitle: "Web Design",
        alterText: "Website Image",
        delayAnimation: "200",
        portfolioLink: "https://tssynergyconsult.com/",
      },
      {
        img: "/img/portfolio/godwin-artist.png",
        width: 450,
        height: 350,
        title: "Godwin ",
        subTitle: "Web Design and Ui/Ux Design",
        alterText: "Website Image",
        delayAnimation: "400",
        portfolioLink: "https://godwin-tau.vercel.app/",
      },
      {
        img: "/img/portfolio/game.png",
        width: 590,
        height: 800,
        title: "Guessing Game ",
        subTitle: "Web Design and Ui/Ux Design",
        alterText: "Website Image",
        delayAnimation: "",
        portfolioLink: "https://mightymeld-build.vercel.app/",
      },
      
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/godwin-artist.png",
        width: 450,
        height: 350,
        title: "Godwin ",
        subTitle: "Web Design and Ui/Ux Design",
        alterText: "Website Image",
        delayAnimation: "",
        portfolioLink: "https://www.figma.com/file/LW2mK4H5UTwK68NqXpe2bg/Godw3in?type=design&node-id=0%3A1&mode=design&t=vm5pDSIHDEiRNJhb-1",
      },
      {
        img: "/img/portfolio/game.png",
        width: 590,
        height: 800,
        title: "Guessing Game ",
        subTitle: "Web Design and Ui/Ux Design",
        alterText: "Website Image",
        delayAnimation: "200",
        portfolioLink: "https://mightymeld-build.vercel.app/",
      },
    ],
  },
  // {
  //   porftoliItems: [
  //     {
  //       img: "/img/portfolio/m-portfolio-1.jpg",
  //       width: 400,
  //       height: 550,
  //       title: "Bottle Illustration",
  //       subTitle: "Figma Shoot",
  //       alterText: "Bottle Illustration",
  //       delayAnimation: "",
  //       portfolioLink:
  //         "https://dribbble.com/shots/16529339-Beny-Personal-Portfolio-React-Template",
  //     },
  //     {
  //       img: "/img/portfolio/m-portfolio-7.jpg",
  //       width: 400,
  //       height: 700,
  //       title: "Business Card",
  //       subTitle: "Graphicriver Market",
  //       alterText: "Business Card",
  //       delayAnimation: "100",
  //       portfolioLink:
  //         "https://dribbble.com/shots/16529282-Shane-Personal-Portfolio-React-Template",
  //     },
  //     {
  //       img: "/img/portfolio/m-portfolio-9.jpg",
  //       width: 400,
  //       height: 400,
  //       title: "Web Motion",
  //       subTitle: "Behance Shot",
  //       alterText: "Web Motion",
  //       delayAnimation: "200",
  //       portfolioLink: "https://www.facebook.com/ibthemes",
  //     },
  //   ],
  // },
  // {
  //   porftoliItems: [
  //     {
  //       img: "/img/portfolio/m-portfolio-2.jpg",
  //       width: 400,
  //       height: 400,
  //       title: "E-Learning App",
  //       subTitle: "Nuna ios App",
  //       alterText: "Illustration",
  //       delayAnimation: "",
  //       portfolioLink:
  //         "https://dribbble.com/shots/16529350-Nairo-Personal-Portfolio-React-Template",
  //     },
  //     {
  //       img: "/img/portfolio/m-portfolio-3.jpg",
  //       width: 400,
  //       height: 700,
  //       title: "Visual Design",
  //       subTitle: "Themeforest Marke",
  //       alterText: "Business Mockup",
  //       delayAnimation: "100",
  //       portfolioLink:
  //         "https://dribbble.com/shots/16529407-Deski-Saas-Software-React-Template",
  //     },

  //     {
  //       img: "/img/portfolio/m-portfolio-5.jpg",
  //       width: 400,
  //       height: 700,
  //       title: "Chatting Application",
  //       subTitle: "Codecanyon Market",
  //       alterText: "Bottle Illustration",
  //       delayAnimation: "200",
  //       portfolioLink:
  //         "https://dribbble.com/shots/16529158-Waxon-Personal-Portfolio-VueJS-Template-RTL",
  //     },
  //     {
  //       img: "/img/portfolio/m-portfolio-6.jpg",
  //       width: 400,
  //       height: 550,
  //       title: "Web Application",
  //       subTitle: "Behance Shot",
  //       alterText: "Web Application",
  //       delayAnimation: "300",
  //       portfolioLink:
  //         "https://dribbble.com/shots/16529226-Krozo-Personal-Portfolio-React-Template",
  //     },
  //   ],
  // },
];

const PortfolioAnimation = () => {
  return (
    <div className="portfolio-filter-01">
      <Tabs>
        <TabList className="filter d-flex flex-wrap justify-content-start">
          {tabList.map((val, i) => (
            <Tab key={i}>{val}</Tab>
          ))}
        </TabList>
        {/* End tablist */}
        <Gallery>
          {tabListContent.map((tabContent, i) => (
            <TabPanel key={i}>
              <div className="portfolio-content ">
                <Masonry
                  breakpointCols={breakpointColumnsObj}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {tabContent.porftoliItems.map((val, i) => (
                    <div
                      className="portfolio-box-01"
                      key={i}
                      data-aos="fade-right"
                      data-aos-duration="1200"
                      data-aos-delay={val.delayAnimation}
                    >
                      <div className="portfolio-img">
                        <div className="portfolio-info">
                          <h5>
                            <a
                              href={val.portfolioLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {val.title}
                            </a>
                          </h5>
                          <span>{val.subTitle}</span>
                        </div>
                        {/* End .portfolio-info */}
                        <Item
                          original={val.img}
                          thumbnail={val.img}
                          width={val.width}
                          height={val.height}
                        >
                          {({ ref, open }) => (
                            <div className="gallery-link">
                              <img
                                src={val.img}
                                alt="Childhood"
                                role="button"
                                ref={ref}
                                onClick={open}
                              />
                            </div>
                          )}
                        </Item>

                        <a
                          className="portfolio-icon"
                          href={val.portfolioLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FiLink />
                        </a>
                        {/* End .portfolio-icon */}
                      </div>
                    </div>
                  ))}
                </Masonry>
              </div>
              {/* End list wrapper */}
            </TabPanel>
          ))}
        </Gallery>
        {/* End tabpanel */}
      </Tabs>
    </div>
  );
};

export default PortfolioAnimation;

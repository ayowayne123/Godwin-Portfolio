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
      {
        img: "/img/portfolio/ciu.png",
        width: 450,
        height: 350,
        title: "CIUCF Website",
        subTitle: "Web Design",
        alterText: "CIUCF Website Image",
        delayAnimation: "600",
        portfolioLink: "https://dev.ciucf.org/",
      },
      {
        img: "/img/portfolio/cerrene.png",
        width: 450,
        height: 350,
        title: "Cerrene Cleaning Services",
        subTitle: "Web Design",
        alterText: "Cerrene Cleaning Services Image",
        delayAnimation: "800",
        portfolioLink: "https://cerrene.org/",
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
      {
        img: "/img/portfolio/ciu.png",
        width: 450,
        height: 350,
        title: "CIUCF Website",
        subTitle: "Web Design",
        alterText: "CIUCF Website Image",
        delayAnimation: "600",
        portfolioLink: "https://dev.ciucf.org/",
      },
      {
        img: "/img/portfolio/cerrene.png",
        width: 450,
        height: 350,
        title: "Cerrene Cleaning Services",
        subTitle: "Web Design",
        alterText: "Cerrene Cleaning Services Image",
        delayAnimation: "800",
        portfolioLink: "https://cerrene.org/",
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

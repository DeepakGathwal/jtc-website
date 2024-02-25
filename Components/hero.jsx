import "./hero.css"
import Image from "next/image";
import Heroimg from "../public/assets/images/banner/aboutushero.svg"
import Floatimg from "../public/assets/images/banner/floathero.svg"
// import Aboutuspost from "../public/assets/images/banner/aboutimg/aboutuspost.png";
// import Aboutfour from "../public/assets/images/banner/aboutimg/shape-04-01.png";
// import Aboutnine from "../public/assets/images/banner/aboutimg/badge.png";
// import Shapeseven from "../public/assets/images/banner/aboutimg/shape-07.png"
// import Aboutimagetwo from "../public/assets/images/banner/aboutimg/about-image-02.jpg"
const HeroSection = () => {
    return (
      <>
        <div className="about-hero-section">
          <div className="container">
            <div className="row gy-5 row-flex hero-row">
              <div className="herocta col-lg-6 column-flex col-flex-start column">
                <h4 className="hero-subhead">
                  Providing best opportunity around the globe
                </h4>
                <h2 className="hero-mainhead">
                  25K+ Students <br></br>Trust Us
                </h2>
                <div className="cta-button row-flex">
                  <button className="filled">Explore Our Courses</button>
                  <button className="outlined">Our Tutorials</button>
                </div>
              </div>
              <div className="col-lg-6 heroinfographic column-flex align-items-center">
                <div className="inner">
                  <Image
                    src={Heroimg}
                    alt="passing student infographic"
                    className="infoimg"
                  />
                  <div className="float-img">
                    <Image
                      src={Floatimg}
                      alt="passing student infographic"
                      className="absoluteimg"
                    />
                  </div>
                </div>
                <div className="cta-button row-flex">
                  <button className="filled">Explore Our Courses</button>
                  <button className="outlined">Our Tutorials</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="about-section">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="abt-img">
                  <Image
                    className="mainimg"
                    src={Aboutuspost}
                    alt="About Main Thumb"
                  />
                  <div className="badge-inner">
                    <Image
                      className="badge-img"
                      src={Aboutnine}
                      alt="About Circle Thumb"
                    />
                  </div>
                  <div className="shape-image">
                    <Image src={Aboutfour} alt="Shape Thumb" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 Abt-text">
                <div className="inner">
                  <div className="title-top">
                    <span className="title">About Us</span>
                    <h3 className="title-head">
                      Creating A Community Of Life Long Learners
                    </h3>
                  </div>
                  <p className="description">
                    We were incorporated as a Training Center in the year 2012*
                    with the moto of skilling the youth population and assuring
                    them standard placements.
                  </p>
                  <p className="description">
                    The IT sector is a dynamic sector and the rate of technology
                    change is much more rapid in the IT sector as compared to
                    other sectors, and especially in the software sector. Also,
                    as computer technology advances no sector can remain
                    unaffected. In present times IT is a major driving force in
                    all sectors.
                  </p>
                  <p className="description">
                    It is important to address the skill gap timely by training
                    the youth in emerging technologies. Youth skilled in new-age
                    technologies have assurance of placements in standard roles
                    and responsibilities, in IT as well as other sectors.
                  </p>
                  <p className="description">
                    We are the country’s premier institute in Java training.
                    Apart from Java we now offer skilling in a comprehensive
                    range of industry demanded IT courses that suite the career
                    preferences of candidates from diverse streams.
                  </p>
                  <div className="shape-bottom ">
                    <Image src={Shapeseven} alt="Shape Thumb" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
}
export default HeroSection;
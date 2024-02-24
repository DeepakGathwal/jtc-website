import "./hero.css"
import Image from "next/image";
import Heroimg from "../public/assets/images/banner/aboutushero.svg"
import Floatimg from "../public/assets/images/banner/floathero.svg"
const HeroSection = () => {
    return(
        <div className="about-hero-section">
            <div className="container">
                <div className="row gy-5 row-flex hero-row">
                    <div className="herocta col-lg-6 column-flex col-flex-start column">
                        <h4 className="hero-subhead">Providing best opportunity around the globe</h4>
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
                            <Image src={Heroimg} alt="passing student infographic" className="infoimg" />
                            <div className="float-img">
                                <Image src={Floatimg} alt="passing student infographic" className="absoluteimg" />
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
    )
}
export default HeroSection;
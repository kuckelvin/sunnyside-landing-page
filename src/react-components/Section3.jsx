import imageCone from "../assets/images/desktop/image-gallery-cone.jpg"
import imageMilkBottles from "../assets/images/desktop/image-gallery-milkbottles.jpg"
import imageOrange from "../assets/images/desktop/image-gallery-orange.jpg"
import imageSugarcubes from "../assets/images/desktop/image-gallery-sugarcubes.jpg"
import Facebook from "../react-icons/Facebook"
import Twitter from "../react-icons/Twitter"
import Instagram from "../react-icons/Instagram"
import Pinterest from "../react-icons/Pinterest"


const Section3 = () => {

  return (
    <section className="section3">
        <div className="image1">
          <img src={imageCone} alt="image1" />
        </div>
        <div className="image2">
          <img src={imageMilkBottles} alt="image2" />
        </div>
        <div className="image3">
          <img src={imageOrange} alt="image3" />
        </div>
        <div className="image4">
          <img src={imageSugarcubes} alt="image4" />
        </div>
        <div className="base">
          <div className="baseWrap">
            <h6>sunnyside</h6>
            <footer>
              <ul>
                <li>About</li>
                <li>Services</li>
                <li>Projects</li>
              </ul>
            </footer>
            <div className="socials">
              <Facebook />
              <Instagram />
              <Twitter />
              <Pinterest />
            </div>
          </div>
        </div>
    </section>
  )
}

export default Section3
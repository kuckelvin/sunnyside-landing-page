import imageHeader from "../assets/images/desktop/image-header.jpg"
import Header from "./Header"
import ArrowDown from "../react-icons/ArrowDown"


const Section1TopArea = () => {
  return (
    <div className="section1TopArea">
        <img src={imageHeader} alt="header" />
        <Header />
        <div className="topText">
          <h1>WE ARE CREATIVES</h1>
          <ArrowDown />
        </div>
    </div>
  )
}

export default Section1TopArea
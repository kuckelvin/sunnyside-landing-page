import imageStandOut from "../assets/images/desktop/image-stand-out.jpg"


const Section1MidArea2 = () => {
  return (
    <>
      <div className="mid2Image">
        <img src={imageStandOut} alt="mid2Image"/>
      </div>
      <div className="mid2Text">
        <div className="wrapText">
          <h3>Stand out to the right audience</h3>
          <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.</p>
          <div className="dropdown">
            <div className="hoverDash red"></div>
            <h6>LEARN MORE</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Section1MidArea2
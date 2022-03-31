import imageGraphicDesign from "../assets/images/desktop/image-graphic-design.jpg"
import imagePhotography from "../assets/images/desktop/image-photography.jpg"


const Section1BottomArea = () => {
  return (
    <>
      <div className="bottomImage1">
        <img src={imageGraphicDesign} alt="bottomImage1" />
        <div className="bottomWrap">
          <h3>Graphic Design</h3>
          <p>Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.</p>
        </div>
      </div>
      <div className="bottomImage2">
        <img src={imagePhotography} alt="bottomImage2" />
        <div className="bottomWrap">
          <h3>Photography</h3>
          <p>Increase your credibility by getting the most stunning, high-quality photos that improve business image.</p>
        </div>
      </div>
    </>
  )
}

export default Section1BottomArea
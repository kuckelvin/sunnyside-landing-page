import imageTransform from "../assets/images/desktop/image-transform.jpg"


const Section1MidArea1 = () => {
  return (
    <>
      <div className="mid1Text">
        <div className="wrapText">
          <h3>Transform your brand</h3>
          <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.</p>
          <div className="dropdown">
            <div className="hoverDash yellow"></div>
            <h6>LEARN MORE</h6>
          </div>
        </div>
      </div>
      <div className="mid1Image">
        <img src={imageTransform} alt="mid1Image" />
      </div>
    </>
  )
}

export default Section1MidArea1


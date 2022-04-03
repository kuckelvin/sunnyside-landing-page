import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import MobileNav from "./MobileNav"
import { useState } from "react"
import { FaTimes } from "react-icons/fa"

const MainPage = () => {
  const [mobileNav, setMobileNav] = useState (false)

  const showNav = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <div className="container">
      {
        mobileNav ? (
          <div className="modalContainer">
            <div id="open-modal" className="modalWindow">
              <div className="modalTip"></div>
              <div className="closeMobileModal">
                <FaTimes
                onClick={() => setMobileNav(false)}
                />
              </div>
              <MobileNav />
            </div>
          </div>
        ) : (
          ""
        )
      }
      <Section1 showNav={showNav} mobileNav={mobileNav} />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default MainPage
import Hamburger from "../react-icons/Hamburger"

const LeftNav = ( {showNav, mobileNav} ) => {
  return (
    <div className="leftNav">
        <strong>sunnyside</strong>
        <Hamburger showNav={showNav} mobileNav={mobileNav}/>
    </div>
  )
}

export default LeftNav
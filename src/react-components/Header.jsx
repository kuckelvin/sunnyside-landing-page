import LeftNav from "./LeftNav"
import RightNav from "./RightNav"

const Header = ( {showNav} ) => {
  return (
        <>
          <header>
            <LeftNav showNav={showNav} />
            <RightNav />
          </header>
        </>
  )
}
 
export default Header

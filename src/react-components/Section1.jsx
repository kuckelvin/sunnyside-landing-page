import Section1TopArea from "./Section1TopArea"
import Section1MidArea1 from "./Section1MidArea1"
import Section1MidArea2 from "./Section1MidArea2"
import Section1BottomArea from "./Section1BottomArea"

const Section1 = ( {showNav, mobileNav} ) => {
  return (
    <section className="section1">
        <Section1TopArea showNav={showNav}  mobileNav={mobileNav}/>
        <Section1MidArea1 />
        <Section1MidArea2 />
        <Section1BottomArea />
    </section>
  )
}

export default Section1
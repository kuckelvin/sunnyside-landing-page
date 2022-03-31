import Section1TopArea from "./Section1TopArea"
import Section1MidArea1 from "./Section1MidArea1"
import Section1MidArea2 from "./Section1MidArea2"
import Section1BottomArea from "./Section1BottomArea"

const Section1 = () => {
  return (
    <section className="section1">
        <Section1TopArea />
        <Section1MidArea1 />
        <Section1MidArea2 />
        <Section1BottomArea />
    </section>
  )
}

export default Section1
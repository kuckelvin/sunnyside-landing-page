import Jennie from "../assets/images/image-jennie.jpg"
import Emily from "../assets/images/image-emily.jpg"
import Thomas from "../assets/images/image-thomas.jpg"

const Section2 = () => {
  return (
    <section className="section2">
      <h1>CLIENT TESTIMONIALS</h1>
      <div className="testimonials">
        <div className="first">
          <div className="thumbnail">
            <img src={Jennie} alt="Jennie's thumbnail" />
          </div>
          <div className="description">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </div>
          <div className="closing">
            <h4>Emily R.</h4>
            <p>
              <small>Marketing Director</small>
            </p>
          </div>
        </div>
        <div className="second">
          <div className="thumbnail">
            <img src={Emily} alt="Emily's thumbnail" />
          </div>
          <div className="description">
            Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.
          </div>
          <div className="closing">
            <h4>Thomas S.</h4>
            <p>
              <small>Chief Operating Officer</small>
            </p>
          </div>
        </div>
        <div className="third">
          <div className="thumbnail">
            <img src={Thomas} alt="Thomas' thumbnail" />
          </div>
          <div className="description">
            Incredible end result! Our sales increased over 400% when we worked with Sunnyside.
            Highly Recommended!
          </div>
          <div className="closing">
            <h4>Jennie F.</h4>
            <p>
              <small>Business Owner</small>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;

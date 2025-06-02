import img1 from "../assest/Picture1.png";
import img2 from "../assest/Picture18.png";
import img3 from "../assest/Picture2.png";
import img4 from "../assest/Picture3.png";
import img5 from "../assest/first.png";
import img6 from "../assest/Second.png";
import img7 from "../assest/Picture6.jpg";
import img8 from "../assest/Picture7.jpg";
import img9 from "../assest/third.png";
import img10 from "../assest/four.png";
import img11 from "../assest/five.png";
import img12 from "../assest/six.png";
import img13 from "../assest/Picture18.jpg";
import img14 from "../assest/Picture12.jpg";
import img15 from "../assest/Picture15.jpg";
import img16 from "../assest/Picture16.jpg";
import img17 from "../assest/Picture17.jpg";
import img18 from "../assest/Picture13.jpg";
import img19 from "../assest/Picture14.jpg";
import "../Home/home.css";
import "../App.css";

export default function Home() {
  return (
    <>
      <div className="homeImg">
        <img src={img1} alt="home" />
      </div>

      <div className="backgroungImg">
        <img src={img2} alt="Background" />
      </div>

      <div className="Title">
        <h1>FIORE</h1>
        <span>JEWELLERY</span>
      </div>

      <div className="content ">
        <div className="container mb-5">
          <img src={img3} alt="container" />
          <h1>ITALIAN INSPIRED ELEGANCE IN THE HEART OF QATAR</h1>
          <p>
            {" "}
            Located in the vibrant city of Doha, Qatar, Fiore Jewelry brings a
            unique blend of Italian luxury and sophistication to the Middle
            East, offering an exceptional selection of fine diamond jewelry and
            luxurious timepieces. The name "Fiore," meaning "flower" in Italian,
            reflects the essence of our brand — beauty in bloom, timeless
            elegance, and the grace found in every intricate detail of nature.
          </p>
        </div>
        <img src={img4} width="100%" alt="b" />
      </div>
      <div className="content-2">
        <div className="container">
          <h1>OUR STORY AND VISION</h1>
          <p>
            Fiore Jewelry was founded with a singular vision: to introduce Qatar
            to the unmatched artistry and refinement of Italian-inspired luxury.
            Starting with our flagship branch in Doha, we are dedicated to
            creating a shopping experience that celebrates elegance,
            exclusivity, and superior craftsman ship. Our journey begins here,
            and we are looking forward to expanding across Qatar, sharing our
            passion for Italian luxury and exceptional quality with clients
            throughout the region.
          </p>
        </div>
        <img className="mb-3" src={img5} width="100%" alt="c" />
      </div>
      <div className="content-3">
        <img src={img6} width="100%" alt="d" />
        <div className="container mt-5">
          <h1>OUR MISSION</h1>
          <p>
            We are dedicated to delivering the highest standards of quality,
            craftsman ship, and customer service. Fiore Jewelry aims to be more
            than a jewelry store; we are a destination for connoisseurs and
            collectors who seek pieces that transcend fashion, providing them
            with heirlooms to be cherished for generations.
          </p>
        </div>
      </div>
      <div className="content-4">
        <div className="container">
          <div className="row align-items-stretch">
            {/* Left Column */}
            <div className="col-md-6 d-flex flex-column">
              <div className="mb-4 flex-grow-1">
                <img src={img7} alt="e" className="img-fluid fit-row-height" />
              </div>
              <div className="flex-grow-1">
                <img src={img9} alt="f" className="img-fluid fit-row-height" />
              </div>
            </div>
            {/* Right Column */}
            <div className="col-md-6">
              <img src={img8} alt="g" className="img-fluid fit-row-height" />
            </div>
          </div>
          <h1 className="mt-5">A COLLECTION FOR EVERY GENERATION</h1>
          <p>
            Fiore Jewelry offers a thoughtfully curated collection that combines
            the enduring allure of classic designs with the contemporary appeal
            sought by today’s generation. Our diamond jewelry selection
            showcases exquisite pieces that honor traditional craftsmanship
            while incorporating modern elements that resonate with younger
            tastes. In our exclusive range of luxury watches, clients will
            discover timepieces that blend precision engi neering with aesthetic
            excellence, making them ideal investments and expressions of
            individual style.s.
          </p>
        </div>
      </div>
      <div className="service-section container my-5">
        <div className="row ">
          {/* Left Column: Text */}
          <div className="col-md-6 text-content">
            <h1>ITALIAN STYLE AND TIMELESS LUXURY</h1>
            <p>
              AND TIMELESS LUXURY The essence of Fiore Jewelry is deeply rooted
              in Italian luxury. Our jewelry and watches are inspired by Italy’s
              rich heritage of fine art, archi tecture, and design, where
              elegance is a lifestyle and every detail matters. Each piece in
              our collection reflects this philosophy, embodying a timeless
              beauty that transcends trends and enhances any occasion. From the
              perfect cut of a diamond to the sophisticated design of a time
              piece, Fiore Jewelry is committed to delivering an experience of
              luxury that feels both personal and eternal.
            </p>
            <div className="col-md-9">
              <img
                src={img12}
                width="100%"
                alt="Polishing jewelry"
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="col-md-5">
            <div className=" ">
              <div className="col-md-12 mb-4">
                <img
                  src={img10}
                  alt="Inspecting diamond"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-12 mb-4">
                <img
                  src={img11}
                  alt="Crafting ring"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="service-section container my-5">
        <div className="row ">
          {/* Left Column: Text */}
          <div className="col-md-6 text-content">
            <h1>OUR SERVICE</h1>
            <p>
              At Fiore Jewelry, we pride ourselves on delivering personalized
              services to meet the unique needs of our clientele. Our offerings
              include custom design services, exclusive consultations, and
              private showings to ensure a memorable shopping experience. Every
              client who walks through our doors is treated with the utmost care
              and respect, reflecting our commitment to excellence in service.
            </p>
            <div className="col-md-9">
              <img
                src={img18}
                width="100%"
                alt="Polishing jewelry"
                className="img-fluid rounded"
              />
            </div>
          </div>

          {/* Right Column: Images */}
          <div className="col-md-5">
            <div className=" ">
              <div className="col-md-12 mb-4">
                <img
                  src={img14}
                  width="100%"
                  alt="Inspecting diamond"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col-md-12 mb-4">
                <img
                  src={img13}
                  width="100%"
                  alt="Crafting ring"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-5">
        <div className="container">
          <img src={img19} width="100%" alt="e" />
          <h1 className="mt-4">
            WHY CHOOSE <br />
            FIORE JEWELLERY ?
          </h1>
          <p>
            Fiore Jewelry was founded with a singular vision: to introduce Qatar
            to the unmatched artistry and refinement of Italian-inspired luxury.
            Starting with our flagship branch in Doha, we are dedicated to
            creating a shopping experience that celebrates elegance,
            exclusivity, and superior craftsman ship. Our journey begins here,
            and we are looking forward to expanding across Qatar, sharing our
            passion for Italian luxury and exceptional quality with clients
            throughout the region.
          </p>
        </div>
      </div>
      <div className="future-section container my-5">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-7 text-container">
            <h1>
              LOOKING TO <br /> THE FUTURE
            </h1>
            <p>
              Fiore Jewelry is dedicated to becoming a renowned name across
              Qatar, delivering the highest standards of luxury and customer
              care with every new location we establish. Our commitment to
              excellence, Italian-inspired elegance, and innovation drives us
              forward as we expand to new communities, sharing our love for
              timeless beauty and superior craftsmanship.
            </p>
            <div className="col-md-12">
              <img src={img16} alt="Middle" className="img-fluid" />
            </div>
          </div>
          {/* Right Column */}
          <div className="col-md-5">
            <div className="row">
              {/* Top Image */}
              <div className="col-10 mb-4">
                <img src={img15} width="100%" alt="z" className="img-fluid" />
              </div>
              {/* Bottom Two Images */}

              <div className="col-md-10">
                <img
                  src={img17}
                  width="100%"
                  alt="Bottom"
                  className="img-fluid"
                />
                <p>
                  Discover Fiore Jewelry in Doha, where Italian artistry and
                  Qatari hospitality come together in the pursuit of perfection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="first-title">
          <h1>Thank you</h1>
          <p>F O R W A T C H I NG</p>
        </div>

        <div className="Title">
          <h1>FIORE</h1>
          <span>JEWELLERY</span>
          <p> Doha, Qatar</p>
          <a
            href="https://www.fiorejewellery.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.fiorejewellery.com
          </a>{" "}
        </div>
      </div>
    </>
  );
}

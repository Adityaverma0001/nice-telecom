import Navbar from "./navbar";
import Slider from "./slider";
import Footer from "./footer";
import { motion } from "framer-motion";

function Home(){
    return(
        <>  
        <Navbar/>
          <section className="backto">
          <div className="container-fluid ping">
            <div className="row change">
              <div className="col-lg-7 pt-5 pb-5">
                <div className="tagline pb-3">Best Deals on Mobiles & Toys</div>
                <div>
                   <motion.h1
                       initial={{ opacity: 0, y: 50 }}       // Start position
                       whileInView={{ opacity: 1, y: 0 }}     // End position
                       transition={{ duration: 0.8, ease: "easeOut" }} // Speed
                       viewport={{ once: false, amount: 0.2 }} // amount=20% दिखते ही trigger
                       className="subtext"
                    >
                      Explore the latest mobiles, stylish accessories, and hot deals – make your tech world smarter and trendier than ever! 
                   </motion.h1>          
                </div>
                <p className="late pt-3">
                  Nice Telecom is a trusted shop offering latest mobile phones, essential accessories like chargers, earphones, covers, and a great variety of fun toys for kids. Experience quality, fair pricing, and excellent service.
                </p>
              </div>
              <div className="col-lg-5 text-center position-relative hide">
                <div>
                  <img className="webp" src="a1.webp"/>
                </div>
                <div className="d-flex mt-5 gap-4 justify-content-center">
                  <div>
                    <img className="webp1" src="a3.webp"/>
                  </div>
                  <div>
                    <img className="webp2" src="a2.webp"/>
                  </div>
                </div>
                <div className="position-absolute blank"> <i class="fa-solid fa-tag"></i> <br/>Nice <br/> Telecom</div>
              </div>
            </div>
          </div>
          </section>
        <section className="overflow-hidden">
          <div className="container-fluid mt-5 ps-2 pe-2 mt-4 mb-5">
            <div className="top">
              <h2 className="connect text-center">Upgrade Your Mobile Life – Accessories, Repairs & More!</h2>
             <h4 className="we mt-3 text-center">We are committed to delivering top-quality mobile accessories and expert repair services that keep you connected and upgraded.</h4>
            </div>
             <div className="row mt-5">
              <div className="col-lg-6 hgt allon">
                <img className="n2" src="l3.avif"/>
              </div>
              <div className="col-lg-6 hgt">
                <div className="and p-5 ">
                  <p className="tel1">Nice Telecom</p>
                  <div className="d-flex pt-4 pb-4 justify-content-between  ">
                    <div className="ok d-flex gap-2">
                      <span><i class="fa-solid fa-tag"></i> </span>
                      <h2>Best<br/> Prices</h2>
                    </div>
                    <div className="ok d-flex gap-2 hide1 off show">
                      <span><i class="fa-solid fa-thumbs-up"></i> </span>
                      <h2>Trusted <br/> since </h2>
                    </div>
                    <div className="ok d-flex gap-2  off">
                      <span><i class="fa-solid fa-shield-halved"></i></span>
                      <h2>Reliable <br/> service</h2>
                    </div>
                  </div>
                  <h2 className="since">Nice Telecom — trusted since 2014 for best prices and reliable service. Visit us for quality you can trust.</h2>
                  <p className="stay pt-2">Stay Connected, Stay Upgraded!</p>
                  <button className="visit mt-3">Visit Now</button>
                </div>
              </div>
             </div>
          </div>
        </section>
        <section className="mgn">
          <div className="container-fluid">
            <div className="services">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false }}
                    >
                      <h2 className="service">Our Latest Services</h2>
                      <div className="line"></div>
                    </motion.div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3 wth">
                <div>
                  <img className="jpg" src="m5.avif"/>
                  <h2 className="text-center les mt-3">Mobile Sales</h2>
                  <p className="text-center est">Find the latest smartphones at great price</p>
                </div>
              </div>
              <div className="col-lg-3 wth">
                <div>
                  <img className="jpg" src="m4.avif"/>
                  <h2 className="text-center les mt-3">Accessories</h2>
                  <p className="text-center est">A wide range of mobile accessories available</p>
                </div>
              </div>
              <div className="col-lg-3 wth">
                <div>
                  <img className="jpg" src="m3.avif"/>
                  <h2 className="text-center les mt-3">Toys for Kids</h2>
                  <p className="text-center est">Fun and educational toys for children</p>
                </div>
              </div>
              <div className="col-lg-3 wth">
                <div>
                  <img className="jpg" src="m1.avif"/>
                  <h2 className="text-center les mt-3">Mobile Repair</h2>
                  <p className="text-center est">Quick and reliable mobile repair services</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-5">
          <div className="container-fluid user pt-5 pb-5">
            <div className="row on">
              <div className="col-lg-2 ps-5">
                <img className="ved" src="ved.jpg"/>
              </div>
              <div className="col-lg-10 align-content-center ps-5 pe-4">
                <h2 className="all">
                  Nice Telecom – By Ved Parkash Goyal.<br/>
                  Mobiles, accessories, toys & repairs at best prices. Daily deals & home delivery.
                 </h2>
              </div>
            </div>
          </div>
        </section>
        <Slider/>
        <Footer/>
        </>
    )
}
export default Home;
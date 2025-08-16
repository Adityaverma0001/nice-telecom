import Navbar from "./navbar";
import Footer from "./footer";
import { motion } from "framer-motion";

function About(){
    return(
        <>
        <Navbar/>
         <section>
          <div className="container-fluid mt-5 ps-2 pe-2 mt-4 mb-5">
             <motion.h1
        initial={{ opacity: 0, y: 50 }}       
        whileInView={{ opacity: 1, y: 0 }}     
        transition={{ duration: 0.8, ease: "easeOut" }} 
      >
       <div className="top">
              <h2 className="connect text-center">Upgrade Your Mobile Life – Accessories, Repairs & More!</h2>
             <h4 className="we mt-3 text-center">We are committed to delivering top-quality mobile accessories and expert repair services that keep you connected and upgraded.</h4>
            </div>
      </motion.h1>
             <div className="row mt-5">
              <div className="col-lg-6 hgt allon">
                <img className="n2" src="o3.avif"/>
              </div>
              <div className="col-lg-6 hgt">
                <div className="and p-5 ">
                  <p className="tel1">Nice Telecom</p>
                  <div className="d-flex pt-4 pb-4 justify-content-between  ">
                    <div className="ok d-flex gap-2">
                      <span><i class="fa-solid fa-tag"></i> </span>
                      <h2>Best<br/> Prices</h2>
                    </div>
                    <div className="ok d-flex gap-2 hide off">
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
        <Footer/>
        </>
    
    )
}
export default About;
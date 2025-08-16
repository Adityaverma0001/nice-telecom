import Navbar from "./navbar";
import Footer from "./footer";


function Service(){
    return(
        <>
        <Navbar/>
         <section className="mgn">
          <div className="container-fluid">
            <div className="services">
              <h2 className="service">Our Latest Services</h2>
              <div className="line"></div>
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
        <Footer/>
        </>
    )
}
export default Service;
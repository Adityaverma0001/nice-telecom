import Navbar from "./navbar";
import Footer from "./footer";


function Product(){
    return(
        <>
        <Navbar/>
        <section className="mgn">
          <div className="container-fluid">
            <div className="services">
              <h2 className="service">Our Latest Products</h2>
              <div className="line"></div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-3 wth">
                <div>
                  <img className="jpg" src="m6.jpg"/>
                  <h2 className="text-center les mt-3">Mobile Phone</h2>
                </div>
              </div>
              <div className="col-lg-3 wth">
                <div>
                  <img className="jpg" src="o2.avif"/>
                  <h2 className="text-center les mt-3">Accessories</h2>
                </div>
              </div>
              <div className="col-lg-3 wth">
                <div>
                  <img className="jpg" src="p5.avif"/>
                  <h2 className="text-center les mt-3">Toys</h2>
                </div>
              </div>
              <div className="col-lg-3 wth">
                <div>
                  <img className="jpg" src="p4.avif"/>
                  <h2 className="text-center les mt-3">Glasses</h2>
                </div>
              </div>
            </div>
              <div className="row mt-5">
                 <div className="col-lg-3 wth">
                <div>
                  <img className="jpg" src="p3.avif"/>
                  <h2 className="text-center les mt-3">Watch</h2>
                </div>
              </div>
              <div className="col-lg-3 wth">
                <div>
                  <img className="jpg" src="p6.avif"/>
                  <h2 className="text-center les mt-3">Laptop</h2>
                </div>
              </div>
              <div className="col-lg-3 wth">
                <div>
                  <img className="jpg" src="p2.avif"/>
                  <h2 className="text-center les mt-3">Speakers</h2>
                </div>
              </div>
              <div className="col-lg-3 wth">
                <div>
                  <img className="jpg" src="p1.avif"/>
                  <h2 className="text-center les mt-3">Gifts</h2>
                </div>
              </div>
              </div>
          </div>
        </section>
        <Footer/>
        </>
    )
}
export default Product;
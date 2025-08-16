import Navbar from "./navbar";
import Footer from "./footer";

function Contact(){
    return(
        <>
        <Navbar/>
        <section className="mt-5">
            <div className="container-fluid">
                <div className="row onn">
                    <div className="col-lg-6 text-light">
                        <div className="user p-5 h-100">
                            <h2 className="location">Location: Bazidpur Kattian wali, Abohar, Punjab</h2>
                        <h2 className="location">Contact: 9317966000</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="user p-5 h-100">
                            <h2 className="location text-light text-center">Follow us:</h2>
                            <ul className="insta book d-flex justify-content-center ps-2 mt-4">
                            <li>
                                <a href="https://www.instagram.com/ved3240/"><i class="fa-brands fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/profile.php?id=100015110431444"><i class="fa-brands fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/@Rambhakthanuman6646"><i class="fa-brands fa-youtube"></i></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="mb-5 mt-5">
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
        <Footer/>
        </>
    )
}
export default Contact;
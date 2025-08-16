


import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./app.css"; 
import { motion } from "framer-motion";


const testimonials = [
  { name: "Aditya Verma", 
    text: "Nice Telecom provides excellent service, staff are friendly, always helpful, quick to respond, reliable support, affordable plans, truly the best shop.", 
    img: "aditya.jpg" },
  { name: "Jaswant Choudhary",
     text: "I am very happy with Nice Telecom, they always give best advice, quick solutions, affordable services, polite staff, truly recommend.", 
     img: "r7.avif" },
  { name: "Ankush Sharma", 
    text: "Service quality at Nice Telecom is outstanding, staff are cooperative, very professional, prices reasonable, network support great, truly best experience.", 
    img: "r1.avif" },
  { name: "Retik Chopra",
     text: "Nice Telecom always delivers good service, mobile recharge easy, bill payments smooth, staff polite, shop neat, quality excellent, prices fair.", 
    img: "r2.avif" },
  { name: "Ravi Kumar", 
    text: "I have been using Nice Telecom services regularly, never disappointed, great staff, reliable quality, very helpful, affordable pricing, excellent support.", 
    img: "r3.avif" },
  { name: "Lalit Aggarwal", 
    text: "Nice Telecom shop is highly recommended, staff are always supportive, service quick, prices reasonable, quality unmatched, best place for telecom.", 
    img: "r4.avif" }
];

export default function Slider() {
  return (
    <div style={{ width: "80%", margin: "auto",overflow:"hidden" }}>
                          <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8 }}
                      viewport={{ once: false }}
                    >
                      <h3 style={{textAlign: "center", fontSize:"70px",color:'#ff8400'}}><i class="fa-solid fa-quote-left"></i></h3>
      <h2 className="service">  Happy Customers</h2>
      <div className="line mb-5"></div>
                    </motion.div>

      <Swiper
  className="mySwiper"
  modules={[Autoplay, Pagination]}
  spaceBetween={20}
  slidesPerView={2}
  slidesPerGroup={2}
  pagination={{ clickable: true }}
    // autoplay={{
    //   delay: 3000, // Slide change hone ka wait time
    //   disableOnInteraction: false
    // }}
  speed={1500} // Slide ka transition time (ms) — jitna zyada, utna smooth
  loop={true}
  breakpoints={{
    0: { slidesPerView: 1, slidesPerGroup: 1 },
    768: { slidesPerView: 2, slidesPerGroup: 2 }
  }}
>

        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: 'url("./bg.jpg")',
                backgroundPosition: '50% 0',
                borderRadius: '20px',
                padding: '48px 40px 50px 40px ',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                textAlign: 'center',
                
              }}
            >
              <img
                src={t.img}
                alt={t.name}
                style={{
                  borderRadius: "50%",
                  marginBottom: "10px",
                  width: "80px",
                  height: "80px",
                  objectFit:"cover",
                  objectPosition:"top",
                
                }}
              />
              <p style={{ fontStyle: "italic", color:'white', marginTop:'20px' }}>"{t.text}"</p>
              <span style={{ color:"#ff8400" }}>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </span>
              <h4 style={{ color: "white", marginTop:'10px' }}>- {t.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}


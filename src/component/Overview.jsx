import Apparel1 from "../assets/overview/apparel1.png"
import Apparel2 from "../assets/overview/apparel2.png"
import Apparel3 from "../assets/overview/apparel3.png"
import Apparel4 from "../assets/overview/apparel4.png"
import Apparel5 from "../assets/overview/apparel5.png"
import Beauty1 from "../assets/overview/beauty1.png"
import Beauty2 from "../assets/overview/beauty2.png"
import Beauty3 from "../assets/overview/beauty3.png"
import Beauty4 from "../assets/overview/beauty4.png"
import Beauty5 from "../assets/overview/beauty5.png"
import Beauty6 from "../assets/overview/beauty6.png"
import Beauty7 from "../assets/overview/beauty7.png"
import Leisure1 from "../assets/overview/leisure1.png"
import Leisure2 from "../assets/overview/leisure2.png"
import Leisure3 from "../assets/overview/leisure3.png"
import Leisure4 from "../assets/overview/leisure4.png"
import Leisure5 from "../assets/overview/leisure5.png"
import Interior1 from "../assets/overview/interior1.png"
import Interior2 from "../assets/overview/interior2.png"
import Interior3 from "../assets/overview/interior3.png"
import Interior4 from "../assets/overview/interior4.png"
import Interior5 from "../assets/overview/interior5.png"
import Electronics1 from "../assets/overview/electronics1.png"
import Electronics2 from "../assets/overview/electronics2.png"
import Electronics3 from "../assets/overview/electronics3.png"
import Electronics4 from "../assets/overview/electronics4.png"
import Electronics5 from "../assets/overview/electronics5.png"
import Electronics6 from "../assets/overview/electronics6.png"

import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




const Overview =()=> {
  const [showTab, setShowTab] = useState(0)

  return(
    <>
    <section id="overview">
      <div className="background"></div>
        <h3 className="tit">Brand <span>overview</span></h3>
        <div className="tabbox">
          <a href="#">others +</a>
          <ul className="tablist">
            <li
              className={showTab === 0 ? "active" : ""}
              onClick={() => setShowTab(0)}
            >Apparel</li>
            <li
              className={showTab === 1 ? "active" : ""}
              onClick={() => setShowTab(1)}
            >Beauty</li>
            <li
              className={showTab === 2 ? "active" : ""}
              onClick={() => setShowTab(2)}
            >Leisure</li>
            <li
              className={showTab === 3 ? "active" : ""}
              onClick={() => setShowTab(3)}
            >Interior</li>
            <li
              className={showTab === 4 ? "active" : ""}
              onClick={() => setShowTab(4)}
            >Electronics</li>
          </ul>
          <ul className="tabcont">
            {showTab === 0 &&
            <li>
              <Swiper
                navigation={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                  },
                  440: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 2.8,
                    spaceBetween: 15,
                  },
                  1200: {
                    slidesPerView: 3.2,
                    spaceBetween: 15,
                  },
                  1500: {
                    slidesPerView: 4.2,
                    spaceBetween: 20,
                  },
                }}
                spaceBetween={20}
                className="overviewSwiper"
              >
                <SwiperSlide>
                  <img src={Apparel1} alt="어패럴1" />
                  <h5>FLOWWOOM</h5>
                  <p>한여름의 순간을 오래도록</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Apparel2} alt="어패럴2" />
                  <h5>dropdropdrop</h5>
                  <p>패턴대로 나답게</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Apparel3} alt="어패럴3" />
                  <h5>HELEN KAMINSKI</h5>
                  <p>머리위 포인트</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Apparel4} alt="어패럴4" />
                  <h5>Patagonia</h5>
                  <p>지구를 위한 선택</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Apparel5} alt="어패럴5" />
                  <h5>COLON SPORTS</h5>
                  <p>쉼없이 달릴 수 있도록</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
              </Swiper>
            </li>}
            {showTab === 1 &&
            <li>
              <Swiper
                navigation={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                  },
                  440: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 2.8,
                    spaceBetween: 15,
                  },
                  1200: {
                    slidesPerView: 3.2,
                    spaceBetween: 15,
                  },
                  1500: {
                    slidesPerView: 4.2,
                    spaceBetween: 20,
                  },
                }}
                spaceBetween={20}
                className="overviewSwiper"
              >
                <SwiperSlide>
                  <img src={Beauty1} alt="뷰티1" />
                  <h5>John Varvatos</h5>
                  <p>상쾌함을 퍼뜨리는</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Beauty2} alt="뷰티2" />
                  <h5>MELIENS</h5>
                  <p>혁신적인 클랜징</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Beauty3} alt="뷰티3" />
                  <h5>TWO SLASH FOUR</h5>
                  <p>신비로운 핑크 무드</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Beauty4} alt="뷰티4" />
                  <h5>AROMATICA</h5>
                  <p>감각을 깨우는 시간</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Beauty5} alt="뷰티5" />
                  <h5>SCENTICA</h5>
                  <p>계절을 깨우는 향기</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Beauty6} alt="뷰티6" />
                  <h5>LOiVie</h5>
                  <p>확실한 존재감</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Beauty7} alt="뷰티7" />
                  <h5>LUSH</h5>
                  <p>상큼한 에너지</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
              </Swiper>
            </li>}
            {showTab === 2 &&
            <li>
              <Swiper
                navigation={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                  },
                  440: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 2.8,
                    spaceBetween: 15,
                  },
                  1200: {
                    slidesPerView: 3.2,
                    spaceBetween: 15,
                  },
                  1500: {
                    slidesPerView: 4.2,
                    spaceBetween: 20,
                  },
                }}
                spaceBetween={20}
                className="overviewSwiper"
              >
                <SwiperSlide>
                  <img src={Leisure1} alt="레저1" />
                  <h5>MLB</h5>
                  <p>카리나의 새로운 모습</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Leisure2} alt="레저2" />
                  <h5>BORNTOWIN</h5>
                  <p>나를 위한 준비된 선택</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Leisure3} alt="레저3" />
                  <h5>NOWITOW</h5>
                  <p>감각적 순간의 선택</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Leisure4} alt="레저4" />
                  <h5>SOHC</h5>
                  <p>완벽한 여름을 위한 브랜드</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Leisure5} alt="레저5" />
                  <h5>CONCHWEAR</h5>
                  <p>일상부터 운동까지</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
              </Swiper>
            </li>}
            {showTab === 3 &&
            <li>
              <Swiper
                navigation={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                  },
                  440: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 2.8,
                    spaceBetween: 15,
                  },
                  1200: {
                    slidesPerView: 3.2,
                    spaceBetween: 15,
                  },
                  1500: {
                    slidesPerView: 4.2,
                    spaceBetween: 20,
                  },
                }}
                spaceBetween={20}
                className="overviewSwiper"
              >
                <SwiperSlide>
                  <img src={Interior1} alt="인테리어1" />
                  <h5>ICILAMISON</h5>
                  <p>온화한 촉감</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Interior2} alt="인테리어2" />
                  <h5>COLLER</h5>
                  <p>꾸미는 즐거움</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Interior3} alt="인테리어3" />
                  <h5>POREN</h5>
                  <p>쾌적한 수면을 위해</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Interior4} alt="인테리어4" />
                  <h5>TALO RYYPPY</h5>
                  <p>나만의 다정한 공간</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Interior5} alt="인테리어5" />
                  <h5>HOTEL827</h5>
                  <p>일상에 미감을 더하는</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
              </Swiper>
            </li>}
            {showTab === 4 &&
            <li>
              <Swiper
                navigation={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                  320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                  },
                  440: {
                    slidesPerView: 2.2,
                    spaceBetween: 10,
                  },
                  1024: {
                    slidesPerView: 2.8,
                    spaceBetween: 15,
                  },
                  1200: {
                    slidesPerView: 3.2,
                    spaceBetween: 15,
                  },
                  1500: {
                    slidesPerView: 4.2,
                    spaceBetween: 20,
                  },
                }}
                spaceBetween={20}
                className="overviewSwiper"
              >
                <SwiperSlide>
                  <img src={Electronics1} alt="가전1" />
                  <h5>LG</h5>
                  <p>꿈이 현실이 되는 공간</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Electronics2} alt="가전2" />
                  <h5>ALLO KOREA</h5>
                  <p>여름을 나는 방법</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Electronics3} alt="가전3" />
                  <h5>VODANA</h5>
                  <p>아이보리로 찾는 나의 새로운 모습</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Electronics4} alt="가전4" />
                  <h5>WINIX</h5>
                  <p>쾌적하고 뽀송하게</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Electronics5} alt="가전5" />
                  <h5>OA</h5>
                  <p>원하는 모든 순간에</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
                <SwiperSlide>
                  <img src={Electronics6} alt="가전6" />
                  <h5>CICO</h5>
                  <p>접었다가 펼쳤다가</p>
                  <a href="#" className="more">View More</a>
                </SwiperSlide>
              </Swiper>
            </li>}
          </ul>
        </div>
    </section>
    </>
  )
}

export default Overview
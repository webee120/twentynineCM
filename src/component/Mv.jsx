import Mvimg from "../assets/mv/mv.png";
import Mvimgt from "../assets/mv/mvt.png";
import Mvimgm from "../assets/mv/mvm.png";
import Mvimg2 from "../assets/mv/mv2.png";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const Mv =()=>{
  return(
  <>
  <section id="mv">
    <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mvSwiper"
      >
        <SwiperSlide>
          <img className="imgd" src={Mvimg} alt="메인1" />
          <img className="imgt" src={Mvimgt} alt="메인1" />
          <img className="imgm" src={Mvimgm} alt="메인1" />
          <h4><span className="f1">29</span><span className="f2">% Fill</span> <span className="f3">in your</span> <span className="f4">lack</span></h4>
          <h3>더 나은 선택을 <span>제안하는 우리의 방식</span></h3>
          <p>셀렉트샵의 본질은 좋은 상품을 소개하는 것입니다. 29CM는 1세대 미디어 커머스 플랫폼으로서 국내 디자이너 및 브랜드를 발굴하고, 글로벌 브랜드를 국내에 소개하는 역할을 수행했습니다.</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mvimg2} alt="메인2" />
          <h4>summer <span>styling</span></h4>
          <p>2025 Season <br className="br"/> 새로이 다가오는 여름을 맞아 
             <br/>디렉터가 추천하는 29cm만의 <br className="br"/>추천 아이템들을 만나보세요!
          </p>
          <a href="#" className="more">View More</a>
        </SwiperSlide>
      </Swiper>
  </section>
  </>
  )
}

export default Mv
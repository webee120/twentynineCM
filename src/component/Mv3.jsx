import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

const Mv3 =()=>{
  const [activeIdx, setActiveIdx] = useState(0);

  const item3 = [
    {
      img: "/mv3/mv3cont1.png", alt: "cont1",
      h4: "스타일 레시피 Ep37 블라우스로 즐기는 여름날",
      txt: "감각적인 스타일의 발견 by 29CM",
      hash: "# 스타일 레시피", date: "2025.06.16"
    },
    {
      img: "/mv3/mv3cont2.png", alt: "cont2",
      h4: "29 어라운드 쇼룸 Ep.58 문달",
      txt: "29 어라운드 쇼룸은 브랜드와 쇼룸, 그리고 디렉터가 추천하는 핫플레이스까지 다양한 이야기를 전합니다.",
      hash: "# 스타일 레시피", date: "2025.06.16"
    },
    {
      img: "/mv3/mv3cont3.png", alt: "cont3",
      h4: "better magazine Ep.09",
      txt: "아름답고도 실용적인 슬로우 텀블러와 순간의 낭만에 대해 이야기합니다.",
      hash: "# 스타일 레시피", date: "2025.06.16"
    },
    {
      img: "/mv3/mv3cont4.png", alt: "cont4",
      h4: "29 디자인 뮤지엄 Ep.22 피아바날",
      txt: "일상의 행복을 최고의 가치로 선물하는 라이프 스타일 브랜드, 피아바를 소개합니다.",
      hash: "# 스타일 레시피", date: "2025.06.16"
    },
    {
      img: "/mv3/mv3cont5.png", alt: "cont5",
      h4: "낭만이 새겨진 잔들과 함께",
      txt: "아름답고도 실용적인 슬로우 텀블러와 순간의 낭만에 대해 이야기합니다.",
      hash: "# 스타일 레시피", date: "2025.06.16"
    },
    {
      img: "/mv3/mv3cont6.png", alt: "cont6",
      h4: "29 르 저널 Ep.33 서머 액세서리",
      txt: "취향은 한자리에 머물러 있지 않는 법. 29 르 저널이 소개하는 지금 주목받는 여성 패션 트렌드에서 나다움에 빠져보세요.",
      hash: "# 스타일 레시피", date: "2025.06.16"
    },
    {
      img: "/mv3/mv3cont7.png", alt: "cont7",
      h4: "29 테크 트렌드 리포트 Ep.43 바람이 필요한 모든 순간들",
      txt: "기분 좋은 바람과 함께하는 계절의 시작. 최대 29% 혜택으로 소개하는 가전 4종과 함께 시원하고 쾌적한 여름을 보내보세요!",
      hash: "# 스타일 레시피", date: "2025.06.16"
    },
    {
      img: "/mv3/mv3cont8.png", alt: "cont8",
      h4: "better magazine Ep.08",
      txt: "감아름답고도 실용적인 올라운더 에이프런과 우리의 다양한 면모에 대해 이야기합니다.",
      hash: "# 스타일 레시피", date: "2025.06.16"
    },
    {
      img: "/mv3/mv3cont9.png", alt: "cont9",
      h4: "29 에센셜픽스 Ep.11 가볍고 산뜻한 백&슈즈",
      txt: "29CM Pick 잡화 아이템, 후기보다 자세하고 실물만큼 생생하게 만나보세요.",
      hash: "# 스타일 레시피", date: "2025.06.16"
    },
  ];

  const item2 = [
    {
      img: "/mv3/mv3cont2.png", alt: "cont1",
      h4: "제목이 들어가는 영역입니다11.",
      txt: "설명이 들어가는 영역입니다11.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont5.png", alt: "cont2",
      h4: "제목이 들어가는 영역입니다22.",
      txt: "설명이 들어가는 영역입니다22.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont3.png", alt: "cont3",
      h4: "제목이 들어가는 영역입니다33.",
      txt: "설명이 들어가는 영역입니다33.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont4.png", alt: "cont4",
      h4: "제목이 들어가는 영역입니다44.",
      txt: "설명이 들어가는 영역입니다44.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont5.png", alt: "cont5",
      h4: "제목이 들어가는 영역입니다55.",
      txt: "설명이 들어가는 영역입니다55.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont6.png", alt: "cont6",
      h4: "제목이 들어가는 영역입니다66.",
      txt: "설명이 들어가는 영역입니다66.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont7.png", alt: "cont7",
      h4: "제목이 들어가는 영역입니다77.",
      txt: "설명이 들어가는 영역입니다77.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont8.png", alt: "cont8",
      h4: "제목이 들어가는 영역입니다88.",
      txt: "설명이 들어가는 영역입니다88.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
  ];

  const item1 = [
    {
      img: "/mv3/mv3cont3.png", alt: "cont1",
      h4: "제목이 들어가는 영역입니다1.",
      txt: "설명이 들어가는 영역입니다1.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont8.png", alt: "cont2",
      h4: "제목이 들어가는 영역입니다2.",
      txt: "설명이 들어가는 영역입니다2.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont3.png", alt: "cont3",
      h4: "제목이 들어가는 영역입니다3.",
      txt: "설명이 들어가는 영역입니다3.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont4.png", alt: "cont4",
      h4: "제목이 들어가는 영역입니다4.",
      txt: "설명이 들어가는 영역입니다4.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont5.png", alt: "cont5",
      h4: "제목이 들어가는 영역입니다5.",
      txt: "설명이 들어가는 영역입니다5.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont6.png", alt: "cont6",
      h4: "제목이 들어가는 영역입니다6.",
      txt: "설명이 들어가는 영역입니다6.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont7.png", alt: "cont7",
      h4: "제목이 들어가는 영역입니다7.",
      txt: "설명이 들어가는 영역입니다7.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
    {
      img: "/mv3/mv3cont8.png", alt: "cont8",
      h4: "제목이 들어가는 영역입니다8.",
      txt: "설명이 들어가는 영역입니다8.",
      hash: "# 해쉬태그", date: "2025.00.99"
    },
  ];



  return(
    <>
    <section id="mv3">
      <Swiper 
        onSlideChange={swiper => setActiveIdx(swiper.activeIndex)}
        initialSlide={2}
        navigation={true} 
        modules={[Navigation]} 
        className="mv3Swiper"
      >
        <SwiperSlide>
          <div className="inner">
            <div className="txtwrap">
              <div className="txtbox">
                <h3>a<span>pril</span></h3>
                <ul>
                  <li className="txt">셀렉트샵의 본질은 좋은 상품을 소개하는 것입니다. 29CM는 1세대 미디어 커머스 플랫폼으로서 국내 디자이너 및 브랜드를 발굴하고, 글로벌 브랜드를 국내에 소개하는 역할을 수행했습니다.</li>
                  <li className="year">2025</li>
                </ul>
              </div>
              <p className="before">Before +</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">
            <div className="txtwrap">
              <div className="txtbox">
                <h3>m<span>ay</span></h3>
                <ul>
                  <li className="txt">셀렉트샵의 본질은 좋은 상품을 소개하는 것입니다. 29CM는 1세대 미디어 커머스 플랫폼으로서 국내 디자이너 및 브랜드를 발굴하고, 글로벌 브랜드를 국내에 소개하는 역할을 수행했습니다.</li>
                  <li className="year">2025</li>
                </ul>
              </div>
              <p className="before">Before +</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="inner">
            <div className="txtwrap">
              <div className="txtbox">
                <h3>j<span>une</span></h3>
                <ul>
                  <li className="txt">셀렉트샵의 본질은 좋은 상품을 소개하는 것입니다. 29CM는 1세대 미디어 커머스 플랫폼으로서 국내 디자이너 및 브랜드를 발굴하고, 글로벌 브랜드를 국내에 소개하는 역할을 수행했습니다.</li>
                  <li className="year">2025</li>
                </ul>
              </div>
              <p className="before">Before +</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="inner">
        <ul className="mv3cont">
          {activeIdx === 0 && 
          <li>
            {item1.map((item, idx) => (
            <a href="#" key={idx}>
              <img src={item.img} alt={item.alt} />
              <h4>{item.h4}</h4>
              <p className="txt">{item.txt}</p>
              <p className="date">{item.date}</p>
              <p className="hash">{item.hash}</p>             
            </a>
            ))}
          </li> }
          {activeIdx === 1 && 
          <li>
            {item2.map((item, idx) => (
            <a href="#" key={idx}>
              <img src={item.img} alt={item.alt} />
              <h4>{item.h4}</h4>
              <p className="txt">{item.txt}</p>
              <p className="date">{item.date}</p>
              <p className="hash">{item.hash}</p>            
            </a>
            ))}
          </li> }
          {activeIdx === 2 && 
          <li>
            {item3.map((item, idx) => (
            <a href="#" key={idx}>
              <img src={item.img} alt={item.alt} />
              <h4>{item.h4}</h4>
              <p className="txt">{item.txt}</p>
              <p className="date">{item.date}</p>
              <p className="hash">{item.hash}</p>        
            </a>
            ))}
          </li> }
        </ul>
      </div>
    </section>
    </>
  )
}

export default Mv3
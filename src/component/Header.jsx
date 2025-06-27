import { NavLink } from "react-router-dom";

import Headergnb from "./Headergnb";
import Headermgnb from "./Headermgnb";
import React, { useRef, useState, useEffect } from "react";


// 메뉴 데이터 (Depth3까지)
const menu = [
  {
    title: "best",
    children: [
          { title: "Weekly" },
        ]
  },

  {
    title: "women",
    children: [
      {
        title: "의류",
        children: [
          { title: "해외브랜드" },
          { title: "EXCLUSIVE" },
          { title: "상의" },
          { title: "바지" },
          { title: "셋업" },
          { title: "점프수트" },
          { title: "원피스" },
          { title: "스커트" },
          { title: "아우터" },
          { title: "니트웨어" },
          { title: "언더웨어" },
          { title: "홈웨어" },
          { title: "파티복/행사복" },
        ]
      },
      {
        title: "가방",
        children: [
          { title: "보스턴백" },
          { title: "웨이스트백" },
          { title: "기타가방" },
          { title: "캐리어/여행가방" },
          { title: "해외브랜드" },
          { title: "EXCLUSIVE" },
          { title: "숄더백" },
          { title: "토트백" },
          { title: "크로스백" },
          { title: "에코/캔버스백" },
          { title: "백팩" },
          { title: "클러치" },
          { title: "가방 액세서리" },
        ]
      },
      {
        title: "신발",
        children: [
          { title: "플랫 슈즈" },
          { title: "해외브랜드" },
          { title: "EXCLUSIVE" },
          { title: "부츠" },
          { title: "로퍼" },
          { title: "힐/펌프스" },
          { title: "샌들" },
          { title: "슬리퍼" },
          { title: "스니커즈" },
          { title: "신발 액세서리" },
        ]
      },
      {
        title: "액세서리",
        children: [
          { title: "파우치" },
          { title: "넥타이" },
          { title: "해외브랜드" },
          { title: "EXCLUSIVE" },
          { title: "지갑/카드케이스" },
          { title: "시계" },
          { title: "모자" },
          { title: "아이웨어" },
          { title: "벨트" },
          { title: "양말" },
          { title: "스카프/카라" },
          { title: "장갑" },
          { title: "헤어 액세서리" },
          { title: "기타 액세서리" },
        ]
      },
    ]
  },

  {
    title: "man",
    children: [
      {
        title: "의류",
        children: [
          { title: "EXCLUSIVE" },
          { title: "언더웨어" },
          { title: "해외브랜드" },
          { title: "아우터" },
          { title: "상의" },
          { title: "하의" },
          { title: "홈웨어" },
          { title: "셋업" },
          { title: "아우터" },
          { title: "이너웨어" },
          { title: "니트웨어" },
        ]
      },
      {
        title: "가방",
        children: [
          { title: "EXCLUSIVE" },
          { title: "보스턴백" },
          { title: "캐리어,여행가방" },
          { title: "해외브랜드" },
          { title: "크로스백" },
          { title: "토트백" },
          { title: "웨이스트백" },
          { title: "백팩" },
          { title: "숄더백" },
          { title: "랩탑백" },
          { title: "에코,캔버스백" },
          { title: "클러치" },
          { title: "기타 가방" },
          { title: "가방 액세서리" },
        ]
      },
      {
        title: "신발",
        children: [
          { title: "EXCLUSIVE" },
          { title: "기능화" },
          { title: "해외브랜드" },
          { title: "스니커즈" },
          { title: "구두" },
          { title: "부츠" },
          { title: "로퍼" },
          { title: "샌들" },
          { title: "신발 액세서리" },
          { title: "슬리퍼" },
        ]
      },
      {
        title: "액세서리",
        children: [
          { title: "EXCLUSIVE" },
          { title: "파우치" },
          { title: "지갑,카드케이스" },
          { title: "해외브랜드" },
          { title: "시계" },
          { title: "아이웨어" },
          { title: "모자" },
          { title: "넥타이" },
          { title: "벨트" },
          { title: "양말" },
          { title: "스카프" },
          { title: "머플러" },
          { title: "장갑" },
          { title: "주얼리" },
          { title: "기타 액세서리" },
        ]
      },
    ]
  },

  {
    title: "interior",
    children: [
      {
        title: "가구,인테리어",
        children: [
          { title: "EXCLUSIVE" },
          { title: "해외브랜드" },
          { title: "홈패브릭" },
          { title: "가구" },
          { title: "홈데코" },
          { title: "침구" },
          { title: "조명" },
          { title: "아트,디자인" },
          { title: "스테이셔너리" },
          { title: "홈프레그런스" },
          { title: "가드닝" },
          { title: "책,음반" },
          { title: "선물하기" },
        ]
      },
    ]
  },

    {
    title: "kitchen",
    children: [
      {
        title: "주방,생활",
        children: [
          { title: "EXCLUSIVE" },
          { title: "저장용기,도시락" },
          { title: "냄비,팬,솥" },
          { title: "조리도구" },
          { title: "컵,잔,텀블러" },
          { title: "그릇,커트러리" },
          { title: "테이블데코" },
          { title: "주방잡화" },
          { title: "주방수납,정리" },
          { title: "생활수납,정리" },
          { title: "생필품" },
          { title: "욕실" },
          { title: "홈프래그런스" },
          { title: "기타생활" },
          { title: "반려동물" },
          { title: "선물하기" },
        ]
      },
    ]
  },

    {
    title: "electronics",
    children: [
      {
        title: "가전",
        children: [
          { title: "영상가전" },
          { title: "주방가전" },
          { title: "세탁기,건조기" },
          { title: "청소기" },
          { title: "생활가전" },
          { title: "계절가전" },
          { title: "이미용가전" },
          { title: "건강가전" },
          { title: "리퍼브" },
        ]
      },
    ]
  },

    {
    title: "digital",
    children: [
      {
        title: "컴퓨터,디지털",
        children: [
          { title: "저장장치" },
          { title: "음향기기" },
          { title: "모바일,웨어러블" },
          { title: "모바일 액세서리" },
          { title: "PC,노트북" },
          { title: "게임" },
          { title: "사진" },
          { title: "자동차용품,장난감" },
          { title: "스마트모빌리티" },
        ]
      },
    ]
  },

    {
    title: "beauty",
    children: [
      {
        title: "뷰티",
        children: [
          { title: "선물세트" },
          { title: "스킨케어" },
          { title: "선케어" },
          { title: "해외브랜드" },
          { title: "EXCLUSIVE" },
          { title: "헤어케어" },
          { title: "메이크업" },
          { title: "바디케어" },
          { title: "프래그런스" },
          { title: "뷰티소품/기기" },
          { title: "맨즈뷰티" },
          { title: "건강식품" },
        ]
      },
    ]
  },

    {
    title: "food",
    children: [
      {
        title: "푸드",
        children: [
          { title: "이너뷰티,식단관리" },
          { title: "선물세트" },
          { title: "잼, 꿀, 오일" },
          { title: "음료" },
          { title: "가공식품" },
          { title: "신선,냉장" },
        ]
      },
    ]
  },

    {
    title: "leisure",
    children: [
      {
        title: "레저",
        children: [
          { title: "캠핑" },
          { title: "요가,필라테스" },
          { title: "등산,하이킹" },
          { title: "골프" },
          { title: "수영" },
          { title: "러닝" },
          { title: "피트니스" },
          { title: "여행" },
          { title: "테니스" },
          { title: "자전거" },
        ]
      },
    ]
  },

    {
    title: "kids",
    children: [
      {
        title: "유아,아동",
        children: [
          { title: "유아 용품" },
          { title: "수유 용품" },
          { title: "유아식, 분유" },
          { title: "외출 용품" },
          { title: "임산부,태교용품" },
          { title: "베이비" },
          { title: "남아 의류" },
          { title: "여아 의류" },
          { title: "모자" },
          { title: "가방" },
          { title: "잡화" },
          { title: "신발" },
          { title: "유아동 식기" },
          { title: "유아동 침구" },
          { title: "유아동 가구" },
          { title: "토이,교육" },
          { title: "선물하기" },
        ]
      },
    ]
  },

    {
    title: "culture",
    children: [
      {
        title: "컬처",
        children: [
          { title: "티켓" },
        ]
      },
    ]
  },
];


// 최상위 메뉴 컴포넌트
const Header =()=> {

  const gnbRef = useRef(null);
  const [padding, setPadding] = useState(8);

  useEffect(() => {
    const updatePadding = () => {
      if (!gnbRef.current) return;
      const gnbWidth = gnbRef.current.offsetWidth;
      const menuCount = menu.length;

      // 각 메뉴 텍스트의 실제 너비 합산
      const totalTextWidth = 879;

      // 남은 공간을 메뉴 개수로 나누어 좌우 패딩 산출
      const remain = gnbWidth - totalTextWidth;
      const minPadding = 0;
      const maxPadding = 128;
      const calculatedPadding = Math.max(
        minPadding,
        Math.min(remain / (menuCount * 2), maxPadding)
      );
      setPadding(calculatedPadding);
    };

    updatePadding();
    window.addEventListener("resize", updatePadding);
    return () => window.removeEventListener("resize", updatePadding);
  }, []);

  // gnb hover 관련
  const [isHovered, setIsHovered] = useState(false);

  //dim 영역 관련
  const [showDim, setShowDim] = useState(false);

  //mgnb 나타나기 관련 열린 메뉴의 경로를 배열로 관리 (예: [0, 1, 2])
  const [openPath, setOpenPath] = useState([]);

  return (
    <header>
      <div className="headerbox">
        {isHovered && <div className="gnbbackground1"></div>}
        {showDim && 
        <div className="dim">
            <div 
            className="close"
            onClick= {()=> setShowDim(false)}
            ></div>
            <div className="inner">
              <h2>29CM</h2>
              <div className="searchbox">
                <input type="text" placeholder="검색어를 입력하세요"/>
                <button type="button"><img src="search.png" alt="검색" /></button>
              </div>

              <ul className="mgnb">
                  {menu.map((item, idx) => (
                    <Headermgnb 
                      key={idx} 
                      title={item.title}
                      item={item}
                      path={[idx]}
                      openPath={openPath}
                      setOpenPath={setOpenPath}
                    />
                  ))}
              </ul>
            </div>
        </div>}

        <div className="inner">
          <div className="mainbox">
            <h1><a href="#">29CM</a></h1>
            <div className="topmenubox">
              <div className="border"></div>
              <ul className="topmenu">
                <li>
                  <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Special-Order</NavLink>
                </li>
                <li>
                  <NavLink to="/sub1" end className={({ isActive }) => isActive ? "active" : ""}>Showcase</NavLink>
                </li>
                <li>
                  <NavLink to="/sub2" end className={({ isActive }) => isActive ? "active" : ""}>29Magazine</NavLink>
                </li>
              </ul>
              <ul className="utill">
                <li><a href="#"><img src="./search.png" alt="검색" onClick= {()=> setShowDim(true)}/></a></li>
                <li><a href="#"><img src="./my.png" alt="마이페이지" /></a></li>
                <li><a href="#"><img src="./cart.png" alt="장바구니" /></a></li>
              </ul>
            </div>
            <div className="ham" onClick= {()=> setShowDim(true)}></div>
          </div>
          <nav>
            <ul 
            className="gnb"
            ref={gnbRef}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
              {menu.map((item, idx) => (
                <Headergnb key={idx} title={item.title} item={item} padding={padding}
                />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header
import { useState } from "react"
import TviewIcon1 from "../assets/Tview/tviewicon1.png"
import TviewIcon2 from "../assets/Tview/tviewicon2.png"
import TviewIcon3 from "../assets/Tview/tviewicon3.png"
import TviewIcon4 from "../assets/Tview/tviewicon4.png"
import TviewIcon5 from "../assets/Tview/tviewicon5.png"
import TviewIcon6 from "../assets/Tview/tviewicon6.png"
import TviewIcon7 from "../assets/Tview/tviewicon7.png"
import TviewIcon8 from "../assets/Tview/tviewicon8.png"
import TviewImg1 from "../assets/Tview/tviewimg1.png"
import TviewImg2 from "../assets/Tview/tviewimg2.png"
import TviewImg3 from "../assets/Tview/tviewimg3.png"
import TviewImg4 from "../assets/Tview/tviewimg4.png"
import TviewImg5 from "../assets/Tview/tviewimg5.png"
import TviewImg6 from "../assets/Tview/tviewimg6.png"
import TviewImg7 from "../assets/Tview/tviewimg7.png"
import TviewImg8 from "../assets/Tview/tviewimg8.png"
import TviewImg9 from "../assets/Tview/tviewimg9.png"
import TviewImg10 from "../assets/Tview/tviewimg10.png"
import TviewImg11 from "../assets/Tview/tviewimg11.png"
import TviewImg12 from "../assets/Tview/tviewimg12.png"
import TviewImg13 from "../assets/Tview/tviewimg13.png"
import TviewImg14 from "../assets/Tview/tviewimg14.png"
import TviewImg15 from "../assets/Tview/tviewimg15.png"


const Tview =()=> {
  const [showTab, setShowTab] = useState(0);

  return(
    <>
    <section id="tview">
      <div className="inner">
        <ul className="viewtab">
          <li
          className={showTab === 0 ? "active" : ""}
          onClick={()=> setShowTab (0)}
          >
            <img src={TviewIcon1} alt="apprel" />
            <p>Apparel</p>
          </li>
          <li
          className={showTab === 1 ? "active" : ""}
          onClick={()=> setShowTab (1)}
          >
            <img src={TviewIcon2} alt="beauty" />
            <p>Beauty</p>
          </li>
          <li
          className={showTab === 2 ? "active" : ""}
          onClick={()=> setShowTab (2)}
          >
            <img src={TviewIcon3} alt="kitchen" />
            <p>Kitchen</p>
          </li>
          <li
          className={showTab === 3 ? "active" : ""}
          onClick={()=> setShowTab (3)}
          >
            <img src={TviewIcon4} alt="digital" />
            <p>Digital</p>
          </li>
          <li
          className={showTab === 4 ? "active" : ""}
          onClick={()=> setShowTab (4)}
          >
            <img src={TviewIcon5} alt="food" />
            <p>Food</p>
          </li>
          <li
          className={showTab === 5 ? "active" : ""}
          onClick={()=> setShowTab (5)}
          >
            <img src={TviewIcon6} alt="leisure" />
            <p>Leisure</p>
          </li>
          <li
          className={showTab === 6 ? "active" : ""}
          onClick={()=> setShowTab (6)}
          >
            <img src={TviewIcon7} alt="kids" />
            <p>Kids</p>
          </li>
          <li
          className={showTab === 7 ? "active" : ""}
          onClick={()=> setShowTab (7)}
          >
            <img src={TviewIcon8} alt="eco" />
            <p>Eco</p>
          </li>
        </ul>

        <ul className="tviewcont">
          {showTab === 0 && <li>
            <div className="cont1">
              <a href="#">
                <img src={TviewImg1} alt="cont1" />
                <div className="txtbox">
                  <h4>여름의 찰나 미스테리 디렉션</h4>
                  <p className="txt">미스테리 디렉션의 첫 여름 컬렉션이 시작됐어요. 이 계절, 당신만의 시선으로 새로운 장면을 만들어보세요. ‘A Mystery Direction’은 신비한 방향성을 뜻합니다. 틀에 박히지 않고, 형식에 얽매이지 않는 우리만의 방향성을 담아, 여성의 아름다움을 트렌디하게 일상에 녹여냅니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div> 
              </a>
            </div>
            <div className="cont2">
              <a href="#">
                <img src={TviewImg2} alt="cont2" />
                <div className="txtbox">
                  <h4>가볍고 편안하게 노스페이스</h4>
                  <p className="txt">노스페이스의 자연은 인간이 탐험을 통해 다가가는 공존의 공간입니다.   노스페이스의 자연은 혹독한 히말라야에서부터 우리가 쉽게 마주치는 산, 들, 바다, 그리고 빌딩과 자동차로 둘러싸인 도시까지도 아우릅니다.  노스페이스의 자연은 인간이 더불어 살아가는 공간이며, 정복하거나 도전하는 대상이 아니라, 탐험을 통해 본성에 다가가는 공존의 공간입니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>  
              </a>
            </div>
            <div className="cont3">
              <a href="#">
                <img src={TviewImg3} alt="cont3" />
                <div className="txtbox">
                  <h4>화이트로 완성한 클래식 조스라운지</h4>
                  <p className="txt">화이트, 테리, 클래식의 실루엣과 디테일을 깊이 있게 즐겨보세요. 시간이 지나도 변하지 않는 멋을 담았습니다. 조스라운지는 편안한 공간에서 진정으로 좋아하는 방식으로 시간을 보내는 것이 삶에서 가장 중요한 것이고, 무엇이 이를 가능케 할지를 고민하는 것에서 모든 여정을 시작합니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>
              </a>
            </div>
          </li>}
          {showTab === 1 && <li>
            <div className="cont1">
              <a href="#">
                <img src={TviewImg4} alt="cont1" />
                <div className="txtbox">
                  <h4>더 새로워진 100% PDRN 키스</h4>
                  <p className="txt">NEW LOOK, NEW POSSIBILITY. 새로운 룩, 새로운 가능성. KEYTH 키스는 단순한 외모를 위한 뷰티 아이템을 넘어 잠재 된 가능성을 열어주는 열쇠를 상징 합니다. 프래그런스를 넘어 메이크업, 스킨케어 까지. 숨겨진 당신의 매력을 KEYTH 키스와 함께 열어 보세요.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div> 
              </a>
            </div>
            <div className="cont2">
              <a href="#">
                <img src={TviewImg5} alt="cont2" />
                <div className="txtbox">
                  <h4>POPPING with PINK DOPAMINE</h4>
                  <p className="txt">일상 속의 새로운 뷰티 루틴을 쉽고 빠르게 제시하여 원하는 판타지를 자유롭게 표현하도록 돕는 이사배의 Co-Creative Beauty Brand 입니다. 투슬래시포와 함께 매일 새롭게 펼쳐지는 다양한 모습으로의 여정을 마음껏 즐겨보세요!
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>  
              </a>
            </div>
            <div className="cont3">
              <a href="#">
                <img src={TviewImg6} alt="cont3" />
                <div className="txtbox">
                  <h4>새로운 헤어 에센스 딥퍼랑스</h4>
                  <p className="txt">딥퍼랑스는 Deep(깊다)+ Difference(다르다)의 합성어로 깊이가 다른 프리미엄 브랜드란 의미를 갖습니다. 타협하지 않는 방법으로 품질 코스트(Quality Cost)를 비용으로 보지 않고 과감한 투자로 생각하여 최고의 제품으로 만든다는 것이 딥퍼랑스의 브랜드 철학입니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>
              </a>
            </div>
          </li>}
          {showTab === 2 && <li>
            <div className="cont1">
              <a href="#">
                <img src={TviewImg7} alt="cont1" />
                <div className="txtbox">
                  <h4>독특한 유러피안 가구 드비저리</h4>
                  <p className="txt">프랑스에서 온 하이엔드 가구, 드 비저리. 독창적이면서도 과감한 소재의 믹스, 그 안에 최상의 마감재를 결합한 것이 특징입니다. 루이비통의 프로토타이퍼가 메인 디자이너로 모든 제품에 최상급의 소가죽인 Full-grain leather만을 사용하여 수십 년 동안 최고의 제품만을 만든다는 브랜드 철학을 쌓아왔습니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div> 
              </a>
            </div>
            <div className="cont2">
              <a href="#">
                <img src={TviewImg8} alt="cont2" />
                <div className="txtbox">
                  <h4>한국의 헤리티지를 재해석하는 헤리터</h4>
                  <p className="txt">한국의 헤리티지를 재해석하여 현대 주방에 맞게 제안하는 키친웨어 브랜드입니다. 앞선 세대가 남긴 지혜를 위해 일생을 바쳐온 장인들과 함께합니다. 우리 문화의 가치를 이어감에 의의를 두고, 보전이 아닌 다음을 위한 발전된 가치를 지향합니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>  
              </a>
            </div>
            <div className="cont3">
              <a href="#">
                <img src={TviewImg9} alt="cont3" />
                <div className="txtbox">
                  <h4>여름의 클래식 베뉴엣</h4>
                  <p className="txt">정해진 길 없이 그저 지금의 나로 존재하는 시간. 베뉴엣과 함께 어디에도 얽매이지 않는 계절을 만끽해 보세요. BENUET은 클래식한 디자인과 섬세한 실루엣으로 매일 함께할 수 있는 어반 캐주얼룩을 제안합니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>
              </a>
            </div>  
          </li>}
          {showTab === 3 && <li>
            <div className="cont1">
              <a href="#">
                <img src={TviewImg10} alt="cont1" />
                <div className="txtbox">
                  <h4>숨 쉬듯 흐르는 여름 프렙포더</h4>
                  <p className="txt">고요한 실루엣으로 완성한 프렙포더의 여름 발매 소식을 전해요. 형태에 고요함을 더했을 때, 숨 쉬듯 흐르는 여름의 감성이 전해집니다. 프렙포더는 자신만의 우아한 질서를 탐미하는 이들을 위합니다. 가리고 덧입히는 방식 대신 본질을 경유하는 심도 있는 디테일은 간결한 실루엣과 명료한 구조속 리듬과 조화를 이루며 유기적인 컬렉션을 구축합니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div> 
              </a>
            </div>
            <div className="cont2">
              <a href="#">
                <img src={TviewImg11} alt="cont2" />
                <div className="txtbox">
                  <h4>여름날의 여유로운 산책 르에떼</h4>
                  <p className="txt">우리는 인생에 너무 많은 물건을 소유하지 않기 위해 적지만 더 나은 것을 선택합니다. 간결한 디자인, 엄선된 소재, 높은 퀄리티를 기반으로 매 시즌 지속 가능한 아이템을 선보입니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>  
              </a>
            </div>
            <div className="cont3">
              <a href="#">
                <img src={TviewImg12} alt="cont3" />
                <div className="txtbox">
                  <h4>불완전함 속의 조화 고낙</h4>
                  <p className="txt">고낙은 선과 선이 만나는 입체에서 영감을 받아 고낙만의 특별한 형태로 해석합니다. 낯선 것이 모여 만드는 조화로움. 좋은 소재와 패턴. 그리고 타협하지 않는 정성과 세심함으로 옷을 만듭니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>
              </a>
            </div>
          </li>}
          {showTab === 4 && <li>
            <div className="cont1">
              <a href="#">
                <img src={TviewImg13} alt="cont1" />
                <div className="txtbox">
                  <h4>탄력 있는 피부 닥터지</h4>
                  <p className="txt">광채와 탄력을 빈틈없이 채우는 닥터지의 새로운 블랙 스네일 라인을 만나보세요. No.1 더마코스메틱 브랜드 Dr.G 우리는 건강한 피부로 아름다운 삶을 선사합니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div> 
              </a>
            </div>
            <div className="cont2">
              <a href="#">
                <img src={TviewImg14} alt="cont2" />
                <div className="txtbox">
                  <h4>여름의 소리가 들려오는 세아랑</h4>
                  <p className="txt">세아랑은 소재와 편안한 착용감을 최우선으로 생각하며  세아랑의 옷을 입는 모든 아이들 그리고 엄마아빠에게  편안함, 행복함을 선물하기위해 'Always be with you' 늘 고객과 함께하겠다는 가치를 제품에 담고자 끊임없이 노력하고 있습니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>  
              </a>
            </div>
            <div className="cont3">
              <a href="#">
                <img src={TviewImg15} alt="cont3" />
                <div className="txtbox">
                  <h4>건강한 피부의 핵심 유리아쥬</h4>
                  <p className="txt">Uriage Dermatological Laboratories는 200년의 노하우를 바탕으로 1992년부터 온천수 기반의 혁신적인 피부 미용 치료법을 개발해 왔습니다.유리아쥬가 민감성 피부를 위해 개발한 최적의 솔루션은 피부과 전문의에 의해 처방되며,전세계 약사들과의 협력을 바탕으로 민감성 피부의 삶의 질을 향상시킬 수 있는 효과적인 솔루션 개발에 집중합니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>
              </a>
            </div>
          </li>}
          {showTab === 5 && <li>
            <div className="cont1">
              <a href="#">
                <img src={TviewImg1} alt="cont1" />
                <div className="txtbox">
                  <h4>여름의 찰나 미스테리 디렉션</h4>
                  <p className="txt">미스테리 디렉션의 첫 여름 컬렉션이 시작됐어요. 이 계절, 당신만의 시선으로 새로운 장면을 만들어보세요. ‘A Mystery Direction’은 신비한 방향성을 뜻합니다. 틀에 박히지 않고, 형식에 얽매이지 않는 우리만의 방향성을 담아, 여성의 아름다움을 트렌디하게 일상에 녹여냅니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div> 
              </a>
            </div>
            <div className="cont2">
              <a href="#">
                <img src={TviewImg2} alt="cont2" />
                <div className="txtbox">
                  <h4>가볍고 편안하게 노스페이스</h4>
                  <p className="txt">노스페이스의 자연은 인간이 탐험을 통해 다가가는 공존의 공간입니다.   노스페이스의 자연은 혹독한 히말라야에서부터 우리가 쉽게 마주치는 산, 들, 바다, 그리고 빌딩과 자동차로 둘러싸인 도시까지도 아우릅니다.  노스페이스의 자연은 인간이 더불어 살아가는 공간이며, 정복하거나 도전하는 대상이 아니라, 탐험을 통해 본성에 다가가는 공존의 공간입니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>  
              </a>
            </div>
            <div className="cont3">
              <a href="#">
                <img src={TviewImg3} alt="cont3" />
                <div className="txtbox">
                  <h4>화이트로 완성한 클래식 조스라운지</h4>
                  <p className="txt">화이트, 테리, 클래식의 실루엣과 디테일을 깊이 있게 즐겨보세요. 시간이 지나도 변하지 않는 멋을 담았습니다. 조스라운지는 편안한 공간에서 진정으로 좋아하는 방식으로 시간을 보내는 것이 삶에서 가장 중요한 것이고, 무엇이 이를 가능케 할지를 고민하는 것에서 모든 여정을 시작합니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>
              </a>
            </div>
          </li>}
          {showTab === 6 && <li>
            <div className="cont1">
              <a href="#">
                <img src={TviewImg7} alt="cont1" />
                <div className="txtbox">
                  <h4>독특한 유러피안 가구 드비저리</h4>
                  <p className="txt">프랑스에서 온 하이엔드 가구, 드 비저리. 독창적이면서도 과감한 소재의 믹스, 그 안에 최상의 마감재를 결합한 것이 특징입니다. 루이비통의 프로토타이퍼가 메인 디자이너로 모든 제품에 최상급의 소가죽인 Full-grain leather만을 사용하여 수십 년 동안 최고의 제품만을 만든다는 브랜드 철학을 쌓아왔습니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div> 
              </a>
            </div>
            <div className="cont2">
              <a href="#">
                <img src={TviewImg8} alt="cont2" />
                <div className="txtbox">
                  <h4>한국의 헤리티지를 재해석하는 헤리터</h4>
                  <p className="txt">한국의 헤리티지를 재해석하여 현대 주방에 맞게 제안하는 키친웨어 브랜드입니다. 앞선 세대가 남긴 지혜를 위해 일생을 바쳐온 장인들과 함께합니다. 우리 문화의 가치를 이어감에 의의를 두고, 보전이 아닌 다음을 위한 발전된 가치를 지향합니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>  
              </a>
            </div>
            <div className="cont3">
              <a href="#">
                <img src={TviewImg9} alt="cont3" />
                <div className="txtbox">
                  <h4>여름의 클래식 베뉴엣</h4>
                  <p className="txt">정해진 길 없이 그저 지금의 나로 존재하는 시간. 베뉴엣과 함께 어디에도 얽매이지 않는 계절을 만끽해 보세요. BENUET은 클래식한 디자인과 섬세한 실루엣으로 매일 함께할 수 있는 어반 캐주얼룩을 제안합니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>
              </a>
            </div>  
          </li>}
          {showTab === 7 && <li>
            <div className="cont1">
              <a href="#">
                <img src={TviewImg13} alt="cont1" />
                <div className="txtbox">
                  <h4>탄력 있는 피부 닥터지</h4>
                  <p className="txt">광채와 탄력을 빈틈없이 채우는 닥터지의 새로운 블랙 스네일 라인을 만나보세요. No.1 더마코스메틱 브랜드 Dr.G 우리는 건강한 피부로 아름다운 삶을 선사합니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div> 
              </a>
            </div>
            <div className="cont2">
              <a href="#">
                <img src={TviewImg14} alt="cont2" />
                <div className="txtbox">
                  <h4>여름의 소리가 들려오는 세아랑</h4>
                  <p className="txt">세아랑은 소재와 편안한 착용감을 최우선으로 생각하며  세아랑의 옷을 입는 모든 아이들 그리고 엄마아빠에게  편안함, 행복함을 선물하기위해 'Always be with you' 늘 고객과 함께하겠다는 가치를 제품에 담고자 끊임없이 노력하고 있습니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>  
              </a>
            </div>
            <div className="cont3">
              <a href="#">
                <img src={TviewImg15} alt="cont3" />
                <div className="txtbox">
                  <h4>건강한 피부의 핵심 유리아쥬</h4>
                  <p className="txt">Uriage Dermatological Laboratories는 200년의 노하우를 바탕으로 1992년부터 온천수 기반의 혁신적인 피부 미용 치료법을 개발해 왔습니다.유리아쥬가 민감성 피부를 위해 개발한 최적의 솔루션은 피부과 전문의에 의해 처방되며,전세계 약사들과의 협력을 바탕으로 민감성 피부의 삶의 질을 향상시킬 수 있는 효과적인 솔루션 개발에 집중합니다.
                  </p>
                  <p className="date">2025.06.12 ~ 06.25</p>
                </div>
              </a>
            </div>
          </li>}
        </ul>
      </div>
    </section>
    </>
  )
}
export default Tview
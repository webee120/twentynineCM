import { useState } from "react"
import Sale1 from "../assets/sale/sale1.png"
import Sale11 from "../assets/sale/sale1_1.png"
import Sale12 from "../assets/sale/sale1_2.png"
import Sale13 from "../assets/sale/sale1_3.png"
import Sale2 from "../assets/sale/sale2.png"
import Sale21 from "../assets/sale/sale2_1.png"
import Sale22 from "../assets/sale/sale2_2.png"
import Sale23 from "../assets/sale/sale2_3.png"

const Sale =()=>{
  const [showCont, setShowCont] = useState(0);
  const [showCont2, setShowCont2] = useState(0);

  return(
    <>
      <section id="sale">
        <div className="titbox">
          <h3 className="tit">Brand <span>Sale</span></h3>
          <p>29CM에서만 만나볼 수 있는 제품을 합리적인 가격으로 소개합니다</p>
        </div>
        
        <div className="cont1">
          <div className="tabbox">
            <ul className="tablist">
              <li 
                className={showCont === 0 ? "active":""}
                onClick={() => setShowCont (0)}
              >Unit 1
              </li>
              <li
              className={showCont === 1 ? "active":""}
              onClick={() => setShowCont (1)}
              >Unit 2
              </li>
              <li
              className={showCont === 2 ? "active":""}
              onClick={() => setShowCont (2)}
              >Unit 3
              </li>
              <li
              className={showCont === 3 ? "active":""}
              onClick={() => setShowCont (3)}
              >Unit 4
              </li>
            </ul>
            <ul className="tabcont">
              {showCont === 0 && <li><img src={Sale1} alt="스윔웨어1" /></li>}
              {showCont === 1 && <li><img src={Sale11} alt="스윔웨어2" /></li>}
              {showCont === 2 && <li><img src={Sale12} alt="스윔웨어3" /></li>}
              {showCont === 3 && <li><img src={Sale13} alt="스윔웨어4" /></li>}
            </ul>
          </div>{/* .tabbox */}
          <div className="txtbox">
            <h4>스임웨어와 함께 여름준비</h4>
            <p>탄력감이 뛰어난 RIB 골지 소재로 제작된 스윔웨어 입니다.
               앞중심 미니 로즈 장식과 뒤판에 셀리테일즈 로고로 포인트를 주었으며,
               톡톡한 컬러감으로 러블리한 무드를 더하였습니다.
               전체적으로 심플한 디자인으로,
               바디수트와 같이 비치룩으로도 활용 가능한 아이템입니다.
            </p>
            <a href="#" className="more">View More</a>
          </div>
        </div>{/* cont1 */}

        <div className="cont2box">
          <div className="cont2">
            <div className="tabbox">
              <ul className="tablist">
                <li 
                  className={showCont2 === 0 ? "active":""}
                  onClick={() => setShowCont2 (0)}
                >Unit 1
                </li>
                <li
                className={showCont2 === 1 ? "active":""}
                onClick={() => setShowCont2 (1)}
                >Unit 2
                </li>
                <li
                className={showCont2 === 2 ? "active":""}
                onClick={() => setShowCont2 (2)}
                >Unit 3
                </li>
                <li
                className={showCont2 === 3 ? "active":""}
                onClick={() => setShowCont2 (3)}
                >Unit 4
                </li>
              </ul>
              <ul className="tabcont">
                {showCont2 === 0 && <li><img src={Sale2} alt="스윔웨어1" /></li>}
                {showCont2 === 1 && <li><img src={Sale21} alt="스윔웨어2" /></li>}
                {showCont2 === 2 && <li><img src={Sale22} alt="스윔웨어3" /></li>}
                {showCont2 === 3 && <li><img src={Sale23} alt="스윔웨어4" /></li>}
              </ul>
            </div>{/* .tabbox */}
            <div className="txtbox">
              <h4>실용적인 디테일의 쇼츠</h4>
              <p>가벼운 물방울과 바람을 막아주는 방수처리된 원단은
                 자석이 부착된 버클을 사용하여 편리하게 착용 가능합니다.
                 지퍼가 부착되어 중요한 소지품 수납이 용이한 허벅지 후반부 주머니와 사이즈 조절이 가능한  허리벨트와 신축성있는 허리 벤드가 적용되었습니다.
              </p>
              <a href="#" className="more">View More</a>
            </div>
          </div>
          <a href="#" className="others">o<br />t<br />h<br />e<br />r<br />s <br />+</a>
        </div>
      </section>
    </>
  )
}

export default Sale
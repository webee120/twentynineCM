import Pt1 from "../assets/pt/pt1.png"
import Pt2 from "../assets/pt/pt2.png"
import Pt3 from "../assets/pt/pt3.png"
import Pt4 from "../assets/pt/pt4.png"
import Pt5 from "../assets/pt/pt5.png"
import Pt6 from "../assets/pt/pt6.png"
import Pt7 from "../assets/pt/pt7.png"
import Pt8 from "../assets/pt/pt8.png"
import Pt9 from "../assets/pt/pt9.png"
import Pt10 from "../assets/pt/pt10.png"
import Pt11 from "../assets/pt/pt11.png"

//이미지
const ptimg = [
 { id : 1, src: Pt1, alt: "pt1"},
 { id : 2, src: Pt2, alt: "pt2"},
 { id : 3, src: Pt3, alt: "pt3"},
 { id : 4, src: Pt4, alt: "pt4"},
 { id : 5, src: Pt5, alt: "pt5"},
 { id : 6, src: Pt6, alt: "pt6"},
 { id : 7, src: Pt7, alt: "pt7"},
 { id : 8, src: Pt8, alt: "pt8"},
 { id : 9, src: Pt9, alt: "pt9"},
 { id : 10, src: Pt10, alt: "pt10"},
 { id : 11, src: Pt11, alt: "pt11"},
 { id : 12, src: Pt11, alt: "pt11"},
]

//li 정의
function PtImgList({ src, alt }){
  return(
    <li>
      <img src={src} alt={alt} />
    </li>
  );
}

const Pt =()=>{
  return(
    <>
    <section id="pt">
      <div className="titbox">
        <h3 className="tit">Brand<span>PT</span></h3>
        <p>29CM는 입점 브랜드의 규모보다는 셀렉션의 경쟁력을 높이기 위한 방향으로 브랜드 포트폴리오를 운영하고 있습니다. 브랜드에게는 단기적인 매출을 넘어 장기적으로 브랜드 가치 극대화를 지향하는 차별화된 파트너십을 제공하고 있습니다.
        </p>
      </div>
      <div className="inner">
        <ul className="ptbox">
          {ptimg.map(image => (
            <PtImgList key={image.id} src={image.src} alt={image.alt}/>
          ))}
        </ul>
      </div>
    </section>
    </>
  )
}

export default Pt
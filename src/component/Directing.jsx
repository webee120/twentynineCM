import Directingbg from "../assets/directing/directingbg.png"
import Directingimg from "../assets/directing/directingimg.png"

const Directing =()=>{
  return(
    <>
    <section id="directing">
      <div className="imgbox">
        <img src={Directingimg} alt="디렉터" />
      </div>
      <div className="txtbox">
        <p className="date">2025 . 06</p>
        <h3>DIRECTING</h3>
        <h5>이지나</h5>
        <p>29CM는 독보적인 스토리텔링을 선보여왔습니다. 우리는 브랜드와 상품을 조금 더 다르게, 보다     가깝게 바라봅니다. 할인, 가격만을 이야기하기보다 상품이 고객의 일상을 어떻게 바꿀 수 있는지 고객의 상상력을 자극함으로써 브랜드 가치관을 자연스럽게 드러냅니다. 이는 고객이 브랜드를 인지하고 콘텐츠를 즐기며 상품 구매로 이어질 수 있는 강력한 선순환을 만들어냅니다.
        </p>
        <p className="plus"></p>
      </div>
    </section>
    </>
  )
}
export default Directing
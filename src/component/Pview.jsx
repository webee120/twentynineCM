const Pview =()=> {
  const items = [
    {
      img: "/pview/pview1.png", alt: "pview1",
      title: "추억과 흔적을 담는 향 메모파리",
      txt: "72%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview2.png", alt: "pview2",
      title: "이완의 시간 속에 회녹",
      txt: "아늑 뷰티, 세컨홈 증정 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview3.png", alt: "pview3",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview4.png", alt: "pview4",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview5.png", alt: "pview5",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview6.png", alt: "pview6",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview7.png", alt: "pview7",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview8.png", alt: "pview8",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview9.png", alt: "pview9",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview10.png", alt: "pview10",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview11.png", alt: "pview11",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview12.png", alt: "pview12",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview13.png", alt: "pview13",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview14.png", alt: "pview14",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview15.png", alt: "pview15",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview16.png", alt: "pview16",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview17.png", alt: "pview17",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    {
      img: "/pview/pview18.png", alt: "pview18",
      title: "조용하게 찬란하게 빛나는 바이위켄드",
      txt: "76%할인, 포토리뷰 이벤트",
      date: "2025.06.12 ~ 06.25"
    },
    // 필요하다면 더 추가
  ];

  return(
    <>
    <section id="pview">
      <h3 className="tit">Post<span>View</span></h3>
      <ul className="inner">
        {items.map((item, idx) => (
          <li key={idx}>
            <img src={item.img} alt={item.alt} />
            <div className="txtbox">
              <h3>{item.title}</h3>
              <p className="txt">{item.txt}</p>
              <p className="date">{item.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
    </>
  )
}

export default Pview
import { useState } from "react"


// 재귀적 메뉴 아이템 컴포넌트
function Headergnb({ item, depth = 0, title, padding,}) {
  const hasChildren = item.children && item.children.length > 0;

  //하위메뉴
  // const [gnbOpen, setGnbOpen] = useState(false);

  return (
    <>
      
      <li

      >
        <a 
          href="#"
          style={{ padding: `8px ${padding}px`, }}
        >
        {item.title}
        </a>
        
        {hasChildren &&(
          <ul> 
            {item.children.map((child, idx) => (
              <Headergnb key={idx} item={child} depth={depth + 1}/>
            ))}
          </ul>
        )}
      </li>
    
    </>
  );
}

export default Headergnb
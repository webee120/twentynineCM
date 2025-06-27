import { useState } from "react"

// 재귀적 메뉴 아이템 컴포넌트
function Headermgnb({ item, depth = 0, path = [], openPath = [], setOpenPath}) {
  const hasChildren = item.children && item.children.length > 0;

  // 메뉴가 열려 있는지 여부
  const isOpen = openPath.length >= path.length && 
                 openPath.slice(0, path.length).every((v, i) => v === path[i]);

  
  const handleClick = (e) => {
  e.stopPropagation();
  if (isOpen) {// 이미 열린 메뉴를 다시 클릭한 경우: 닫기
    setOpenPath(path.slice(0, -1)); // 현재 경로의 상위 경로로 이동 (예: [0,1] -> [0])
  } 
  else {// 닫힌 메뉴를 클릭한 경우: 열기
    setOpenPath(path); // 현재 경로로 설정 (예: [0] -> [0,1])
  }
};

  return (
    <>  
      <li
        onClick={handleClick}
      >
        <a href="#" className={isOpen ? "active" : ""}>{item.title}</a>
        
        {hasChildren &&(
          <ul style={{ display: isOpen ? "flex" : "none"}}>
            {item.children.map((child, idx) => (
              <Headermgnb 
                key={idx} 
                item={child} 
                depth={depth + 1}
                path={[...path, idx]}
                openPath={openPath}
                setOpenPath={setOpenPath}
              />
            ))}
          </ul>
        )}
      </li>
    
    </>
  );
}

export default Headermgnb
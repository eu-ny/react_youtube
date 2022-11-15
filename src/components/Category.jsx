import React from 'react'

import { categorides } from '../utils/contents'

// 02. 받아온 값을 불러온다!
const Category = ({ selectCategory, setSelectCategory }) => {
  return (
    <div>
      {categorides.map((category) => (
        <button
        // 데이터 중복이 없다면 key값으로 데이터명 사용 가능하며 클릭시 해당 데이터를 다시 저장시켜서 mainconts로 넘긴다.
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
        >
          <span>{category.icon}</span>
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  )
}

export default Category

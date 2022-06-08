import React,{useState} from 'react'

function Sample03(){
  const [btn,setBtn] = useState({count:0})
  return (
    <div>
      <h1> state 계산하기</h1>
      <p> sample:03 : {btn.count}</p>
      <button onClick = {click}>click</button>
    </div>
  )
  function click(){
    setBtn({count:btn.count+1})
  }
}
export default Sample03

// 금요일 -> app -> 기본 이용하기
//  data 이용하기


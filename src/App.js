import { atom,$, sharex} from "helux";
import React, { memo } from 'react'

const ctx = sharex({
  taskList:[
    { a: { a1: 1 }, b: 1 },
    { a: { a1: 2 }, b: 2 },
    { a: { a1: 3 }, b: 3},
  ]
}, 'test');


const changeOrder = (sourceIndex, destinationIndex) => ctx.setState((draft) => {
  const original = [...draft.taskList];
  const temp = original[sourceIndex];
  original[sourceIndex] = original[destinationIndex];
  original[destinationIndex] = temp;
  draft.taskList = original
})


/**
 * 新增数组项目
 * @param {*} index 
 * @returns 
 */
const changeAdd = (index) => {
  const original = [...ctx.state.taskList, { a: { a1: 4 }, b: 4}];
  console.log("test---", original)
  ctx.setState((draft) => void (draft.taskList = original))
};
export default function Demo() {
  return (
    <div>
      <h3>updated at {new Date().toLocaleString()}</h3>
      {
       ctx.state.taskList.map((item, index) => {
          console.log("item---", item)
          return (
            <User key={index} index={index} />
          )
        })
      }
      <button
        onClick={() => {
          ctx.setState((draft) => void(draft.taskList = []))
        }}
      >
        changeA1
      </button>
      <button onClick={() => { changeOrder(0,1)}}>change Order</button>
      <button onClick={changeAdd}>Add</button>
    </div>
  );
}

const User = memo((props) => {
  if(!props) return null
  const {index} = props;
  return (
    <div style={{ border: "1px solid green", padding: "6px", margin: "6px" }}>
       <h3>updated at {new Date().toLocaleString()}</h3>
       {$(() => {
        return (
          <div>
            <div>obj1.a.a1 {ctx.state.taskList[index]?.a?.a1}</div>
            <div>obj1.b {ctx.state.taskList[index]?.b}</div>
            <div>obj2.a.a1 {ctx.state.taskList[index]?.a?.a1}</div>
          </div>
        )
       })}
   
  </div>
  )
  })
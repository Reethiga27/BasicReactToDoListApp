import React from 'react'
import { FaTrashCan } from "react-icons/fa6";
const LineItem = ({item, handleCheck, handleDelete}) => {
  return (
    <li className="item" key={item.id}>
            <input type="checkbox" onChange={()=>handleCheck(item.id)} checked={item.checked}/>
            <label style={(item.checked)?{textDecoration:'line-through'}:null} onDoubleClick={()=>handleCheck(item.id)}>{item.item}</label>
            <FaTrashCan role="button" tabIndex="0" onClick={()=>handleDelete(item.id)}/>
    </li>
  )
}

export default LineItem
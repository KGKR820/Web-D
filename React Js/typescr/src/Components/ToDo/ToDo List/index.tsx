import React from 'react';
import "./style.css"
interface props{
  title ?:string;
}
const List : React.FC<props> = (prop)=>{
  return(
    <div>
    <li>{prop.title}</li>
    </div>
  )
};
export default List;
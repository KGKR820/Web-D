import React from 'react';
import List from './ToDo List/index'
import "./style.css"
const ToDo :React.FC = ()=>{
    return (
        <div className = "listContainer">
         <ol>
         <List title ="Eat"></List>
         <List title ="Sleep"></List>
         <List title ="Drink"></List>
         </ol>
        </div>
    )
}
export default ToDo;

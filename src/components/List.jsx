import React , {useState}  from "react";

export const List=({todo , dispatch})=>{
    
   return(
       <div>
            {todo.task}
            <button 
            onClick={()=> dispatch({type:"Toggle" , payload:{id:todo.id}})}>
            {todo.status ? "Complete" : "Incomplete"}
            </button>
      </div>
   ) 

}
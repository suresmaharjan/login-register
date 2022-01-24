import React from "react";
import {useReducer , useState} from "react";
import {List} from "./List";

import {
    Grid,
    TextField
    } from "@mui/material";


export const Test=()=>{
    
   function reducer(todos , action){
       switch(action.type){
           case "Add Todo":
            return  [...todos , {
                id:Date.now(),
                task:action.payload.task,
                status:false
                   }]

            case "Toggle":
            return todos.map(todo=>{
                if(todo.id === action.payload.id){
                    return {...todo , status :!todo.status}
                }
                return todo;
            })
       }
   }

     const [todos , dispatch]=useReducer(reducer ,[])
     const [task , setTask]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch({type:"Add Todo" , payload:{task:task}})
        setTask("")
        console.log(todos)
    }
    return (
        <section >
                <Grid container sx={{paddingTop:"100px"}}>
                    <Grid item xs={12}>
                        <form onSubmit={handleSubmit}>
                            <TextField 
                                label="Task"
                                name="task"
                                value={task}
                                onChange={(e)=>setTask(e.target.value)}
                                required
                                />
                        </form>

                        {todos.map(todo=>{
                            return <List  key={todo.id} todo={todo} dispatch={dispatch} />
                            }
                        )}
                       
                    </Grid>
                </Grid>
        </section>
    )
}
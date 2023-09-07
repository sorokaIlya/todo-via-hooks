import { useMemo, useState } from "react";
import { TodoItem } from "../types/types";
export type OrderTodo = 'all'| 'active'| 'completed';
export const useTodoSource = () => {
   const [todos,setTodos] = useState<TodoItem[]>([]);
   const [orderBy,setOrderBy] = useState<OrderTodo>('all');

   const addTodo = (title:string) => {
    const newTodo = {body:title, id:Date.now().toString(),isCompleted:false};
        todos.push(newTodo);
        setTodos([...todos]);
    }
    const setOrder = (sorted:OrderTodo)=>{
        setOrderBy(sorted);
    }

    const toggleTodo = (todoId:string) => {
        const todo = todos.find(item=>item.id === todoId);
        if(todo){
            todo.isCompleted = !todo.isCompleted;
        }
        setTodos([...todos]);
    }
    const removeTodo = (todoId:string) => {
        const todoIndex = todos.findIndex(item=>item.id === todoId);
        if(todoIndex !== -1){
            todos.splice(todoIndex,1);
        }
        setTodos([...todos]);
    } 
    const clearCompleted = () =>{
        const clearTodos = todos.filter(item => item.isCompleted);
        setTodos(clearTodos);
    }

    const getTodos = useMemo(()=>{
        switch(orderBy){
            case 'all':
                return todos;
            case 'active':
                return todos.filter(item=>!item.isCompleted);
             case 'completed':
                return todos.filter(item=>item.isCompleted);  
        }
        return orderBy as never
    } ,[todos, orderBy]);   

   return {
        orderBy,
        getTodos,
        addTodo,
        toggleTodo,
        removeTodo,
        clearCompleted,
        setOrder
   }
}

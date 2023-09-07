import { ReactNode, createContext, useContext } from "react";
import { useTodoSource } from "../todo-store/use-todo-source";

const TodoContext = createContext<ReturnType<typeof useTodoSource>|undefined>(undefined);

export const useTodoStore = ()=>{
    const store = useContext(TodoContext);
    if(store === undefined){
        throw new Error('useTodoStore must be used within TodoContextProvider')
    }
    return {
        todoStore: store
    }
};

export const TodoContextProvider = ({children}:{children:ReactNode})=>{
    return (<TodoContext.Provider value={useTodoSource()}>
        {children}
    </TodoContext.Provider>)
}
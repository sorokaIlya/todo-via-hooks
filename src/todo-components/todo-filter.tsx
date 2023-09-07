import { Button } from "antd"
import { useTodoStore } from "../provider/todo-provider"

export const TodoFiler = ()=>{
    const {todoStore} = useTodoStore();

    return <div style={{display:'flex',gap:'15px',marginBottom:15}}>
        {['all','active','completed'].map(sorted=>(
            <Button className={sorted === todoStore.orderBy ? 'active' : ''} key={sorted} onClick={()=>todoStore.setOrder(sorted)}>{sorted}</Button>)
            )}
          
    </div>
}
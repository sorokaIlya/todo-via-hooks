import type { TodoItem as TodoItemType } from "../types/types"
import { useTodoStore } from "../provider/todo-provider"
import { Button, Checkbox, Col, Row } from "antd";
import { CSSProperties } from "react";

const todoContainer:CSSProperties = {
    border:'1px solid #91d5ff',
    marginBottom:10,
    padding:10,
    alignItems:'center',
    justifyContent:'space-betweens'
}

const todoStyle:CSSProperties = {
    display:'flex',
    padding:10,
    verticalAlign:'center'
}

export const TodoItem = ({todoItem}:{todoItem:TodoItemType})=>{
    const {todoStore} = useTodoStore();
    return (<Row style={todoContainer} gutter={8}>
        <Col span={16}>
        <Checkbox
            style={todoStyle}
            type="checkbox" 
            checked={todoItem.isCompleted}
            onChange={()=>todoStore.toggleTodo(todoItem.id)}
         >
            <div style={{
            textDecoration:todoItem.isCompleted ? 'line-through'  : 'none'
         }}>{todoItem.body}</div>
         </Checkbox>
         </Col>
         <Col span={8}>
            <Button onClick={()=>todoStore.removeTodo(todoItem.id)}>&#x2715;</Button>
         </Col>
    </Row>
    )
};
import { useCallback, useEffect, useRef } from 'react';
import { useTodoStore } from '../provider/todo-provider';
import { Button, Input, Row, Col, InputRef } from 'antd';

export const TodoInput = () => {
  const refInput = useRef<InputRef>(null);
  const { todoStore } = useTodoStore();

  useEffect(() => {
    refInput.current?.focus();
  }, [refInput.current]);

  const addTodo = useCallback(() => {
    if (
      refInput.current &&
      refInput.current.input &&
      refInput.current.input.value !== ''
    ) {
      todoStore.addTodo(refInput.current.input.value);
      refInput.current.input.value = '';
    }
  }, [refInput.current]);

  return (
    <Row
      gutter={8}
      style={{ marginBottom: 15, justifyContent: 'space-between' }}
    >
      <Col>
        <Input
          onKeyDown={ev => {
            if (ev.key === 'Enter') {
              addTodo();
            }
          }}
          ref={refInput}
          placeholder="Add todo"
        />
      </Col>
      <Col>
        <Button onClick={addTodo}>+</Button>
      </Col>
    </Row>
  );
};

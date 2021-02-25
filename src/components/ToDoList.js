import React from 'react';
import ToDo from '../components/ToDo';

export default function ToDoList({ todos, toggleTodo }) {
  return todos.map(todo => {
    return <ToDo key={todo.id} toggleTodo={toggleTodo} todo={todo} />;
  });
}

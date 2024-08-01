import React from 'react'
import TodoItem from './TodoItem';

interface TodoListProps {
  tasks: string[];
  deleteTask: (index: number) => void;
  editTask: (index: number, newTask: string) => void
}

const TodoList: React.FC<TodoListProps> = ({tasks, deleteTask, editTask}) => {
  return (
    <ul className='space-y-2'>
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          task={task}
          deleteTask={() => deleteTask(index)}
          editTask={(newTask) => editTask(index, newTask)}
        />
      ))}
    </ul>
  )
}

export default TodoList
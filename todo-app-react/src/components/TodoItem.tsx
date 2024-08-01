import React from 'react'

interface TodoItemProps {
  task: string;
  deleteTask: () => void;
  editTask: (newTask: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({task, deleteTask, editTask}) => {
  const handleEdit = () => {
    const newTask = prompt('Edit task:', task);
    if (newTask) {
      editTask(newTask);
    }
  }

  return (
    <li className='flex justify-between items-center p-4 bg-white rounded border-none hover:bg-purple-50 transition duration-300'>
      <span className='flex-grow'>{task}</span>
      <span className='flex space-x-2'>
        <button
          onClick={handleEdit}
          className='p-1 text-primary hover:shadow-primary-hover transition duration-300 mr-2 rounded'
        >
          Edit
        </button>
        <button
          onClick={deleteTask}
          className='p-1 text-danger hover:shadow-danger-hover transition duration-300 rounded'
        >
          Delete
        </button>
      </span>
    </li>
  )
}

export default TodoItem
import {useState} from 'react'
import TodoList from './TodoList'



const TodoApp: React.FC = () => {

  const [task, setTask] = useState('') // Current input
  const [tasks, setTasks] = useState<string[]>([]) // List of tasks

  // Adding task
  const addTask = (e: React.FormEvent) => {
    e.preventDefault()
    if (task.trim()) {
      setTasks([...tasks, task])
      setTask('');
    }
  }

  // Delete task
  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index); // remove a task at the specified index
    setTasks(newTasks)
  };

  // Edit task
  const editTask = (index: number, newTask: string) => {
    const newTasks = tasks.map((t, i) => (i === index ? newTask : t)) // Update the task at the specified index
    setTasks(newTasks);
  };

  
  return (
    <div className='min-h-screen bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center'>
      <div className='bg-blue- p-8 rounded-lg shadow-lg w-full max-w-md border-2 backdrop-blur-3xl'>
        <h1 className='text-[40px] font-artisitic text-white mb-6'>Todo List App</h1>
        <form onSubmit={addTask} className='flex mb-6'>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task..."
            className='flex-grow p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:border-primary-dark'
          />
          <button type='submit' className='p-3 bg-purple-900 text-white rounded-r-lg hover:bg-primary-dark transition duration-300'>Add</button>
        </form>
        <TodoList tasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
      </div>
    </div>
  )
}

export default TodoApp
import NewTaskForm from './new-task-form/new-task-form';

import './header.css';

export default  function AppHeader () {
  return (
    <header className='header'>
      <h1 className='header__title'>todos</h1>
      <NewTaskForm />
    </header>
  )
} 
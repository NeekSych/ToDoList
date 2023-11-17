
import TaskList from "./TaskList/TaskList";
import Footer from "./footer/footer";

import './main.css';

const AppMain = () => {
      return (
        <section className='main'>
            <TaskList
            />
            <Footer    />
        </section>
      )
  }

export default AppMain; 
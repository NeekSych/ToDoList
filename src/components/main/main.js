import React from "react";
import TaskList from "../todo-list/todo-list";
import Footer from "../footer/footer";

const AppMain = () => {
      return (
        <section className='main'>
            <TaskList/>
            <Footer/>
        </section>
      )
  }

export default AppMain; 
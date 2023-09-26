import React from "react";
import TaskList from "./TaskList/TaskList";
import Footer from "../footer/footer";

import {toDoData} from "../..";
const AppMain = () => {
      return (
        <section className='main'>
            <TaskList data={toDoData}/>
            <Footer/>
        </section>
      )
  }

export default AppMain; 
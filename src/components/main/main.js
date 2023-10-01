import React from "react";
import TaskList from "./TaskList/TaskList";
import Footer from "./footer/footer";

import './main.css'

const AppMain = (props) => {
      return (
        <section className='main'>
            <TaskList propsData={props.propsData}
              propsDeleted = {props.onDeleted}
            />
            <Footer/>
        </section>
      )
  }

export default AppMain; 
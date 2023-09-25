import React from "react";
import Filters from "./filters/filters";

const Footer = () => {
    return (
    <footer>
        <span class="todo-count">1 items left</span>
        <Filters/>
        <button class="clear-completed">Clear completed</button>
    </footer>
    )
}
export default Footer; 
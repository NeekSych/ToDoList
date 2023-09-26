import React from "react";

const TaskLabel = ({label, important}) => {
  console.log(important)
  const importantStyle = {
    
    color: (important=='true') ? '#F00':'#000',
    fontWeight: (important=='true')?'bold':'normal',
  }
  
    return (
              <label>
                <span className="description" style={importantStyle}>{label}</span>
                <span className="created">created 17 seconds ago</span>
              </label>
              
    )
}
export default TaskLabel; 
import React from 'react';

const Task = ({ task, deleteTask, toggleTask }) => {
  return (
    <div className="m-2 p-1 d-flex justify-content-between border border-info ">
      <input type="checkbox" name="" id="" value={task.isDone} onChange={() => toggleTask(task.id)} />
      <p>{task.content}</p>
      <button className="btn-outline-danger" onClick={() => deleteTask(task.id)}>remove</button>
    </div>
  );
};

export default Task;
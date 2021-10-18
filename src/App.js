import React from 'react';
import TaskList from './components/task-list/TaskList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      addendTask: '',
    };
  }

  addTask = () => {
    if(this.state.addendTask === '') {
      alert('Please, enter a proper value!');
      return;
    }

    this.setState((state) => ({
      tasks: [
        ...state.tasks, { id: state.tasks.length + 1, content: state.addendTask, isDone: false }
      ],
      addendTask: '',
    }));
  }

  deleteTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  }

  toggleTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.map((task) => {
        return ((task.id === id) ? {...task, isDone: !task.isDone} : task);
      })
    }));
  }

  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center" style={{ backgroundImage:"url(" + "https://media.istockphoto.com/photos/to-do-list-in-notebook-with-calendar-picture-id1092571024?k=20&m=1092571024&s=612x612&w=0&h=dz6l5jjYZC0lU2dUkqu5g5_0XtY3xnHs57mJDNlvJSk=" + ")"}}>
      <div className="card mt-4 p-5" style={{width: "45%"}}>
        <div className="card-header text-center">
        <h2>Task Manager</h2>
        </div>
        <div className="card-body text-center">
        <input type="text" value={this.state.addendTask} onChange={(e) => this.setState({ addendTask: e.target.value })} />
        {
          (this.state.tasks.length) 
          ? <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} toggleTask={this.toggleTask} /> 
          : <h3 className="fst-italic">No Tasks</h3>
        }
        </div>
        <div className="card-footer">
        <button class="btn btn-outline-success" onClick={() => this.addTask()}>Add Task</button>
        </div>
      </div>
      </div>
    );
  }
}

export default App;
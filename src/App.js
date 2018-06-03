import React, { Component } from 'react';
import TaskList from './components/containers/TaskList';
import AddTask from './components/presentational/AddTask';
import './css/App.css';

class App extends Component {
    render() {
        return (
                <div className="main">
                    <AddTask />
                    <TaskList />
                </div>
                );
    }
}

export default App;

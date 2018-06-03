import React, { Component } from 'react';
import { deleteTask, updateTask } from '../../actions/';
import { connect } from 'react-redux';
import TaskType from '../../propTypes/taskType';
import TaskForm from './TaskForm';
import cross from '../../images/cross.svg';
import edit from '../../images/edit.svg';
import '../../css/TaskDetail.css';

class TaskDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDetailsOpened: false,
            isUpdateOpened: false
        }

        this.init = {
            handleFormSubmit: this.changeTask,
            action: 'UPDATE_TASK',
            submitText: 'UPDATE TASK',
            title: this.props.title,
            description: this.props.description
        }
    }

    openDetails = (event) => {
        this.setState({
            isDetailsOpened: !this.state.isDetailsOpened
        });
    }

    openUpdateForm = (event) => {
        this.setState({
            isUpdateOpened: !this.state.isUpdateOpened
        });
    }

    renderDetails = () => {
        if (!this.state.isDetailsOpened) {
            return null;
        }
        return <p className="description">{this.props.description}</p>
    }

    deleteTask = () => {
        this.props.deleteTask(this.props.id);
    }

    changeTask = (state) => {
        const task = {
            id: this.props.id,
            ...state
        };
        this.props.updateTask(task);
        this.setState({
            isUpdateOpened: false,
        });
    }

    renderUpdateTaskForm() {
        if (!this.state.isUpdateOpened) {
            return null;
        }
        return <TaskForm {...this.init}/>
    }

    render() {
        return (
                <div className="task-details">
                    <div className="div-header">
                        <h3 className="title" onClick={this.openDetails}>{this.props.title}</h3>
                        <div className="actions">
                            <img
                                onClick={this.openUpdateForm}
                                className="edit"
                                src={edit}
                                alt="Update task"
                                width="28"
                                height="28"/>
                            <img
                                onClick={this.deleteTask}
                                className="delete"
                                src={cross} 
                                alt="Delete task" 
                                width="24" 
                                height="24"/>
                        </div>
                    </div>
                    {this.renderDetails()}
                    {this.renderUpdateTaskForm()}
                </div>
                );
    }
}

TaskDetail.propTypes = TaskType;

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
        updateTask: (value) => {
            dispatch(updateTask(value));
        },
        deleteTask: (value) => {
            dispatch(deleteTask(value));
        }
    }
}
export default connect(
        mapStateToProps,
        mapDispatchToProps
        )(TaskDetail);

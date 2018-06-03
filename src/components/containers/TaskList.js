import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TaskDetail from '../presentational/TaskDetail';
import TaskType from '../../propTypes/taskType';
import { connect } from 'react-redux';
import '../../css/TaskList.css';

class TaskList extends Component {
    constructor(props) {
        super(props);
    }

    renderTasks = (items) => {
        if (items && items.length) {
            return items.map((item) =>
                <TaskDetail key={item.id} {...item} />
            );
        } else {
            return <div><p>No Tasks found.</p></div>;
        }
    }

    render() {
        return (
                <div className="container">
                    <h2 className="title">Tasks list</h2>
                    {this.renderTasks(this.props.taskItems)}
                </div>
                );
    }
}

TaskList.propTypes = {
    taskItems: PropTypes.arrayOf(TaskType)
};


const mapStateToProps = state => {
    return {
        taskItems: state.taskReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
    }
}
export default connect(
        mapStateToProps,
        mapDispatchToProps
        )(TaskList);

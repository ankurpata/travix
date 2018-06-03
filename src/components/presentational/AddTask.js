import React, {Component} from 'react';
import TaskForm from './TaskForm';
import { connect } from 'react-redux';
import '../../css/AddTask.css';
import '../../css/AddTask.css';

export const ADD_ACTION = 'ADD';

class AddTask extends Component {
    constructor(props) {
        super(props);

        this.init = {
            handleFormSubmit: this.handleFormSubmit,
            action: ADD_ACTION,
            submitText: 'ADD TASK'
        }
    }

    render() {
        return (
                <div className="box-add">
                    <TaskForm {...this.init}/>
                </div>
                );
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
}
export default connect(
        mapStateToProps,
        mapDispatchToProps
        )(AddTask);
import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from '../../store/configureStore';
import {  configure, mount, Enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';
import TaskList from '../containers/TaskList';

it('renders without crashing', () => {
    const store = configureStore()
    const div = document.createElement('div');
    ReactDOM.render(
            <Provider store={store}>
                <TaskList />
            </Provider>,
            div);
});
import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import configureStore from '../../store/configureStore';

import {  configure, mount, Enzyme } from 'enzyme';
import TaskDetail from '../presentational/TaskDetail';
import Adapter from 'enzyme-adapter-react-15';

configure({adapter: new Adapter()});
it('renders without crashing', () => {
    const store = configureStore();
    const div = document.createElement('div');
    ReactDOM.render(
            <Provider store={store}>
                <TaskDetail />
            </Provider>,
            div);
});

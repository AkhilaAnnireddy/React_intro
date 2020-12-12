/** @format */

import React from "react";
import Calculator from "./Calculator/Calculator.jsx";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo.jsx";
import Movies from "./Movies/Movies.jsx";
import { Route } from "react-router-dom";
import { ParentToChildComponent } from './ParentToChild/ParentToChild.jsx';
import { ChildToParentDemo } from './ChildToParent/ChildToParent.jsx';
import { SiblingCommunicationDemo } from './SiblingCommunication/ChildToParent.jsx';
import { EvenOrOdd } from './InputEvent/InputEvent';
import { GetAPIDemo } from './GetAPIDemo/GetAPIDemo';

export function CustomRouter() {
    return (
        <div>
            <Route path="/movies" component={Movies} />
            <Route path="/calculator" component={Calculator} />
            <Route path="/lifecycle" component={LifeCycleDemo} />
            <Route path="/parent-to-child" component={ParentToChildComponent} />
            <Route path="/child-to-parent" component={ChildToParentDemo} />
            <Route path="/child-to-child" component={SiblingCommunicationDemo} />
            <Route path="/input-event" component={EvenOrOdd} />
            <Route path="/get-api" component={GetAPIDemo} />
        </div>
    );
}

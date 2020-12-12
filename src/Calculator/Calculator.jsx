/** @format */

import React from "react";

class Calculator extends React.Component {
    state = {
        a: 0,
        b: 0,
        showResult: false,
    };

    setA = (e) => {
        this.setState({
            a: parseInt(e.target.value),
            showResult: false,
        });
    };

    setB = (e) => {
        this.setState({
            b: parseInt(e.target.value),
            showResult: false,
        });
    };

    setResult = () => {
        this.setState((prevState) => {
            return { showResult: !prevState.showResult };
        });
    };
    render() {
        return (
            <div>
                <input className="inputA" onChange={this.setA} />
                <br />
                <input className="inputB" onChange={this.setB} />
                <br />
                <button onClick={this.setResult}>Result</button>
                <br />

                {this.state.showResult ? (
                    <div>
                        {"a:" + this.state.a + "b: " + this.state.b}
                        <br />
                        {"add : " + (this.state.a + this.state.b)}
                        <br />
                        {"sub : " + (this.state.a - this.state.b)}
                        <br />
                        {"mul : " + this.state.a * this.state.b}
                        <br />
                        {"div : " + this.state.a / this.state.b}
                    </div>
                ) : (
                    <div>Click On Button</div>
                )}
            </div>
        );
    }
}

export default Calculator;

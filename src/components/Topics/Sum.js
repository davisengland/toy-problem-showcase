import React, {Component} from 'react'

class Sum extends Component {
    constructor() {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: 0
        }

    }

    changeNum1(val) {
        let num = 
        this.setState({number1: parseInt(val,10)})
    }

    changeNum2(val) {
        this.setState({number2: parseInt(val,10)})
    }

    sum(num1, num2) {
        this.setState({sum: num1 + num2})
    }

    render() {
        return(
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" onChange={event => this.changeNum1(event.target.value)}/>
                <input className="inputLine" onChange={event => this.changeNum2(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.sum(this.state.number1, this.state.number2)}>Filter</button>
                <span className="resultsBox">Filtered: {JSON.stringify(this.state.sum, null, 10)}</span>
            </div>
        )
    }
}

export default Sum
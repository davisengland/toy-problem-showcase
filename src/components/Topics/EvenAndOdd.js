import React, {Component} from 'react'

class EvenAndOdd extends Component {
    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    updateArrays() {
        let splitArr = this.state.userInput.split(",")
        let numArr = splitArr.map(function(x) {
            return parseInt(x, 10)
        })
        let newEven = []
        let newOdd = []

        for(let i = 0; i < numArr.length; i++) {
            if(numArr[i] % 2 === 0) {
                newEven.push(numArr[i])
                this.setState({evenArray: newEven})
            } else {
                newOdd.push(numArr[i])
                this.setState({oddArray: newOdd})
            }
        }
    }

    render() {
        return(
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className="inputLine" onChange={event => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.updateArrays(this.state.userInput)}>Split</button>
                <span className="resultsBox"> Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className="resultsBox"> Odds: {JSON.stringify(this.state.oddArray)}</span>
            </div>
        )
    }
}

export default EvenAndOdd
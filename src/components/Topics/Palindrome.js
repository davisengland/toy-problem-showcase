import React, {Component} from 'react'

class Palindrome extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }

    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    updateVal() {
        let newStr = this.state.userInput.split('').reverse().join('')
        if(newStr === this.state.userInput) {
            this.setState({palindrome: true})
        } else {
            this.setState({palindrome: false})
        }
    }

    render() {
        return(
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" onChange={event => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.updateVal(this.state.userInput)}>Filter</button>
                <span className="resultsBox">Filtered: {JSON.stringify(this.state.palindrome, null, 10)}</span>
            </div>
        )
    }
}

export default Palindrome
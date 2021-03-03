import React, {Component} from 'react'

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            founders: [
                {
                    name: 'Davis',
                    title: 'Co-owner',
                    age: 26
                },
                {
                    name: 'Dalton',
                    age: 30,
                    degree: 'CS'
                },
                {
                    name: 'Shane',
                    title: 'CEO'
                }
            ],
            userInput: '',
            filteredArray: []
        }

    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    filterArr() {
        let newArr = []
        for(let i = 0; i < this.state.founders.length; i++) {
            if(this.state.founders[i].hasOwnProperty(this.state.userInput) === true) {
                newArr.push(this.state.founders[i])
            }
        }
        this.setState({filteredArray: newArr, })
    }

    render() {
        return(
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.founders, null, 10)}</span>
                <input className="inputLine" onChange={event => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterArr(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject
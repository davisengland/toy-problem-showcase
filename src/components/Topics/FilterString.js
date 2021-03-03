import React, {Component} from 'react'

class FilterString extends Component {
    constructor() {
        super()
        this.state = {
            unfilteredArray: ['Utah Jazz','LA Lakers','LA Clippers','Denver Nuggets', 'Portland Trailblazers'],
            userInput: '',
            filteredArray: []
        }

    }

    handleChange(val) {
        this.setState({userInput: val})
    }

    filterArr() {
        let newArr = []
        for(let i = 0; i < this.state.unfilteredArray.length; i++) {
            if(this.state.unfilteredArray[i].search(this.state.userInput) > -1) {
                newArr.push(this.state.unfilteredArray[i])
            }
        }
        this.setState({filteredArray: newArr})
    }

    render() {
        return(
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.unfilteredArray, null, 10)}</span>
                <input className="inputLine" onChange={event => this.handleChange(event.target.value)}/>
                <button className="confirmationButton" onClick={() => this.filterArr(this.state.userInput)}>Filter</button>
                <span className="resultsBox filterStringRB">Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterString
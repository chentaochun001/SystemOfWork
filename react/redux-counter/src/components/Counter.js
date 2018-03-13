import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Counter extends Component {
    constructor(props) {
        super(props)
        this.incrementIfOdd = this.incrementIfOdd.bind(this)
        this.incrementAsync = this.incrementAsync.bind(this)
    }
    // 提供一个action 本质是increment 而reduce已有一个increment
    incrementIfOdd () {
        if(this.props.value % 2 !== 0)
            this.props.onIncrement()
    }
    incrementAsync () {
        setTimeout(this.props.onIncrement, 3000) 
        // redux-thunk sega
    }
    render () {
        const { value, onDecrement, onIncrement } = this.props
        return (
            <p>
                Clicked: {value} times
                { ' ' }
                <button onClick={onIncrement}> + </button>
                { ' ' }
                <button onClick={onDecrement}> - </button>
                { ' ' }
                <button onClick= {this.incrementIfOdd.bind(this)}>
                    Increment if odd
                </button>
                { ' ' }
                <button onClick={this.incrementAsync}>
                    Increment async 
                </button>
            </p>
        )
    }
}
Counter.propTypes = {
    value: PropTypes.number.isRequired, onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}
export default Counter
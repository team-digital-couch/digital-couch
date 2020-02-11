import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getTimelines, getEvents} from '../redux/reducers/timelineReducer'

class Timeline extends Component {
    constructor() {
        super()

        this.state = {
            selection: 0,
            showForm: false,
            showEvents: 0
        }
    }

    componentDidMount() {
        this.props.getTimelines()
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    select = () => {
        this.props.getEvents(this.state.selection)
    }

    showForm = () => [
        this.setState({showForm: true})
    ]

    render() {
        return (
            <div>
                <div>
                    <label htmlFor='timelineSelector'>Please make a selection:</label>
                    <select name='timelineSelector' value={this.state.selection} onChange={this.handleChange}>
                        {!this.props.timelineLoading && this.props.timelines.map(v => {
                            <option key={v.id} value={v.id}>{v.name}</option>
                        })}
                    </select>
                    <button onClick={this.showForm}>Add a timeline</button>
                    <button onClick={this.select}>Select</button>
                </div>
                {this.state.selection && !this.props.eventLoading && (
                    <div>
                        <h1>{this.props.timelines[this.state.selection].name}</h1>
                        <span>{this.props.timelines[this.state.selection].startDate}</span>
                        <TimelineEvent />
                        <span>{this.props.timelines[this.state.selection].endDate}</span>
                    </div>
                )}
            </div>
        )
    }
}

const checkout = state => ({
    timelines: state.timelineReducer.timelines,
    timelineLoading: state.timelineReducer.timelineLoading,
    eventLoading: state.timelineReducer.eventLoading
})

export default connect(checkout, {getTimelines, getEvents})(Timeline)
import React, { Component } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import {connect} from 'react-redux'
import {addTimeline} from '../../redux/reducers/timelineReducer'

class AddTimeline extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            startDate: new Date(),
            endDate: new Date()
            // title: '',
            // content: ''
        }
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handlePickStartDate = date => {
        this.setState({startDate: date})
    }

    handlePickEndDate = date => {
        this.setState({endDate: date})
    }

    submit = () => {
        const newTimeline = {
            name: this.state.name,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }

        this.props.addTimeline(newTimeline)
        this.props.closeForm()
    }

    cancel = () => {
        this.props.closeForm()
    }

    render() {
        return (
            <div>
                <label htmlFor='name'>Name</label>
                <input name='name' value={this.state.name} onChange={this.handleChange} />
                <label htmlFor='startDate'>Start Date</label>
                <DatePicker name='startDate' selected={this.state.startDate} onChange={this.handlePickStartDate} />
                <label htmlFor='endDate'>End Date</label>
                <DatePicker name='endDate' selected={this.state.endDate} onChange={this.handlePickEndDate} />
                {/* <label htmlFor='title'>Title</label>
                <input name='title' value={this.state.title} onChange={this.handleChange} />
                <label htmlFor='content'>Description</label>
                <input name='content' value={this.state.content} onChange={this.handleChange} /> */}
                <button>Submit</button>
                <button onClick={this.cancel}>Cancel</button>
            </div>
        )
    }
}

export default connect(undefined, {addTimeline})(AddTimeline)
import React, { Component } from 'react'
import {connect} from 'react-redux'
import DatePicker from 'react-datepicker'
import {addEvent} from '../../redux/reducers/timelineReducer'
import 'react-datepicker/dist/react-datepicker.css'

class AddTimelineEvent extends Component {
    constructor() {
        super()

        this.state = {
            title: '',
            time: new Date(),
            isApproximate: false,
            content: ''
        }
    }

    handleChange = e => {
        if(e.target.name == 'isApproximate') {
            this.setState({isApproximate: !this.state.isApproximate})
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }

    handleChangeTime = date => {
        this.setState({
            time: date
        })
    }

    add = () => {
        const {title, time, isApproximate, content} = this.state
        const timelineId = this.props.timelineId
        this.props.addEvent({timelineId, title, time, isApproximate, content})
    }

    render() {
        return (
            <div>
                <input name='title' value={this.state.title} onChange={this.handleChange} />
                <DatePicker name='time' selected={this.state.time} onChange={this.handleChangeTime} />
                <input type='checkbox' name='isApproximate' checked={this.state.isApproximate} onChange={this.handleChange} />
                <textarea name='content' value={this.state.content} onChange={this.handleChange} />
                <button onClick={this.add}>Add</button>
            </div>
        )
    }
}

export default connect(undefined, {addEvent})(AddTimelineEvent)
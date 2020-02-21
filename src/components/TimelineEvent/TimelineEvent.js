import React, { Component } from 'react'
import {connect} from 'react-redux'
import {deleteEvent} from '../../redux/reducers/timelineReducer'
import AddTimelineEvent from '../AddTimelineEvent/AddTimelineEvent'

export class TimelineEvent extends Component {
    constructor() {
        super()

        this.state = {
            showForm: false
        }
    }

    componentDidUpdate() {
        console.log(this.props.events)
    }

    edit = () => {}

    delete = id => {
        const result = window.confirm('Are you sure you want to delete this event?')
        if(result) {
            this.props.deleteEvent(id)
        }
    }

    showHide = () => {
        this.setState({showForm: !this.state.showForm})
    }
    
    render() {
        return (
            <div className='event-container'>
                {this.props.events.map(v => (
                    <div className='event' key={v.id}>
                        <div className='event-delete-container'>
                            {this.props.selectedClient ? null : <span className='event-delete-button' onClick={() => this.delete(v.id)}>X</span>}
                        </div>
                        <span id='event-date'>Date: {v.isApproximate ? 'Approximately ' : ''}{v.time}</span>
                        <span className='event-title'>Title: {v.title}</span>
                        <span id='what-happened'>What happened:</span>
                        <p className='event-content'>{v.content}</p>
                        {/* <button>Edit</button> */}
                        {this.props.selectedClient ? null : <button>Delete</button>}
                    </div>
                ))}
                {this.props.selectedClient ? null : <button onClick={this.showHide}>Add New</button>}
                {this.state.showForm && <AddTimelineEvent timelineId={this.props.timelineId} />}
            </div>
        )
    }
}

const checkout = state => {
    // console.log(state)
    return ({
    isProvider: state.userReducer.isProvider,
    events: state.timelineReducer.events,
    selectedClient: state.userReducer.selectedClient
})}

export default connect(checkout, {deleteEvent})(TimelineEvent)
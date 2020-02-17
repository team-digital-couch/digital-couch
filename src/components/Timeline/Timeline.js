import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getTimelines, getEvents, deleteTimeline} from '../../redux/reducers/timelineReducer'
import TimelineEvent from '../TimelineEvent/TimelineEvent'
import AddTimeline from '../AddTimeline/AddTimeline'

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

    showForm = () => {
        this.setState({showForm: true})
    }

    closeForm = () => {
        this.setState({showForm: false})
    }

    edit = () => {}

    delete = id => {
        this.props.deleteTimeline(id)
    }

    render() {
        const selected = this.props.timelines.reduce((t, v) => v.id == this.state.selection ? v : t, {})

        return (
            <div>
                <div>
                    <label htmlFor='timelineSelector'>Timeline:</label>
                    <select name='selection' value={this.state.selection} onChange={this.handleChange}>
                        <option value={0} >Please make a selection</option>
                        {!this.props.timelineLoading && this.props.timelines.map(v => {
                            return <option key={v.id} value={v.id}>{v.name}</option>
                        })}
                    </select>
                    <button onClick={this.select} disabled={!this.state.selection}>Select</button>
                    <button onClick={this.showForm}>Add a timeline</button>
                </div>
                {this.state.showForm && <AddTimeline closeForm={this.closeForm} />}
                {this.state.selection && !this.props.eventLoading ? (
                    <div className='hi'>
                        <h1>{selected.name}</h1>
                        <span>{selected.start_date}</span>
                        <TimelineEvent timelineId={selected.id} />
                        <span>{selected.end_date}</span>
                        <button>Edit</button>
                        <button onClick={() => this.delete(selected.id)}>Delete</button>
                    </div>
                ) : null}
            </div>
        )
    }
}

const checkout = state => ({
    timelines: state.timelineReducer.timelines,
    timelineLoading: state.timelineReducer.timelineLoading,
    eventLoading: state.timelineReducer.eventLoading
})

export default connect(checkout, {getTimelines, getEvents, deleteTimeline})(Timeline)
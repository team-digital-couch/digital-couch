import React from 'react';
import {connect} from 'react-redux';

class AddJournal extends React.Component{
    constructor(){
        super()
        this.state = {
            title: '',
            content: '',
            id: 2
        }
    }

    inputChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addJournal = () => {
        const newEvent = {
            start: new Date(),
            end: new Date(),
            title: this.state.eventTitle,
            id: this.state.id
        }
        this.props.event.push(newEvent);
        this.state.id++;
    }

    render(){
        return(
            <div>
                <input name='title' placeholder='title' onChange={this.inputChange}/>
                <textarea name='content' placeholder='How are you feeling?' onChange={this.inputChange}></textarea>
                <button>Add Journal</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    return{
        events: reduxState.journalReducer.events
    }
}


export default connect (mapStateToProps)(AddJournal);
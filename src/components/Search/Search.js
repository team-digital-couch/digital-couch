import React, { Component } from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

class Search extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            city: '',
            results: []
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })

        axios.get(`/api/search/${e.target.name}?${e.target.name}=${e.target.value}`)
            .then(res => this.setState({results: res.data}))
            .catch(err => toast.error(err.response.data.message))
    }

    connect = id => {
        axios.post('/api/connections', {connId: id})
            .then(res => toast.success(res.data.message))
            .catch(err => toast.error(err.response.data.message))
    }

    render() {
        return (
            <div>
                <input name='name' value={this.state.value} onChange={this.handleChange} placeholder='Search by name' />
                <input name='city' value={this.state.value} onChange={this.handleChange} placeholder='Search by city' />
                <button onClick={this.search}>Search</button>
                <div>
                    {this.state.results.map(v => <div className='result' key={v.user_id}><img src={v.avatar} alt='Avatar' />{v.first_name} {v.last_name}<button onClick={() => this.connect(v.user_id)} className='connect-button'>Connect</button></div>)}
                </div>
            </div>
        )
    }
}

export default Search

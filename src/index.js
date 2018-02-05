import React from 'react'
import ReactDOM from 'react-dom'
import { Back } from './back.js'
import { Current } from './current.js'
import { Forward } from './forward.js'

class Browser extends React.Component {
    constructor (props) {
        super(props)
        this.state = { 
            back: [], 
            current: '(none)',
            forward: []
        }
        this.handleSubmission = this.handleSubmission.bind(this)
    }
    
    handleSubmission (e) {
        const back = this.state.back; 
        if(e.key === 'Enter'){
            this.setState({
                current: e.target.value,
                forward: []
            });
            back.push(e.target.value)
        }
    }

    handleForward (e) {
        
    }

    render () {
        return (
            <div>
                <h1>Browser</h1>
                <input type='text' onKeyUp={this.handleSubmission} placeholder='type here'/> 
                <button >{'<'}</button>
                <button >{'>'}</button>
                <div className='back'>
                    <h3>Back</h3>
                    <Back back={this.state.back}/>
                </div>
                <div className='current'>
                    <h3>Current</h3>
                    <Current current={this.state.current}/>    
                </div> 
                <div className='forward'>
                    <h3>Forward</h3>
                    <Forward forward={this.state.forward}/>    
                </div> 
            </div>
        )
    }
}

ReactDOM.render(<Browser />, document.getElementById('app'))
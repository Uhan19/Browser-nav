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
            current: '',
            forward: []
        }
        this.handleSubmission = this.handleSubmission.bind(this);
        this.handleForward = this.handleForward.bind(this);
        this.handleBackward = this.handleBackward.bind(this);
    }
    
    handleSubmission (e) {
        const back = this.state.back; 
        const current = this.state.current;
        if(e.key === 'Enter') {
            if (current) {
                back.push(current)
            }
            this.setState({
                current: e.target.value,
                forward: []
            });
        }
    }

    handleForward() {
        const back = this.state.back; 
        const current = this.state.current; 
        const forward = this.state.forward; 
        if (current) {
            forward.push(current)
            this.setState({
                current: back.pop(),
            })
        }
    }

    handleBackward() {
        const back = this.state.back; 
        const current = this.state.current; 
        const forward = this.state.forward;
        if (current) {
            back.push(current);
            this.setState({
                current: forward.pop(),
            })
        }
    }

    render () {
        return (
            <div>
                <h1>Browser</h1>
                <input type='text' onKeyUp={this.handleSubmission} placeholder='type here'/> 
                <button onClick={this.handleBackward}>{'<'}</button>
                <button onClick={this.handleForward}>{'>'}</button>
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
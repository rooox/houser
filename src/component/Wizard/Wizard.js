import React from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends React.Component{
    constructor() {
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: 0
        }
    }


    render() {
        return(
            <section className="wizard">
             <div>Wizard</div>
             <Link to="/" className='links'>
             <button >Cancel</button>
             </Link>
             <h4>Property Name</h4>
             <input value={this.state.name} type="text" onChange={(e)=> this.setState({name : e.target.value})}/>
             <h4>Address</h4>
             <input value={this.state.address} type="text" onChange={(e)=> this.setState({address : e.target.value})}/>
             <h4>City</h4>
             <input value={this.state.city} type="text" onChange={(e)=> this.setState({city : e.target.value})}/>
             <h4>State</h4>
             <input value={this.state.state} type="text" onChange={(e)=> this.setState({state : e.target.value})}/>
             <h4>Zip</h4>
             <input value={this.state.zipcode} type="text" onChange={(e)=> this.setState({zipcode : e.target.value})}/>
            </section>
        )
    }
}


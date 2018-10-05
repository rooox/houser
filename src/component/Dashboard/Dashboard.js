import React from 'react';
import House from '../House/House';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import route from './route';

export default class Dashboard extends React.Component{
    constructor(){
        super();

        this.state ={
           houses: [] 
        }
        this.addHouse=this.addHouse.bind(this);
    }
  

componentDidMount(){

    axios.get('/api/houses')
    .then(res=>this.setState({houses:res.data}));

    
    }
    addHouse = (house) => {
        axios.post('/api/house', house)
        .then( houses => console.log(houses) || this.setState({houses: houses.data}))
      }

    render() {
        console.log(this.state);
        let housesDisplayed = this.state.houses.map((element, index) => {
            return(
                   <House key={element.id}/>
            )
        })
        return(
            <section className="dashboard">
             <div>Dashboard</div>
             <Link to="/wizard" className='links'>
             <button >Add New Property</button>
             </Link>
             <h3>Home Listings</h3>
             {housesDisplayed}
            </section>
        )
    }
}

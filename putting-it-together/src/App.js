import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import PersonCard from './components/PersonCard';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          firstName: "Christopher",
          lastName: "Lee",
          hairColor: "Brown",
          age: 35
        },
        {
          firstName: "James",
          lastName: "Daley",
          hairColor: "Brown",
          age: 30
        },
        {
          firstName: "Theresa",
          lastName: "Marie",
          hairColor: "Brown",
          age: 33
        },
        {
          firstName: "Meghan",
          lastName: "Elizabeth",
          hairColor: "Brown",
          age: 24
        },
        {
          firstName: "Noah",
          lastName: "Jaymes",
          hairColor: "Blonde",
          age: 1
        }
      ]
    }
    // to make 
    this.haveBDay = this.haveBDay.bind(this);
  }

  haveBDay = (index) => {
    // console.log(index);
    // var u = this.state.users.filter( (user,i) => i === index );
    // u[0].age ++;
    // console.log(u);
    this.setState(prevState => {
      return{
        age: prevState.users[index].age ++
      };
    })
  }
  render() {
    return (
      <div className="App">
        {
          this.state.users.map(
            (user, i) => {
              return(
                <PersonCard 
                  firstName = {user.firstName}
                  lastName = {user.lastName}
                  hairColor = {user.hairColor}
                  age = {user.age}
                  haveBDay = {this.haveBDay}
                  key = {i}
                  index = {i}
                />
              );
            }
          )
        }
      </div>
    );

  }
}


export default App;

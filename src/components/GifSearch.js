import React from 'react';

class GifSearch extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      input = ""
    };
  }
  
  handleChange = (event) => {
    this.setState ({
      input = event.target.value
    });
  }
   
  render() {
    return(
      
      )
  }
}
import React from 'react';

class GifList extends React.Component {
  
  
  render() {
    return(
      <ul>
        <li>img src={this.props.gifs[0]}</li>
      </ul>
      )
  }
}

export default GifList
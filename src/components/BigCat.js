import React, { Component } from "react"
import GatoApi from '../services/GatoApi';

class BigCat extends Component {
  state = {
    files: []
  }

  constructor(props){
    super(props);
    this.gatoApi = new GatoApi();
  }

  componentWillMount(){
    this.gatoApi.getCatFiles(1).then(files => {this.setState({files})})
  }

  render() {
    return (
      <div>
        <img style={{width: '700px', height: '700px',margin: '0 auto', display: 'block'}} src={this.state.files[0]} alt="Card cap"/>
      </div>
    )
  }
}

export default BigCat
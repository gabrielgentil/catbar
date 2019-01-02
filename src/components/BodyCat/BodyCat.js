import React, { Component } from "react";
import GatoApi from '../../services/GatoApi'
import './BodyCat.css'

class BodyCat extends Component {

  state = {
    files: []
  }

  constructor(props){
    super(props);
    this.gatoApi = new GatoApi();
  }

  componentWillMount(){
    this.gatoApi.getCatFiles(3).then(files => {this.setState({files})})
  }

  render() {
    return (
      <div className="bodycat-container">
         {this.state.files.map(file => (
            <div className="card bodycat">
              <img className="card-img-top" src={file} alt="Card cap"/>
              <div className="card-body">
                <p className="card-text"><b>Source:</b> <a href={file}>{file}</a></p>
              </div>
          </div>
          ))}
      </div>
    )
  }
 }

export default BodyCat
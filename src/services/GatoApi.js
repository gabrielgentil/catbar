import axios from 'axios';

class GatoApi {
 
  async getCatFiles(number){
    let files = [];
    for(let i=0;i<number;i++){
      let response = await axios.get('https://aws.random.cat/meow');
      files.push(response.data.file);
    }
    return files;
  }

}

export default GatoApi
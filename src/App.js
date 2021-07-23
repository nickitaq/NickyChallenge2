
import axios from 'axios';
import React from 'react';
import Photos from './Photos';
import Search from './Search'

class App extends React.Component {
   state = {
     photos:[],
     loading: false,
     albumId:null
   }

   async fetchPhotos(){ 
    this.setState({loading:true})
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/albums/${this.state.albumId}/photos`)
  

    this.setState({photos:data, loading:false})   
   }
  setAlbumId=(albumId)=>this.setState({albumId})
  
  render(){
    
    return (
      <div className="App">
        <Search setAlbumId={this.setAlbumId.bind(this)} fetchPhotos={this.fetchPhotos.bind(this)}/>
        { this.state.loading?
          (<h2>Please wait ...</h2>) : 
          <Photos photos={this.state.photos} />
        }
       
      </div>
    );
  }
  }

export default App;

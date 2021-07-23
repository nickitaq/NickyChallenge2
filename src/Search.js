import React from 'react'
export default class Search extends React.Component{
   
    render() {
        return(
            <div className="container curve">
                <input onChange={(e)=>this.props.setAlbumId(e.target.value) } /> 
                <button onClick={this.props.fetchPhotos}>Get Album Photos By Id</button>
            </div>
        )
    }
    
}
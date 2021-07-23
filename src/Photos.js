import React from 'react'
export default class Photos extends React.Component{
   
    render() {
        return(
            <div className="photos curve">
                {
                    this.props.photos.map((photo)=>(
                        <div className="photo" key={photo.title}>
                            <h4>{photo.title}</h4>
                            <img src={photo.thumbnailUrl} alt={photo.title}/>
                        </div>
                 ))
                }
            </div>
        )
    }
}
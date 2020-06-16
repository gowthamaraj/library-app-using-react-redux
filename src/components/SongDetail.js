import React from "react";
import {connect} from "react-redux";

const SongDetail = ({song})=>{
    if(!song){
        return <div className="ui piled segment">Please select something!!!</div>
    }
    return (
    <div className="ui piled segment">
        <h3>Details for:</h3>
        <p>
            Title :{song.title}
            <br/>
            Shelf: {song.Shelf}
        </p>
    </div>
    )
}
const mapStateToProps = (state)=>{
    return {song:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail)
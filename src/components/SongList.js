import React,{Component} from 'react'
import {connect} from 'react-redux'
import {selectSong} from "../actions/";

class SongList extends Component{
    renderList(){
        return this.props.songs.map((song)=>{
            return(
                <div className="ui item" key={song.title}>
                    <div className="right floated message">
                        <button 
                        className="ui button secondary"
                        onClick={()=>this.props.selectSong(song)}
                        >
                            Find It!
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }
    
    
    render(){
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = (state)=>{
    return {songs:state.songs}
}
export default connect(mapStateToProps,{selectSong})(SongList)
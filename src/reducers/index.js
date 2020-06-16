import {combineReducers} from 'redux'

const songsReducer = ()=>{
    return [
        {title:'No Scrubs', duration:'4:05'},
        {title:'Miami', duration:'4:40'},
        {title:'Backstreet boys', duration:'6:05'},
        {title:'oh my baby', duration:'4:15'}
    ]
};

const selectedSongReducer = (selectedSong =  null,action)=>{
    if(action.type === 'SONG_SELECTED'){
        return action.payload
    }
    else{
        return selectedSong
    }
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})
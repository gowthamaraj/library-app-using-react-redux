import {combineReducers} from 'redux'

const songsReducer = ()=>{
    return [
        {title:'To Kill a Mockingbird', Shelf:'5A'},
        {title:'1984', Shelf:'7F'},
        {title:'Harry Potter and the Philosopher\'s Stone', Shelf:'2B'},
        {title:'The Lord of the Rings', Shelf:'5D'},
        {title:'The Great Gatsby', Shelf:'3X'},
        {title:'Pride and Prejudice', Shelf:'1G'},
        {title:'The Diary Of A Young Girl', Shelf:'8V'},
        {title:'The Book Thief', Shelf:'6S'},
        {title:'Quotations from Chairman Mao Tse-tung (1964)', Shelf:'4F'},
        {title:'Don Quixote (1512)', Shelf:'9N'},
        {title:'Harry Potter series (1997-2007) ', Shelf:'4T'},
        {title:'War and Peace ', Shelf:'2E'},
        {title:'The Adventures of Huckleberry Finn', Shelf:'1D'},
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
function addTvShow(tvShow) {
    return {
        type:"ADD_TVSHOW",
        payload: tvShow
    }
}

 function removeTvShow(tvShow) {
    return {
        type:"REMOVE_TVSHOW",
        payload: tvShow
    }
}

 function tvShowReducer(myTvShow = [], action) {
    switch(action.type) {
        case "ADD_TVSHOW":
            return [...myTvShow, action.payload]
        case "REMOVE_TVSHOW": {
            const updatedArr = myTvShow.filter(tvShow => tvShow !== action.payload)
            return updatedArr
        }
        default:
            return myTvShow
    }
}

module.exports =  {addTvShow, removeTvShow, tvShowReducer}
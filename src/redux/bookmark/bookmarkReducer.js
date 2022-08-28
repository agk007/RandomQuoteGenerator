import { ADD_BM, DEL_BM } from './bookmarkTypes'

const initialState = {
  bookmarked: [],
}

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BM:
      return {
        ...state,
        bookmarked: [...state.bookmarked, action.payload],
      }
    case DEL_BM:
      return {...state,
        bookmarked:state.bookmarked.filter(id => id !== action.payload)
        
      }
   
    default: return state
  }
}

export default iceCreamReducer

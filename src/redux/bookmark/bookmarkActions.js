import { ADD_BM } from './bookmarkTypes'
import { DEL_BM } from './bookmarkTypes'

export const addBookmark = (id) => {
  return {
    type: ADD_BM,
    payload: id
  }
}
export const delBookmark = (id) => {
  return {
    type: DEL_BM,
    payload: id
  }
}

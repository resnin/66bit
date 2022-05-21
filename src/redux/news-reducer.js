import { getNews } from "../api/api"

let initialState = {
   isLoading: false,
   news: []
}

const newsReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_NEWS': {
         return {
            news: action.news
         }
      }
      case 'SET_LOADING': {
         return {
            isLoading: action.isLoading
         }
      }
      default:
         return state
   }
}

export const setNews = (news) => ({ type: 'SET_NEWS', news })

export const setIsLoading = (isLoading) => ({ type: 'SET_LOADING', isLoading })

export const getNewsThunk = () => {
   return (dispatch) => {
      dispatch(setIsLoading(true));
      getNews()
         .then
         (data => {
            dispatch(setIsLoading(false))
            dispatch(setNews(data))
            console.log('!')
         })
   }
}

export default newsReducer

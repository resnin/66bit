import { getTheme } from "../api/api"

// По сути, этот редюсер оказался не нужен, так как тема берется с localStorage, но на всякий случай оставил

let initialState = {
   theme: {}
}

const themesReducer = (state = initialState, action) => {
   switch (action.type) {
      case 'SET_THEME': {
         return {
            theme: action.theme
         }
      }
      default:
         return state
   }
}

export const setTheme = (theme) => ({ type: 'SET_THEME', theme })

export const getThemeThunk = (theme) => {
   return (dispatch) => {
      getTheme(theme)
         .then
         (data => {
            dispatch(setTheme(data))
            localStorage.setItem('theme', JSON.stringify(data))
         })
   }
}

export default themesReducer
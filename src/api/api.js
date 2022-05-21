import * as axios from 'axios';

const instance = axios.create({
   baseURL: "https://frontappapi.dock7.66bit.ru/api/"
})

export const getNews = (page = 1) => {
   return instance.get(`news/get?page=${page}&count=10`).then(response => response.data)
}

export const getTheme = (theme) => {
   return instance.get(`theme/get?name=${theme}`).then(response => response.data)
}
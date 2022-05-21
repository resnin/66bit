import React from "react";
import { connect } from "react-redux";
import { getNewsThunk } from "../redux/news-reducer";
import '../App.css';


class News extends React.Component {
   componentDidMount() {
      this.props.getNewsThunk()
   }

   refreshPage() {
      this.props.getNewsThunk()
   }

   render() {
      if (this.props.isLoading) return <span>Загрузка</span>
      return (
         <div className='news'>
            <button onClick={() => this.refreshPage()}>refresh</button>
            {this.props.news.map(item => (
               <div key={item.id} className='news__item'>
                  <h1 className='news__title'>{item.title}</h1>
                  <div className='news__content'>{item.content}</div>
                  <div className='news__date'>Дата публицации: {item.createdAt}</div>
               </div>
            ))}
         </div>
      )
   }
}

let mapStateToProps = (state) => {
   return {
      news: state.newsPage.news,
      isLoading: state.newsPage.isLoading
   }
}

export default connect(mapStateToProps, { getNewsThunk })(News)


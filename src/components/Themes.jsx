import { connect } from "react-redux";
import { getThemeThunk } from "../redux/themes-reducer";
import '../App.css';

const Themes = (props) => {
   return (
      <div className='buttons'>
         <button className="buttons__theme" onClick={() => { props.getThemeThunk('dark') }}>Темная тема</button>
         <button className="buttons__theme" onClick={() => { props.getThemeThunk('light') }}>Светлая тема</button>
         <button className="buttons__theme" onClick={() => { props.getThemeThunk('blue') }}>Голубая тема</button>
      </div>
   )
}

let mapStateToProps = (state) => {
   return {
      theme: state.themesPage.theme
   }
}

export default connect(mapStateToProps, { getThemeThunk })(Themes)
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import News from './components/News';
import Themes from './components/Themes';
import { connect } from 'react-redux';

function App(props) {
   let theme = JSON.parse(localStorage.getItem('theme'));

   let mainColor = theme ? { backgroundColor: `${theme.mainColor}` } : { backgroundColor: `rgb(206, 240, 227)` };
   let secondColor = theme ? { backgroundColor: `${theme.secondColor}` } : { backgroundColor: `rgb(255, 255, 255)` };
   let textColor = theme ? { color: `${theme.textColor}` } : { color: `rgb(10, 10, 10)` }

   return (
      <BrowserRouter>
         <div className="app-wrapper" style={textColor}>

            <header className='app-wrapper__header' style={secondColor}>
               <Header />
            </header>

            <main className='app-wrapper__content' style={mainColor}>
               <Routes>
                  <Route path="/news" element={<News />} />
                  <Route path="/themes" element={<Themes />} />
               </Routes>
            </main>

            <footer className='app-wrapper__footer' style={secondColor}>
               <Footer />
            </footer>

         </div>
      </BrowserRouter>
   );
}

let mapStateToProps = (state) => {
   return {
      theme: state.themesPage.theme
   }
}

export default connect(mapStateToProps)(App);

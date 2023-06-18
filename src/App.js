import 'bulma/css/bulma.css';
import { Course } from './Course';
import './App.css';
import Angular from './images/angular.png';
import Bootstrap from './images/boot.png';
import c from './images/c.jpg';
import Web from './images/web.jpg';

function App() {
  return (
    <div className="App">
<section className="hero is-link">
  <div className="hero-body">
    <p className="title">
      Kurslarım
    </p>
  </div>
</section>
      <div className='container'>
        <section className='section'>
        <div className='columns'>
          <div className='column'>
          <Course image={Angular} title="Angular" description="Lorem ipsum is placeholder text
     commonly used in the graphic, print, and publishing industries
     for previewing layouts and visual mockups."/>
          </div>
          <div className='column'>
          <Course image={Bootstrap} title="Bootstrap" description="Lorem ipsum is placeholder text
     commonly used in the graphic, print, and publishing industries
     for previewing layouts and visual mockups."/>
          </div>
          <div className='column'>
          <Course image={c} title="C-sharp" description="Lorem ipsum is placeholder text
    commonly used in the graphic, print, and publishing industries
    for previewing layouts and visual mockups."/>
          </div>
          <div className='column'>
        
          <Course image={Web} title="Frontend" description="Lorem ipsum is placeholder text
    commonly used in the graphic, print, and publishing industries
    for previewing layouts and visual mockups."/>
          </div>
        </div>
        </section>
      </div>
    </div>
 );
}
export default App;

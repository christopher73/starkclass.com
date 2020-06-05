import React from 'react';
import './styleHome.css';
import Ciclos from './ciclos';
import XqNosotros from './xqNosotros';
import Intro from './intro';
import Footer from '../Footer/footer'
class Cursos extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  
  render() {
    return (
      <div style={{backgroundColor:'white', position:"relative", overflow:"hidden"}}>
                      {/* <script src="https://secure.mlstatic.com/sdk/javascript/v1/mercadopago.js" crossOrigin></script> */}
            
        <Intro/>
        <XqNosotros/>
        <Ciclos/>
        <Footer  sectionR = {true} />
      </div>
    );
  }
}
export default Cursos;

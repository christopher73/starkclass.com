import React from "react";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Ciclo from "./Ciclo";

class Ciclos extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className=' text-center'>
        <div className='jumbotron pt-3 path_gris'>
          <div id='ciclosuni' />

          <div className='row py-4'>
            <div className='col-12 text-center'>
              <h1 id='titulo_stark' className='nuestrociclo'>
                Nuestros Ciclos
              </h1>
              <br />
            </div>
          </div>
          <div className='container'>
            <div className='row'>
              <Ciclo
                universityName='Ciclo Pre Ulima'
                isCompleted={true}
                stars='4.70'
                users='517'
                imagePath='./assets/img/1.png'
                linkPath='/ciclo-pre-lima'
              />
              <Ciclo
                universityName='Ciclo San Marcos'
                isCompleted={true}
                stars='4.92'
                users='1474'
                imagePath='./assets/img/2.png'
                linkPath='/ciclo-san-marcos'
              />
              <Ciclo
                universityName='Ciclo Pre Católica'
                isCompleted={false}
                stars='0'
                users='0'
                imagePath='./assets/img/4.png'
                linkPath='/'
              />
              <Ciclo
                universityName='Ciclo Pre Pacífico'
                isCompleted={false}
                stars='0'
                users='0'
                imagePath='./assets/img/3.png'
                linkPath='/'
              />
            </div>
          </div>

          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Ciclos);

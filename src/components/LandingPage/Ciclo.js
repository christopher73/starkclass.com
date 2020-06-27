import React from "react";
import { Link } from "react-router-dom";

export default function Ciclo({
  universityName,
  isCompleted,
  stars,
  users,
  imagePath,
  linkPath,
}) {
  return (
    <div className='col-md-6 col-sm-12 col-12'>
      <div
        className='card'
        style={{
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <div className='card-img-top' style={{ marginTop: 15 }}>
          <Link to={linkPath}>
            <div>
              <img src={imagePath} className='img-fluid' alt='clasesa' />
            </div>
          </Link>
        </div>
        <div className='card-body'>
          <h4 className='text-colum-bold' style={{ fontSize: 30 }}>
            {universityName}
          </h4>
          <div
            style={{
              height: 50,
              width: "100%",
              marginBottom: 0,
              paddingTop: 15,
            }}
          >
            {isCompleted ? (
              <p style={{ alignSelf: "center", fontSize: 20 }}>
                <img
                  src='./assets/icons/check.png'
                  alt='check'
                  width='30'
                  style={{ marginRight: 10 }}
                />
                Completo
              </p>
            ) : (
              <p style={{ alignSelf: "center", fontSize: 20 }}>
                <img
                  src='./assets/icons/loading5.gif'
                  alt='cargando'
                  width='30'
                  style={{ marginRight: 10 }}
                />
                En proceso
              </p>
            )}
          </div>
          <div
            className='my-2'
            style={{
              width: "100%",
            }}
          >
            <p
              style={{
                alignSelf: "center",
                marginBottom: "0",
                fontSize: 20,
              }}
            >
              <img
                src='./assets/icons/star.png'
                alt='check'
                width='30'
                className='my-auto'
                style={{ marginRight: 10 }}
              />
              {stars}
            </p>
          </div>
          <div
            style={{
              height: 30,
              width: "100%",
              marginBottom: 0,
              paddingTop: 0,
            }}
          >
            <p style={{ alignSelf: "center", fontSize: 20 }}>
              <img
                src='./assets/icons/people.png'
                alt='check'
                width='30'
                style={{ marginRight: 10 }}
              />
              {users}
            </p>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      </div>
    </div>
  );
}

import React from "preact";

const Clients = (props) => {
  const title = props.title;
  return (
    <div className="clients">
      <div className="wrapper">
        <h3 className="clients__title title">{title}</h3>
        <div className="clients__list">
          <div className="clients__img">
            <img src="/assets/images/svg/logo-facebook.svg" alt="Facebook logo" />
          </div>
          <div className="clients__img">
            <img src="/assets/images/svg/airBaltic.svg" alt="airBaltic logo" />
          </div>
          <div className="clients__img">
            <img src="/assets/images/LU logotips 2.png" alt="LU logo" />
          </div>
          <div className="clients__img">
            <img src="/assets/images/Delfi logotips 2.png" alt="Delfi logo" />
          </div>
          <div className="clients__img">
            <img src="/assets/images/TVNET logotips 2.png" alt="TVNET logo" />
          </div>
          <div className="clients__img">
            <img src="/assets/images/svg/logo-rtu.svg" alt="RTU logo" />
          </div>
          <div className="clients__img">
            <img src="/assets/images/LIAA logotips 2.png" alt="LIAA logo" />
          </div>
          <div className="clients__img">
            <img src="/assets/images/svg/Tet_logo.svg" alt="TET logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

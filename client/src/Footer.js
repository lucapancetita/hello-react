import React from 'react';

// footer component
const Footer = () => {
  return (
    <div className="text-center mb-3">
      <hr />
      <h4 className="text-muted">Hello React</h4>
      <h6 className="text-muted">Haga click en el logo de GitHub para ver otros trabajos :)</h6>
      <a href="https://github.com/lucapancetita">
        <i className="fa fa-github fa-3x text-dark"></i>
      </a>
    </div>
  );
};

export default Footer;

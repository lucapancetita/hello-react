import React from 'react';

// header component
// con title prop
const Header = ({ title }) => {
  return (
    <nav className="justify-content-center navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="https://www.youtube.com/watch?v=TTui3shLRPk&ab_channel=BrickExperimentChannel">{title}</a>
    </nav>
  );
};

export default Header;

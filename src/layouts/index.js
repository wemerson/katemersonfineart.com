import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import github from '../img/github-icon.svg';
import logo from '../img/logo.svg';
import './all.sass';

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="title">
          Kat Emerson Fine Art
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About the Artist
        </Link>
        
      </div>
      <div className="navbar-end">
        
      </div>
    </div>
  </nav>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Kat Emerson Fine Art" />
    <Navbar />
    <div>{children()}</div>
    <footer class="footer">&nbsp;</footer>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

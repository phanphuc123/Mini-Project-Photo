import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import PropTypes from "prop-types";
import "./Header.scss";
Header.propTypes = {};

function Header() {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              className="header__link header__title"
              href="https://www.youtube.com/watch?v=MpD8vxfkzas&list=PLeS7aZkL6GOvCz3GiOtvtDXChJRuebb7S&index=7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ease Frontend
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="header__link"
              to="/photos"
              activeClassName="header__link--active"
            >
              Redux Projct
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;

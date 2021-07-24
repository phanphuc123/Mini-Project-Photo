import React from "react";
import Banner from "../../../../components/Banner";
import Images from "../../../../constans/images";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

MainPage.propTypes = {};
function MainPage() {
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
      <Container className="text-center">
        <Link to="/photos/app">Add new photo</Link>
      </Container>
    </div>
  );
}

export default MainPage;

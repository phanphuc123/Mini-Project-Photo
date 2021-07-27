import React from "react";
import PropTypes from "prop-types";
import Banner from "components/Banner";
import Images from "constants/images";
import { Link, useHistory, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import PhotoList from "features/Photo/components/PhotoList";
import { removePhoto } from "features/Photo/PhotoSlice";

MainPage.propTypes = {};
function MainPage() {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const handlePhotoEditClick = (photo) => {
    const editPhotoUrl = `/photos/${photo.id}`;
    history.push(editPhotoUrl);
  };
  const handlePhotoRemoveClick = (photo) => {
    const removePhotoId = photo.id;
    console.log("removePhotoId", removePhotoId);
    const action = removePhoto(removePhotoId);
    dispatch(action);
    console.log("list of photo:", photos);
  };
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
      <Container className="text-center">
        <Link to="/photos/app">Add new photo</Link>
        <div>
          <PhotoList
            photoList={photos}
            onPhotoEditClick={handlePhotoEditClick}
            onPhotoRemoveClick={handlePhotoRemoveClick}
          />
        </div>
      </Container>
    </div>
  );
}

export default MainPage;

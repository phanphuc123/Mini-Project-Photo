import React from "react";
import Banner from "components/Banner";
import PropTypes from "prop-types";
import PhotoFrom from "components/PhotoForm";
import "./AddEdit.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/PhotoSlice";
import { useHistory, useParams } from "react-router-dom";
AddEditPage.propTypes = {};

function AddEditPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();

  const isAddMode = !photoId;

  const editPhoto = useSelector((state) =>
    state.photos.find((photo) => photo.id === +photoId)
  );

  const initialValues = isAddMode
    ? { title: "", categoryId: null, photo: "" }
    : editPhoto;

  const handelSubmit = (value) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          const action = addPhoto(value);
          dispatch(action);
        } else {
          const action = updatePhoto(value);
          dispatch(action);
        }

        history.push("/photos");
        resolve();
      }, 2000);
    });
  };
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />
      <div className="photo-edit__form">
        <PhotoFrom
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handelSubmit}
        />
      </div>
    </div>
  );
}

export default AddEditPage;

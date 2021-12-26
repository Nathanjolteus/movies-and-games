import React, { Fragment, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
import { createProfile } from "../../actions/profile";
import { Form, Button } from "react-bootstrap";

const Profile = ({
  createProfile,
  getCurrentProfile,
  history,
  auth: { user },
  profile: { profile },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  const [formData, setFormData] = useState({
    bio: '',
    favoritemovie: '',
    favoritegame: '',
    favoritetvseries: ''
  });

  const { bio, favoritemovie, favoritegame, favoritetvseries } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <div className='profile'>
        <div className='profile-item'>
      <h1>Welcome {user && user.name}</h1>
      <h1>Create your profile!</h1>
      </div>
      {profile ? (
        <div>
          {/* <h3>A little bit about myself:{profile.bio}</h3>
          <h2>Favorite Movie:{profile.favoritemovie}</h2>
          <h2>Favorite Game:{profile.favoritegame}</h2>
          <h2>Favorite TV Series:{profile.favoritetvseries}</h2> */}
       
        </div>
      ) : null}
      {/* {profile !== null ? (
        <Fragment>has</Fragment>
      ) : ( */}
      </div>
      <Fragment>
        
        <p className='about-item'>
          Enter your favorite movies, games, and tv series; and a fun fact about
          yourself.
        </p>
    

        {/* <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <textarea
              placeholder="Your bio here"
              name="bio"
              value={bio}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your favorite movies"
              name="favoritemovie"
              value={favoritemovie}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your favorite games"
              name="favoritegame"
              value={favoritegame}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Your favorite TV series"
              name="favoritetvseries"
              value={favoritetvseries}
              onChange={(e) => onChange(e)}
            />
          </div>
        </form>
        <button onClick={onSubmit}>Submit</button> */}

        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              type="text"
              placeholder="bio"
              name="bio"
              value={bio}
              onChange={(e) => onChange(e)}
            />
            <Form.Text className="text-muted">
              A fun fact about yourself or where you are from
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Favorite Movie </Form.Label>
            <Form.Control
              type="text"
              placeholder="favorite movie"
              name="favoritemovie"
              value={favoritemovie}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Favorite TV Series</Form.Label>
            <Form.Control
              type="text"
              placeholder="favorite tv series"
              name="favoritetvseries"
              value={favoritetvseries}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Favorite Game</Form.Label>
            <Form.Control
              type="text"
              placeholder="favorite game"
              name="favoritegame"
              value={favoritegame}
              onChange={(e) => onChange(e)}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form>
      </Fragment>
    </Fragment>
  );
};

Profile.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  createProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile, createProfile })(
  withRouter(Profile)
);

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { seeUserGallery } from "../actions/postActions";
import { Redirect } from "react-router-dom";

import DataProfile from "../components/Profiles/DataProfile";
import Gallery from "../components/Profiles/Gallery";

function Profile({ posts, seeUserGallery }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const username = user?.result?.username;
  const postsLength = posts.length;

  useEffect(() => {
    seeUserGallery(username);
  }, []);

  if (!localStorage.getItem("profile")) {
    return <Redirect to="/auth" />;
  }

  return (
    <div className="lg:px-64 md:px-16 px-3">
      <DataProfile userPosts={postsLength} />
      <Gallery posts={posts} />
    </div>
  );
}

const mapStateToProps = (state) => ({
  posts: state.gallery.userGallery,
});

export default connect(mapStateToProps, { seeUserGallery })(Profile);

import React, { useEffect } from "react";
import User from "../components/User/User";
import { visitUser } from "../actions/userAction";
import { seeUserGallery } from "../actions/postActions";

import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import UserGallery from "../components/User/UserGallery";

function UserDetail({ visitUser, user, posts, seeUserGallery }) {
  const data = user[0];
  const userPosts = posts.length;

  const { username } = useParams();
  useEffect(() => {
    visitUser(username);
    seeUserGallery(username);
  }, []);
  return (
    <div className="lg:px-64 md:px-16 px-3">
      {data ? (
        <>
          <User user={data} userPosts={userPosts} />
          <UserGallery data={posts} />
        </>
      ) : (
        <>
          <h1 className="text-center relative mt-72 text-4xl font-semibold">
            Username {username} tidak ditemukan
          </h1>
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user.users,
  posts: state.gallery.userGallery,
});

export default connect(mapStateToProps, { visitUser, seeUserGallery })(
  UserDetail
);

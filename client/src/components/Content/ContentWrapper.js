import React, { useEffect } from "react";
import Content from "./Content";
import { getPosts } from "../../actions/postActions";
import { connect } from "react-redux";

function ContentWrapper({ posts, getPosts }) {
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      {posts?.map(
        ({ image, username, fullName, loves, hashtags, caption, _id }) => (
          <Content
            key={_id}
            img={image}
            username={username}
            fullName={fullName}
            loves={loves}
            hashtags={hashtags}
            caption={caption}
            id={_id}
          />
        )
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  posts: state.post.posts,
});

export default connect(mapStateToProps, { getPosts })(ContentWrapper);

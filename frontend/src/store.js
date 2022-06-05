import { configureStore } from "@reduxjs/toolkit"
import { likeReducer, myPostsReducer, userPostsReducer } from "./Reducers/Post";
import { allUsersReducer, postofFollowingReducer, UserProfileReducer, userReducer } from "./Reducers/User";

const store = configureStore( {
  reducer: {
      user: userReducer,
      postOfFollowing : postofFollowingReducer,
      allUsers : allUsersReducer,
      like: likeReducer,
      myPosts: myPostsReducer,
      userProfile: UserProfileReducer,
      userPosts: userPostsReducer,
  }
})

export default store;

import React from "react";

import "./user.styles.css";

class UserPage extends React.Component {
  render() {
    const { user } = this.props.location.state;

    const name = new Array(`${user.firstName} ${user.surname}`);

    const userFriends = user.friends.map(friend => Object.keys(friend));
    const mergedUserFriends = [].concat.apply([], userFriends);

    const friendsOfFriends = user.friends.map(friend => Object.values(friend));
    const merged = [].concat.apply([], friendsOfFriends);
    const mergedFriendsOfFriends = [].concat.apply([], merged);

    const filteredFriends = mergedFriendsOfFriends.filter(
      (name, index) => mergedFriendsOfFriends.indexOf(name) === index
    );

    const filteredSuggestedFriends = [
      ...new Set(
        mergedFriendsOfFriends.filter(
          (value, index, self) => self.indexOf(value) !== index
        )
      )
    ];

    const someFriends = filteredSuggestedFriends.filter(
      e => name.indexOf(e) === -1
    );

    const allFilteredFriends = someFriends.filter(
      e => mergedUserFriends.indexOf(e) === -1
    );

    let img;
    if (user.gender === "female") {
      img = (
        <img
          src={require("../../img/female-icon.png")}
          alt="icon"
          className="user-img"
        />
      );
    } else {
      img = (
        <img
          src={require("../../img/male-icon.png")}
          alt="icon"
          className="user-img"
        />
      );
    }
    return (
      <div className="user-page">
        <div className="user">
          <div className="user-data">
            {img}
            <h2 className="user-name">{`${user.firstName} ${user.surname}`}</h2>
            <p>Age: {user.age}</p>
          </div>
          <div className="user-friends">
            <h2>User friends</h2>
            {mergedUserFriends.map(friend => (
              <p className="friends-names" key={friend}>
                {friend}
              </p>
            ))}
          </div>
          <div className="friends-of-friends">
            <h2>Friends of friends</h2>
            {filteredFriends.map(filteredFriend => (
              <p key={filteredFriend}>{filteredFriend}</p>
            ))}
          </div>
          <div className="suggested-friends">
            <h2>Suggested friends</h2>
            {allFilteredFriends.length ? (
              allFilteredFriends.map(oneSuggesterFriend => (
                <p key={oneSuggesterFriend}>{oneSuggesterFriend}</p>
              ))
            ) : (
              <span>No suggested friends</span>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default UserPage;

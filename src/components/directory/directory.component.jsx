import React from "react";

import UserList from "../user-list/user-list.component";
import {listOfUsers} from "../../data/data.component";

import "./directory.styles.css";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      users: listOfUsers
    };
  }

  render() {
    const { users } = this.state;

    const userNames = {};
    users.map(
      user => (userNames[user.id] = `${user.firstName} ${user.surname}`)
    );

    const otherFriends = {};
    users.map(
      user =>
        (otherFriends[userNames[user.id]] = user.friends.map(
          id => userNames[id]
        ))
    );

    const modifiedUsers = users.map(user => {
      const friendsIds = user.friends;

      const modifiedUser = {
        ...user,
        friends: friendsIds.map(id => {
          const friend = {};
          friend[userNames[id]] = otherFriends[userNames[id]];
          return friend;
        })
      };
      return modifiedUser;
    });

    return (
      <div className="directory-menu">
        {modifiedUsers.map(user => (
          <UserList key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

export default Directory;

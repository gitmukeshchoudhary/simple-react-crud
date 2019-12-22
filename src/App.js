import React, { useState, Fragment } from "react";
import AddUserForm from "./views/AddUserForm";
import EditUserForm from "./views/EditUserForm";
import ViewUsers from "./views/ViewUsers";
import "./App.css";

const App = () => {
  // Initial users data
  const usersData = [
    {
      id: 1,
      profile:
        "https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png",
      email: "johnwick1@gmail.com",
      userName: "johnwick1"
    },
    {
      id: 2,
      profile:
        "https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png",
      email: "johnwick2@gmail.com",
      userName: "johnwick2"
    },
    {
      id: 3,
      profile:
        "https://i0.wp.com/365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png",
      email: "johnwick3@gmail.com",
      userName: "johnwick3"
    }
  ];

  // Initial form state
  const initialFormState = { id: null, profile: "", email: "", userName: "" };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  // Add new user
  const addUser = user => {
    user.id = users.length + 1;
    const newUsersData = [...users, user];
    setUsers(newUsersData);
  };

  // Delete the existing user by id
  const deleteUser = id => {
    setEditing(false);
    setUsers(users.filter(user => user.id !== id));
  };

  // Update the current user
  const updateUser = (id, updatedUser) => {
  	setEditing(false);
  	setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  }

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, profile: user.profile, email: user.email, userName: user.userName });
  };
 
 

  return (
    <div className="col-md-10 mx-auto my-5">
      <h1 className="text-center">React CRUD App</h1>
      <hr />
      <div className="row my-5">
        <div className="col-sm-12 col-md-5 col-lg-5 my-3">
          <div className="box p-4">
            {editing ? (
              <Fragment>
                <h2>Edit user</h2>
                <EditUserForm
                  editing={editing}
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </Fragment>
            ) : (
              <Fragment>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser} />
              </Fragment>
            )}
          </div>
        </div>
        <div className="col-sm-12 col-md-7 col-lg-7 my-3">
          <div className="box p-4">
            <h2>View users</h2>
              <ViewUsers
                users={users}
                editRow={editRow}
                deleteUser={deleteUser}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

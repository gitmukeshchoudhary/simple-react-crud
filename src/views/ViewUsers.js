import React from "react";

// View users list
const ViewUsers = (props) => {
  return  <div className="row mx-0 px-0 view-users">
    {props.users.length ? (
      props.users.map(user => (
        <div className="col -sm-12 col-dm-6 col-lg-6" key={user.id}>
          <div className="user-profile my-3 p-3 text-center">
            <img src={user.profile} alt="profile"/>
            <p className="my-2"><b>Email:</b> {user.email}</p>
            <p className="my-2"><b>User name: </b>{user.userName}</p>
            <i
              className="fas fa-edit edit-icon px-2"
              onClick={() => {
                props.editRow(user);
              }}
            ></i>
            <i
              className="fas fa-trash delete-icon px-2"
              onClick={() => {
                props.deleteUser(user.id);
              }}
            ></i>
          </div>
        </div>
      ))
    ) : (
      <h5>No users</h5>
    )}
  </div>;
};

export default ViewUsers;

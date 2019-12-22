import React, { useState } from "react";

const AddUserForm = props => {
  // Initial form state
  const initialFormState = { id: null, profile: "", email: "", userName: "" };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  // Add user form
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.profile || !user.email || !user.userName) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <div className="my-4">
        <div className="form-group">
          <label htmlFor="profile">Profile:</label>
          <input
            id="profile"
            type="text"
            name="profile"
            className="form-control"
            placeholder="Enter your profile url"
            value={user.profile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="userName">User name:</label>
          <input
            id="userName"
            type="text"
            name="userName"
            className="form-control"
            placeholder="Enter your user name"
            value={user.userName}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary my-3">
          Add user
        </button>
      </div>
    </form>
  );
};

export default AddUserForm;

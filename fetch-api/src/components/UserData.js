import React from "react";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, name, email } = curUser;
        const {street,suite,zipcode}=curUser.address;
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{email}</td>
            <td>{street} {suite} { "," } {zipcode}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;

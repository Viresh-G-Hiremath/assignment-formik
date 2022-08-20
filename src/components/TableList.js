import React from "react";

export default function TableList({ users }) {
  return (
    <>
      {users.map((user) => (
        <tr>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.sex}</td>
          <td>{user.mobile}</td>
          <td>
            {user.gtype} : {user.gid}
          </td>
          <td>
            {user.gdlabel} : {user.gname}
          </td>
          <td>{user.email}</td>
          <td>{user.enumber}</td>
          <td>{user.address}</td>
          <td>{user.state}</td>
          <td>{user.city}</td>
          <td>{user.country}</td>
          <td>{user.pincode}</td>
          <td>{user.occupation}</td>
          <td>{user.religion}</td>
          <td>{user.mstatus}</td>
          <td>{user.bloodGroup}</td>
          <td>{user.nationality}</td>
        </tr>
      ))}
    </>
  );
}

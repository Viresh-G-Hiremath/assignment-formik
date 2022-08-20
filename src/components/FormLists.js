import React from "react";
import "./FormList.css";
import TableList from "./TableList";

export default function FormLists({ users }) {
  console.log(users);

  return (
    <div className="FormList">
      <table>
        <tr>
          <th>Name</th>
          <th>DOP / Age</th>
          <th>Sex</th>
          <th>Mobile</th>
          <th>Govt ID</th>
          <th>Guardian Details</th>
          <th>Email</th>
          <th>Emergency Number</th>
          <th>Address</th>
          <th>State</th>
          <th>City</th>
          <th>Country</th>
          <th>Pincode</th>
          <th>Occupation</th>
          <th>Religion</th>
          <th>Marital Status</th>
          <th>Blood Group</th>
          <th>Nationality</th>
        </tr>
        <TableList users={users} />
      </table>
    </div>
  );
}

import { useFormik } from "formik";
import React from "react";

export default function Form({ setUsers, users }) {
  const initialValues = {
    name: "",
    email: "",
  };
  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      setUsers([...users, { ...values, id: Math.random() * 1000 }]);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h5>Personal Details</h5>
        <label>
          <span>Name *</span>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Date of Birth or Age *</span>
          <input
            type="text"
            name="age"
            value={values.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Sex *</span>
          <select
            name="sex"
            value={values.sex}
            onChange={handleChange}
            required
          >
            <option>Enter Sex</option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </label>
        <label>
          <span>Mobile</span>
          <input
            type="number"
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Govt Issued ID</span>
          <select name="gtype" value={values.gtype} onChange={handleChange}>
            <option>ID Type</option>
            <option value="abcddd">abcddd</option>
            <option value="efghac">efghav</option>
            <option value="affqfaa">affqfadv</option>
            <option value="veqvweqaa">veqvweqad</option>
            <option value="avaeqeaa">avaeqead</option>
          </select>
          <input
            type="text"
            name="gid"
            value={values.gid}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <h5>Contact Details</h5>
        <label>
          <span>Guardian Details</span>
          <select name="gdlabel" value={values.gdlabel} onChange={handleChange}>
            <option>Enter Label</option>
            <option value="mr">Mr.</option>
            <option value="ms">Ms.</option>
          </select>
          <input
            type="text"
            name="gname"
            value={values.gname}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Emergency Contact Number</span>
          <input
            type="number"
            name="enumber"
            value={values.enumber}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <h5>Address Details</h5>
        <label>
          <span>Address</span>
          <input
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>State</span>
          <select name="state" value={values.state} onChange={handleChange}>
            <option>Enter State</option>
            <option value="abcd">abcd</option>
            <option value="efgh">efgh</option>
            <option value="affqf">affqf</option>
            <option value="veqvweq">veqvweq</option>
            <option value="avaeqe">avaeqe</option>
          </select>
        </label>
        <label>
          <span>City</span>
          <select name="city" value={values.city} onChange={handleChange}>
            <option>Enter city/town/village</option>
            <option value="abcddd">abcddd</option>
            <option value="efghac">efghav</option>
            <option value="affqfaa">affqfadv</option>
            <option value="veqvweqaa">veqvweqad</option>
            <option value="avaeqeaa">avaeqead</option>
          </select>
        </label>
        <label>
          <span>Country</span>
          <input
            type="text"
            name="country"
            value={values.country}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Pincode</span>
          <input
            type="number"
            name="pincode"
            value={values.pincode}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <h5>Other Details</h5>
        <label>
          <span>Occupation</span>
          <input
            type="text"
            name="occupation"
            value={values.occupation}
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Religion</span>
          <select
            name="religion"
            value={values.religion}
            onChange={handleChange}
          >
            <option>Enter Religion</option>
            <option value="abcddd">abcddd</option>
            <option value="efghac">efghav</option>
            <option value="affqfaa">affqfadv</option>
            <option value="veqvweqaa">veqvweqad</option>
            <option value="avaeqeaa">avaeqead</option>
          </select>
        </label>
        <label>
          <span>Marital Status</span>
          <select name="mstatus" value={values.mstatus} onChange={handleChange}>
            <option>Enter Marital Status</option>
            <option value="abcddd">abcddd</option>
            <option value="efghac">efghav</option>
            <option value="affqfaa">affqfadv</option>
            <option value="veqvweqaa">veqvweqad</option>
            <option value="avaeqeaa">avaeqead</option>
          </select>
        </label>
        <label>
          <span>Blood Group</span>
          <select
            name="bloodGroup"
            value={values.bloodGroup}
            onChange={handleChange}
          >
            <option>Group</option>
            <option value="abcddd">abcddd</option>
            <option value="efghac">efghav</option>
            <option value="affqfaa">affqfadv</option>
            <option value="veqvweqaa">veqvweqad</option>
            <option value="avaeqeaa">avaeqead</option>
          </select>
        </label>
        <label>
          <span>Nationality</span>
          <input
            type="text"
            name="nationality"
            value={values.nationality}
            onChange={handleChange}
          />
        </label>
      </div>
      <button type="submit">submit</button>
    </form>
  );
}

import { useFormik } from "formik";
import React from "react";
import "./Form.css";

export default function Form({ setUsers, users }) {
  const initialValues = {
    name: "",
    age: "",
    sex: "",
    mobile: "",
    gtype: "",
    gid: "",
    gdlabel: "",
    gname: "",
    email: "",
    enumber: "",
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: "",
    occupation: "",
    religion: "",
    mstatus: "",
    bloodGroup: "",
    nationality: "",
  };
  const { values, handleSubmit, handleChange, resetForm } = useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      setUsers([...users, { ...values, id: Math.random() * 1000 }]);
      resetForm();
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <h5>Personal Details</h5>
      <div className="details1">
        <label>
          <span>Name *</span>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Enter Name"
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
            placeholder="DD/MM/YYYY or Age in Years"
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
            <option hidden>Enter Sex</option>
            <option value="Male">male</option>
            <option value="Female">female</option>
          </select>
        </label>
        <label>
          <span>Mobile</span>
          <input
            type="number"
            name="mobile"
            value={values.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile"
          />
        </label>
        <label>
          <span>Govt Issued ID</span>
          <select name="gtype" value={values.gtype} onChange={handleChange}>
            <option hidden>ID Type</option>
            <option value="Aadhaar Card">Aadhaar Card</option>
            <option value="Voter ID">Voter ID</option>
            <option value="PAN Card">PAN Card</option>
          </select>
          <input
            type="text"
            name="gid"
            value={values.gid}
            onChange={handleChange}
            placeholder="Enter Govt ID"
          />
        </label>
      </div>
      <h5>Contact Details</h5>
      <div className="details2">
        <label>
          <span>Guardian Details</span>
          <select name="gdlabel" value={values.gdlabel} onChange={handleChange}>
            <option hidden>Enter Label</option>
            <option value="Mr">Mr.</option>
            <option value="Ms">Ms.</option>
          </select>
          <input
            type="text"
            name="gname"
            value={values.gname}
            onChange={handleChange}
            placeholder="Enter Guardian Name"
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Enter Email"
          />
        </label>
        <label>
          <span>Emergency Contact Number</span>
          <input
            type="number"
            name="enumber"
            value={values.enumber}
            onChange={handleChange}
            placeholder="Enter Emergency Number"
          />
        </label>
      </div>
      <h5>Address Details</h5>
      <div className="details3">
        <label>
          <span>Address</span>
          <input
            type="text"
            name="address"
            value={values.address}
            onChange={handleChange}
            placeholder="Enter Address"
          />
        </label>
        <label>
          <span>State</span>
          <select name="state" value={values.state} onChange={handleChange}>
            <option hidden>Enter State</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>
        </label>
        <label>
          <span>City</span>
          <select name="city" value={values.city} onChange={handleChange}>
            <option hidden>Enter city/town/village</option>
            <option value="Adilabad">Adilabad</option>
            <option value="Alampur">Alampur</option>
            <option value="Andol">Andol</option>
            <option value="Asifabad">Asifabad</option>
            <option value="Balapur">Balapur</option>
            <option value="Banswada">Banswada</option>
            <option value="Bellampalli">Bellampalli</option>
            <option value="Bhadrachalam">Bhadrachalam</option>
            <option value="Bhadradri Kothagudem">Bhadradri Kothagudem</option>
            <option value="Bhaisa">Bhaisa</option>
            <option value="Bhongir">Bhongir</option>
            <option value="Bodhan">Bodhan</option>
            <option value="Chandur">Chandur</option>
            <option value="Chatakonda">Chatakonda</option>
            <option value="Dasnapur">Dasnapur</option>
            <option value="Devarkonda">Devarkonda</option>
            <option value="Dornakal">Dornakal</option>
            <option value="Farrukhnagar">Farrukhnagar</option>
            <option value="Gaddi Annaram">Gaddi Annaram</option>
            <option value="Gadwal">Gadwal</option>
            <option value="Ghatkesar">Ghatkesar</option>
            <option value="Gopalur">Gopalur</option>
            <option value="Gudur">Gudur</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Jagtial">Jagtial</option>
            <option value="Jangaon">Jangaon</option>
            <option value="Jangoan">Jangoan</option>
          </select>
        </label>
        <label>
          <span>Country</span>
          <input
            type="text"
            name="country"
            value={values.country}
            onChange={handleChange}
            placeholder="Enter Country"
          />
        </label>
        <label>
          <span>Pincode</span>
          <input
            type="number"
            name="pincode"
            value={values.pincode}
            onChange={handleChange}
            placeholder="Enter pincode"
          />
        </label>
      </div>
      <h5>Other Details</h5>
      <div className="details4">
        <label>
          <span>Occupation</span>
          <input
            type="text"
            name="occupation"
            value={values.occupation}
            onChange={handleChange}
            placeholder="Enter occupation"
          />
        </label>
        <label>
          <span>Religion</span>
          <select
            name="religion"
            value={values.religion}
            onChange={handleChange}
          >
            <option hidden>Enter Religion</option>
            <option value="Hinduism">Hinduism</option>
            <option value="Islam">Islam</option>
            <option value="Sikhism">Sikhism</option>
            <option value="Christianity">Christianity</option>
            <option value="Buddhism">Buddhism</option>
          </select>
        </label>
        <label>
          <span>Marital Status</span>
          <select name="mstatus" value={values.mstatus} onChange={handleChange}>
            <option hidden>Enter Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Widowed">Widowed</option>
            <option value="Separated">Separated</option>
            <option value="Divorced">Divorced</option>
          </select>
        </label>
        <label>
          <span>Blood Group</span>
          <select
            name="bloodGroup"
            value={values.bloodGroup}
            onChange={handleChange}
          >
            <option hidden>Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
        </label>
        <label>
          <span>Nationality</span>
          <input
            type="text"
            name="nationality"
            value={values.nationality}
            onChange={handleChange}
            placeholder="Enter Nationality"
          />
        </label>
      </div>
      <div className="buttons">
        <button type="reset" onClick={resetForm}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

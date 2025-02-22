import React, { useState } from "react";
import { BASE_URL } from "../CONST";
import "../styles/BranchModal.css";
import { useParams } from "react-router-dom";

const UserModal = ({ onClose }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "L6",
    "L7",
  ]);
  const [role, setRole] = useState(roles[0]);

  const handleUser = async (e) => {
    e.preventDefault();

    const data = {
      name,
      email,
      password,
      role,
      branch: id,
    };

    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    } finally {
      window.location.assign(`/branch/${id}`);
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Create New User</h2>
          <p onClick={onClose} className="modal-close-button">
            ×
          </p>
        </div>

        <form className="form-fields" onSubmit={handleUser}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="input-field"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="input-field"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="input-field"
              required
            />
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              {roles.map((role, index) => {
                return <option key={index}>{role}</option>;
              })}
            </select>
          </div>

          <div className="button-group">
            <button
              type="button"
              onClick={onClose}
              className="button button-cancel"
            >
              Cancel
            </button>
            <button type="submit" className="button button-primary">
              Create User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;

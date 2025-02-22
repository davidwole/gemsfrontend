import React, { useState } from "react";
import { BASE_URL } from "../CONST";
import "../styles/BranchModal.css";

const BranchModal = ({ onClose }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [newBranchName, setNewBranchName] = useState("");

  const handleBranch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/branches`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          name: newBranchName,
        }),
      });

      const data = await response.json();
    } catch (error) {
      console.error("Error:", error);
      throw error;
    } finally {
      window.location.assign("/");
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h2 className="modal-title">Create New Branch</h2>
          <p onClick={onClose} className="modal-close-button">
            ×
          </p>
        </div>

        <form className="form-fields" onSubmit={handleBranch}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Branch Name"
              value={newBranchName}
              onChange={(e) => setNewBranchName(e.target.value)}
              className="input-field"
              required
            />
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
              Create Branch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BranchModal;

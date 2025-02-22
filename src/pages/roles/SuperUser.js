import { useState, useEffect } from "react";
import "../../index.css";
import { BASE_URL } from "../../CONST";
import "../../styles/SuperUser.css";
import { Link } from "react-router-dom";
import BranchModal from "../../components/BranchModal";
import DeleteModal from "../../components/DeleteModal";

export default function SuperUser({ user }) {
  const [branches, setBranches] = useState(false);
  const [branchID, setBranchID] = useState("");
  const [error, setError] = useState(false);
  const [addBranchPopup, setAddBranchPopUp] = useState(false);
  const [deleteBranchPopup, setDeleteBranchPopUp] = useState(false);
  const [newBranchName, setNewBranchName] = useState("");

  const fetchBranches = async () => {
    try {
      const response = await fetch(`${BASE_URL}/branches`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setBranches(data);
      setBranchID(data[0]._id);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchBranches();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Branches:</h3>
      {addBranchPopup && (
        <BranchModal onClose={() => setAddBranchPopUp(false)} />
      )}
      {deleteBranchPopup && (
        <DeleteModal
          id={branchID}
          name={branches.filter((branch) => branch._id == branchID).name}
          onClose={() => setDeleteBranchPopUp(false)}
        />
      )}
      <button onClick={() => setAddBranchPopUp(true)}>Add Branch</button>
      <div>
        {branches &&
          branches.map((branch) => {
            return (
              <div className="branch_item" key={branch._id}>
                <div className="branch_name">
                  <p>{branch.name}</p>
                </div>
                <div className="flex">
                  <Link to={`/branch/${branch._id}`}>
                    <button on>View Branch</button>
                  </Link>
                  <button
                    onClick={() => {
                      setDeleteBranchPopUp(true);
                      setBranchID(branch._id);
                    }}
                  >
                    Delete Branch
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

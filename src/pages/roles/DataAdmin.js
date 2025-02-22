import { useState, useEffect } from "react";
import "../../index.css";
import { BASE_URL } from "../../CONST";
import "../../styles/SuperUser.css";
import { Link } from "react-router-dom";

export default function DataAdmin() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [branches, setBranches] = useState(false);
  const [error, setError] = useState(false);

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
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

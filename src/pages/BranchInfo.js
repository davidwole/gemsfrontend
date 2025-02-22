import { useState, useEffect } from "react";
import { BASE_URL } from "../CONST";
import { useParams } from "react-router-dom";
import UserModal from "../components/UserModal";

export default function BranchInfo() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [branchName, setBranchName] = useState(false);
  const [addUserPopUp, setAddUserPopUp] = useState(false);
  const [users, setUsers] = useState(false);
  const { id } = useParams();

  const fetchBranches = async () => {
    try {
      const response = await fetch(`${BASE_URL}/branches`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await response.json();
      const result = data.filter((branch) => branch._id == id);
      setBranchName(result[0].name);
    } catch (error) {
      console.error("Error fetching branches:", error);
    }
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await response.json();
      setUsers(data.filter((user) => user.branch && user.branch._id === id));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchBranches();
    fetchUsers();
  }, []);

  return (
    <div>
      {branchName && <h1>{branchName} Branch</h1>}
      {user.role === "L1" && (
        <>
          <h3>Users: </h3>
          {addUserPopUp && <UserModal onClose={() => setAddUserPopUp(false)} />}
          <button onClick={() => setAddUserPopUp(true)}>Add Users</button>
          {users &&
            users.map((user) => {
              return (
                <p key={user._id}>
                  Name: {user.name} Email: {user.email} {user.role}
                </p>
              );
            })}
        </>
      )}
    </div>
  );
}

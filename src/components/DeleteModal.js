import { BASE_URL } from "../CONST";
import "../styles/BranchModal.css";

const DeleteModal = ({ id, name, onClose }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const deleteBranch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/branches/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      console.log("Branch deleted successfully");
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
          {/* <h2 className="modal-title">Create New Branch</h2>
          <p onClick={onClose} className="modal-close-button">
            ×
          </p> */}
        </div>

        <p>Are you sure you want to delete {name} Branch.</p>

        <form className="form-fields">
          <div className="button-group">
            <button
              type="button"
              onClick={onClose}
              className="button button-cancel"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="button button-primary button_delete"
              onClick={deleteBranch}
            >
              Delete Branch
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteModal;

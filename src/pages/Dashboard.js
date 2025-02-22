import AssistantDirector from "./roles/AssistantDirector";
import BranchDirector from "./roles/BranchDirector";
import DataAdmin from "./roles/DataAdmin";
import ExistingEmployee from "./roles/ExistingEmployee";
import ParentEnrolledChild from "./roles/ParentEnrolledChild";
import ProspectiveEmployee from "./roles/ProspectiveEmployee";
import ProspectiveParent from "./roles/ProspectiveParent";
import SuperUser from "./roles/SuperUser";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.removeItem("user");
    window.location.assign("/");
  };

  if (user.role == "L1") {
    return <SuperUser user={user} />;
  }

  if (user.role == "L2") {
    return <DataAdmin />;
  }

  if (user.role == "L3") {
    return <BranchDirector />;
  }

  if (user.role == "L4") {
    return <AssistantDirector />;
  }

  if (user.role == "L5") {
    return <ExistingEmployee />;
  }

  if (user.role == "L6") {
    return <ProspectiveEmployee />;
  }

  if (user.role == "L7") {
    return <ParentEnrolledChild />;
  }

  if (user.role == "L8") {
    return <ProspectiveParent />;
  }
}

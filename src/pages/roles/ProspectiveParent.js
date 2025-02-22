export default function ProspectiveParent() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.assign("/");
  };

  return (
    <div>
      <h1>I am a ProspectiveParent</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

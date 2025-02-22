export default function ProspectiveEmployee() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.assign("/");
  };

  return (
    <div>
      <h1>I am a ProspectiveEmployee</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

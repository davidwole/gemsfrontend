export default function ExistingEmployee() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.assign("/");
  };

  return (
    <div>
      <h1>I am a Existing Employee</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

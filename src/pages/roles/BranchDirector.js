export default function BranchDirector() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.assign("/");
  };

  return (
    <div>
      <h1>I am a Branch Director</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

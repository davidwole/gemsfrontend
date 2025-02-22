export default function ParentEnrolledChild() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.assign("/");
  };

  return (
    <div>
      <h1>I am a ParentEnrolledChild</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

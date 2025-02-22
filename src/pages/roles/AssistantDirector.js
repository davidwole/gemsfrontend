export default function AssistantDirector() {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.assign("/");
  };

  return (
    <div>
      <h1>I am a Assistant Director</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

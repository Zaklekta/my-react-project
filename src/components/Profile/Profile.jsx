import "./Profile.css";

function Profile({
  name,
  phone,
  email,
  status = "offline",
  hasPhysicalAdress,
}) {
  return (
    <div className={`profile ${hasPhysicalAdress ? "hasPhysicalAddress" : ""}`}>
      <h2>
        Name:{name}
        {hasPhysicalAdress && "🏡"}
      </h2>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Status: {status === "online" ? "online 🛜" : "offline 📴"}</p>
    </div>
  );
}
export default Profile;

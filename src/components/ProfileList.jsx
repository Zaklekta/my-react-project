import Profile from "./Profile/Profile";

function ProfileList({ list }) {
  return list.map((profile) => {
    return (
      <Profile
        key={profile.email}
        name={profile.name}
        phone={profile.phone}
        email={profile.email}
        status={profile.status}
        hasPhysicalAdress={profile.hasPhisicalAddress}
      />
    );
  });
}

export default ProfileList;

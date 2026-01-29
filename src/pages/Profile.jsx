import { UserProfile } from "@clerk/clerk-react";

function Profile() {
  return <UserProfile path="/auth/profile" routing="path" />;
}

export default Profile;

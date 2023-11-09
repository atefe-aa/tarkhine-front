import { useEffect } from "react";

function Profile() {
  useEffect(() => {
    document.title = ` ترخینه |  پروفایل`;
  }, []);
  return <div>profile</div>;
}

export default Profile;

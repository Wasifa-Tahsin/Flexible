import React from "react";
import Avatar from "../components/ui/Avatar";

const UserProfile = () => {
  return (
    <section className="w-7xl mx-auto py-10 px-4 flex justify-between">
        <div>
      <Avatar></Avatar>
      <h1 className="text-3xl font-semibold my-2">Rebeca Chenford</h1>
      <h2 className="text-5xl font-bold">I’m UX/UI Designer <br /> at Microtech 👋</h2>
    </div>
    <div>
        <img className="rounded-xl" src="../../public/images/userProfile.png" alt="" />
    </div>
    </section>
  );
};

export default UserProfile;

import React from "react";
import Avatar from "../components/ui/Avatar";
import { GiWorld } from "react-icons/gi";
import Tab2 from "../components/ui/Tab2";
import Works from "../components/Works/Works";


const UserProfile = () => {
  return (
   <section>
     <div className="container mx-auto py-10 px-4 flex justify-between">
        <div>
      <Avatar></Avatar>
      <h1 className="text-3xl font-semibold my-2">Rebeca Chenford</h1>
      <h2 className="text-5xl font-bold">I’m UX/UI Designer <br /> at Microtech 👋</h2>

      <div className="mt-5 flex items-center gap-2">
         <h2 className="text-gray-900"> On Terms</h2>
         <GiWorld className="text-xl text-green-600" />
      </div>
      <div className="mt-4 space-x-4">
        <button className="border py-2 px-4 rounded-xl">Follow</button>
        <button className=" py-2 px-4 rounded-xl bg-violet-400 text-white">Hire Me</button>
      </div>
    </div>
    <div>
        <img className="rounded-xl" src="../../public/images/userProfile.png" alt="" />
    </div>
   
    </div>

    <div className="  border-b-2 border-gray-100 ">
      
    <Tab2></Tab2>
     </div>
   <div>
     <Works></Works>
   </div>
   
   </section>
  );
};

export default UserProfile;

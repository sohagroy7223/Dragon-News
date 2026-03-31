import React from "react";
import SocialLogin from "./homeLayouts/SocialLogin";
import FindUs from "./FindUs";
import Q_zone from "./Q_zone";

const RightAside = () => {
  return (
    <div>
      <div className="space-y-5 ">
        <SocialLogin></SocialLogin>
        <FindUs></FindUs>
        <Q_zone></Q_zone>
      </div>
    </div>
  );
};

export default RightAside;

import React from "react";
import SocialLogin from "./homeLayouts/SocialLogin";
import FindUs from "./FindUs";

const RightAside = () => {
  return (
    <div className="space-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
    </div>
  );
};

export default RightAside;

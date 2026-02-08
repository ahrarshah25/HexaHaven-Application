import React, { useContext } from "react";
import { ContinueWithGoogle } from "../../Context API/GoogleLogin";

const SocialIcon = ({ type }) => {

  const userGoogleLogin = useContext(ContinueWithGoogle);

  return (
    <button
      onClick={userGoogleLogin} 
      className="
        flex items-center justify-center gap-3
        w-full py-3 rounded-xl
        border border-slate-200
        hover:bg-slate-50
        transition
      "
    >
      {type === "google" && (
        <span className="text-lg font-bold text-slate-700">G</span>
      )}

      <span className="text-sm font-medium text-slate-700">
        Continue with {type}
      </span>
    </button>
  );
};

export default SocialIcon;

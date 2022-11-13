import React from "react";
import auth from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading";

const GoogleLogin = () => {
  const navigate = useNavigate();
  let location = useLocation();
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  let from = location.state?.from?.pathname || "/";
  
  let errorElement;
  if (error) {
    errorElement = error?.message;
  }
  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="card w-96 bg-base-100 shadow-md mx-auto md:my-28">
      <div className="card-body">
        <p className="text-error">{errorElement}</p>
        <h4 className="text-xl text-center font-semibold">
          Sign in with Google
        </h4>
        <button className="btn btn-outline" onClick={() => signInWithGoogle()}>
          Google
        </button>
      </div>
    </div>
  );
};

export default GoogleLogin;

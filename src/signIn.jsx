import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EndBar from "./endBar.jsx";
import SideBar from "./sidebar.jsx";
import { supabase } from "./supabase-client.jsx";

const SignIn = ({ role }) => {
  const { plan } = useParams();
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [emailErrMsg, setEmailErrMsg] = useState("");
  let [passErrMsg, setPassErrMsg] = useState("");
  let [unmatchedEmailErr, setUnmatchedEmailErr] = useState("");
  let [price, setPrice] = useState("");
  async function saveCredentials() {
    const trimmedEmail = email.trim();
    const trimmedPass = password.trim();

    const isEmailInvalid =
      trimmedEmail.length == 0 ||
      !trimmedEmail.includes("@") ||
      !trimmedEmail.includes(".") ||
      trimmedEmail.length > 50;

    const isPassInvalid = trimmedPass.length == 0 || trimmedPass.length < 6;

    if (trimmedEmail.length == 0) {
      setEmailErrMsg("Please enter your email address!");
    } else if (!trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      setEmailErrMsg("Email must enter a valid email.");
    } else if (trimmedEmail.length > 50) {
      setEmailErrMsg("Email can not be that large!");
    } else {
      setEmailErrMsg("");
    }

    if (trimmedPass.length == 0) {
      setPassErrMsg("Please enter a password!");
    } else if (trimmedPass.length < 6) {
      setPassErrMsg("Password must be at least 6 characters");
    } else {
      setPassErrMsg("");
    }
    let { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      console.error(error.message);
    }
    let { data } = await supabase.from("credentials").select("*");
    data.map((D) => {
      if (email == D.Email && password == D.Password) {
        nav("/payment");
      }
    });

    if (
      !isEmailInvalid &&
      !isPassInvalid &&
      role.user.aud == "authenticated" &&
      role.user.email != email
    ) {
      setUnmatchedEmailErr("Email not matching!");
    }
  }

  function reDirectToSignUp() {
    nav(`/joinMembership/${plan}`);
  }

  function setPlanPrice() {
    if (plan == "Classic") {
      setPrice("3000");
    }

    if (plan == "Pro") {
      setPrice("3500");
    }

    if (plan == "Ultra-Pro") {
      setPrice("3500");
    }
  }

  useEffect(() => {
    setPlanPrice();
  }, []);

  let nav = useNavigate();

  return (
    <main className="gym-page membership-form-page">
      <SideBar
        click1={() => nav("/about")}
        click2={() => nav("/")}
        click3={() => nav("/moreinfo")}
        click4={() => nav("/memberships")}
      ></SideBar>

      <section className="membership-form-shell">
        <div className="membership-form-header">
          <h1 className="membership-form-title">Sign In To Continue</h1>
          <p className="membership-form-step">Access your membership</p>
        </div>

        <div className="membership-selected-plan-card">
          <div className="membership-selected-plan-info">
            <span className="membership-selected-plan-label">
              Selected Plan
            </span>
            <h2 className="membership-selected-plan-name">{plan}</h2>
          </div>
          <span className="membership-selected-plan-price">{price} PKR</span>
        </div>

        <h3 className="membership-member-details-title">Member Details</h3>

        <form className="membership-input-grid">
          <div className="membership-input-group">
            <label className="membership-input-label">Email Address</label>
            <input
              className={`membership-input-control ${
                emailErrMsg || unmatchedEmailErr
                  ? "membership-input-control-error"
                  : ""
              }`}
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error-message-name">
              {emailErrMsg || unmatchedEmailErr}
            </p>
          </div>

          <div className="membership-input-group">
            <label className="membership-input-label">Password</label>
            <input
              className={`membership-input-control ${
                passErrMsg ? "membership-input-control-error" : ""
              }`}
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="error-message-name">{passErrMsg}</p>
          </div>
        </form>

        <div className="membership-payment-row">
          <span className="membership-payment-note">
            Secure checkout • Plan amount charged monthly
          </span>
          <button
            className="membership-payment-btn"
            type="button"
            onClick={saveCredentials}
          >
            Sign In
          </button>
          <button className="sign-in" type="button" onClick={reDirectToSignUp}>
            Don't have an account? Sign up
          </button>
        </div>
      </section>

      <EndBar />
    </main>
  );
};

export default SignIn;

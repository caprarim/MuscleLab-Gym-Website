import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SideBar from "./sidebar.jsx";
import { supabase } from "./supabase-client.jsx";
import EndBar from "./endBar.jsx";

const planDetails = {
  "gym-access": {
    title: "Muscle Lab Gym Access",
    price: "PKR 3,000 / month",
  },
  cardio: { title: "Cardio", price: "PKR 3,500 / month" },
  zumba: { title: "Zumba Classes", price: "PKR 3,500 / month" },
};

const MemberShipPlans = () => {
  const { plan } = useParams();

  const nav = useNavigate();

  let nameRef = useRef(null);

  let emailRef = useRef(null);

  let phoneRef = useRef(null);

  let passRef = useRef(null);

  let [priceOfPlan, setPriceOfPlan] = useState("");

  let [fullName, setFullname] = useState("");

  let [email, setEmail] = useState("");

  let [pass, setPass] = useState("");

  let [tele, setTele] = useState("");

  let [nameErrorMessage, setNameErrorMessage] = useState("");

  let [passErrorMessage, setPassErrorMessage] = useState("");

  let [phoneErrorMessage, setPhoneErrorMessage] = useState("");

  let [emailErrorMessage, setEmailERrorMessage] = useState("");

  useEffect(() => {
    setPlanPrice();
  }, []);

  function setPlanPrice() {
    if (plan == "Classic") {
      setPriceOfPlan("3000");
    }

    if (plan == "Pro") {
      setPriceOfPlan("3500");
    }

    if (plan == "Ultra-Pro") {
      setPriceOfPlan("3500");
    }
  }

  function handleFNameChange(e) {
    setFullname(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePassChange(e) {
    setPass(e.target.value);
  }

  function handleTeleChange(e) {
    setTele(e.target.value);
  }

  async function saveCredentials() {
    const trimmedName = fullName.trim();
    const trimmedEmail = email.trim();
    const trimmedPhone = tele.trim();
    const digitsOnlyPhone = trimmedPhone.replace(/\D/g, "");
    const trimmedPass = pass.trim();
    const isNameInvalid = trimmedName.length == 0 || trimmedName.length > 20;
    const isEmailInvalid =
      trimmedEmail.length == 0 ||
      !trimmedEmail.includes("@") ||
      !trimmedEmail.includes(".") ||
      trimmedEmail.length > 50;
    const isPhoneInvalid =
      trimmedPhone.length == 0 ||
      digitsOnlyPhone.length < 10 ||
      digitsOnlyPhone.length > 13;
    const isPassInvalid = trimmedPass.length == 0 || trimmedPass.length < 6;

    if (trimmedName.length == 0) {
      setNameErrorMessage("Please enter your full name!");
    } else if (trimmedName.length > 20) {
      setNameErrorMessage("Name can not be that large!");
    } else {
      setNameErrorMessage("");
    }

    if (trimmedEmail.length == 0) {
      setEmailERrorMessage("Please enter your email address!");
    } else if (!trimmedEmail.includes("@") || !trimmedEmail.includes(".")) {
      setEmailERrorMessage("Email must enter a valid email.");
    } else if (trimmedEmail.length > 50) {
      setEmailERrorMessage("Email can not be that large!");
    } else {
      setEmailERrorMessage("");
    }

    if (trimmedPhone.length == 0) {
      setPhoneErrorMessage("Please enter your mobile number!");
    } else if (digitsOnlyPhone.length < 10 || digitsOnlyPhone.length > 13) {
      setPhoneErrorMessage("Enter a valid mobile number");
    } else {
      setPhoneErrorMessage("");
    }

    if (trimmedPass.length == 0) {
      setPassErrorMessage("Please enter a password!");
    } else if (trimmedPass.length < 6) {
      setPassErrorMessage("Password must be at least 6 characters");
    } else {
      setPassErrorMessage("");
    }

    if (isNameInvalid || isEmailInvalid || isPhoneInvalid || isPassInvalid) {
      if (isNameInvalid) {
        nameRef.current?.focus();
      } else if (isEmailInvalid) {
        emailRef.current?.focus();
      } else if (isPhoneInvalid) {
        phoneRef.current?.focus();
      } else if (isPassInvalid) {
        passRef.current?.focus();
      }
      return;
    }

    let { error } = await supabase.from("credentials").insert([
      {
        Password: pass,
        Name: fullName,
        Email: email,
        PhoneNum: tele,
      },
    ]);
    if (error) {
      console.error(error.message);
      return;
    }
  }

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
          <h1 className="membership-form-title">Create Your Account</h1>
          <p className="membership-form-step">Step 2 of 3</p>
        </div>

        <div className="membership-selected-plan-card">
          <div className="membership-selected-plan-info">
            <span className="membership-selected-plan-label">
              Selected Plan
            </span>
            <h2 className="membership-selected-plan-name">{plan}</h2>
          </div>
          <span className="membership-selected-plan-price">
            {priceOfPlan} PKR
          </span>
        </div>

        <h3 className="membership-member-details-title">Member Details</h3>

        <form className="membership-input-grid">
          <div className="membership-input-group">
            <label className="membership-input-label">Full Name</label>
            <input
              className={`membership-input-control ${
                nameErrorMessage ? "membership-input-control-error" : ""
              }`}
              onChange={handleFNameChange}
              type="text"
              placeholder="Enter first name"
              ref={nameRef}
            />
            <p className="error-message-name">{nameErrorMessage}</p>
          </div>

          <div className="membership-input-group">
            <label className="membership-input-label">Email Address</label>
            <input
              className={`membership-input-control ${
                emailErrorMessage ? "membership-input-control-error" : ""
              }`}
              type="email"
              placeholder="Enter your email"
              ref={emailRef}
              onChange={handleEmailChange}
            />
            <p className="error-message-name">{emailErrorMessage}</p>
          </div>

          <div className="membership-input-group">
            <label className="membership-input-label">Mobile Number</label>
            <input
              className={`membership-input-control ${
                phoneErrorMessage ? "membership-input-control-error" : ""
              }`}
              onChange={handleTeleChange}
              type="tel"
              placeholder="Enter mobile number"
              ref={phoneRef}
            />
            <p className="error-message-name">{phoneErrorMessage}</p>
          </div>

          <div className="membership-input-group">
            <label className="membership-input-label">Password</label>
            <input
              className={`membership-input-control ${
                passErrorMessage ? "membership-input-control-error" : ""
              }`}
              type="password"
              placeholder="Create password"
              onChange={handlePassChange}
              ref={passRef}
            />
            <p className="error-message-name">{passErrorMessage}</p>
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
            Continue to Payment
          </button>
        </div>
      </section>
      <EndBar />
    </main>
  );
};

export default MemberShipPlans;

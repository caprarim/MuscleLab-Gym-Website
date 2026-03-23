import React from "react";
import SideBar from "./sidebar.jsx";
import { useNavigate } from "react-router-dom";
import EndBar from "./endBar.jsx";
import { supabase } from "./supabase-client.jsx";

const Payment = ({ role }) => {
  const assetBase = import.meta.env.BASE_URL;
  let nav = useNavigate();
  async function logOut() {
    const { error } = await supabase.auth.signOut();
    error ? console.error(error.message) : nav("/");
  }
  return (
    <>
      <main className="gym-page payment-page">
        <SideBar
          click1={() => nav("/about")}
          click2={() => nav("/")}
          click3={() => nav("/moreinfo")}
          click4={() => nav("/memberships")}
        ></SideBar>
        <div className="payment-toolbar">
          <button className="payment-logout-button" onClick={logOut}>
            <span className="payment-logout-indicator" aria-hidden="true" />
            <span className="payment-logout-label">Log Out</span>
            <span className="payment-logout-chevron" aria-hidden="true">
              &gt;
            </span>
          </button>
        </div>

        <section className="payment-shell">
          <div className="payment-hero">
            <div className="payment-header">
              <div className="payment-status-row">
                <p className="payment-eyebrow">Manual Bank Transfer</p>
                <span className="payment-live-chip">Secure Route</span>
              </div>

              <h1 className="payment-title">Send Your Membership Payment</h1>

              <p className="payment-subtitle">
                Use the UBL transfer details below to complete your payment,
                then keep your transfer reference ready for confirmation.
              </p>

              <div className="payment-highlight-list">
                <div className="payment-highlight-item">
                  <span className="payment-highlight-kicker">Speed</span>
                  <span className="payment-highlight-value">
                    Fast manual confirmation
                  </span>
                </div>

                <div className="payment-highlight-item">
                  <span className="payment-highlight-kicker">Method</span>
                  <span className="payment-highlight-value">
                    UBL online transfer
                  </span>
                </div>

                <div className="payment-highlight-item">
                  <span className="payment-highlight-kicker">Keep Ready</span>
                  <span className="payment-highlight-value">
                    Transaction reference
                  </span>
                </div>
              </div>
            </div>

            <aside className="payment-visual">
              <img
                className="payment-visual-image"
                src={`${assetBase}gym2.jpg`}
                alt="Muscle Lab Gym training floor"
              />

              <div className="payment-visual-overlay">
                <span className="payment-visual-badge">Muscle Lab Gym</span>
                <p className="payment-visual-title">
                  Bank transfer. Clean. Fast.
                </p>
                <p className="payment-visual-text">
                  Send the amount, hold your proof, and lock your membership
                  without friction.
                </p>

                <div className="payment-visual-stats">
                  <div className="payment-stat-chip">
                    <span className="payment-stat-label">Mode</span>
                    <span className="payment-stat-value">Online</span>
                  </div>

                  <div className="payment-stat-chip">
                    <span className="payment-stat-label">Bank</span>
                    <span className="payment-stat-value">UBL</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="payment-grid">
            <article className="payment-card payment-card-primary">
              <div className="payment-card-glow" />

              <div className="payment-card-topline">
                <span className="payment-bank-badge">UBL Bank</span>
                <span className="payment-mode-chip">Online Transfer</span>
              </div>

              <div className="payment-account-block">
                <div className="payment-account-heading">
                  <div>
                    <p className="payment-label">Account Number</p>
                    <p className="payment-value payment-value-account">
                      2143 3254 5830 8
                    </p>
                  </div>

                  <div className="payment-account-orb" aria-hidden="true" />
                </div>

                <p className="payment-account-caption">
                  Use this exact account number when sending your transfer.
                </p>
              </div>

              <div className="payment-account-grid">
                <div className="payment-mini-card">
                  <p className="payment-label">Bank Name</p>
                  <p className="payment-value">UBL</p>
                </div>

                <div className="payment-mini-card">
                  <p className="payment-label">Account Title</p>
                  <p className="payment-value">Muhammad Ammar Khan</p>
                </div>

                <div className="payment-mini-card payment-mini-card-full">
                  <p className="payment-label">Contact Number</p>
                  <p className="payment-value">0313 242 4126</p>
                </div>
              </div>

              <div className="payment-support-row">
                <div className="payment-support-pill">
                  Ready for online banking apps
                </div>
                <div className="payment-support-pill">
                  Save your proof after transfer
                </div>
              </div>
            </article>

            <div className="payment-secondary-stack">
              <article className="payment-card payment-card-secondary">
                <div className="payment-secondary-header">
                  <p className="payment-steps-title">How To Pay</p>
                  <span className="payment-secondary-chip">3 Steps</span>
                </div>

                <div className="payment-steps">
                  <div className="payment-step">
                    <span className="payment-step-number">01</span>
                    <p className="payment-step-text">
                      Open your banking app or preferred transfer method.
                    </p>
                  </div>

                  <div className="payment-step">
                    <span className="payment-step-number">02</span>
                    <p className="payment-step-text">
                      Transfer the membership amount to the UBL account shown
                      here.
                    </p>
                  </div>

                  <div className="payment-step">
                    <span className="payment-step-number">03</span>
                    <p className="payment-step-text">
                      Save the transaction reference so your payment can be
                      verified smoothly.
                    </p>
                  </div>
                </div>
              </article>

              <article className="payment-card payment-note-box">
                <div className="payment-note-topline">
                  <p className="payment-note-title">Important</p>
                  <span className="payment-note-chip">Proof Required</span>
                </div>

                <p className="payment-note-text">
                  This page uses a clean manual transfer method. Share your
                  payment confirmation with the gym after sending the amount.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <EndBar></EndBar>
    </>
  );
};

export default Payment;

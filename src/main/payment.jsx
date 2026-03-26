import React from "react";
import SideBar from "./sidebar.jsx";
import { useNavigate } from "react-router-dom";
import EndBar from "./endBar.jsx";
import { supabase } from "./supabase-client.jsx";

const assetBase = import.meta.env.BASE_URL;

const Payment = () => {
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
                <p className="payment-eyebrow">Membership Confirmation</p>
                <span className="payment-live-chip">Active Support</span>
              </div>

              <h1 className="payment-title">Complete Your Membership</h1>

              <p className="payment-subtitle">
                Your account is ready. Contact the gym below to confirm your
                selected plan and start.
              </p>

              <div className="payment-highlight-list">
                <div className="payment-highlight-item">
                  <span className="payment-highlight-kicker">Bank Name</span>
                  <span className="payment-highlight-value">
                    Meezan Bank
                  </span>
                </div>

                <div className="payment-highlight-item">
                  <span className="payment-highlight-kicker">Account Title</span>
                  <span className="payment-highlight-value">
                    Muhammad Faizan Yousuf
                  </span>
                </div>

                <div className="payment-highlight-item">
                  <span className="payment-highlight-kicker">Location</span>
                  <span className="payment-highlight-value">
                    Plot #A, 906, near Ronaq-e-Sheereni, North Karachi
                  </span>
                </div>
              </div>
            </div>

            <aside className="payment-visual">
              <img
                className="payment-visual-image"
                src={`${assetBase}ultraego/14.PNG`}
                alt="Ultra Ego Physique Gym showcase"
              />

              <div className="payment-visual-overlay">
                <span className="payment-visual-badge">
                  Ultra Ego Physique Gym
                </span>
                <p className="payment-visual-title">Discipline first. Results follow.</p>
                <p className="payment-visual-text">
                  Register, confirm, and step into a cleaner training routine.
                </p>

                <div className="payment-visual-stats">
                  <div className="payment-stat-chip">
                    <span className="payment-stat-label">Starting Offer</span>
                    <span className="payment-stat-value">PKR 2500</span>
                  </div>

                  <div className="payment-stat-chip">
                    <span className="payment-stat-label">Yearly</span>
                    <span className="payment-stat-value">PKR 25000</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <div className="payment-grid">
            <article className="payment-card payment-card-primary">
              <div className="payment-card-glow" />

              <div className="payment-card-topline">
                <span className="payment-bank-badge">Bank Transfer</span>
                <span className="payment-mode-chip">Online Payment</span>
              </div>

              <div className="payment-account-block">
                <div className="payment-account-heading">
                  <div>
                    <p className="payment-label">Account Number</p>
                    <p className="payment-value payment-value-account">
                      99750112604156
                    </p>
                  </div>

                  <div className="payment-account-orb" aria-hidden="true" />
                </div>

                <p className="payment-account-caption">
                  Transfer the membership fee to the bank account above and
                  share the receipt.
                </p>
              </div>

              <div className="payment-account-grid">
                <div className="payment-mini-card">
                  <p className="payment-label">Account Title</p>
                  <p className="payment-value">Muhammad Faizan Yousuf</p>
                </div>

                <div className="payment-mini-card">
                  <p className="payment-label">Bank Name</p>
                  <p className="payment-value">Meezan Bank</p>
                </div>

                <div className="payment-mini-card payment-mini-card-full">
                  <p className="payment-label">Gym Timing</p>
                  <p className="payment-value">
                    07:00 AM - 11:00 AM | 11:00 AM - 04:00 PM | 05:00 PM -
                    02:00 AM
                  </p>
                </div>
              </div>

           
            </article>

            <div className="payment-secondary-stack">
              <article className="payment-card payment-card-secondary">
                <div className="payment-secondary-header">
                  <p className="payment-steps-title">Next Steps</p>
                  <span className="payment-secondary-chip">3 Steps</span>
                </div>

                <div className="payment-steps">
                  <div className="payment-step">
                    <span className="payment-step-number">01</span>
                    <p className="payment-step-text">
                      Keep your selected plan and email ready.
                    </p>
                  </div>

                  <div className="payment-step">
                    <span className="payment-step-number">02</span>
                    <p className="payment-step-text">
                      Transfer the fee and share receipt on 0329-3179505.
                    </p>
                  </div>

                  <div className="payment-step">
                    <span className="payment-step-number">03</span>
                    <p className="payment-step-text">
                      Visit Plot #A, 906, near Ronaq-e-Sheereni, North Karachi.
                    </p>
                  </div>
                </div>
              </article>

              <article className="payment-card payment-note-box">
                <div className="payment-note-topline">
                  <p className="payment-note-title">Important</p>
                  <span className="payment-note-chip">Stay Consistent</span>
                </div>

                <p className="payment-note-text">
                  Be patient. Progress takes time.
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

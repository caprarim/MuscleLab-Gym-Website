import React, { useState } from "react";
import SideBar from "./sidebar.jsx";
import { useNavigate, useParams } from "react-router-dom";
import EndBar from "./endBar.jsx";

const Memberships = () => {
  const assetBase = import.meta.env.BASE_URL;
  let nav = useNavigate();

  let [isModalDisplay, setModalDisplay] = useState(true);

  const joinPlan = (plan) => {
    setModalDisplay(false);
    nav(`/joinMembership/${plan}`);
  };

  return (
    <>
      <main className="gym-page membership-page">
        <SideBar
          click1={() => nav("/about")}
          click2={() => nav("/")}
          click3={() => nav("/moreinfo")}
          click4={() => nav("/memberships")}
        ></SideBar>

        <section
          className="membership-modal"
          style={isModalDisplay ? { display: "block" } : { display: "none" }}
        >
          <div className="membership-modal-header">
            <h2 className="membership-modal-title">Choose Your Membership</h2>
            <p className="membership-modal-step">
              Select the plan that matches your training style
            </p>
          </div>

          <div className="membership-showcase-grid">
            <article className="membership-plan-card">
              <img
                src={`${assetBase}musclelabimages/e.jpg`}
                alt="Membership Classic"
                className="membership-plan-image"
              />
              <div className="membership-plan-content">
                <h3 className="membership-plan-title">Membership Classic</h3>
                <div className="membership-plan-price-row">
                  <span className="membership-plan-price">PKR 3000</span>
                  <span className="membership-plan-price-period">/ month</span>
                </div>
                <p className="membership-plan-access">Gym Access</p>
                <p className="membership-plan-location">
                  <span className="membership-plan-location-label">
                    Location:
                  </span>{" "}
                  Sector 11-A North Karachi, Pakistan
                </p>
                <p className="membership-plan-description">
                  Balanced access for members who want complete strength and
                  cardio training with full floor support.
                </p>

                <div className="membership-plan-timing">
                  <h4 className="membership-plan-timing-title">Timing</h4>
                  <ul className="membership-plan-timing-list">
                    <li>
                      <span className="membership-plan-timing-label">
                        Co-Timings
                      </span>
                      <span className="membership-plan-timing-value">
                        5PM - 11PM
                      </span>
                    </li>
                    <li>
                      <span className="membership-plan-timing-label">
                        Ladies Only
                      </span>
                      <span className="membership-plan-timing-value">
                        11AM - 5PM
                      </span>
                    </li>
                  </ul>
                </div>

                <button
                  className="join-membership membership-plan-buy"
                  onClick={() => joinPlan("Classic")}
                >
                  Buy Now
                </button>
              </div>
            </article>

            <article className="membership-plan-card">
              <img
                src={`${assetBase}musclelabimages/d.jpg`}
                alt="Membership Pro"
                className="membership-plan-image"
              />
              <div className="membership-plan-content">
                <h3 className="membership-plan-title">Membership Pro</h3>
                <div className="membership-plan-price-row">
                  <span className="membership-plan-price">PKR 3500</span>
                  <span className="membership-plan-price-period">/ month</span>
                </div>
                <p className="membership-plan-access">Gym Access + Cardio</p>
                <p className="membership-plan-location">
                  <span className="membership-plan-location-label">
                    Location:
                  </span>{" "}
                  Sector 11-A North Karachi, Pakistan
                </p>
                <p className="membership-plan-description">
                  Designed for members who want advanced programming, equipment
                  priority windows, and stronger progression structure.
                </p>

                <div className="membership-plan-timing">
                  <h4 className="membership-plan-timing-title">Timing</h4>
                  <ul className="membership-plan-timing-list">
                    <li>
                      <span className="membership-plan-timing-label">
                        Co-Timings
                      </span>
                      <span className="membership-plan-timing-value">
                        5PM - 11PM
                      </span>
                    </li>
                    <li>
                      <span className="membership-plan-timing-label">
                        Ladies Only
                      </span>
                      <span className="membership-plan-timing-value">
                        11AM - 5PM
                      </span>
                    </li>
                  </ul>
                </div>

                <button
                  className="join-membership membership-plan-buy"
                  onClick={() => joinPlan("Pro")}
                >
                  Buy Now
                </button>
              </div>
            </article>

            <article className="membership-plan-card">
              <img
                src={`${assetBase}musclelabimages/g.jpg`}
                alt="Membership Ultra-Pro"
                className="membership-plan-image"
              />
              <div className="membership-plan-content">
                <h3 className="membership-plan-title">Membership Ultra</h3>
                <div className="membership-plan-price-row">
                  <span className="membership-plan-price">PKR 3500</span>
                  <span className="membership-plan-price-period">/ month</span>
                </div>
                <p className="membership-plan-access">
                  Gym Access + Zumba Classes
                </p>
                <p className="membership-plan-location">
                  <span className="membership-plan-location-label">
                    Location:
                  </span>{" "}
                  Sector 11-A North Karachi, Pakistan
                </p>
                <p className="membership-plan-description">
                  Premium membership with coaching feedback, high-performance
                  class access, and full training-floor privileges.
                </p>

                <div className="membership-plan-timing">
                  <h4 className="membership-plan-timing-title">Timing</h4>
                  <ul className="membership-plan-timing-list">
                    <li>
                      <span className="membership-plan-timing-label">
                        Co-Timings
                      </span>
                      <span className="membership-plan-timing-value">
                        5PM - 11PM
                      </span>
                    </li>
                    <li>
                      <span className="membership-plan-timing-label">
                        Ladies Only
                      </span>
                      <span className="membership-plan-timing-value">
                        11AM - 5PM
                      </span>
                    </li>
                  </ul>
                </div>

                <button
                  className="join-membership membership-plan-buy"
                  onClick={() => joinPlan("Ultra-Pro")}
                >
                  Buy Now
                </button>
              </div>
            </article>
          </div>
        </section>
        <EndBar />
      </main>
    </>
  );
};

export default Memberships;

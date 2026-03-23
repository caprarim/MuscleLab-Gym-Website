import React from "react";
import { Link, useNavigate } from "react-router-dom";
import SideBar from "./sidebar.jsx";
import EndBar from "./endBar.jsx";

const MoreInfo = () => {
  const assetBase = import.meta.env.BASE_URL;
  const showcaseSlides = [
    `${assetBase}musclelabimages/a.jpg`,
    `${assetBase}musclelabimages/c.jpg`,
    `${assetBase}musclelabimages/d.jpg`,
    `${assetBase}musclelabimages/e.jpg`,
    `${assetBase}musclelabimages/f.jpg`,
    `${assetBase}musclelabimages/h.jpg`,
  ];
  let nav = useNavigate();

  return (
    <>
      <main className="gym-page moreinfo-page">
        <SideBar
          click1={() => nav("/about")}
          click2={() => nav("/")}
          click3={() => nav("/moreinfo")}
          click4={() => nav("/memberships")}
        ></SideBar>

        <section className="moreinfo-hero-block">
          <h1 className="moreinfo-title">Welcome To Muscle Lab Gym</h1>
          <div className="moreinfo-hero-image-wrap">
            <img
              src={`${assetBase}musclelabimages/c.jpg`}
              className="moreinfo-hero-image"
              alt="Muscle Lab Gym training floor"
            />
            <div className="moreinfo-hero-overlay">
              <p className="moreinfo-hero-overlay-text">
                Engineered for strength
              </p>
            </div>
          </div>
        </section>

        <section className="moreinfo-specialties-strip">
          <article className="moreinfo-specialty">
            <span className="moreinfo-specialty-icon" aria-hidden="true">
              {"⚡"}
            </span>
            <h2 className="moreinfo-specialty-title">Focused Coaching</h2>
          </article>

          <article className="moreinfo-specialty">
            <span className="moreinfo-specialty-icon" aria-hidden="true">
              {"🏋️"}
            </span>
            <h2 className="moreinfo-specialty-title">Elite Training Tools</h2>
          </article>

          <article className="moreinfo-specialty">
            <span className="moreinfo-specialty-icon" aria-hidden="true">
              {"✨"}
            </span>
            <h2 className="moreinfo-specialty-title">Fresh, Open Space</h2>
          </article>

          <article className="moreinfo-specialty">
            <span className="moreinfo-specialty-icon" aria-hidden="true">
              {"🚀"}
            </span>
            <h2 className="moreinfo-specialty-title">Real Value Memberships</h2>
          </article>
        </section>

        <section className="moreinfo-details-grid">
          <div className="moreinfo-details-copy">
            <p className="moreinfo-eyebrow">Belong Here. Get Stronger.</p>
            <h2 className="moreinfo-section-title">
              Strong energy, better equipment, and a cleaner place to train.
            </h2>
            <p className="moreinfo-section-text">
              Muscle Lab is built for people who want serious progress without a
              cluttered experience. Every zone is designed to help you train
              harder, stay consistent, and keep coming back.
            </p>

            <div className="moreinfo-benefits-list">
              <article className="moreinfo-benefit-item">
                <span className="moreinfo-benefit-icon" aria-hidden="true">
                  {"👍"}
                </span>
                <div>
                  <h3 className="moreinfo-detail-title">
                    Supportive Training Floor
                  </h3>
                  <p className="moreinfo-detail-text">
                    A no-drama environment where beginners and experienced
                    lifters can train with confidence and focus.
                  </p>
                </div>
              </article>

              <article className="moreinfo-benefit-item">
                <span className="moreinfo-benefit-icon" aria-hidden="true">
                  {"🦾"}
                </span>
                <div>
                  <h3 className="moreinfo-detail-title">
                    Top-Tier Strength Setup
                  </h3>
                  <p className="moreinfo-detail-text">
                    Racks, benches, machines, and free weights that let you push
                    heavy days, hypertrophy blocks, and full-body sessions.
                  </p>
                </div>
              </article>

              <article className="moreinfo-benefit-item">
                <span className="moreinfo-benefit-icon" aria-hidden="true">
                  {"🧼"}
                </span>
                <div>
                  <h3 className="moreinfo-detail-title">
                    Clean And Spacious Feel
                  </h3>
                  <p className="moreinfo-detail-text">
                    Open lanes, organized stations, and maintained facilities
                    that keep the club feeling sharp from warm-up to cooldown.
                  </p>
                </div>
              </article>

              <article className="moreinfo-benefit-item">
                <span className="moreinfo-benefit-icon" aria-hidden="true">
                  {"💥"}
                </span>
                <div>
                  <h3 className="moreinfo-detail-title">
                    Memberships That Make Sense
                  </h3>
                  <p className="moreinfo-detail-text">
                    Practical pricing, strong atmosphere, and enough value to
                    make showing up easier every week.
                  </p>
                </div>
              </article>
            </div>

            <div className="moreinfo-actions">
              <Link className="moreinfo-cta-primary" to="/memberships">
                Join Now
              </Link>
              <Link className="moreinfo-cta-secondary" to="/about">
                See The Space
              </Link>
            </div>
          </div>

          <div className="moreinfo-showcase">
            <div className="moreinfo-showcase-slider" aria-label="Gym image slider">
              {showcaseSlides.map((slideSrc, index) => (
                <div className="moreinfo-showcase-slide" key={slideSrc}>
                  <img
                    src={slideSrc}
                    alt={`Muscle Lab Gym showcase ${index + 1}`}
                    className="moreinfo-showcase-image"
                  />
                </div>
              ))}
            </div>
            <div className="moreinfo-showcase-card">
              <p className="moreinfo-showcase-label">Train with purpose</p>
              <p className="moreinfo-showcase-text">
                More action. More guidance. More reasons to press join.
              </p>
              <Link className="moreinfo-showcase-link" to="/memberships">
                Start Membership
              </Link>
            </div>
          </div>
        </section>

        <section className="moreinfo-recovery-section">
          <div className="moreinfo-recovery-copy">
            <p className="moreinfo-recovery-eyebrow">Recovery Zone</p>
            <h2 className="moreinfo-recovery-title">
              Recover in the hot sauna.
            </h2>
            <p className="moreinfo-recovery-text">
              Crush a hard session, then reset with a recovery zone that helps
              you loosen up, calm down, and walk back into the next workout
              feeling sharper.
            </p>
            <Link className="moreinfo-recovery-cta" to="/memberships">
              Claim Your Recovery Pass
            </Link>
          </div>

          <div className="moreinfo-recovery-media">
            <img
              src={`${assetBase}musclelabimages/b.jpg`}
              alt="Placeholder recovery experience"
              className="moreinfo-recovery-image"
            />
          </div>
        </section>
      </main>
      <EndBar />
    </>
  );
};

export default MoreInfo;

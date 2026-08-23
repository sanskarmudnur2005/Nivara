import { useState } from "react";
import { useNavigate } from "react-router-dom";

import GlassCard from "../../components/GlassCard";
import Button from "../../components/Button";

function ResidentDashboard() {
  const navigate = useNavigate();

  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <main className="resident-dashboard">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="resident-header">

        <div className="resident-header-left">

          <button
            type="button"
            className="mobile-menu-button"
            aria-label="Open menu"
          >
            ☰
          </button>

          <div className="resident-logo">
            N
          </div>

          <div className="resident-brand">
            <strong>Nivara</strong>
            <span>Resident Portal</span>
          </div>

        </div>


        {/* =================================================
            HEADER RIGHT
            ================================================= */}

        <div className="resident-header-right">

          <button
            type="button"
            className="notification-button"
            aria-label="Notifications"
          >
            🔔

            <span className="notification-count">
              3
            </span>
          </button>


          {/* =================================================
              RESIDENT PROFILE
              ================================================= */}

          <div className="resident-profile-menu-wrapper">

            <button
              type="button"
              className="resident-user resident-user-button"
              onClick={() =>
                setProfileMenuOpen(!profileMenuOpen)
              }
              aria-expanded={profileMenuOpen}
              aria-label="Open resident profile menu"
            >

              <div className="resident-avatar">
                K
              </div>

              <div className="resident-user-info">
                <strong>
                  Krishna
                </strong>

                <span>
                  Flat 105
                </span>
              </div>

              <span className="resident-profile-chevron">
                {profileMenuOpen ? "⌃" : "⌄"}
              </span>

            </button>


            {/* =================================================
                PROFILE DROPDOWN
                ================================================= */}

            {profileMenuOpen && (
              <div className="resident-profile-dropdown">

                <div className="resident-profile-dropdown-user">

                  <div className="resident-profile-dropdown-avatar">
                    K
                  </div>

                  <div>
                    <strong>
                      Krishna
                    </strong>

                    <span>
                      Flat 105
                    </span>
                  </div>

                </div>


                <div className="resident-profile-dropdown-divider" />


                <button
                  type="button"
                  className="resident-profile-dropdown-item"
                  onClick={() => {
                    setProfileMenuOpen(false);
                    navigate("/resident/profile");
                  }}
                >
                  <span>
                    👤
                  </span>

                  <div>
                    <strong>
                      My Profile
                    </strong>

                    <small>
                      Account & residence
                    </small>
                  </div>

                  <span className="dropdown-arrow">
                    →
                  </span>
                </button>


                <button
                  type="button"
                  className="resident-profile-dropdown-item"
                  onClick={() => {
                    setProfileMenuOpen(false);
                  }}
                >
                  <span>
                    🔒
                  </span>

                  <div>
                    <strong>
                      Security
                    </strong>

                    <small>
                      Account protection
                    </small>
                  </div>

                  <span className="dropdown-arrow">
                    →
                  </span>
                </button>


                <div className="resident-profile-dropdown-divider" />


                <button
                  type="button"
                  className="resident-profile-dropdown-logout"
                  onClick={() => {
                    setProfileMenuOpen(false);
                  }}
                >
                  <span>
                    ↪
                  </span>

                  Sign out
                </button>

              </div>
            )}

          </div>

        </div>

      </header>


      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}

      <section className="resident-content">


        {/* ===================================================
            WELCOME
            =================================================== */}

        <section className="resident-welcome">

          <p className="resident-eyebrow">
            RESIDENT DASHBOARD
          </p>

          <h1>
            Good Morning, 👋
          </h1>

          <h2>
            Krishna
          </h2>

          <p className="resident-location">
            Flat 105
          </p>

        </section>


        {/* ===================================================
            SECURITY MESSAGE
            =================================================== */}

        <GlassCard className="security-message-card">

          <div className="security-message-icon">
            🛡️
          </div>

          <div className="security-message-content">

            <h3>
              Keep your society safe
            </h3>

            <p>
              Approve visitors only
              <br />
              you are expecting.
            </p>

          </div>

          <span className="card-arrow">
            →
          </span>

        </GlassCard>


        {/* ===================================================
            QUICK ACTIONS
            =================================================== */}

        <section className="resident-section">

          <div className="resident-section-header">

            <h2>
              Quick Actions
            </h2>

          </div>


          <div className="quick-actions-grid">

            {/* Invite Visitor */}

            <button
              type="button"
              className="quick-action"
              onClick={() => navigate("/resident/invite")}
            >

              <div className="quick-action-icon">
                👥
              </div>

              <strong>
                Invite Visitor
              </strong>

              <span>
                Pre-approve
              </span>

            </button>


            {/* QR Pass */}

            <button
              type="button"
              className="quick-action"
              onClick={() => navigate("/resident/qr-pass")}
            >

              <div className="quick-action-icon">
                ▦
              </div>

              <strong>
                My QR Pass
              </strong>

              <span>
                View / Share
              </span>

            </button>


            {/* Trusted People */}

            <button
              type="button"
              className="quick-action"
              onClick={() => navigate("/resident/trusted-people")}
            >

              <div className="quick-action-icon">
                👥
              </div>

              <strong>
                Trusted People
              </strong>

              <span>
                Manage
              </span>

            </button>


            {/* History */}

            <button
              type="button"
              className="quick-action"
              onClick={() => navigate("/resident/history")}
            >

              <div className="quick-action-icon">
                ◷
              </div>

              <strong>
                Visit History
              </strong>

              <span>
                View all
              </span>

            </button>

          </div>

        </section>


        {/* ===================================================
            PENDING APPROVALS
            =================================================== */}

        <section className="resident-section">

          <div className="resident-section-header">

            <h2>
              Pending Approvals
            </h2>

            <button
              type="button"
              className="section-link"
              onClick={() => navigate("/resident/requests")}
            >
              View All
            </button>

          </div>


          <GlassCard className="visitor-card">

            <div className="visitor-avatar">
              RS
            </div>


            <div className="visitor-info">

              <div className="visitor-name-row">

                <strong>
                  Rahul Sharma
                </strong>

                <span className="status-badge status-pending">
                  ◉ Pending
                </span>

              </div>

              <span>
                🕘 Today, 10:30 AM
              </span>

              <span>
                ◷ Gate Entry
              </span>

            </div>


            <div className="visitor-actions">

              <button
                type="button"
                className="approve-button"
                aria-label="Approve visitor"
              >
                ✓
              </button>

              <button
                type="button"
                className="reject-button"
                aria-label="Reject visitor"
              >
                ×
              </button>

            </div>

          </GlassCard>

        </section>


        {/* ===================================================
            CURRENTLY INSIDE
            =================================================== */}

        <section className="resident-section">

          <div className="resident-section-header">

            <h2>
              Currently Inside
            </h2>

            <button
              type="button"
              className="section-link"
              onClick={() => navigate("/resident/inside")}
            >
              View All
            </button>

          </div>


          <GlassCard className="visitor-card">

            <div className="visitor-avatar delivery-avatar">
              AD
            </div>


            <div className="visitor-info">

              <div className="visitor-name-row">

                <strong>
                  Amazon Delivery
                </strong>

                <span className="status-badge status-inside">
                  ◉ Inside
                </span>

              </div>

              <span>
                Delivery Boy
              </span>

              <span>
                🕘 Entered at 09:18 AM
              </span>

              <span>
                ◷ Flat 302 • Left to meet you
              </span>

            </div>

          </GlassCard>

        </section>


        {/* ===================================================
            MONTHLY SUMMARY
            =================================================== */}

        <GlassCard className="monthly-summary-card">

          <div className="summary-item">

            <div className="summary-icon">
              🛡️
            </div>

            <div>

              <span>
                Total Visitors
              </span>

              <strong>
                12
              </strong>

              <small>
                This Month
              </small>

            </div>

          </div>


          <div className="summary-divider" />


          <div className="summary-item">

            <div className="summary-icon">
              👥
            </div>

            <div>

              <span>
                Currently Inside
              </span>

              <strong>
                3
              </strong>

              <small>
                Right Now
              </small>

            </div>

          </div>

        </GlassCard>


        {/* ===================================================
            SECURITY TIP
            =================================================== */}

        <GlassCard className="resident-tip-card">

          <div className="tip-icon">
            💡
          </div>

          <div className="tip-content">

            <span>
              Tip
            </span>

            <p>
              Pre-approve visitors & share QR
              <br />
              pass for faster entry.
            </p>

          </div>

          <span className="card-arrow">
            →
          </span>

        </GlassCard>


        {/* ===================================================
            DESKTOP SECURITY ACTION
            =================================================== */}

        <section className="desktop-security-section">

          <GlassCard className="desktop-security-card">

            <div className="desktop-security-icon">
              🛡️
            </div>

            <div>

              <h3>
                Need security assistance?
              </h3>

              <p>
                Quickly contact the society
                security team.
              </p>

            </div>

            <Button variant="secondary">
              Contact Security
            </Button>

          </GlassCard>

        </section>


      </section>


      {/* =====================================================
          MOBILE BOTTOM NAVIGATION
          ===================================================== */}

      <nav className="resident-bottom-nav">

        {/* Home */}

        <button
          type="button"
          className="bottom-nav-item active"
          onClick={() => navigate("/resident")}
        >

          <span>
            🏠
          </span>

          <small>
            Home
          </small>

        </button>


        {/* Requests */}

        <button
          type="button"
          className="bottom-nav-item"
          onClick={() => navigate("/resident/requests")}
        >

          <span>
            👥
          </span>

          <small>
            Requests
          </small>

        </button>


        {/* QR Pass */}

        <button
          type="button"
          className="bottom-nav-item"
          onClick={() => navigate("/resident/qr-pass")}
        >

          <span>
            ▦
          </span>

          <small>
            QR Pass
          </small>

        </button>


        {/* History */}

        <button
          type="button"
          className="bottom-nav-item"
          onClick={() => navigate("/resident/history")}
        >

          <span>
            ◷
          </span>

          <small>
            History
          </small>

        </button>


        {/* Profile */}

        <button
          type="button"
          className="bottom-nav-item"
          onClick={() => navigate("/resident/profile")}
        >

          <span>
            👤
          </span>

          <small>
            Profile
          </small>

        </button>

      </nav>

    </main>
  );
}

export default ResidentDashboard;
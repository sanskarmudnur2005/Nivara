function ResidentProfile() {
  const resident = {
    name: "Krishna",
    email: "krishna@example.com",
    mobile: "+91 98765 43210",

    // These values come from the admin-managed residency
    residency: "Nivara Residency",
    flat: "105",
    role: "Resident",
  };

  return (
    <main className="resident-profile-page">

      <div className="resident-profile-container">

        {/* =================================================
            HEADER
            ================================================= */}

        <header className="resident-profile-header">

          <button
            type="button"
            className="resident-profile-back"
            onClick={() => window.history.back()}
            aria-label="Go back"
          >
            ←
          </button>

          <div>
            <p className="resident-profile-eyebrow">
              ACCOUNT
            </p>

            <h1>My Profile</h1>

            <p>
              Manage your account and view your residence details.
            </p>
          </div>

        </header>


        {/* =================================================
            PROFILE HERO
            ================================================= */}

        <section className="resident-profile-hero">

          <div className="resident-profile-avatar">
            {resident.name.charAt(0)}
          </div>

          <div className="resident-profile-identity">

            <h2>
              {resident.name}
            </h2>

            <p>
              {resident.role}
            </p>

            <span>
              ● Active resident
            </span>

          </div>

        </section>


        {/* =================================================
            PERSONAL INFORMATION
            ================================================= */}

        <section className="resident-profile-card">

          <div className="resident-profile-card-heading">

            <div>
              <p>
                PERSONAL INFORMATION
              </p>

              <h2>
                Account details
              </h2>
            </div>

            <span>
              ✦
            </span>

          </div>


          <div className="resident-profile-details">

            <div className="resident-profile-detail">

              <span>
                FULL NAME
              </span>

              <strong>
                {resident.name}
              </strong>

            </div>


            <div className="resident-profile-detail">

              <span>
                EMAIL ADDRESS
              </span>

              <strong>
                {resident.email}
              </strong>

            </div>


            <div className="resident-profile-detail">

              <span>
                MOBILE NUMBER
              </span>

              <strong>
                {resident.mobile}
              </strong>

            </div>

          </div>

        </section>


        {/* =================================================
            ADMIN MANAGED RESIDENCY
            ================================================= */}

        <section className="resident-profile-card resident-profile-residence-card">

          <div className="resident-profile-card-heading">

            <div>
              <p>
                RESIDENCE
              </p>

              <h2>
                Your residence
              </h2>
            </div>

            <span>
              ⌂
            </span>

          </div>


          <div className="resident-profile-details">

            <div className="resident-profile-detail">

              <span>
                RESIDENCY
              </span>

              <strong>
                {resident.residency}
              </strong>

            </div>


            <div className="resident-profile-detail">

              <span>
                FLAT NUMBER
              </span>

              <strong>
                {resident.flat}
              </strong>

            </div>


            <div className="resident-profile-detail">

              <span>
                ROLE
              </span>

              <strong>
                {resident.role}
              </strong>

            </div>

          </div>


          {/* Admin managed notice */}

          <div className="resident-profile-admin-notice">

            <div className="resident-profile-admin-icon">
              🔒
            </div>

            <div>
              <h3>
                Managed by your administrator
              </h3>

              <p>
                Your residency, flat number and resident
                role are assigned by the community administrator
                and cannot be changed from this account.
              </p>
            </div>

          </div>

        </section>


        {/* =================================================
            ACTIONS
            ================================================= */}

        <section className="resident-profile-actions">

          <button
            type="button"
            className="resident-profile-edit"
          >
            <span>✎</span>
            Edit Profile
          </button>


          <button
            type="button"
            className="resident-profile-logout"
          >
            <span>↪</span>
            Sign out
          </button>

        </section>


        {/* =================================================
            SECURITY
            ================================================= */}

        <div className="resident-profile-security">

          <span>
            🔒
          </span>

          <p>
            Your account information is protected by Nivara.
          </p>

        </div>

      </div>

    </main>
  );
}

export default ResidentProfile;
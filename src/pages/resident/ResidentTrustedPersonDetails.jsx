import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ResidentTrustedPersonDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const person = location.state?.person;

  const [showRevokeConfirm, setShowRevokeConfirm] =
    useState(false);

  if (!person) {
    return (
      <main className="resident-page trusted-person-details-page">

        <section className="trusted-details-empty">

          <div className="trusted-details-empty-icon">
            👤
          </div>

          <h1>
            Person not found
          </h1>

          <p>
            We couldn't find the trusted person you're looking for.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/resident/trusted-people")
            }
          >
            Back to Trusted People
          </button>

        </section>

      </main>
    );
  }


  function handleRevoke() {
    const existingPeople =
      JSON.parse(
        localStorage.getItem("nivaraTrustedPeople")
      ) || [];

    const updatedPeople = existingPeople.filter(
      (existingPerson) =>
        existingPerson.id !== person.id
    );

    localStorage.setItem(
      "nivaraTrustedPeople",
      JSON.stringify(updatedPeople)
    );

    navigate("/resident/trusted-people");
  }


  return (
    <main className="resident-page trusted-person-details-page">

      {/* =================================================
          HEADER
          ================================================= */}

      <section className="trusted-details-header">

        <button
          type="button"
          className="trusted-details-back"
          onClick={() =>
            navigate("/resident/trusted-people")
          }
          aria-label="Go back"
        >
          ←
        </button>

        <div>

          <p className="resident-eyebrow">
            TRUSTED PEOPLE
          </p>

          <h1>
            Person Details
          </h1>

          <p>
            View and manage this person's access.
          </p>

        </div>

      </section>


      {/* =================================================
          PROFILE
          ================================================= */}

      <section className="trusted-details-profile">

        <div className="trusted-details-avatar">
          {person.initials}
        </div>

        <div className="trusted-details-name">

          <h2>
            {person.name}
          </h2>

          <p>
            {person.relation}
          </p>

          <span>
            ● Active
          </span>

        </div>

      </section>


      {/* =================================================
          INFORMATION
          ================================================= */}

      <section className="trusted-details-card">

        <div className="trusted-details-card-header">

          <div>

            <p className="resident-eyebrow">
              INFORMATION
            </p>

            <h2>
              Personal Details
            </h2>

          </div>

          <span>
            👤
          </span>

        </div>


        <div className="trusted-details-grid">

          <div className="trusted-detail-item">

            <span>
              FULL NAME
            </span>

            <strong>
              {person.name}
            </strong>

          </div>


          <div className="trusted-detail-item">

            <span>
              RELATIONSHIP
            </span>

            <strong>
              {person.relation}
            </strong>

          </div>


          <div className="trusted-detail-item">

            <span>
              MOBILE NUMBER
            </span>

            <strong>
              {person.phone}
            </strong>

          </div>


          <div className="trusted-detail-item">

            <span>
              STATUS
            </span>

            <strong className="trusted-detail-active">
              ● Active
            </strong>

          </div>

        </div>

      </section>


      {/* =================================================
          ACCESS
          ================================================= */}

      <section className="trusted-details-card">

        <div className="trusted-details-card-header">

          <div>

            <p className="resident-eyebrow">
              ACCESS
            </p>

            <h2>
              Access Permission
            </h2>

          </div>

          <span>
            🛡️
          </span>

        </div>


        <div className="trusted-access-display">

          <div className="trusted-access-display-icon">
            ✓
          </div>

          <div>

            <strong>
              {person.access}
            </strong>

            <p>
              This person is currently allowed to
              access your residence according to this
              permission.
            </p>

          </div>

        </div>

      </section>


      {/* =================================================
          ACTIONS
          ================================================= */}

      <section className="trusted-details-actions">

        <button
          type="button"
          className="trusted-edit-button"
          onClick={() =>
            navigate("/resident/trusted-people/add", {
              state: {
                person,
              },
            })
          }
        >
          ✎ Edit Person
        </button>

        <button
          type="button"
          className="trusted-revoke-button"
          onClick={() =>
            setShowRevokeConfirm(true)
          }
        >
          Revoke Access
        </button>

      </section>


      {/* =================================================
          SECURITY NOTE
          ================================================= */}

      <section className="trusted-details-security">

        <span>
          🔒
        </span>

        <p>
          You can change or revoke this person's access
          at any time.
        </p>

      </section>


      {/* =================================================
          REVOKE CONFIRMATION
          ================================================= */}

      {showRevokeConfirm && (
        <div className="revoke-overlay">

          <div className="revoke-dialog">

            <div className="revoke-dialog-icon">
              !
            </div>

            <h2>
              Revoke access?
            </h2>

            <p>
              <strong>{person.name}</strong> will no longer
              be listed as a trusted person and their
              trusted access will be removed.
            </p>

            <div className="revoke-dialog-actions">

              <button
                type="button"
                className="revoke-cancel-button"
                onClick={() =>
                  setShowRevokeConfirm(false)
                }
              >
                Cancel
              </button>

              <button
                type="button"
                className="revoke-confirm-button"
                onClick={handleRevoke}
              >
                Revoke Access
              </button>

            </div>

          </div>

        </div>
      )}

    </main>
  );
}

export default ResidentTrustedPersonDetails;
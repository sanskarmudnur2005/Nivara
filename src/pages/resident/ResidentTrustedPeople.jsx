import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ResidentTrustedPeople() {
  const navigate = useNavigate();

  const [trustedPeople, setTrustedPeople] = useState([]);

  useEffect(() => {
    const storedPeople =
      JSON.parse(
        localStorage.getItem("nivaraTrustedPeople")
      ) || [];

    /*
      If there are no saved people yet,
      show sample data so the page does not look empty.
    */

    if (storedPeople.length === 0) {
      const samplePeople = [
        {
          id: 1,
          initials: "PS",
          name: "Priya Sharma",
          relation: "Family Member",
          phone: "+91 98765 43210",
          access: "Always allowed",
        },
        {
          id: 2,
          initials: "RK",
          name: "Ramesh Kumar",
          relation: "House Help",
          phone: "+91 91234 56789",
          access: "Weekdays",
        },
      ];

      setTrustedPeople(samplePeople);
    } else {
      setTrustedPeople(storedPeople);
    }
  }, []);


  return (
    <main className="resident-page resident-trusted-page">

      {/* =================================================
          PAGE HEADER
          ================================================= */}

      <section className="trusted-page-header">

        <button
          type="button"
          className="trusted-back-button"
          onClick={() => navigate("/resident")}
          aria-label="Go back"
        >
          ←
        </button>

        <div>

          <p className="resident-eyebrow">
            RESIDENT
          </p>

          <h1>
            Trusted People
          </h1>

          <p className="trusted-page-description">
            Manage people who are allowed to visit your
            residence regularly.
          </p>

        </div>

      </section>


      {/* =================================================
          ADD TRUSTED PERSON
          ================================================= */}

      <section className="trusted-action-card">

        <div className="trusted-action-icon">
          +
        </div>

        <div className="trusted-action-content">

          <h2>
            Add a trusted person
          </h2>

          <p>
            Give regular visitors easier access without
            creating a new visitor pass every time.
          </p>

        </div>

        <button
          type="button"
          className="trusted-add-button"
          onClick={() =>
            navigate("/resident/trusted-people/add")
          }
        >
          Add Person
          <span>→</span>
        </button>

      </section>


      {/* =================================================
          TRUSTED PEOPLE SECTION
          ================================================= */}

      <section className="trusted-people-section">

        <div className="trusted-section-header">

          <div>

            <p className="resident-eyebrow">
              YOUR PEOPLE
            </p>

            <h2>
              Trusted People
            </h2>

          </div>

          <span className="trusted-count">
            {trustedPeople.length}
          </span>

        </div>


        {/* =================================================
            PEOPLE LIST
            ================================================= */}

        <div className="trusted-people-list">

          {trustedPeople.length > 0 ? (
            trustedPeople.map((person) => (
              <article
                className="trusted-person-card"
                key={person.id}
              >

                {/* Avatar */}

                <div className="trusted-person-avatar">
                  {person.initials}
                </div>


                {/* Information */}

                <div className="trusted-person-info">

                  <div className="trusted-person-name-row">

                    <h3>
                      {person.name}
                    </h3>

                    <span className="trusted-status">
                      ● Active
                    </span>

                  </div>


                  <p className="trusted-person-relation">
                    {person.relation}
                  </p>


                  <p className="trusted-person-detail">
                    ☎ {person.phone}
                  </p>


                  <p className="trusted-person-detail">
                    ◷ {person.access}
                  </p>

                </div>


                {/* View */}

                <button
                  type="button"
                  className="trusted-view-button"
                  onClick={() =>
                    navigate("/resident/trusted-people/details", {
                      state: {
                        person,
                      },
                    })
                  }
                >
                  View
                </button>

              </article>
            ))
          ) : (

            /* =================================================
               EMPTY STATE
               ================================================= */

            <div className="trusted-empty-state">

              <div className="trusted-empty-icon">
                👥
              </div>

              <h3>
                No trusted people yet
              </h3>

              <p>
                Add family members, house help, drivers,
                or other regular visitors.
              </p>

              <button
                type="button"
                className="trusted-empty-button"
                onClick={() =>
                  navigate("/resident/trusted-people/add")
                }
              >
                Add Trusted Person
              </button>

            </div>

          )}

        </div>

      </section>


      {/* =================================================
          SECURITY INFORMATION
          ================================================= */}

      <section className="trusted-security-card">

        <div className="trusted-security-icon">
          🛡️
        </div>

        <div>

          <h3>
            You stay in control
          </h3>

          <p>
            Trusted people can be removed or their
            access can be changed at any time.
          </p>

        </div>

      </section>

    </main>
  );
}

export default ResidentTrustedPeople;
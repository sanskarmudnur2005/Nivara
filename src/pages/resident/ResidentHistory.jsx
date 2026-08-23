function ResidentHistory() {
  const history = [
    {
      id: 1,
      name: "Rahul Sharma",
      initials: "RS",
      purpose: "Personal Guest",
      date: "Today",
      time: "10:30 AM",
      entryType: "Gate Entry",
      status: "Approved",
      statusType: "approved",
    },
    {
      id: 2,
      name: "Priya Kumar",
      initials: "PK",
      purpose: "Family Guest",
      date: "Yesterday",
      time: "6:15 PM",
      entryType: "QR Verification",
      status: "Completed",
      statusType: "completed",
    },
    {
      id: 3,
      name: "Amit Verma",
      initials: "AV",
      purpose: "Delivery",
      date: "12 Aug",
      time: "2:30 PM",
      entryType: "Gate Entry",
      status: "Rejected",
      statusType: "rejected",
    },
    {
      id: 4,
      name: "Sneha Rao",
      initials: "SR",
      purpose: "Service",
      date: "10 Aug",
      time: "11:00 AM",
      entryType: "Gate Entry",
      status: "Completed",
      statusType: "completed",
    },
  ];

  const completedCount = history.filter(
    (item) =>
      item.statusType === "completed" ||
      item.statusType === "approved"
  ).length;

  const rejectedCount = history.filter(
    (item) => item.statusType === "rejected"
  ).length;

  return (
    <main className="resident-history-page">

      <div className="resident-history-container">

        {/* =================================================
            HEADER
            ================================================= */}

        <header className="resident-history-header">

          <button
            type="button"
            className="resident-history-back"
            onClick={() => window.history.back()}
            aria-label="Go back"
          >
            ←
          </button>

          <div>

            <p className="resident-history-eyebrow">
              VISITOR ACTIVITY
            </p>

            <h1>Visit History</h1>

            <p>
              View your recent visitor activity.
            </p>

          </div>

        </header>


        {/* =================================================
            SUMMARY
            ================================================= */}

        <section className="resident-history-summary">

          <div className="resident-history-summary-item">

            <span>
              TOTAL VISITS
            </span>

            <strong>
              {history.length}
            </strong>

          </div>


          <div className="resident-history-summary-divider" />


          <div className="resident-history-summary-item">

            <span>
              COMPLETED
            </span>

            <strong className="history-success-number">
              {completedCount}
            </strong>

          </div>


          <div className="resident-history-summary-divider" />


          <div className="resident-history-summary-item">

            <span>
              REJECTED
            </span>

            <strong className="history-danger-number">
              {rejectedCount}
            </strong>

          </div>

        </section>


        {/* =================================================
            HISTORY LIST
            ================================================= */}

        <section className="resident-history-list">

          <div className="resident-history-list-header">

            <div>

              <p className="resident-history-section-label">
                RECENT ACTIVITY
              </p>

              <h2>
                Visitor history
              </h2>

            </div>

            <span>
              {history.length} records
            </span>

          </div>


          <div className="resident-history-items">

            {history.map((visit) => (

              <article
                key={visit.id}
                className="resident-history-item"
              >

                {/* Visitor */}

                <div className="resident-history-person">

                  <div className="resident-history-avatar">
                    {visit.initials}
                  </div>

                  <div className="resident-history-person-info">

                    <div className="resident-history-name-row">

                      <h3>
                        {visit.name}
                      </h3>

                      <span
                        className={`history-status history-status-${visit.statusType}`}
                      >
                        {visit.status}
                      </span>

                    </div>

                    <p>
                      {visit.purpose}
                    </p>

                  </div>

                </div>


                {/* Details */}

                <div className="resident-history-details">

                  <div>

                    <span>
                      DATE & TIME
                    </span>

                    <strong>
                      {visit.date} · {visit.time}
                    </strong>

                  </div>


                  <div>

                    <span>
                      ENTRY TYPE
                    </span>

                    <strong>
                      {visit.entryType}
                    </strong>

                  </div>

                </div>


                {/* View button */}

                <button
                  type="button"
                  className="resident-history-view"
                >
                  View details
                  <span>→</span>
                </button>

              </article>

            ))}

          </div>

        </section>


        {/* =================================================
            FOOTER INFORMATION
            ================================================= */}

        <section className="resident-history-info">

          <div className="resident-history-info-icon">
            ↗
          </div>

          <div>

            <h3>
              Your visitor activity
            </h3>

            <p>
              Visitor records help you keep track of
              everyone who has accessed your residence.
            </p>

          </div>

        </section>

      </div>

    </main>
  );
}

export default ResidentHistory;
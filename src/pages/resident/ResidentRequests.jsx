function ResidentRequests() {
  const requests = [
    {
      id: 1,
      name: "Rahul Sharma",
      initials: "RS",
      purpose: "Personal Guest",
      date: "Today",
      time: "10:30 AM",
      entryType: "Gate Entry",
      phone: "98765 43210",
    },
    {
      id: 2,
      name: "Priya Kumar",
      initials: "PK",
      purpose: "Family Guest",
      date: "Today",
      time: "12:00 PM",
      entryType: "Gate Entry",
      phone: "98765 12345",
    },
    {
      id: 3,
      name: "Amit Verma",
      initials: "AV",
      purpose: "Delivery",
      date: "Today",
      time: "2:30 PM",
      entryType: "QR Verification",
      phone: "98765 67890",
    },
  ];

  return (
    <main className="resident-requests-page">
      <div className="resident-requests-container">

        {/* Header */}
        <header className="resident-requests-header">

          <button
            type="button"
            className="resident-requests-back"
            onClick={() => window.history.back()}
          >
            ←
          </button>

          <div>
            <p className="resident-requests-eyebrow">
              VISITOR ACCESS
            </p>

            <h1>Visitor Requests</h1>

            <p>
              Review visitors waiting for your approval.
            </p>
          </div>

        </header>

        {/* Summary */}
        <section className="resident-requests-summary">

          <div>
            <p>Pending requests</p>
            <strong>{requests.length}</strong>
          </div>

          <div className="resident-requests-summary-icon">
            ⏳
          </div>

        </section>

        {/* Requests */}
        <section className="resident-requests-list">

          <div className="resident-requests-list-header">
            <div>
              <p className="resident-requests-section-label">
                NEEDS YOUR ATTENTION
              </p>

              <h2>Pending approvals</h2>
            </div>

            <span>
              {requests.length} requests
            </span>
          </div>

          {requests.map((request) => (
            <article
              className="resident-request-item"
              key={request.id}
            >

              {/* Visitor */}
              <div className="resident-request-person">

                <div className="resident-request-avatar">
                  {request.initials}
                </div>

                <div className="resident-request-person-info">

                  <div className="resident-request-name">
                    <h3>{request.name}</h3>

                    <span>
                      ● Pending
                    </span>
                  </div>

                  <p>{request.purpose}</p>

                </div>

              </div>

              {/* Details */}
              <div className="resident-request-meta">

                <div>
                  <span>DATE & TIME</span>
                  <strong>
                    {request.date} · {request.time}
                  </strong>
                </div>

                <div>
                  <span>ENTRY TYPE</span>
                  <strong>
                    {request.entryType}
                  </strong>
                </div>

                <div>
                  <span>MOBILE</span>
                  <strong>
                    {request.phone}
                  </strong>
                </div>

              </div>

              {/* Actions */}
              <div className="resident-request-item-actions">

                <button
                  type="button"
                  className="resident-request-item-reject"
                >
                  Reject
                </button>

                <button
                  type="button"
                  className="resident-request-item-approve"
                >
                  ✓ Approve
                </button>

              </div>

            </article>
          ))}

        </section>

        {/* Information */}
        <section className="resident-requests-info">

          <div className="resident-requests-info-icon">
            🛡️
          </div>

          <div>
            <h3>Approve only visitors you recognize</h3>

            <p>
              Approved visitors can enter through the
              designated security gate. If you're unsure,
              reject the request and contact the visitor.
            </p>
          </div>

        </section>

      </div>
    </main>
  );
}

export default ResidentRequests;
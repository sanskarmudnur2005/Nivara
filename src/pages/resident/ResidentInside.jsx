function ResidentInside() {
  return (
    <main className="resident-page resident-inside-page">

      {/* =================================================
          PAGE HEADER
          ================================================= */}

      <section className="resident-page-header">

        <button
          type="button"
          className="resident-inside-back"
          onClick={() => window.history.back()}
          aria-label="Go back"
        >
          ←
        </button>

        <div className="resident-page-header-content">

          <p className="resident-eyebrow">
            RESIDENT
          </p>

          <h1>
            Currently Inside
          </h1>

          <p>
            Visitors who are currently inside your residence.
          </p>

        </div>

      </section>


      {/* =================================================
          SUMMARY
          ================================================= */}

      <section className="inside-summary-card">

        <div className="inside-summary-icon">
          ✓
        </div>

        <div>
          <span>
            Currently inside
          </span>

          <strong>
            1 visitor
          </strong>
        </div>

      </section>


      {/* =================================================
          ACTIVE VISITORS
          ================================================= */}

      <section className="inside-section">

        <div className="inside-section-header">

          <div>

            <p className="resident-eyebrow">
              ACTIVE VISITORS
            </p>

            <h2>
              Visitors currently inside
            </h2>

          </div>

          <span className="inside-count">
            1
          </span>

        </div>


        {/* =================================================
            VISITOR
            ================================================= */}

        <div className="inside-visitor-card">

          <div className="inside-visitor-avatar">
            AD
          </div>


          <div className="inside-visitor-info">

            <div className="inside-visitor-name">

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


          <button
            type="button"
            className="inside-action-button"
          >
            View details
          </button>

        </div>

      </section>


      {/* =================================================
          INFORMATION
          ================================================= */}

      <section className="inside-info-card">

        <div className="inside-info-icon">
          🛡️
        </div>

        <div>

          <h3>
            Visitor safety
          </h3>

          <p>
            Make sure visitors leave through the proper exit
            process when their visit is complete.
          </p>

        </div>

      </section>

    </main>
  );
}

export default ResidentInside;
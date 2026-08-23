import { useNavigate } from "react-router-dom";

function ResidentInvite() {
  const navigate = useNavigate();

  return (
    <main className="resident-feature-page">

      {/* Header */}

      <div className="feature-page-header">

        <button
          type="button"
          className="feature-back-button"
          onClick={() => navigate("/resident")}
          aria-label="Go back"
        >
          ←
        </button>

        <div>
          <p className="resident-eyebrow">
            VISITOR ACCESS
          </p>

          <h1>
            Invite Visitor
          </h1>

          <p>
            Pre-approve a visitor before they arrive.
          </p>
        </div>

      </div>


      {/* Form */}

      <form className="invite-visitor-form">

        {/* Visitor Name */}

        <div className="feature-form-group">

          <label htmlFor="visitor-name">
            Visitor name
          </label>

          <input
            id="visitor-name"
            name="visitorName"
            type="text"
            placeholder="Enter visitor's full name"
          />

        </div>


        {/* Mobile Number */}

        <div className="feature-form-group">

          <label htmlFor="visitor-mobile">
            Mobile number
          </label>

          <input
            id="visitor-mobile"
            name="visitorMobile"
            type="tel"
            placeholder="Enter visitor's mobile number"
          />

        </div>


        {/* Purpose */}

        <div className="feature-form-group">

          <label htmlFor="visit-purpose">
            Purpose of visit
          </label>

          <select
            id="visit-purpose"
            name="visitPurpose"
            defaultValue=""
          >

            <option
              value=""
              disabled
            >
              Select purpose
            </option>

            <option value="personal">
              Personal visit
            </option>

            <option value="delivery">
              Delivery
            </option>

            <option value="service">
              Service / Maintenance
            </option>

            <option value="other">
              Other
            </option>

          </select>

        </div>


        {/* Visit Date */}

        <div className="feature-form-row">

          <div className="feature-form-group">

            <label htmlFor="visit-date">
              Visit date
            </label>

            <input
              id="visit-date"
              name="visitDate"
              type="date"
            />

          </div>


          {/* Visit Time */}

          <div className="feature-form-group">

            <label htmlFor="visit-time">
              Expected time
            </label>

            <input
              id="visit-time"
              name="visitTime"
              type="time"
            />

          </div>

        </div>


        {/* Entry Type */}

        <div className="feature-form-group">

          <label>
            Entry type
          </label>

          <div className="entry-type-options">

            <label className="entry-type-option">

              <input
                type="radio"
                name="entryType"
                value="gate"
                defaultChecked
              />

              <span>
                Gate entry
              </span>

            </label>


            <label className="entry-type-option">

              <input
                type="radio"
                name="entryType"
                value="qr"
              />

              <span>
                QR verification
              </span>

            </label>

          </div>

        </div>


        {/* Submit */}

        <button
          type="button"
          className="invite-submit-button"
        >
          Generate Visitor Pass
          <span>→</span>
        </button>

      </form>

    </main>
  );
}

export default ResidentInvite;
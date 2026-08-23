import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ResidentAddTrustedPerson() {
  const navigate = useNavigate();
  const location = useLocation();

  const editingPerson = location.state?.person || null;
  const isEditing = Boolean(editingPerson);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [relationship, setRelationship] = useState("");
  const [access, setAccess] = useState("always");

  const [error, setError] = useState("");

  useEffect(() => {
    if (!editingPerson) {
      return;
    }

    setName(editingPerson.name || "");
    setPhone(editingPerson.phone || "");

    const relationMap = {
      "Family Member": "family",
      "House Help": "house-help",
      Caregiver: "caregiver",
      Driver: "driver",
      Other: "other",
    };

    setRelationship(
      relationMap[editingPerson.relation] || ""
    );

    setAccess(
      editingPerson.access === "Scheduled access"
        ? "scheduled"
        : "always"
    );
  }, [editingPerson]);

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    if (!name.trim()) {
      setError("Please enter the person's full name.");
      return;
    }

    if (!phone.trim()) {
      setError("Please enter the person's mobile number.");
      return;
    }

    if (!relationship) {
      setError("Please select a relationship or type.");
      return;
    }

    const cleanedPhone = phone.replace(/\D/g, "");

    if (cleanedPhone.length < 10) {
      setError("Please enter a valid mobile number.");
      return;
    }

    const relation =
      relationship === "family"
        ? "Family Member"
        : relationship === "house-help"
        ? "House Help"
        : relationship === "caregiver"
        ? "Caregiver"
        : relationship === "driver"
        ? "Driver"
        : "Other";

    const updatedPerson = {
      id: editingPerson?.id || Date.now(),

      initials: name
        .trim()
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),

      name: name.trim(),

      relation,

      phone: phone.trim(),

      access:
        access === "always"
          ? "Always allowed"
          : "Scheduled access",
    };

    const existingPeople =
      JSON.parse(
        localStorage.getItem("nivaraTrustedPeople")
      ) || [];

    let updatedPeople;

    if (isEditing) {
      updatedPeople = existingPeople.map((person) =>
        person.id === editingPerson.id
          ? updatedPerson
          : person
      );
    } else {
      updatedPeople = [
        ...existingPeople,
        updatedPerson,
      ];
    }

    localStorage.setItem(
      "nivaraTrustedPeople",
      JSON.stringify(updatedPeople)
    );

    navigate("/resident/trusted-people");
  }

  return (
    <main className="resident-page resident-add-trusted-page">

      {/* =================================================
          PAGE HEADER
          ================================================= */}

      <section className="add-trusted-header">

        <button
          type="button"
          className="add-trusted-back"
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
            {isEditing
              ? "Edit Trusted Person"
              : "Add Trusted Person"}
          </h1>

          <p>
            {isEditing
              ? "Update this person's details and access."
              : "Add someone who regularly visits your residence."}
          </p>

        </div>

      </section>


      {/* =================================================
          FORM CARD
          ================================================= */}

      <form
        className="add-trusted-card"
        onSubmit={handleSubmit}
      >

        {/* =================================================
            CARD HEADER
            ================================================= */}

        <div className="add-trusted-card-header">

          <div className="add-trusted-card-icon">
            {isEditing ? "✎" : "👤"}
          </div>

          <div>

            <h2>
              {isEditing
                ? "Update Person Details"
                : "Person Details"}
            </h2>

            <p>
              {isEditing
                ? "Make changes to this trusted person's information."
                : "Enter the details of the person you want to add."}
            </p>

          </div>

        </div>


        {/* =================================================
            NAME
            ================================================= */}

        <div className="add-trusted-field">

          <label htmlFor="trusted-name">
            Full Name
          </label>

          <input
            id="trusted-name"
            type="text"
            placeholder="Enter full name"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            autoComplete="name"
          />

        </div>


        {/* =================================================
            MOBILE
            ================================================= */}

        <div className="add-trusted-field">

          <label htmlFor="trusted-phone">
            Mobile Number
          </label>

          <input
            id="trusted-phone"
            type="tel"
            placeholder="+91 98765 43210"
            value={phone}
            onChange={(event) =>
              setPhone(event.target.value)
            }
            autoComplete="tel"
          />

        </div>


        {/* =================================================
            RELATIONSHIP
            ================================================= */}

        <div className="add-trusted-field">

          <label htmlFor="trusted-relation">
            Relationship / Type
          </label>

          <select
            id="trusted-relation"
            value={relationship}
            onChange={(event) =>
              setRelationship(event.target.value)
            }
          >

            <option value="" disabled>
              Select relationship
            </option>

            <option value="family">
              Family Member
            </option>

            <option value="house-help">
              House Help
            </option>

            <option value="caregiver">
              Caregiver
            </option>

            <option value="driver">
              Driver
            </option>

            <option value="other">
              Other
            </option>

          </select>

        </div>


        {/* =================================================
            ACCESS
            ================================================= */}

        <div className="add-trusted-access">

          <div className="add-trusted-access-header">

            <div>

              <h3>
                Access Permission
              </h3>

              <p>
                Decide when this person can enter.
              </p>

            </div>

          </div>


          <label className="access-option">

            <input
              type="radio"
              name="access"
              value="always"
              checked={access === "always"}
              onChange={(event) =>
                setAccess(event.target.value)
              }
            />

            <span className="access-option-content">

              <strong>
                Always allowed
              </strong>

              <small>
                Can enter without a new approval each time.
              </small>

            </span>

          </label>


          <label className="access-option">

            <input
              type="radio"
              name="access"
              value="scheduled"
              checked={access === "scheduled"}
              onChange={(event) =>
                setAccess(event.target.value)
              }
            />

            <span className="access-option-content">

              <strong>
                Scheduled access
              </strong>

              <small>
                Allow access only during selected times.
              </small>

            </span>

          </label>

        </div>


        {/* =================================================
            ERROR
            ================================================= */}

        {error && (
          <div className="add-trusted-error">

            <span>
              !
            </span>

            <p>
              {error}
            </p>

          </div>
        )}


        {/* =================================================
            NOTICE
            ================================================= */}

        <div className="add-trusted-notice">

          <span>
            🛡️
          </span>

          <p>
            You can change or revoke this person's access
            at any time.
          </p>

        </div>


        {/* =================================================
            ACTIONS
            ================================================= */}

        <div className="add-trusted-actions">

          <button
            type="button"
            className="add-trusted-cancel"
            onClick={() =>
              navigate("/resident/trusted-people")
            }
          >
            Cancel
          </button>

          <button
            type="submit"
            className="add-trusted-submit"
          >
            {isEditing
              ? "Save Changes"
              : "Add Trusted Person"}
          </button>

        </div>

      </form>

    </main>
  );
}

export default ResidentAddTrustedPerson;
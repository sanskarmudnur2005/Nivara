import { QRCodeSVG } from "qrcode.react";

function ResidentQRPass() {
  const resident = {
    name: "Krishna",
    flat: "Flat 105",
    apartment: "Nivara Residency",
    validUntil: "Valid for today",
  };

  const qrValue = `NIVARA-RESIDENT-${resident.name}-${resident.flat}`;

  return (
    <main className="resident-qr-page">
      <div className="resident-qr-container">

        {/* Header */}
        <header className="resident-qr-header">
          <button
            type="button"
            className="resident-back-button"
            onClick={() => window.history.back()}
          >
            ←
          </button>

          <div>
            <p className="resident-qr-eyebrow">
              RESIDENT ACCESS
            </p>

            <h1>My QR Pass</h1>

            <p>
              Show this QR code at the security gate.
            </p>
          </div>
        </header>

        {/* QR Pass Card */}
        <section className="resident-qr-card">

          <div className="resident-qr-card-header">
            <div>
              <p className="resident-qr-card-label">
                RESIDENT QR PASS
              </p>

              <h2>{resident.name}</h2>

              <p>
                {resident.flat} · {resident.apartment}
              </p>
            </div>

            <span className="resident-qr-status">
              ● Active
            </span>
          </div>

          {/* QR Code */}
          <div className="resident-qr-code-wrapper">
            <div className="resident-qr-code">
              <QRCodeSVG
                value={qrValue}
                size={220}
                bgColor="#ffffff"
                fgColor="#11162b"
                level="H"
                includeMargin={true}
              />
            </div>
          </div>

          <div className="resident-qr-instruction">
            <h3>Scan to verify resident</h3>

            <p>
              Present this QR code to security for quick
              and secure verification.
            </p>
          </div>

          {/* Pass Information */}
          <div className="resident-qr-info">

            <div className="resident-qr-info-item">
              <span>Resident</span>
              <strong>{resident.name}</strong>
            </div>

            <div className="resident-qr-info-item">
              <span>Apartment</span>
              <strong>{resident.flat}</strong>
            </div>

            <div className="resident-qr-info-item">
              <span>Valid until</span>
              <strong>{resident.validUntil}</strong>
            </div>

          </div>

          {/* Actions */}
          <div className="resident-qr-actions">

            <button
              type="button"
              className="resident-qr-primary-button"
            >
              ↗ Share QR Pass
            </button>

            <button
              type="button"
              className="resident-qr-secondary-button"
            >
              ↓ Save QR
            </button>

          </div>

          <div className="resident-qr-security">
            <span>🔒</span>
            <span>
              This QR pass is unique to your residence.
            </span>
          </div>

        </section>

      </div>
    </main>
  );
}

export default ResidentQRPass;
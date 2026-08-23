import { useState } from "react";

import GlassCard from "../../components/GlassCard";
import Button from "../../components/Button";
import Input from "../../components/Input";

function ResidentLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    console.log("Login submitted:", {
      email,
      password,
    });
  }

  function handleForgotPassword() {
    console.log("Forgot password clicked");
  }

  return (
    <main className="login-page">

      {/* =====================================================
          BRAND / LEFT SIDE
          ===================================================== */}

      <section className="login-brand">

        <div className="brand-logo">
          N
        </div>

        <p className="brand-name">
          Nivara
        </p>

        <h1>
          Apartment security
          <br />
          made effortless.
        </h1>

        <p className="brand-description">
          Secure visitor access and simple
          <br />
          community management.
        </p>

        <div className="brand-features">
          <div>✓ Secure access</div>
          <div>✓ Visitor passes</div>
          <div>✓ QR verification</div>
        </div>

      </section>


      {/* =====================================================
          LOGIN CARD / RIGHT SIDE
          ===================================================== */}

      <GlassCard className="login-card">

        <div className="login-header">

          <p className="login-eyebrow">
            RESIDENT PORTAL
          </p>

          <h2>
            Welcome back
          </h2>

          <p>
            Sign in to manage your visitors
            and access.
          </p>

        </div>


        {/* ===================================================
            LOGIN FORM
            =================================================== */}

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <Input
            id="email"
            name="email"
            label="Email or mobile number"
            type="text"
            placeholder="Enter your email or mobile"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />


          <Input
            id="password"
            name="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />


          <Button
            type="submit"
            variant="primary"
          >
            Sign in
          </Button>

        </form>


        {/* ===================================================
            FORGOT PASSWORD
            =================================================== */}

        <button
          type="button"
          className="forgot-password"
          onClick={handleForgotPassword}
        >
          Forgot password?
        </button>


        {/* ===================================================
            SECURITY MESSAGE
            =================================================== */}

        <div className="login-security">

          <span>🔒</span>

          <span>
            Your access is protected
          </span>

        </div>

      </GlassCard>

    </main>
  );
}

export default ResidentLogin;
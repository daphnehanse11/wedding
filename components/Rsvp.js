"use client";

import { useState } from "react";
import styles from "./Rsvp.module.css";
import FadeIn from "./FadeIn";
import Flourish from "./Flourish";

const SCRIPT_URL = process.env.NEXT_PUBLIC_RSVP_URL || "";

export default function Rsvp() {
  const [form, setForm] = useState({
    name: "",
    attending: "",
    guestNames: "",
    dietary: "",
  });
  const [status, setStatus] = useState("idle");

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!SCRIPT_URL) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          attending: form.attending,
          guestNames: form.guestNames,
          dietary: form.dietary,
          timestamp: new Date().toISOString(),
        }),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <section id="rsvp" className="section">
        <div className="container">
          <FadeIn>
            <h2 className="section-title">RSVP</h2>
            <Flourish />
          </FadeIn>
          <FadeIn delay={150}>
            <div className={styles.content}>
              <p className={styles.message}>Thank you!</p>
              <p className={styles.detail}>
                We&apos;ve received your RSVP. We can&apos;t wait to celebrate
                with you!
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="section">
      <div className="container">
        <FadeIn>
          <h2 className="section-title">RSVP</h2>
          <Flourish />
        </FadeIn>
        <FadeIn delay={150}>
          <div className={styles.content}>
            <p className={styles.message}>
              We are so excited to celebrate with you!
            </p>
            <p className={styles.date}>
              Kindly respond by <strong>August 26, 2026</strong>
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <label className={styles.label}>
                Your name
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  className={styles.input}
                  placeholder="First and last name"
                />
              </label>

              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Will you be attending?</legend>
                <div className={styles.radioGroup}>
                  <label className={styles.radio}>
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      required
                      checked={form.attending === "yes"}
                      onChange={update("attending")}
                    />
                    <span>Joyfully accepts</span>
                  </label>
                  <label className={styles.radio}>
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={form.attending === "no"}
                      onChange={update("attending")}
                    />
                    <span>Regretfully declines</span>
                  </label>
                </div>
              </fieldset>

              {form.attending === "yes" && (
                <>
                  <label className={styles.label}>
                    Names of all guests in your party
                    <textarea
                      value={form.guestNames}
                      onChange={update("guestNames")}
                      className={styles.textarea}
                      placeholder="Include yourself, plus-ones, and children — one name per line"
                      rows={4}
                    />
                  </label>

                  <label className={styles.label}>
                    Dietary restrictions or allergies
                    <textarea
                      value={form.dietary}
                      onChange={update("dietary")}
                      className={styles.textarea}
                      placeholder="Let us know and we'll take care of it (or leave blank if none)"
                      rows={3}
                    />
                  </label>
                </>
              )}

              <button
                type="submit"
                className={styles.button}
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Send RSVP"}
              </button>

              {status === "error" && (
                <p className={styles.error}>
                  Something went wrong. Please try again or email us at{" "}
                  <a href="mailto:daphne@hansell.net">daphne@hansell.net</a>.
                </p>
              )}
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import styles from "./Rsvp.module.css";
import FadeIn from "./FadeIn";
import Flourish from "./Flourish";

const SCRIPT_URL = process.env.NEXT_PUBLIC_RSVP_URL || "";

export default function Rsvp() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");
  const [partySize, setPartySize] = useState(1);
  const [guestNames, setGuestNames] = useState([""]);
  const [dietary, setDietary] = useState("");
  const [status, setStatus] = useState("idle");

  function handlePartySize(e) {
    const size = Math.max(1, Math.min(20, parseInt(e.target.value) || 1));
    setPartySize(size);
    setGuestNames((prev) => {
      const next = [...prev];
      while (next.length < size) next.push("");
      return next.slice(0, size);
    });
  }

  function updateGuest(index, value) {
    setGuestNames((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
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
          name,
          attending,
          partySize,
          guestNames: guestNames.join("\n"),
          dietary,
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.input}
                  placeholder="First and last name"
                />
              </label>

              <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>
                  Will you be attending?
                </legend>
                <div className={styles.radioGroup}>
                  <label className={styles.radio}>
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      required
                      checked={attending === "yes"}
                      onChange={(e) => setAttending(e.target.value)}
                    />
                    <span>Joyfully accepts</span>
                  </label>
                  <label className={styles.radio}>
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={attending === "no"}
                      onChange={(e) => setAttending(e.target.value)}
                    />
                    <span>Regretfully declines</span>
                  </label>
                </div>
              </fieldset>

              {attending === "yes" && (
                <>
                  <label className={styles.label}>
                    Number of guests in your party
                    <input
                      type="number"
                      min={1}
                      max={20}
                      value={partySize}
                      onChange={handlePartySize}
                      className={styles.input}
                    />
                  </label>

                  <div className={styles.guestList}>
                    <p className={styles.label}>
                      Names of each guest (including yourself)
                    </p>
                    {guestNames.map((g, i) => (
                      <input
                        key={i}
                        type="text"
                        value={g}
                        onChange={(e) => updateGuest(i, e.target.value)}
                        className={styles.input}
                        placeholder={`Guest ${i + 1}`}
                      />
                    ))}
                  </div>

                  <label className={styles.label}>
                    Dietary restrictions or allergies
                    <textarea
                      value={dietary}
                      onChange={(e) => setDietary(e.target.value)}
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

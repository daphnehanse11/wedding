import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Daphne & Matt — September 26, 2026";
export const dynamic = "force-static";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#faf8f5",
          fontFamily: "Georgia, serif",
        }}
      >
        <p
          style={{
            fontSize: 20,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#6b6560",
            marginBottom: 8,
          }}
        >
          Together with their families
        </p>
        <h1
          style={{
            fontSize: 80,
            fontWeight: 300,
            color: "#3a3632",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Daphne & Matt
        </h1>
        <div
          style={{
            width: 80,
            height: 1,
            backgroundColor: "#9caa8e",
            margin: "24px 0",
          }}
        />
        <p
          style={{
            fontSize: 28,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#3a3632",
            margin: 0,
          }}
        >
          September 26, 2026
        </p>
        <p
          style={{
            fontSize: 20,
            color: "#6b6560",
            marginTop: 16,
          }}
        >
          National Capital Trolley Museum — Colesville, Maryland
        </p>
      </div>
    ),
    { ...size }
  );
}

import { ImageResponse } from "next/og";

export const alt =
  "SvaraCall AI — AI outbound calling agent for Indian businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e0f0c",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 9999,
              background: "#9fe870",
              color: "#0e0f0c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 900,
            }}
          >
            S
          </div>
          <div style={{ color: "#ffffff", fontSize: 34, fontWeight: 700 }}>
            SvaraCall AI
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              color: "#ffffff",
              fontSize: 76,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
            }}
          >
            <span>Missed calls are&nbsp;</span>
            <span style={{ color: "#9fe870" }}>missed customers.</span>
          </div>
          <div style={{ color: "#c5edab", fontSize: 32, fontWeight: 600 }}>
            AI outbound calling agent for Indian businesses · Telugu · Hindi ·
            English
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}

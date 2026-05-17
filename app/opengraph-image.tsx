import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Impresora Vertical I-TECH · Oficial en España";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#1a1f3a",
          color: "#f5f1e3",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.15em",
            color: "#e8b04a",
            textTransform: "uppercase",
          }}
        >
          I-TECH · Oficial en España
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#f5f1e3",
            }}
          >
            Impresora
          </div>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: "#e8b04a",
              marginTop: "8px",
            }}
          >
            Vertical
          </div>
          <div
            style={{
              fontSize: 32,
              marginTop: "32px",
              color: "#f5f1e3",
              opacity: 0.85,
              maxWidth: "900px",
            }}
          >
            Decora paredes sin vinilos · sin pintores · sin andamios. Inventores
            de la tecnología, oficiales en España.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#f5f1e3",
            opacity: 0.7,
            letterSpacing: "0.05em",
          }}
        >
          <div>impresoravertical.com</div>
          <div>Les Preses · Girona</div>
        </div>
      </div>
    ),
    { ...size }
  );
}

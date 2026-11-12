
import { ImageResponse } from "next/og";

export const alt =
  "Instituto Pilates Aldeota — Pilates em Fortaleza";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "75px 85px",
          background:
            "linear-gradient(135deg, #030B36 0%, #152456 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
          }}
        >
          <div
            style={{
              width: "14px",
              height: "52px",
              background: "#E52D16",
              borderRadius: "8px",
            }}
          />

          <span
            style={{
              fontSize: 35,
              fontWeight: 700,
            }}
          >
            INSTITUTO PILATES
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: 21,
              color: "#F0A197",
              fontWeight: 600,
              letterSpacing: "3px",
              marginBottom: "22px",
            }}
          >
            UNIDADE ALDEOTA
          </span>

          <h1
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.12,
              letterSpacing: "-2px",
              margin: 0,
            }}
          >
            Pilates na Aldeota
          </h1>

          <p
            style={{
              fontSize: 30,
              color: "#D8DEEE",
              marginTop: "22px",
            }}
          >
            Fortaleza, Ceará
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            borderTop: "1px solid #536080",
            paddingTop: "25px",
            fontSize: 21,
            color: "#CBD3E8",
          }}
        >
          Movimento, cuidado e bem-estar.
        </div>
      </div>
    ),
    size
  );
}

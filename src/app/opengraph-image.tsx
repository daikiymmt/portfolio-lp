import { ImageResponse } from "next/og";

export const alt = "Daiki Yamamoto | Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#050508",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "monospace",
        }}
      >
        {/* Border accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #00ff88, #00d4ff)",
          }}
        />
        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
          }}
        >
          <div style={{ fontSize: 28, color: "#00ff88", letterSpacing: 4 }}>
            {"<Engineer />"}
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#f0f0f0",
              letterSpacing: -1,
            }}
          >
            Daiki Yamamoto
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#888",
              marginTop: 8,
            }}
          >
            Web開発 / システム設計 / React / Next.js / TypeScript
          </div>
        </div>
        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            fontSize: 16,
            color: "#444",
          }}
        >
          daiki-yamamoto.vercel.app
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

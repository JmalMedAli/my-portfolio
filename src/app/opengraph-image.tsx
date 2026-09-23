import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

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
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0F172A",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#22C55E",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          <div style={{ width: 10, height: 10, borderRadius: 999, backgroundColor: "#22C55E" }} />
          {siteConfig.label}
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, marginTop: 24, lineHeight: 1.15, maxWidth: 980 }}>
          {siteConfig.headline}
        </div>
        <div style={{ fontSize: 26, marginTop: 28, color: "#94A3B8" }}>
          {siteConfig.positioning}
        </div>
      </div>
    ),
    { ...size },
  );
}

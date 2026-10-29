import { ImageResponse } from "next/og";

export const alt = "Coreridge Technologies - Enterprise Technology Partner";
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
          padding: "72px",
          background: "linear-gradient(135deg, #06143D 0%, #102653 58%, #030B22 100%)",
          color: "#ffffff",
          fontFamily: "Arial",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "54px",
              height: "54px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #F4B183",
              borderRadius: "14px",
              color: "#F4B183",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            C
          </div>
          <div style={{ fontSize: "24px", fontWeight: 700, letterSpacing: "2px" }}>
            CORERIDGE TECHNOLOGIES
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div style={{ color: "#F4B183", fontSize: "24px", letterSpacing: "3px" }}>
            ENTERPRISE TECHNOLOGY PARTNER
          </div>
          <div style={{ maxWidth: "940px", fontSize: "64px", fontWeight: 700, lineHeight: 1.15 }}>
            Architecting next-gen enterprise technology.
          </div>
          <div style={{ color: "#dbeafe", fontSize: "24px" }}>
            AI Solutions | IT Infrastructure | Cybersecurity | Validation
          </div>
        </div>
        <div style={{ color: "#bfdbfe", fontSize: "20px" }}>coreridgetech.com</div>
      </div>
    ),
    size,
  );
}

"use client";
export default function BackgroundImage() {
  
  const style: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    zIndex: -1,
    pointerEvents: "none",
    backgroundImage: "url('/ruva.jpg')",
  };

  return <div style={style} aria-hidden="true" />;
}
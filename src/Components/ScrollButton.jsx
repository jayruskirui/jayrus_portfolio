import { useState } from "react";

function ScrollButton({ onClick }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "1rem",
        color: "white",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          letterSpacing: "0.2em",
          fontWeight: 500,
        }}
      >
        SCROLL
      </span>
      <svg
        width="20"
        height="12"
        viewBox="0 0 20 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          transition: "transform 0.3s ease",
          transform: clicked ? "translateY(6px)" : "translateY(0)",
        }}
      >
        <path
          d="M1 1L10 10L19 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default ScrollButton
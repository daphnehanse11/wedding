import styles from "./Flourish.module.css";

export default function Flourish() {
  return (
    <div className={styles.flourish} aria-hidden="true">
      <svg
        width="120"
        height="24"
        viewBox="0 0 120 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M60 12C60 12 52 4 40 4C28 4 20 12 20 12C20 12 28 20 40 20C52 20 60 12 60 12Z"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="none"
        />
        <path
          d="M60 12C60 12 68 4 80 4C92 4 100 12 100 12C100 12 92 20 80 20C68 20 60 12 60 12Z"
          stroke="currentColor"
          strokeWidth="0.75"
          fill="none"
        />
        <circle cx="60" cy="12" r="2" fill="currentColor" />
        <line x1="0" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="0.5" />
        <line x1="104" y1="12" x2="120" y2="12" stroke="currentColor" strokeWidth="0.5" />
      </svg>
    </div>
  );
}

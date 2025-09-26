"use client";

export default function CopyableContactItem({ text, item, copiedItem, onCopy, className }) {
  return (
    <button 
      onClick={() => onCopy(text, item)}
      className={className}
    >
      {text}
      {copiedItem === item && (
        <span className="text-sm text-green-300">✓ Kopirano!</span>
      )}
    </button>
  );
}

"use client";

export default function StarBackground() {
  // Using a fixed set of stars instead of randomly generated ones
  return (
    <div className="stars fixed inset-0 pointer-events-none z-[-1]">
      <div className="star-field absolute inset-0 bg-portfolio-navy">
        {/* Fixed pattern of stars using pseudo-elements in CSS */}
        <div className="star-layer" />
      </div>
    </div>
  );
}

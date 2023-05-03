import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className="flex justify-center mt-4 -mb-6 spinner-container">
      <div className="loading-spinner">
      </div>
    </div>
  );
}
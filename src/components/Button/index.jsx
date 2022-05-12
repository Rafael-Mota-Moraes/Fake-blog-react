import { Component } from "react";
import "./styles.css";

export function Button({ text, onClick, disabled }) {
  return (
    <button className="button" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
}

import React from "react";
import avatar from "../assets/ha-test-avatar.png";

export default function ButtonAndAvatar({ count, messages, handleClick }) {
  return (
    <div className="button-and-avatar">
      <div className="buttons" id="buttons-section">
        {count > 0 && (
          <button
            className="nav-button back"
            onClick={() => handleClick("back")}
          >
            BACK
          </button>
        )}
        {count > 0 && count < messages.length - 1 && (
          <button
            onClick={() => handleClick("next")}
            className="nav-button next-appear"
          >
            NEXT
          </button>
        )}
        {count === 0 && (
          <button
            onClick={() => handleClick("next")}
            className="nav-button next"
          >
            NEXT
          </button>
        )}
      </div>
      <div id="avatar-section">
        <img id="avatar" alt="chat bot avatar" src={avatar}></img>
      </div>
    </div>
  );
}

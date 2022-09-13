//import { ReactChild, ReactFragment, ReactPortal } from "react";
import "./styles.css";

function Button(props: { label: string }) {
  return (
    <>
      <button className="btn btn-secondary btn-icon">
        <p>{props.label}</p>
      </button>
    </>
  );
}

export default Button;

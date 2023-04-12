import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="not-found-page">
        <p>
          <NavLink to="/" className="not-found-link">
            Click here
          </NavLink>{" "}
          to go to the home page.
        </p>
      </div>
    </>
  );
}

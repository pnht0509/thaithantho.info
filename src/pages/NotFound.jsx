import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Wrong page, please go back</p>
        <Link to="/" className="not-found-link">Go Home</Link>
      </div>
    </div>
  );
}


import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="my-10">
      <h3>Requested page isn&rsquo;t available</h3>

      <Link to="/">Go to homepage</Link>
    </div>
  );
}

export default NotFound;

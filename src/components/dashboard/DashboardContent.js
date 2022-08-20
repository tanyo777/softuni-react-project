import { Link } from "react-router-dom";

const DashboardContent = ({ email, username}) => {
  return (
    <div>
      <h1>User Info</h1>
      <p>{email}</p>
      <p>{username}</p>
      <Link to="/cars">Cars</Link>
    </div>
  );
};

export default DashboardContent;

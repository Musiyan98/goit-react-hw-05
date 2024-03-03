import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not found page</h1>
      <Link to="/">Back to HOME page</Link>
    </div>
  );
};

export default NotFoundPage;

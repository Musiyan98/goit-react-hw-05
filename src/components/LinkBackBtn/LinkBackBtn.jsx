import { Link } from 'react-router-dom';
const LinkBackBtn = ({ href, children }) => {
  return <Link to={href}>{children}</Link>;
};
export default LinkBackBtn;

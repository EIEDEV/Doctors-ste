import "./reviewcard.css";

const Reviewcard = ({ className, children }) => {
  return <div className={`reviewcard ${className}`}>{children}</div>;
};

export default Reviewcard;

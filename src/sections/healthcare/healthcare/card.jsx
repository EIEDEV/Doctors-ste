import "./card.css";

const Card = ({ onclick, classname, children }) => {
  return (
    <article className={`health ${classname}`} onclick={onclick}>
      {children}
    </article>
  );
};

export default Card;

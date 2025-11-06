const AccordianItem = ({ title, body, clickedIndex, setClickedIndex }) => {
  return (
    <div className="accordianItem">
      <div className="title" onClick={() => setClickedIndex(null)}>
        {title}
      </div>
      {clickedIndex && <div className="body">{body}</div>}
    </div>
  );
};

export default AccordianItem;

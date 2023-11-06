// hoc is a function that takes in a comp as param and returns a new comp
const applyStyles = (OriginalComponent) => {
  // Receiving original comp as agrument

  // creating new comp == and return
  const NewComponent = (props) => {
    return (
      <div className="hoc-style">
        <OriginalComponent {...props} />
      </div>
    );
  };
  return NewComponent;
};

export default applyStyles;

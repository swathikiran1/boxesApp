const Box = (props) => {
  //  Write your code here.
  const { className1, className2, size } = props;
  return (
    <div className={className1}>
      <p className={className2}>{size}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div>
    <h1 className="heading">Boxes</h1>
    <div className="container">
      <Box className1="box1" className2="size-name" size="Small" />
      <Box className1="box2" className2="size-name" size="Medium" />
      <Box className1="box3" className2="size-name" size="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

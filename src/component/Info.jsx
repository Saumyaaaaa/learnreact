const Info = (props) => {
  console.log(props);
  console.log("hello world");
  let address = "chabahil";
  let college = "st lawrence";

  return (
    <div>
      <p>Address is : {address}</p>
      <p>College is : {college}</p>
      <p>Name is :{props.name}</p>
      <p>Surname is :{props.surname}</p>
      <p>is MarriedIs :{props.isMarried === true ? "yes" : "no"}</p>

      <p>Age Is :{props.age}</p>
      {props.list}
      <p>Name is :{props.father.name}</p>
      <p>Age is :{props.father.age}</p>
    </div>
  );
};

export default Info;

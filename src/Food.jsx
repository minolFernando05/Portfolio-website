function food(){

    const food1 = "Pizza";
    const food2 = "Burger";

  return (
    <ul>
        <li>apple</li>
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
    </ul>
  );
}

export default food;
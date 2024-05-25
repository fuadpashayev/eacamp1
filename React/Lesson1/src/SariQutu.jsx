const SariQutu = () => {
  const onClick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return <input onClick={onClick} type="text" style={{ color: "yellow" }} />;
};

export default SariQutu;

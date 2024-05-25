const getData = async () => {
  try {
    const request = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await request.json();

    const dataHTML = todos
      .map((todo) => {
        return '<li class="">${todo.title}</li>';
      })
      .join("");

    document.querySelector("ul").innerHTML = dataHTML;
  } catch (error) {
    console.log(error);
  }
};

getData();

const limit = 999;
let page = 1;

const getImagesData = async (callback) => {
  const request = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}&width=250&height=250`
  );
  const imagesData = await request.json();

  const imagesHTML = imagesData.map((imageData) => {
    return `
        <div class="image">
            <img src="https://picsum.photos/250/250?random=${Math.random()}" alt="${
      imageData.author
    }" loading="lazy" />
            <div>${imageData.author}</div>
        </div>
    `;
  });

  document.querySelector(".images").innerHTML += imagesHTML.join("");

  callback?.();
};

getImagesData();

// document.getElementById("refresh").addEventListener("click", () => {
//   page++;
//   getImagesData();
// });

let isFetching = false;

window.addEventListener("scroll", (e) => {
  const containerHeight = Math.abs(
    document.querySelector(".images").getBoundingClientRect().height
  );

  if (window.scrollY > containerHeight - 1000 && !isFetching) {
    console.log("sekillere sorgu atildi");
    isFetching = true;
    page++;
    getImagesData(() => {
      isFetching = false;
    });
  }
});

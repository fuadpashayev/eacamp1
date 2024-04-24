const limit = 99;
let page = 1;

const getImagesData = async () => {
  const request = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}&width=250&height=250`
  );
  const imagesData = await request.json();
  console.log(imagesData);

  const imagesHTML = imagesData.map((imageData) => {
    return `
        <div class="image">
            <img src="${imageData.download_url}" alt="${imageData.author}" loading="lazy" />
            <div>${imageData.author}</div>
        </div>
    `;
  });

  document.querySelector(".images").innerHTML += imagesHTML.join("");
};

getImagesData();

document.getElementById("refresh").addEventListener("click", () => {
  page++;
  getImagesData();
});

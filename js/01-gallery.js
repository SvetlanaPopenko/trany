import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join("");

galleryRef.insertAdjacentHTML("beforeend", markup);

galleryRef.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
    <div><img src="${evt.target.dataset.source}" width="1200"></div>
    `,
    {
      onShow: (instance) => {
        galleryRef.addEventListener("keydown", onEscape);
      },
      onClose: (instance) => {
        galleryRef.removeEventListener("keydown", onEscape);
      },
    }
  );
  instance.show();

  function onEscape(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
}

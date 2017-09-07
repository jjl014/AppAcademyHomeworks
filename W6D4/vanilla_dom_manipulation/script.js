document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });




  // adding SF places as list items
  // --- your code here!
  const handleFavSubmit = (e) => {
    event.preventDefault();
    const ul = document.getElementById("sf-places");
    const li = document.createElement("li");
    const input = document.querySelector(".favorite-input");
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = "";
  };

  const button = document.querySelector(".favorite-submit");
  button.addEventListener("click", handleFavSubmit);


  // adding new photos
  // --- your code here!
  const photoForm = document.querySelector(".photo-form-container");
  const photoShowButton = document.querySelector(".photo-show-button");
  photoShowButton.addEventListener("click", event => {
    if(photoForm.className === "photo-form-container hidden") {
      photoForm.className = "photo-form-container";
    } else {
      photoForm.className = "photo-form-container hidden";
    }
  });

  const photoSubmitButton = document.querySelector(".photo-url-submit");
  photoSubmitButton.addEventListener("click", event => {
    event.preventDefault();
    const photoUrlInput = document.querySelector(".photo-url-input");
    const dogUl = document.querySelector(".dog-photos");
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.src = photoUrlInput.value;
    li.appendChild(img);
    dogUl.appendChild(li);
    photoUrlInput.value = "";
  });

});

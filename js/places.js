const itemList = document.getElementById("items_list");
let markup = "";
let markers = [];

let id, locationMap;

places.map((place, index) => {
    markup += `<li class="items__item" id=${index}>
            <img src="./images/error.png" alt="close icon" class="item__close" />
            <img src="./images/${
                place.package_type
            }.png" alt="delivery" class="item__img" />
            <div class="item__info">
                <p class="item__address">
                    <span>ul.${place.street} ${place.number}</span>
                    <span>${place.zip}, ${place.city}</span>
                </p>
            </div>
        </li>`;
});

itemList.innerHTML = markup;

itemList.addEventListener("click", event => {
    if (event.target.id === "items_list") {
        return;
    } else if (event.target.classList.contains("item__close")) {
        id = event.target.closest(".items__item").id;
        markers[id].setMap(null);
        event.target.parentNode.parentNode.removeChild(event.target.parentNode);
    } else {
        if (event.target.hasAttribute("id")) {
            id = event.target.id;
        } else {
            id = event.target.closest(".items__item").id;
        }
        locationMap = new google.maps.LatLng(
            places[id].latitude,
            places[id].longitude
        );
        map.panTo(locationMap);
    }
});

const itemList = document.getElementById("items_list");
let markup = "",
    markers = [],
    id,
    locationMap;

for (let i = 0; i < places.length; i++) {
    markup += `<li class="items__item" id=${i}>
            <img src="./images/error.png" alt="close icon" class="item__close" />
            <img src="./images/${
                places[i].package_type
            }.png" alt="delivery" class="item__img" />
            <div class="item__info">
                <p class="item__address">
                    <span>ul.${places[i].street} ${places[i].number}</span>
                    <span>${places[i].zip}, ${places[i].city}</span>
                </p>
            </div>
        </li>`;
}

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

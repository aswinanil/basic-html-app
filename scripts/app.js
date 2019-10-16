$(window).keypress(function(e) {
    $("div").hide();
    if (e.keyCode === 13) {
        console.log("Last pressed key: " + this.getLastPressedKey());
    }
    this.storeKey(e.key);
});

function storeKey(key) {
    if (typeof(Storage) !== "undefined") {
        // Code for localStorage/sessionStorage.
        console.log(key);
        localStorage.setItem("lastPressedKey", key);
    } else {
        alert("Sorry! No Web Storage support..");
    }
}

function getLastPressedKey() {
    return localStorage.getItem("lastPressedKey");
}

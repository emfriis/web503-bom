function createWindow() {
    let url = "http://google.com";
    let win = window.open(url, "My New Window", "width=300, height=200");
    document.getElementById("result").innerHTML =
        win.name + " - " + win.opener.location;
}
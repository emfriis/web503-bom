var win;
function createWindow() {
    win = window.open("", "My Window", "width=500, height=200");
}

function showAlert() {
    if (win == undefined) {
        window.alert("First create the new window, then show alert in it");
    } else {
        win.alert("This is an alert");
    }
}

function closewin() {
    win.close();
}
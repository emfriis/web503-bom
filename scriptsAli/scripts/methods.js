var win;
// Open window
function createWindow() {
    win = window.open("", "My Window", "width=500, height=200");
}

function showAlert() {
    if (win == undefined) {
        // show alret in main window
        window.alert("First create the new window, then show alert in it");
    } else {
        win.alert("This is an alert");
    }
}

// Close window
function closewin() {
    win.close();
}
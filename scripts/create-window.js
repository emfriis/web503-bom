function createWindow() {
    var win = window.open("", "My Window", "width=500, height=200,screenX=100,screenY=100");
    var isclose = win.closed;
    var name = win.name;
    document.write(isclose + "<br>");
    document.write(name + "<br>");
    document.write(win.screenY + "<br>");
    document.write(win.screenX + "<br>");
    win.document.write("Hello World!");
}
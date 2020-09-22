function createWindow() {
    var win = window.open("", "My Window", "width=500, height=200,screenX=100,screenY=100");
    // window properties
    var isclose = win.closed;
    var name = win.name;
    // writing in the current document
    document.write(isclose + "<br>");
    document.write(name + "<br>");
    document.write(win.screenY + "<br>");
    document.write(win.screenX + "<br>");
    // we can access the new window document like this
    win.document.write("Hello World!");
}

/**
 * In the example above, we have created a new window, just to make you familiar with new window creation and also,
to make you understand that when we create a new window, then the current window has a different window object
and the new window will have a separate window object.

* We have then tried to access some properties of the new window created.
 */
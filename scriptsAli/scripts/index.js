/**
Let's use the JavaScript window object to create a new window,
using the open() method. 
This method creates a new window and returns an object which further can be used to manage that window.
 */

function createWindow() {
	let url = "https://google.com";
	let win = window.open(url, "My New Window", "width=300, height=200");
	document.getElementById("result").innerHTML =
		win.name + " - " + win.opener.location;
}

/**
 * In the code above, we have used the window object of the existing window to create a new window using the open() method. 
 * In the open() method we can provide the URL to be opened in the new window(we can keep it blank as well), name of the window, 
the width and the height of the window to be created.

Following is the syntax for the window object open() method:

* let newWindow = window.open(url, windowName, [windowFeatures]);

* We can provide, as many properties as we want, while creating a new window.

* When the open() method is executed, it returns the reference of the window object for the new window created, 
which you can assign to a variable, like we have done in the code above. 
* We have assigned the value returned by the window.open() method to the win variable.

* The we have used the win variable to access the new window, like getting the name of the window, 
getting location of the window which opened the new window etc.

There are many properties and methods for the window object, which we have listed down below.
 */

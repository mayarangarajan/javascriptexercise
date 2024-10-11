1) What is the difference between let and const? Why would you use one over the other?
The difference between let and const is about reassignment. You use let when you want to change a variable later, while const is for values that shouldn’t change at all. So, if you know a value will stay the same, use const.

2) Describe what document.querySelector() does. What does document refer to? What is the problem with using this function? Are there other functions to select elements?
document.querySelector() selects the first element on the page that matches a CSS selector. The document refers to the whole HTML page loaded in the browser. The downside of using querySelector() is that it only finds the first match. If you want to select multiple elements, you should use document.querySelectorAll(). Other options include document.getElementById() for IDs, and document.getElementsByClassName() for classes.

3) What is an event and event handler? Give an example of each.
An event is something that happens in the browser, like a button click. An event handler is a function that runs when that event occurs. For example, you can set up a button to show an alert when clicked like this:

```
button.addEventListener('click', function() {
  alert('Button was clicked!');
});
```

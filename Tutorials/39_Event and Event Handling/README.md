## Event and Event Handling in Javascript
---
- Javascript is an event driven programming language ie, we write programs that will respond to an event.
- Event is something that happens to a webpage element. <u>Example</u>: When a button is clicked then click event happens.
- We write programs to handle particular events which is known as event handling.
- In Javascript events can be classified into two types : <br>
(i) Browser Specific Events <br>
(ii) DOM ( Document Object Model ) Specific Events 
- <u> Browser Specific Events</u> are the events that happens on the browser like, scrolling up and down, resizing window, etc.
- <u> DOM Specific Events </u> are the events that happens on the webpage. <u>For Example:</u> <br>
(i) When a user clicks the mouse.<br>
(ii) When a web page has loaded.<br>
(iii) When an image has been loaded.<br>
(iv) When the mouse moves over an element.<br>
(v) When an input field is changed.<br>
(vi) When an HTML form is submitted.<br>
(vii) When a user presses a key.<br>
---
## Event Handling
- In Javascript events can be handled using : <br>
(i) Inline Event Handlers <br>
(ii) Event Handler Properties 
- Using <u>Inline Event Handler</u>, you can react to the DOM <br>( Document Object Model ) event for which you want to handle the event.
- The attribute must be the event name prefixed with on. <br>
<u>Example :</u> If u want to handle the focus event then attribute name must be <u>onfocus</u>.
- We acn assign any Javascript expression to the attribute which you want to execute when that event happens.
- Using <u>Event Handler Properties </u>, you can react to DOM event by adding a property to the DOM element for which you want to handle event. 
- The property name must be the event name prefixed with on, like : onfocus, onclick, etc.
- Then assign a javascript function to the property which you want to execute when that event happens.  





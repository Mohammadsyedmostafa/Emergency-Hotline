1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
   Answer:
   getElementById: This is a Dom method in JavaScript that finds an element by its unique ID.
   getElementsByClassName: This is a JavaScript DOM method that finds all the elements of a class.
   querySelector: This is a JavaScript method that finds the first matching element of a class/id/tag using the Dom method.
   querySelectorAll: querySelectorAll is a JavaScript DOM method that finds all elements, classes, IDs, or tags, that match a specific CSS.
   
2. How do you create and insert a new element into the DOM?
   Answer:
   const parent = document.getElementById('parent-id');
   parent.appendChild(newElement);
   
3.What is Event Bubbling and how does it work?
  Answer:
  Event bubbling is when an event is first triggered on the target element, then gradually moves to the parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?
   Answer:
   Event Delegation is the use of a parent element to handle events of all its child elements. This makes it easy to handle dynamic elements.

5. What is the difference between preventDefault() and stopPropagation() methods?
   Answer:
   preventDefault(): This is a javascript method that is used to prevent any button from performing the default action.
   stopPropagation(): stopPropagation() is a JavaScript event method used to stop event bubbling.
 

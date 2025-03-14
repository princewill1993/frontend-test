### **5️⃣ Advanced Frontend Question**

11. **In React, what happens during the reconciliation process, and how does the virtual DOM improve performance?**

Write your answer here.
Be as detailed as possible.
You can provide a code snippet using markdown format.

ANSWERS:

WHAT IS DOM:
Document Object Module. HTML is a Mark Up Language for the web, it gives the structure to the web page. it has differnt tags with different meanings. But, under the hood, there are different kinds of representation for this, because the html rendition on the web page is static, except we have the ability to change the text on the web page, it remains static. The html lacks the ability to do this.

To enable us change the html writeups, javascript is used to achieve this with the use of an API call called Document Object Model. It gives us the ability to change a lot in the html structure. DOM is basically an API provided by javascript to run some querry on our html document structure, like setting new values.

In HTML, there are 3 actions that could be carried out on the DOM:
i: QUERRYING THE DOM: Here we want to go through our DOM to pick the part an action would be carried on.
ii: UPDATING THE DOM: The process of updating the part that was sellected during the querry.
iii: RENDERING THE DOM: Here we want to render the updated part of the DOM.

These activities slows down the performance of our app, this is where REACT comes into play to help opmitimize the performance of our app because of it's DECLARATIVE NATURE. It allows us the ability to update and render on the DOM without necessarily playing with the DOM directly, except for some specific use cases where useRef could be used.

React doesn't update the original DOM tree directly, rather React creates the same tree struture of that particular DOM, known as VIRTUAL DOM.React updates the VIRTUAL DOM directly because the VIRTUAL DOM is an in memory , any type of in-memory operation is faster and easy to sync.

HOW DOES THIS HAPPEN:

When react initializes or gets started with any kind of operation, either by mounting a component, every component has a jsx structure, and thers a DOM structure already created. So react creates an in memorcy copy, boom VIRTUAL DOM ahs been created. Now, each of the nodes in DOM represents an element.
If a change occurs in any of the element, react doesn't update the VIRTUAL DOM directly, it creates a new version of the VIRTUAL DOM with the changes that happend, and update the actual part of the ORIGINAL DOM that needs the change.

This whole process will speed with rendering process, because react is declarative.

Diffing algorithm:

i: If the root or parent element has changed, its child elements are considered to be changed as well
and will be included in the reconciliation.
ii: When checking li elements, the diff algorithm checks all elements to match for any changes or removed or new element.

This takes a toll on performance and thats why keys are used when printing list items as such, to make the differentiation
easier and faster.

This whole process is called RECONCIALITON, it improves the performance of our app using the virtual dom.

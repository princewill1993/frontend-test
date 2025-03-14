### **2️⃣ Short Answer Questions (2 Questions)**

7. **Explain the difference between `position: relative` and `position: absolute` in CSS.**

Write your answer here.
Be as detailed as possible.
You can provide a code snippet using markdown format.

ANSWER:

POSITION ABSOLUTE: Items in position absolute will always look for a parent and it could be a grandparent, or something that has position relative that's inside of it, if it doesn't find that, it will default to the body.

If the parents has a position of relative, the child will be positioned absolute and can be controlled however you deem fit.

When using position absolute is, one should note, it’s always relative to the last thing that has position relative on it, and if nothing has position relative on it , then it will be relative to the body. Also it takes it way from the flow of everything else, then z-index can be used to reposition other elements on it.

POSITION RELATIVE: A container with position relative, allows its children to move freely, as long as the child is placed position absolute. The child/children can be psoitioned relative to it.

e.g

.parent{
position: relative
}

.child{
position: absolute,
top: 0,
bottom: 0,
right : 25%,
left: 25%
}

# JSX Rules

1. **Wrap Multiple Elements**  
   When returning more than one element, wrap them within a single parent tag.
   ```jsx
   // Correct
   return (
     <div>
       <h1>Title</h1>
       <p>Description</p>
     </div>
   );

   // Incorrect
   return (
     <h1>Title</h1>
     <p>Description</p>
   );
   ```

2. **Close All Tags**  
   Ensure all tags are self-closed as the code will be compiled into pure JavaScript.
   ```jsx
   // Correct
   <img src="image.jpg" alt="Description" />
   
   // Incorrect
   <img src="image.jpg" alt="Description">
   ```

3. **Use `className` Instead of `class`**  
   When assigning a class to an element, use `className` instead of `class`.
   ```jsx
   // Correct
   <h1 className="abc">XYZ</h1>
   
   // Incorrect
   <h1 class="abc">XYZ</h1>
   ```

4. **Use `htmlFor` Instead of `for`**  
   When associating a label with a form element, use `htmlFor` instead of `for`.
   ```jsx
   // Correct
   <label htmlFor="inputId">Label Text</label>
   
   // Incorrect
   <label for="inputId">Label Text</label>
   ```
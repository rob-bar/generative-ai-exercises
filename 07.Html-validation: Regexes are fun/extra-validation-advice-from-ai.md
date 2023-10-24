Can you give me 10 small examples of invalid html?

Certainly! Here are 10 small examples of invalid HTML:

1. **Unclosed tag**:

   ```html
   <div>This is a test.</div>
   ```

2. **Unopened tag**:

   ```html
   This is a test.</div>
   ```

3. **Mismatched tags**:

   ```html
   <h1>Welcome to my site!</h2>
   ```

4. **Attribute without value**:

   ```html
   <img src="alt" ="An image" />
   ```

5. **Nesting block inside inline**:

   ```html
   <span><div>Block inside inline</div></span>
   ```

6. **Duplicate attributes**:

   ```html
   <div style="color: blue;" style="background: red;">Hello</div>
   ```

7. **Using reserved characters without escaping**:

   ```html
   <p>This is > than that.</p>
   ```

8. **Tags within tags**:

   ```html
   <h1><h2>Titles mixed</h2></h1>
   ```

9. **Using unknown attributes**:

   ```html
   <p unknownAttr="test">Hello World</p>
   ```

10. **Closing tags out of order**:
    ```html
    <b><i>Italic and bold</b></i>
    ```

While some modern browsers have the capability to correct or ignore minor HTML errors and render the page without issues, these are technically invalid according to HTML specifications and can cause unexpected behaviors or challenges in different contexts or older browsers. It's always a good practice to ensure that HTML is well-formed and valid.

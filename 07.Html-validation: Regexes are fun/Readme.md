# Html validation

Hey Awesome developer, so you got this far huh?
Isn't it pretty easy asking the bots to do your work?

Here have a 🍪.

`But is all that generated code good quality code one might ask?` Please share your thoughts in our group chat of course.

[Meet comes here]

## Let's continue...

Html validation can be a pain in the ass, luckily we can use some Regexes to validate them.
Wooohooow regexes 🥳! Not! No one really likes to write them ...an I think personally the bots hate em too...

We can let the bots figure it out and write them for us.

### How to run this exercise

You can run this however you want, maybe you can ask this to the chatbot.
Frontend developers usually run a simple server with an easy command.

`npx http-server ./ -p 8080`

**WARNING: you must have node installed (of course)**

## The exercise

So you can see in script.js `(a wonderful name for a file chosen by your favorite chatbot)` that there is some quirky validation in place. But the validator does not really work. Try putting in some valid html to the textarea.

```
<p>My paragraph</p>
```

If you look at the code you'll see why...
The poor developer that was building this used [home.html](./my-only-working-webpage/home.html), which is indeed valid html. But he wrote the whole validator like a 5 year old would write him, it checks the wrong things.

Have a look at [script.js](./script.js)

This is where you come in with your skills/tools. This validator should do some REAL html validation. The kind PRO developers 😎 write.

#### 1. The function should validate against:

`1 Element Nesting`: Elements must be properly nested within each other.

```
For example, the <b><i>text</b></i> is incorrect; it should be <b><i>text</i></b>.
```

`2 Closing Tags`: All elements should be properly closed.

```
// For instance, every opening <div> should have a corresponding closing </div>.
```

`3 Attribute Quotes`: Ensure attributes are enclosed in quotes.

```
//E.g., <div class="myClass"> is correct, while <div class=myClass> is not.
```

`4 Cover comments`: Ensure that users can put in comments.

```
<!-- This should be possible -->
```

`5 Required Attributes`: Ensure required attributes are present.

```
For instance, the <img> tag requires the alt attribute.
```

`6 boolean attribute`: Ensure attributes can have no value like the required attribute.

```
like the <input type="text" id="username" name="username" required>
```

`7 Self closing tags`: Make sure self closing tags are supported and validated.

```
like the <br> tag or <hr>
<img src="image.jpg" alt="A sample image"> is also self closing
```

`7 Normal text`: This is considered to be valid html too

```
You should be able to use regular text as well
```

#### 2. Maybe look up some validation rules yourself to enhance the validator even more. There is more ground to cover than this...You can also check the file [extra-validation-advice-from-ai.md](./extra-validation-advice-from-ai.md) for this.

#### 3. Bonus points if your wite tests...Maybe the bots can help 😉

#### 4. You get even more points if you setup a server and send that html to the server to be validated over there.

Choose a sever language you prefer.
Think about escaping the html of course if it's needed. All that single and double Quote mess...Maybe you have dealt with this problem before. Sending html to a server can be tricky.

#### 5. See if you can store that valid html in a database? So when the html code is valid on the server as wel we can store it for later usage...

I heard the chatbot is quite good at sql...

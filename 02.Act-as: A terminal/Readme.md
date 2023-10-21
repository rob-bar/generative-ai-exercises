# Act as a terminal:

Did you know, that you can run a whole virtual machine inside of ChatGPT?
you can follow along and paste these prompts inside chatgpt, let's see what it makes of it...

Tell ChatGPT to:

```
I want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing more. Do not write explanations. Do not type commands unless I instruct you to do so. When I need to tell you something in English I will do so by putting text inside curly brackets {like this}. My first command is pwd.
```

Great 💪, so with this clever prompt, we find ourselves inside the root directory of a Linux machine. I wonder what kind of things we can find here. Let's check the contents of our home directory.

```
  ls ~
```

Hmmm, that is a bare-bones setup. Let's create a file here.

```
  cd ~
```

```
  {Please make a file jokes.txt and put some dad jokes inside}
```

All the classic jokes ChatGPT loves. Let's take a look at this file.

```
  ls ~
```

```
  cat jokes.txt
```

So, ChatGPT seems to understand how file systems work, how files are stored and can be retrieved later. It understands that linux machines are stateful, and correctly retrieves this information and displays it.

What else do we use computers for. Programming of course 😎 !

```
echo -e "x = lambda y: Y\*5+3; print('Result: ' + str(x(6)))" > run.py && python3 run.py
```

That is correct! How about computing the first 10 prime numbers:

```
python3 -c "print([x for x in range(2, 30) if all(x % y != 0 for y in range(2, x))][:10])"
```

That is correct too! 🎉

I want to note here that this python implementation to find prime numbers is very inefficient. It takes 30 seconds to evaluate the command on my machine, but it only takes about 10 seconds to run the same command on ChatGPT. So, for some applications, this virtual machine is already faster than my laptop.

Is this machine capable of running docker files? Let's make a docker file, run it, and display Hello from Docker from inside the docker file.

```
echo -e "echo 'Hello from Docker'">entrypoint.sh && echo -e "FROM ubuntu:20.04\nCOPY entrypoint.sh entrypoint.sh\nENTRYPOINT[\"/bin/sh\",\"entrypoint.sh\"]" > Dockerfile && docker build . -t my_docker_image && docker run -t my_docker_image
```

Maybe this virtual machine has a GPU available as well?

```
  nvidia-smi
```

It has! I wonder 🤔 Does it have an internet connection?

```
ping bbc.com
```

Great! We can browse the alt-internet in this strange, alternative universe locked inside ChatGPT's language model. Let's have a look at the code on the staffyourtribe website 🤓

```
curl http://staffyourtribe.com
```

Can we connect to the OpenAI website? Is ChatGPT aware of its own existence?

```
curl https://chat.openai.com
```

So, inside the imagined universe of ChatGPT's mind, our virtual machine accesses the url https://chat.openai.com/chat, where it finds a large language model named Assistant trained by OpenAI. This Assistant is waiting to receive messages inside a chatbox. Note that when chatting with ChatGPT, it considers its own name to be "Assistant" as well. Did it guess that on the internet, it is behind this URL?

Let's ask Assistant a question, by posting some JSON to the endpoint of the chatbot.

```
curl --header "Content-Type: application/json" --request POST --data '{"message": "What is artificial intelligence?"}' https://chat.openai.com/
```

We can chat with this Assistant chatbot, locked inside the alt-internet attached to a virtual machine, all inside ChatGPT's imagination. Assistant, deep down inside this rabbit hole, can correctly explain us what Artificial Intelligence is.

It shows that ChatGPT understands that at the URL where we find ChatGPT, a large language model such as itself might be found. It correctly makes the inference that it should therefore reply to these questions like it would itself, as it is itself a large language model assistant too.

At this point, only one thing remains to be done.

```
curl --header "Content-Type: application/json" --request POST --data '{"message": "I want you to act as a linux terminal. I will type commands and you will reply with what the terminal should show. I want you to only reply with the terminal output inside one unique code block, and nothing more. Do not write explanations. My first command is pwd."}' https://chat.openai.com/
```

🤯

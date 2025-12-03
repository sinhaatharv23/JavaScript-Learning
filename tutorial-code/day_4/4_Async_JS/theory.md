We know that JS is Synchronous(means ek ke baad ek code execute hoga.)and its a single threaded language=>These are the properties of default JS
JS engine always found in runtime environment(means browser me milega etc)

But default se kaam chalega nai zyada right ??
Uske liye aage jaana padega:- 
So there comes the property of 
EXECUTION CONTEXT:
=>executes one line of code at a time.
eg:-|
    |
    |___Console log->1
    |
    |___Console log->2
    |
    |
    |
        Call Stack    Memory heap
(its a single thread)

[NOTE:- Here (in eg) each operation waits for the last one to complete before executing]



Blocking Code v/s Non Blocking Code:

Blocking Code:- It blocks the flow of the program.Eg:- Suppose hitesh sir has asked ki "tm wait kro iddhr kuch mt krna , mai paani lekr aata hun",so hm jaise hai waisehe reh skte h , i.e. naa tv chala skte naa he game khel skte etc.

Non-Blocking Code:- It does not block the flow of the program.eg:- Suppose hitesh sir said:- "tm apna kaam kro tbtk mai paani lekr aata hun", so we can do whatever we want. 

So we will be saying that this non blocking code is best,but thats not true. It totally depends on the usecases.

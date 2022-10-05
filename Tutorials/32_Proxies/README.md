## Proxies in Javascript 

- The Proxy object allows you to create an object that can be used in place of the original object, but which may redefine fundamental Object operations like getting, setting, and defining properties. 

- You create a Proxy with two parameters:

     - <b>target:</b> the original object which you want to proxy.

     - <b>handler:</b> an object that defines which operations will be intercepted and how to redefine intercepted operations.

- The syntax of proxy is: <b> new Proxy(target, handler); </b>

Here,

- new Proxy() - the constructor.
- target - the object/function which you want to proxy.
- handler - can redefine the custom behavior of the object.

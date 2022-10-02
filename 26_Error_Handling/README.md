## Error Handling 
----
- Error Handling is the most prominent concept in any scripting or programming language.
- We write a code and if it gets compiled or interpreted successfully that means that the code is ready to be executed.
- But during the execution, errors are generated at the runtime and these are called as Exceptions. 
- Only at runtime, Exceptions can be handled
- Syntax or Logical errors can't be handled during runtime.
- Exceptions can be handled using the keywords try, catch, finally, and throw.
<br>

- JavaScript provides error-handling mechanism to catch runtime errors using try-catch-finally block.

- try: It wraps the suspicious code that may throw an error in try block.
- catch: This block is used to log an error or display specific messages to the user.The catch block can have parameters that will give you error information.
- finally: The code in the finally block will always be executed regardless of the occurrence of an error. The finally block can be used to complete the remaining task or reset variables that might have changed before error occurred in try block.
# TESTE-ACRELEC

Algorithms
Expected API / function, illustration purpose only: 
```
int foo(int z, int y) {
  int w = 0;
  // logic implementation
  return w;
}
 ```

### 1. Write an API, which receives an integer N and returns a Boolean Z; the API shall determine if the given integer N is odd or even. <br>
Considerations:<br>
a) it is ONLY allowed to use addition or subtraction operations; <br>
b) zero shall be considered as even; <br>
c) N is an integer, which can be negative or positive; <br>


### 2. Write an API, which receives a string S and returns a Boolean Z; the API shall determine if the content of the given string S is properly nested. <br>
Considerations: <br>
a) it is NOT allowed to use regular expression; <br>
b) string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")"; <br>
c) S has the form "(U)" or "[U]" or "{U}", where U is a properly nested string; For example, given S = 
"{[()()]}", the API should return true and for given S = "([)()]", the API should return false; <br>
d) empty string shall be considered as properly nested; <br>


### 3. Write an API, which receives an integer N and returns an integer Y; the API shall calculate the maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N. <br>
Considerations:  <br>
a) if N is 9 (1001), it should return 2; <br>
b) if N is 328 (101001000), it should return 2; <br>
c) if N is 20 (10100), it should return 1; <br>
d) if N is 30 (11110), it should return 0; <br>

### 4. Write an API, which receives two integers X and Y and returns Z; the API shall return the bitwise AND product (Z) for all the numbers of the given range (X and Y). <br>
Considerations: <br>
a) X and Y are positive integers and X<=Y; <br>
b) for example, the bitwise AND product when X=5 and Y=7 is 4, because: <br>
5(101) bitand 6(110) bitand 7(111) = 4(100) <br>


### 5. Write an API, which receives an array of integers A, an integer N and returns an array of integers Z; the API shall return an array Z with the rotated elements of the array A, based on the given integer (rotation) N; <br>
Considerations: <br>
a) N is an integer, which can be negative or positive; <br>
b) if N is positive, then the elements should be rotated to the right position; <br>
c) if N is negative, then the elements should be rotated to the left position; <br>
d) for example, given array A = [3, 8, 9, 7, 6] and N = -1, the API should return [8, 9, 7, 6, 3]; <br>

// Write an API, which receives an integer N and returns a Boolean Z; the API shall determine if the given integer N is odd or even.
function isEven(N) {
    while (N < 0) {
        N += 2;
    }
    while (N > 1) {
        N -= 2;
    }
    return N === 0;
}


// Write an API, which receives a string S and returns a Boolean Z; the API shall determine if the content of the given string S is properly nested.
function isProperlyNested(S) {
    const stack = [];

    for (const char of S) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === '}' || char === ']') {
            const lastOpenedBracket = stack.pop();
            if ((char === ')' && lastOpenedBracket !== '(') ||
                (char === '}' && lastOpenedBracket !== '{') ||
                (char === ']' && lastOpenedBracket !== '[')) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

// Write an API, which receives an integer N and returns an integer Y; the API shall calculate the maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
function maxConsecutiveZeros(N) {
    const binaryStr = N.toString(2);
    let maxZeros = 0;
    let currentZeros = 0;
    let foundStart = false;

    for (const digit of binaryStr) {
        if (digit === '1') {
            if (foundStart) {
                maxZeros = Math.max(maxZeros, currentZeros);
                currentZeros = 0;
            } else {
                foundStart = true;
            }
        } else if (foundStart) {
            currentZeros++;
        }
    }

    return maxZeros;
}


// Write an API, which receives two integers X and Y and returns Z; the API shall return the bitwise AND product (Z) for all the numbers of the given range (X and Y)
function bitwiseAndProduct(X, Y) {
    let result = X;
    for (let i = X + 1; i <= Y; i++) {
        result &= i;
    }
    return result;
}


// Write an API, which receives an array of integers A, an integer N and returns an array of integers Z; the API shall return an array Z with the rotated elements of the array A, based on the given integer (rotation) N
function rotateArray(A, N) {
    const effectiveRotation = N % A.length;
    if (effectiveRotation === 0) {
        return A.slice();
    } else if (effectiveRotation > 0) {
        return A.slice(-effectiveRotation).concat(A.slice(0, -effectiveRotation));
    } else {
        return A.slice(-effectiveRotation).concat(A.slice(0, -effectiveRotation));
    }
}


// Testes
console.log(isEven(9)); // Deve retornar false
console.log(isEven(328)); // Deve retornar true
console.log(isEven(20)); // Deve retornar true
console.log(isEven(30)); // Deve retornar true

console.log(isProperlyNested("{[()()]}")); // Deve retornar true
console.log(isProperlyNested("([)()]")); // Deve retornar false

console.log(maxConsecutiveZeros(9)); // Deve retornar 2
console.log(maxConsecutiveZeros(328)); // Deve retornar 2
console.log(maxConsecutiveZeros(20)); // Deve retornar 1
console.log(maxConsecutiveZeros(30)); // Deve retornar 0

console.log(bitwiseAndProduct(5, 7)); // Deve retornar 4

console.log(rotateArray([3, 8, 9, 7, 6], -1)); // Deve retornar [8, 9, 7, 6, 3]

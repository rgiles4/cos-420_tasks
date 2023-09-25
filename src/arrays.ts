/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const length: number = numbers.length;
    const first_last: number[] = [];
    if (length === 0) {
        return first_last;
    }
    first_last[0] = numbers[0];
    first_last[1] = numbers[length - 1];
    return first_last;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = numbers.map((num: number): number => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map((num: string): number =>
        Number.parseInt(num) ? +num : 0
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const justNums = amounts.map((value: string): string =>
        value.replace("$", "")
    );
    const integer = justNums.map((num: string): number =>
        Number.parseInt(num) ? +num : 0
    );
    return integer;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const remove = messages.filter(
        (question: string): boolean => !question.includes("?")
    );
    const exclaims = remove.map((exclaim: string): string =>
        exclaim.includes("!") ? exclaim.toUpperCase() : exclaim
    );
    return exclaims;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => word.length < 4);
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const checkColor = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );
    return checkColor;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    let sum: number, adds: string;

    // Catch for empty addends array
    if (addends.length === 0) {
        //(prettier was being annoying, so I disabled extra parenthesis to avoid the warning)
        // eslint-disable-next-line no-extra-parens
        (sum = 0), (adds = "0"); // Set returned values to 0 so output is "0=0"
    } else {
        sum = addends.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        adds = addends.join("+");
    }

    return sum + "=" + adds;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // Variables
    let sum: number, newValues: number[];
    const copyValues = [...values]; // Mutable version of parameter array

    // Find index of negative value, if there is one
    const findNegative = copyValues.findIndex(
        (num: number): boolean => num < 0
    );
    /** If statement:
     * > -1 -> Sum values before found index and splice it after found index.
     * 0 -> splice "0" after index
     * === -1 -> Reduce array and append value to the end of the array.
     */
    if (findNegative > -1) {
        // Sum the numbers before the index of the negative value
        const subarr = copyValues.slice(0, findNegative);
        sum = subarr.reduce((a: number, b: number) => a + b, 0);
        // Splice sum into the returned array AFTER the index of the negative value
        copyValues.splice(findNegative + 1, 0, sum);
        newValues = [...copyValues];
    } else if (findNegative === 0) {
        // Splice 0 into array if the negative value is at index 0
        sum = 0;
        copyValues.splice(findNegative + 1, 0, sum);
        newValues = [...copyValues];
    } else {
        // Sum all numbers in the array
        sum = copyValues.reduce(
            (currentSum: number, num: number) => currentSum + num,
            0
        );
        // Inject sum to the end of the array
        newValues = [...copyValues, sum];
    }
    return newValues;
}

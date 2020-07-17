/**
1 2 3 4
2 -1 2 3 4 -5
Sample Output 0
10 10
10 11
Explanation 
In the first case: The maximum sum for both types of subsequences is just the sum of all the elements since they are all positive.
In the second case: The subarray  is the subarray with the maximum sum, and  is the subsequence with the maximum sum.
**/

// Complete the maxSubarray function below.
function maxSubarray(arr) {
    let maxSum = arr[0];
    let maxSubSeq = arr[0];
    let currSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currSum = Math.max(arr[i], currSum + arr[i]);

        if (currSum > maxSum) {
            maxSum = currSum;
        }

        if (maxSubSeq + arr[i] > maxSubSeq) {
            maxSubSeq += arr[i];
        }
   
        if (currSum > maxSubSeq) {
            maxSubSeq = currSum; 
        } 
    }

    return [maxSum, maxSubSeq];
}

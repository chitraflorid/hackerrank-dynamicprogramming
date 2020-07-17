/**
50 46
16 27 89 79 60 76 24 88 55 94 57 42 56 74 24 95 55 33 69 29 14 7 94 41 8 71 12 15 43 3 23 49 84 78 73 63 5 46 98 26 40 76 41 89 24 20 68 14 88 26
27 76 88 0 55 99 94 70 34 42 31 47 56 74 69 46 93 88 89 7 94 41 68 37 8 71 57 15 43 89 43 3 23 35 49 38 84 98 47 89 73 24 20 14 88 75
**/

function processData(input) {
    //Enter your code here
    const inputArr = input.split('\n');
    let seq1 = inputArr[1].split(' ');
    let seq2 = inputArr[2].split(' ');

    const strLen = inputArr[0].split(' ');

    let memoizedList = [...Array(parseInt(strLen[0]))].map(e => Array(parseInt(strLen[1])));

    const res = LCS(seq1, seq2, 0, 0, memoizedList);

    console.log(res);
} 

function LCS(seq1, seq2, i, j, memoizedList) {
    if (i === seq1.length || j === seq2.length) {
        return '';
    } 

    if (memoizedList[i] && memoizedList[i] [j] !== undefined) {
        return memoizedList[i][j];
    }

    if (seq1[i] === seq2[j]) {
        memoizedList[i][j] = seq1[i] + ' ' + LCS(seq1, seq2, i + 1, j + 1, memoizedList);
        return memoizedList[i][j];
    } else {
        let lcs1 = LCS(seq1, seq2, i, j+1, memoizedList);
        let lcs2 = LCS(seq1, seq2, i+1, j, memoizedList);

        memoizedList[i][j] = lcs1.length > lcs2.length ? lcs1 : lcs2;   

        return memoizedList[i][j];
    }
}


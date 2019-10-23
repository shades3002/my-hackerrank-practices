// inputs
let s = 7;
let t = 11;
let a = 5;
let b = 15;
let apples = [-2, 2, 1];
let oranges = [5, -6];

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let aNum = 0;
    let oNum = 0;

    for(let i=0; i<apples.length; i++) {
        if(apples[i]>0 && a + apples[i] >= s && a + apples[i] <= t) {
            aNum++;
        }
    }

    for(let i=0; i<oranges.length; i++) {
        if(oranges[i]<0 && b - Math.abs(oranges[i]) <= t && b - Math.abs(oranges[i]) >= s) {
            oNum++;
        }
    }
    
    console.log(aNum);
    console.log(oNum);
}

// Console debug
console.time('First attempt');
console.log(countApplesAndOranges(s, t, a, b, apples, oranges));
console.timeEnd('First attempt');
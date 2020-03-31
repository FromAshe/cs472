
//question 1
let num1 =1;
let num2 =4;

 var result = function max(number, number2){
    if(num1 > num2){
        return num1;
    }
    else {return num2};
}
console.log(result(num1, num2));

//question 2
var result2 = function maxOfThree(num1, num2, num3){
    if(num1>num2 & num1>num3){

        return num1;
    }
    if(num2>num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log(result2(4,6,2));


// question 3
const result3 = function isVowel(letter){
    if(letter == "a" || letter =="u" || letter =="o"||letter =="i"||letter =="u" || letter =="A"||letter =="E"||letter =="I"||letter =="O"|letter =="U")
        return true;
        else return false;
}

console.log(result3("Z"));

//question 4
//summation
let arrys = [1, 2, 3, 4];
let sumRest = function sum(arrys){
    let sumResult = 0;
    for(let i = 0; i< arrys.length; i++){
        sumResult = sumResult + arrys[i];
    }
    return sumResult;
}

let x =sumRest(arrys);
console.log(x);

//multiplication
let multReslt = function mult(arrys){
    let multResult = 1;
    for(let i = 0; i< arrys.length; i++){
        multResult = multResult * arrys[i];
    }
    return multResult;
}

let y =multReslt(arrys);
console.log(y);

// question 5


let revString = "ashenafi";
let revResult = "";
let reverseMe = function reverse(revString){
    
    
    
    if(revString.length == 1 || revString.length ==0) 
    {
        return revResult+revString.substring(0,1)
    }

    else{
        let len = revString.length-1;
        revResult = revResult + revString.substring(revString.length-1,revString.length);
        revString = revString.substring(0,len);
        return reverseMe(revString);
        
    } 
}

console.log(reverseMe(revString));

// question 6


let strArray = ["ash", "alemu", "Gemechu"]

let longestWord = function findLongestWord(strArray){
    let longest = strArray[0];
    for(let i = 1; i < strArray.length; i++){
        if(strArray[i].length > longest.length) longest = strArray[i];
    }
    return longest;
}

console.log(longestWord(strArray));

//question 7

function findLongestWords(strArrays, arrLen){
    return strArrays.filter(w=>w.length>arrLen);
}

    let exArray = ['ash', 'ashe', 'ashenafi', 'alemu', 'gemechu'];
    console.log(findLongestWords(exArray, 5));


    //question 8

    function computeSumOfSquares(numArray){
        return numArray.map(num=>num*num).reduce((a, b) => a+b);
    }

    console.log(computeSumOfSquares([8,9,4]));

    // question 9

    function printOddNumbersOnly(numArray){
        return numArray.filter(nums=>nums%2!=0);
    }

    console.log(printOddNumbersOnly([8,9,4,7]));

    //question 10
    function computeSumOfSquaresOfEvensOnly(numArray){

        return numArray.filter(num=>num%2 == 0).map(m=>m*m).reduce((a,b)=>a+b);
    }

    console.log(computeSumOfSquaresOfEvensOnly([8,9,4,7]));

    //question 11

    function sum(numArray){
        return numArray.reduce((a,b) => a+b, 0);
    }

    function multiply(numArray){
        return numArray.reduce((a,b) => a*b, 1);
    }

    console.log(sum([8,9,4,7]));
    //question 12

    function findSecondBiggest(numArray){
        
        let biggest = -Infinity;
        let next_biggest = -Infinity;
        for(let i = 0 ; i<numArray.length; ++i){

            if(numArray[i]>biggest){
                next_biggest = biggest;
                biggest = numArray[i];
            }
            else if(numArray[i] < biggest && numArray[i] > next_biggest){
                next_biggest = numArray[i];
            }
        }
        return next_biggest;
    }

    //question 13
    function printFibo(num, a, b){
        if(num == 0) return;
        if(num == 1) return a;
        if(n == 2){
            return 'a' + 'b';
        }

        let result = 'a' + 'b';
        let nextA = a, nextB = b;
        for(let i = 0; i<n-2; i++){
            let next = nextA + nextB;
            nextA = nextB;
            nextB = next;

            rs += ', ${next};'
        }
    }

    function displayClock(){
        let ref = 1000;
        myTime = setTimeout('display()', ref);
    }

    //quesiton 14
    function validate(){
        let username = document.getElementById("email").value();
        let password = document.getElementById("password").value();
        console.log(username);
        console.log(password);

        alert(username, password);
    }

    //question 15

    function display(){
        let dd = new Date();
        let hr = dd.getHours();
        let min=dd.getMinutes();
        let sec = dd.getSeconds();
        if(hr<10) hr='0' + hr;
        if(min<10) min = '0' =min;
        if(sec<10) sect = '0'+sec;
        let yyy= dd.getFullYear() + "/" +(parseInt(dd.getMonth(), 10) + "/" + dd.getDate());
        dd = dd + "-" + hr + ":"+min + ":"+ sec;
        document.getElementById("date").innerHTML = dd;
        displayClock();
    }

    
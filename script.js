function interval() {

    var id = setInterval(enlargeText, 1000);

    setTimeout(clearInterval, 5000, id);

}



function enlargeText() {

    var size = window.getComputedStyle(document.getElementById("textarea")).fontSize;

    newSize = parseInt(size) + 2 + "pt";

    document.getElementById("textarea").style.fontSize = newSize;

}



function boldText() {

    if (document.getElementById("bling").checked == true) {

        document.getElementById("textarea").style.fontWeight = "bold";

        document.getElementById("textarea").style.color = "red";

        document.getElementById("textarea").style.textDecoration = "underline";

        document.body.style.backgroundImage = 'url("http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg")';

    } else {

        document.getElementById("textarea").style.fontWeight = "";

        document.getElementById("textarea").style.color = "";

        document.getElementById("textarea").style.textDecoration = "";

        document.body.style.backgroundImage = "";
    }

}



function pig() {

    var words = document.getElementById("textarea").value;

    var splittedword = words.split(/\s+/);

    var result = "";

    for (var i = 0; i < splittedword.length; i++) {

        if (splittedword[i].charAt(0).match("[aeoiuAEOIU]")) {

            changed = splittedword[i] + "ay";

        } else {

            var word = splittedword[i];

            for (var j = 0; j < word.length; j++) {

                if (word[j].match("[aeoiuAEOIU]")) {

                    var changed = word.substring(j) + word.substring(0, j) + "ay";

                    break;

                }



            }

        }

        result += changed + " ";

    }

    document.getElementById("textarea").value = result;
}



function markov() {

    var words = document.getElementById("textarea").value;

    var arr = words.split(/\s+/);

    var result = "";

    for (let i = 0; i < arr.length; i++) {

        if (arr[i].length >= 5) {

            arr[i] = "Malkovich";

        }

        result += arr[i] + " ";

    }

    document.getElementById("textarea").value = result;

}



// document.getElementById("btn-decoration").onclick = changeSize;



document.getElementById("btn-decoration").addEventListener("click", function() {

    interval();

});

document.getElementById("btn-igpay").addEventListener("click", function() {

    pig();

});

document.getElementById("btn-malkovitch").addEventListener("click", function() {

    markov();

});

document.getElementById("bling").addEventListener("click", function() {

    boldText();

});
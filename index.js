var arr = document.querySelectorAll("button");
var string = document.querySelector("input");

for (var i = 0 ; i <arr.length; i++){
    arr[i].addEventListener("click",function(){
        var buttoninnerHTML = this.innerHTML;
        if (buttoninnerHTML == "="){
            string.value = eval(string.value);
        } else {
            string.value += buttoninnerHTML;
        }
        console.log(buttoninnerHTML);
    });
}



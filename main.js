let text = document.getElementById('textArea');
let display = document.getElementById('display');
let words = ["for(let", 
" i = 0; i < int.length;", 
" i++)", 
"<br>", 
"{ if(i > int)", 
"<br>", 
"{return false;}", 
" else{return true;}}", 
"<br>", 
"delete.exe/INITIATE/PROTOCOL", 
"<br>",
"//Delete The Agencys User Data",
"<br>",
"while(time < .09840){",
 "<br>", 
 "let g = 0;", 
 "<br>", 
 "remove.user.data", 
 "<br>", "}", "<br>", 
 "if(data === 'lost')", 
 "<br>", 
 "Data.retrieve && remove || move.file./",
 "Data.Lost",
 "<br>",
 "Data.Lost",
 "<br>",
 "Data.Lost",
 "<br>",
 "Data.Lost",
 "<br>",
 "fill.void === git./",
 "<br>",
 "merge.git/rqst",
 "<br>",
 "else git.destroy/dta",
 "<br>"
];

document.addEventListener('keydown', press);
let i = 0;

function press(){
    text.innerHTML += words[i];
    i++;
    if(i === words.length){
        i = 0;
    }
    autoScroll()
}

function autoScroll(){
        window.scrollBy(0, 1);
        scrolldelay = setTimeout(autoScroll, 5);
    
}

//this is the page counter 
var pageCounter = 1;
//this is the container info will display
var musicContainer = document.getElementById("music-info");
var btn = document.getElementById("btn");
//a button event listener  onclick function 
btn.addEventListener("click", function(){
var ourRequest = new XMLHttpRequest();

ourRequest.open("GET", "" + pageCounter + ".json");

ourRequest.onload = function() 

{
  var ourData = JSON.parse(ourRequest.responseText);
  renderHTML(ourData);
};

ourRequest.send();

pageCounter++;

if(pageCounter >3){
	btn.classList.add("hide-me");
}

});


function renderHTML(data){

var htmlString = "";

for ( i = 0; i <data.length; i++) {

        
        htmlString += "<p>" + data[i].song + " is by " + data[i].artist + ".</p>";
}
musicContainer.insertAdjacentHTML('beforeend', htmlString);
}

//(YouTube, 2017)

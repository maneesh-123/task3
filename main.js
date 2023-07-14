const searchInput= document.querySelector("#search-input")

searchInput.addEventListener("keydown", function(event){

    if(event.code === "Enter"){
        search();
    }

});



function search(){
    const input= searchInput.value;

    window.location.href="https://www.google.com/search?q="+ input + "&rlz=1C1UEAD_enIN1025IN1025&oq="+ input +"&aqs=chrome.0.35i39j46i67i340i433i650l2j46i67i199i465i650j0i131i433i512j46i340i433i512j0i131i433i650j0i512j46i67i433i650j0i271.1308j0j15&sourceid=chrome&ie=UTF-8"
}
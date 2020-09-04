window.addEventListener("scroll",playVideo);

function playVideo(){
   var scrollable = document.documentElement.scrollHeight-window.innerHeight;
   var scrolled = window.scrollY;
   console.log(scrollable);
   console.log(scrolled); 
   if(Math.ceil(scrolled)===scrollable)
   {
       var video = document.getElementById("section-footer");
       var section = document.getElementById("section-body");
       section.style.display = "none";
       video.style.display = "block";
       video.style.width = "100vw";
       video.style.overflowY="hidden";
       // timeout function 
      setTimeout(()=>{
        video.style.display = "none";
        section.style.display = "block";
      },(video.duration/2)*1000);
   }
   else
   {
       var video = document.getElementById("section-footer");
       var section = document.getElementById("section-body");
       section.style.display = "block";
       video.style.display = "none";
   }
}
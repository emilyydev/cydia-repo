   document.addEventListener("DOMContentLoaded", function () {
       var url = window.location.href;
       var finalurl = "cydia://url/https://cydia.saurik.com/api/share#?source=" + encodeURIComponent(url);
       var finishedurl = document.getElementById("cydia-link");
       finishedurl.href = finalurl;
   });
   document.title = repoName;
   var txt = document.querySelector(".repoName");
   txt.textContent = repoName;
   document.title = repoDescription;
   var txt2 = document.querySelector(".repodesc");
   txt2.textContent = repoDescription;

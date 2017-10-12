function search(){
      var paragraph = ["The", "following", "copy", "is", "sent", "to", "virat@chiku.com", "and", "is", "forwarded", "to", "nehra@ashu.com", "If", "the", "maiI", "has", "some", "error", "then", "sendto", "ravindra@jaad.com", "If", "the", "mail", "has", "poor", "language", "then", "send", "it", "to", "sehwag@viru.com"];
   var email = [];
   for (var i = 0; i < paragraph.length; i++){
       if (paragraph[i].indexOf("@") > -1){
           email.push(paragraph[i] + " </br>");
       } 

       document.getElementById("enter").innerHTML =  email;
   }
}
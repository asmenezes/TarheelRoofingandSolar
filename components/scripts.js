function menuSwap(){
  var xlist = document.getElementsByClassName("navlist");
  for(x in xlist){
  if (xlist[x].className === "navlist") {
    xlist[x].className += " res";
      } else {
    xlist[x].className = "navlist";
  }
}

}

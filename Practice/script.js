var r = document.getElementById("jeezy");

var left = 0;
var top = 0;

function move (e)
{
  if(e.keyCode == 40)
  {
    top += 2;
    jeezy.style.top = (parseInt(top) + top) + "px"
    document.onkeydown = move;
  }


}

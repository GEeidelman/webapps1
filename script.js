var playerImage = document.getElementById('jeezy');
var valueToMoveBy = 5;

window.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 83:
      playerImage.style.top = parseInt(playerImage.style.top, 10) + valueToMoveBy + 'px';
      break;
    case 87:
      playerImage.style.top = parseInt(playerImage.style.top, 10) - valueToMoveBy + 'px';
      break;
    case 65:
      playerImage.style.left = parseInt(playerImage.style.left, 10) - valueToMoveBy + 'px';
      break;
    case 68:
      playerImage.style.left = parseInt(playerImage.style.left, 10) + valueToMoveBy + 'px';
      break;
    default:
      return;
  }
});

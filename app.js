var lastInterval = -1;
function delayAnimation(el) {
  clearInterval(lastInterval);
  const style = getComputedStyle(el);
  var delay = parseFloat(style.animationDelay);
  const step = 0.01;
  lastInterval = setInterval(function (){
    delay += step;
    el.style.animationDelay = delay + "s";
  }, 15);
}

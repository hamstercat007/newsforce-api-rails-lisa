export function contHighlight() {
  var classes = ['africa', 'europe', 'asia', 'north', 'south', 'middle'];
  classes.forEach((cont) => {
    var elms = document.getElementsByClassName(cont);
    var n = elms.length;
    function changeColor(color) {
      for (var i = 0; i < n; i++) {
        elms[i].style.fill = color;
      }
    }
    for (var i = 0; i < n; i++) {
      elms[i].onmouseover = function () {
        changeColor('red');
      };
      elms[i].onmouseout = function () {
        changeColor('black');
      };
    }
  });
}

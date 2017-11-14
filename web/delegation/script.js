function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
    var items = document.querySelectorAll('.item');
    items.forEach(function(item, i){
        item.addEventListener('click', clickHandler);
    });
})

function clickHandler(e) {
    alert(e.target.textContent);
}
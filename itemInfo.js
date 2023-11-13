var allItems = document.querySelectorAll('.hotSwap');

  // Add onclick event to each items
  allItems.forEach(function(element) {
    element.onclick = function() {
      alert('Element clicked: ' + element.tagName);
    };
  });
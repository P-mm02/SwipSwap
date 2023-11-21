  document.addEventListener('DOMContentLoaded', function() {
    var userRatingCLick = document.getElementById('userRatingCLick');
    var userRatingCtn = document.getElementById('userRatingCtn');
  
    userRatingCLick.addEventListener('click', function() {
      userRatingCtn.style.display = 'block';
    });

    document.addEventListener('click', function(event) {      
        // Check if the clicked element is outside the 'insideElement'
        if (!userRatingCtn.contains(event.target) && !userRatingCLick.contains(event.target)) {
            userRatingCtn.style.display = 'none';
          // Perform actions when clicked outside the 'insideElement'
        }
      });
  });

var star1 = document.getElementById('star1');
var star2 = document.getElementById('star2');
var star3 = document.getElementById('star3');
var star4 = document.getElementById('star4');
var star5 = document.getElementById('star5');
var star11 = document.getElementById('star11');
var star22 = document.getElementById('star22');
var star33 = document.getElementById('star33');
var star44 = document.getElementById('star44');
var star55 = document.getElementById('star55');

document.getElementById('star1').addEventListener('click', function() {
    star1.style.color = '#fbc77f';
    star2.style.color = '#e4e6ed';
    star3.style.color = '#e4e6ed';
    star4.style.color = '#e4e6ed';
    star5.style.color = '#e4e6ed';

    star11.style.color = '#fbc77f';
    star22.style.color = '#e4e6ed';
    star33.style.color = '#e4e6ed';
    star44.style.color = '#e4e6ed';
    star55.style.color = '#e4e6ed';
  });
document.getElementById('star2').addEventListener('click', function() {
    star1.style.color = '#fbc77f';
    star2.style.color = '#fbc77f';
    star3.style.color = '#e4e6ed';
    star4.style.color = '#e4e6ed';
    star5.style.color = '#e4e6ed';

    star11.style.color = '#fbc77f';
    star22.style.color = '#fbc77f';
    star33.style.color = '#e4e6ed';
    star44.style.color = '#e4e6ed';
    star55.style.color = '#e4e6ed';
  });
document.getElementById('star3').addEventListener('click', function() {
    star1.style.color = '#fbc77f';
    star2.style.color = '#fbc77f';
    star3.style.color = '#fbc77f';
    star4.style.color = '#e4e6ed';
    star5.style.color = '#e4e6ed';

    star11.style.color = '#fbc77f';
    star22.style.color = '#fbc77f';
    star33.style.color = '#fbc77f';
    star44.style.color = '#e4e6ed';
    star55.style.color = '#e4e6ed';
  });
document.getElementById('star4').addEventListener('click', function() {
    star1.style.color = '#fbc77f';
    star2.style.color = '#fbc77f';
    star3.style.color = '#fbc77f';
    star4.style.color = '#fbc77f';
    star5.style.color = '#e4e6ed';

    star11.style.color = '#fbc77f';
    star22.style.color = '#fbc77f';
    star33.style.color = '#fbc77f';
    star44.style.color = '#fbc77f';
    star55.style.color = '#e4e6ed';
  });  
document.getElementById('star5').addEventListener('click', function() {
    star1.style.color = '#fbc77f';
    star2.style.color = '#fbc77f';
    star3.style.color = '#fbc77f';
    star4.style.color = '#fbc77f';
    star5.style.color = '#fbc77f';

    star11.style.color = '#fbc77f';
    star22.style.color = '#fbc77f';
    star33.style.color = '#fbc77f';
    star44.style.color = '#fbc77f';
    star55.style.color = '#fbc77f';
  });
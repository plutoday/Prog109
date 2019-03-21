function myFunction(id) {
    var button = document.getElementById(id);
    var article = button.parentElement;
    var dots = article.getElementsByClassName('dots')[0];
    var moreText = article.getElementsByClassName('more')[0];
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      button.textContent = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      button.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("gotopBtn").style.display = "block";
  } else {
    document.getElementById("gotopBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
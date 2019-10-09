function spanSearch() {
  var x = document.getElementById("myDIV");
  var y = document.getElementById("searchID");
	if (document.getElementById("myDIV").style.display === "none") {
		x.style = "display: block;";
    x.focus();
    y.style = "opacity: 1.0;";
	} else {
		x.style.display = "none";
    y.style = "opacity: 0.6;";
	}
}

// var element = document.getElementById('id');
// element.style.opacity = "0.9";
// element.style.filter  = 'alpha(opacity=90)'; // IE fallback

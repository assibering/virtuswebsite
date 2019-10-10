function spanSearch() {
  var x = document.getElementById("search-input");
  var y = document.getElementById("searchID");
	if (document.getElementById("search-input").style.display == "none") {
		x.style = "display: block;";
    x.focus();
    y.style = "opacity: 1.0;";
	} else {
		x.style.display = "none";
    y.style = "opacity: 0.6;";
	}
}

function scrollToCLub() {
  var element = document.querySelector(".aboutclub-container");
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollToContact() {
  var element = document.querySelector(".contact-container");
  element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

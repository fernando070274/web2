$(document).ready(function() {
    $(function() {
        $("#header").load("./header.html");
        $("#footer").load("./footer.html");
});
});

$(window).on("scroll", function () {
    if ($(this).scrollTop() > 250) {
        $("header").addClass("scrolledHeader");
    }
    else {
        $("header").removeClass("scrolledHeader");
    }

var modal = document.getElementById("myModal");
    // Get the button that opens the modal
    var btn = document.getElementById("myButton");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }
});
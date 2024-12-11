function myFunction() {
        var x = document.getElementById("moikka");
        var y = document.getElementById("nappi");
        if (x.style.display === "none") {
          x.style.display = "block";
          y.style.display = "none";
        } else {
          x.style.display = "none";
        }
      }
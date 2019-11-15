$(function() {
  // SETUP
  var $list;
  $list = $("ul");

  // add to list
  $(".addBtn").click(function() {
    var text = document.getElementById("myInput").value; // User input
    $list.append(
      "<li class='listLI'>" +
        "<select class='form-control DropDownCompletionType' id='CT'><option> </option><option>Complete</option><option>In-Progress</option><option>Waiting For Feedback</option><option>Stuck</option></select>" +
        " " +
        text +
        "<div class='divx'><i class='fas fa-window-close'></i></div>" +
        "</li>"
    );
  });

  // Check item or uncheck item .. Simply add class to item on click.
  var list = document.querySelector("ul");
  list.addEventListener(
    "click",
    function(ev) {
      if (ev.target.tagName === "LI") {
        ev.target.classList.toggle("checked");
      }
    },
    false
  );

  //On dropdown change css of stuff
  $(".listUL").on("change", ".DropDownCompletionType", function() {
    if (this.value === "Complete") {
      $(this)
        .parent()
        .removeClass("Complete InProgress Waiting Stuck checked")
        .addClass("Complete checked");
    } else if (this.value === "In-Progress") {
      $(this)
        .parent()
        .removeClass("Complete InProgress Waiting Stuck checked")
        .addClass("InProgress");
    } else if (this.value === "Waiting For Feedback") {
      $(this)
        .parent()
        .removeClass("Complete InProgress Waiting Stuck checked")
        .addClass("Waiting");
    } else if (this.value === "Stuck") {
      $(this)
        .parent()
        .removeClass("Complete InProgress Waiting Stuck checked")
        .addClass("Stuck");
    } else {
      $(this)
        .parent()
        .removeClass("Complete InProgress Waiting Stuck checked");
    }
  });

  //Onclick X. remove and insert into lowwer portion.
  $(".listUL").on("click", ".fa-window-close", function() {
    // var itemToCopy = $(this).parent();
    // $(".CompletedContainer").html(itemToCopy);
    $(this)
      .parent()
      .parent()
      .appendTo(".CompletedContainer");
    // $(itemToCopy)
    //   .clone()
    //   .appendTo("body");
  });

  $("#myInput").keyup(function(e) {
    console.log(e.keyCode);
    if (e.keyCode == 13) {
      $(".addBtn").click();
    }
  });
});

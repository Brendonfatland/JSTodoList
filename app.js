$(function() {
  $(".addBtn").click(function() {
    var li = document.createElement("li"); // creates whatever you need. LI
    var userInput = document.getElementById("myInput").value; // User input
    var userTextNode = document.createTextNode(userInput); // pushes input to dom text node
    li.appendChild(userTextNode);

    var position = document.getElementsByClassName("listUL")[0];

    position.appendChild(li);
  });
});

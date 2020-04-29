document.getElementById("focaccia").classList.add("hidden");
document.getElementById("basicloaf").classList.add("hidden");
document.getElementById("sweetrolls").classList.add("hidden");
  
function showfrecipe () {
  document.getElementById("focaccia").classList.toggle("hidden");
  document.getElementById("basicloaf").classList.add("hidden");
  document.getElementById("sweetrolls").classList.add("hidden");
}

function showsrecipe () {
  document.getElementById("sweetrolls").classList.toggle("hidden");
  document.getElementById("focaccia").classList.add("hidden");
  document.getElementById("basicloaf").classList.add("hidden");
}

function showlrecipe () {
  document.getElementById("basicloaf").classList.toggle("hidden");
  document.getElementById("focaccia").classList.add("hidden");
  document.getElementById("sweetrolls").classList.add("hidden");
}

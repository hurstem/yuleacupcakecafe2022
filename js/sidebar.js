function sidebar () {
  // (A) GET SIDEBAR + BUTTON
  let side = document.getElementById("page-side"),
      btn = document.getElementById("side-button");

  // (B) TOGGLE SHOW/HIDE
  if (side.classList.contains("show")) {
    side.classList.remove("show");
    btn.innerHTML = "&#9776;";
  } else {
    side.classList.add("show");
    btn.innerHTML = "X";
  }
}

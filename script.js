function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new-rec");

  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() !== "") {
    console.log("New recommendation added");

    // Show popup if the element exists
    showPopup(true);

    // Create a new recommendation element
    var element = document.createElement("p");
    element.setAttribute("class", "recommendation-container");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value.trim() + "<span>&#8221;</span>";

    // Append to the container using class (since HTML has class not id)
    let container = document.querySelector(".all-recommendation");
    container.appendChild(element);

    // Clear the textarea
    recommendation.value = "";

    // Hide popup after 3 seconds
    
  }
}

function showPopup(bool) {
  let popup = document.getElementById('popup');
  if (popup) {
    popup.style.visibility = bool ? 'visible' : 'hidden';
  }
}

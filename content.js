console.log("Content script loaded");


document.addEventListener("mouseover", function (e) {
    var target = e.target;
    var color = window.getComputedStyle(target).getPropertyValue("color");
    var backgroundColor = window.getComputedStyle(target).getPropertyValue("background-color");
  
    // Get the hex codes
    var textColorHex = rgbToHex(color);
    var bgColorHex = rgbToHex(backgroundColor);
  
    // Create and append overlay element
    createOverlay(e.clientX, e.clientY, textColorHex, bgColorHex);
  });
  
  document.addEventListener("mouseout", function () {
    // Remove overlay when mouse leaves the element
    removeOverlay();
  });
  
  function createOverlay(x, y, textColorHex, bgColorHex) {
    var overlay = document.createElement("div");
    overlay.id = "colorOverlay";
    overlay.innerHTML = `Text color: ${textColorHex}<br>Background color: ${bgColorHex}`;
    overlay.style.position = "fixed";
    overlay.style.left = x + "px";
    overlay.style.top = y + "px";
    overlay.style.backgroundColor = "#ffffff";
    overlay.style.padding = "5px";
    overlay.style.border = "1px solid #000000";
    overlay.style.borderRadius = "3px";
    overlay.style.zIndex = "1000";
    
    document.body.appendChild(overlay);
  }
  
  function removeOverlay() {
    var overlay = document.getElementById("colorOverlay");
    if (overlay) {
      overlay.parentNode.removeChild(overlay);
    }
  }
  
  function rgbToHex(rgb) {
    // Convert RGB to hex code
    var hex = Number(rgb.match(/\d+/g)[0]).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  
let readMore = true;
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", function () {
    const benefitDescription = this.previousElementSibling;
    if (readMore) {
      // const isExpanded = benefitDescription.style.webkitLineClamp === "unset";
      benefitDescription.style.webkitLineClamp = "unset";
      button.textContent = "Read less";
      readMore = false; // Toggle back
    } else {
      benefitDescription.style.webkitLineClamp = "2";
      button.textContent = "Read more";
      readMore = true;
    }
    // this.textContent = isExpanded ? "Read more →" : "Read less ←";
  });
});

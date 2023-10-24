function validateHtml() {
  const htmlContent = document.getElementById("htmlInput").value;

  // Finally I got this working, now my html is valid...or is it?
  const headerRegex = /<header .*?>.*?<\/header>/gs;
  const sectionRegex = /<section .*?>.*?<\/section>/gs;
  const footerRegex = /<footer .*?>.*?<\/footer>/gs;

  if (
    headerRegex.test(htmlContent) &&
    sectionRegex.test(htmlContent) &&
    footerRegex.test(htmlContent)
  ) {
    document.getElementById("validationResult").textContent = "HTML is valid!";
    document.getElementById("validationResult").style.color = "green";
  } else {
    document.getElementById("validationResult").textContent =
      "HTML is not valid!";
  }
}

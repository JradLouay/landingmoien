document.addEventListener("DOMContentLoaded", function(event) { 
const url = new URL(window.location.href);
console.log(url.searchParams.get("jobId"))
  });
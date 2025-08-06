// your code here
document.getElementById("button").addEventListener("click", function () {
  const baseUrl = "https://localhost:8080/";
  const name = document.getElementById("name").value.trim();
  const year = document.getElementById("year").value.trim();

  let queryParams = [];

  if (name) {
    queryParams.push(`name=${encodeURIComponent(name)}`);
  }

  if (year) {
    queryParams.push(`year=${encodeURIComponent(year)}`);
  }

  const finalUrl = queryParams.length > 0 ? `${baseUrl}?${queryParams.join("&")}` : baseUrl;

  document.getElementById("url").innerText = finalUrl;
});

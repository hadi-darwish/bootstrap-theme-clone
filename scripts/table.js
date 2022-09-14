async function loadIntoTable(url, table) {
  const tableBody = document.querySelector("tbody");
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  data.forEach((element) => {
    // const row = document.createElement("tr");
    // for
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${element.name}</td>
    <td>${element.email}</td>
    <td>${element.phone_number}</td>
    <td>${element.message}</td>
    `;
    tableBody.appendChild(row);
  });
}

loadIntoTable(
  "http://localhost/fswo5/contact-api/table.php",
  document.querySelector("table")
);

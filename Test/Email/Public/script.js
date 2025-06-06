async function fetchData() {
  try {
      const response = await fetch("/api/users");
      if (!response.ok) {
          throw new Error("Failed to fetch data");
      }

      const rows = await response.json();
      console.log(rows);

      const displayElement = document.getElementById("display");
      if (displayElement) {
          displayElement.innerHTML = JSON.stringify(rows, null, 2);
      } else {
          console.error("Element with id 'display' not found");
      }
  } catch (error) {
      console.error("Error fetching data:", error);
  }
}

fetchData();
document.addEventListener("DOMContentLoaded", () => {
  fetch("preferensi_produk.json")
    .then(response => response.json())
    .then(data => {
      const regions = [];
      const cities = [];
      const subCategories = [];

      data.forEach(item => {
        if (!regions.includes(item.Region)) regions.push(item.Region);
        if (!cities.includes(item.City)) cities.push(item.City);
        if (!subCategories.includes(item.Sub_Category))
          subCategories.push(item.Sub_Category);
      });

      regions.forEach(region => addOptionToMenu("regionFilter", region));
      cities.forEach(city => addOptionToMenu("cityFilter", city));
      subCategories.forEach(subCategory => addOptionToMenu("subCategoryFilter", subCategory));

      function addOptionToMenu(menuId, value) {
        const menu = document.getElementById(menuId);
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = value;
        li.appendChild(a);
        menu.appendChild(li);
      }

      function filterData() {
        const region = document.getElementById("regionFilter").querySelector(".selected").textContent;
        const city = document.getElementById("cityFilter").querySelector(".selected").textContent;
        const subCategory = document.getElementById("subCategoryFilter").querySelector(".selected").textContent;

        const filteredData = data.filter(item => {
          return (
            (!year || item.Year === year) &&
            (!region || item.Region === region) &&
            (!city || item.City === city) &&
            (!subCategory || item.Sub_Category === subCategory)
          );
        });

      }

      document.getElementById("regionFilter").addEventListener("click", filterData);
      document.getElementById("cityFilter").addEventListener("click", filterData);
      document.getElementById("subCategoryFilter").addEventListener("click", filterData);

      filterData();
    })
    .catch(error => console.error("Error loading data:", error));
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("topsales_subkategori.json")
    .then(response => response.json())
    .then(data => {
      const years = [];

      data.forEach(item => {
        if (!years.includes(item.Year)) years.push(item.Year);
      });

      years.forEach(year => addOptionToMenu("yearFilter", year));

      function addOptionToMenu(menuId, value) {
        const menu = document.getElementById(menuId);
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = value;
        li.appendChild(a);
        menu.appendChild(li);
      }

      function filterData() {
        const year = document.getElementById("yearFilter").querySelector(".selected").textContent;

        const filteredData = data.filter(item => {
          return (
            (!year || item.Year === year)
          );
        });
      }

      document.getElementById("yearFilter").addEventListener("click", filterData);

      filterData();
    })
    .catch(error => console.error("Error loading data:", error));
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("clustering.json")
    .then(response => response.json())
    .then(data => {
      const segments = [];

      data.forEach(item => {
        if (!segments.includes(item.Kelompok)) segments.push(item.Kelompok);
      });

      segments.forEach(segment => addOptionToMenu("segmentFilter", segment));

      function addOptionToMenu(menuId, value) {
        const menu = document.getElementById(menuId);
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = "#";
        a.textContent = value;
        li.appendChild(a);
        menu.appendChild(li);
      }

      function filterData() {
        const segment = document.getElementById("segmentFilter").querySelector(".selected").textContent;

        const filteredData = data.filter(item => {
          return (
            (!segment || item.Kelompok === segment)
          );
        });

      }

      document.getElementById("segmentFilter").addEventListener("click", filterData);

      filterData();
    })
    .catch(error => console.error("Error loading data:", error));
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('topsales_subkategori.json')
      .then(response => response.json())
      .then(data => {
          const subcategoryFilter = document.getElementById('subcategory-filter');
          const yearFilter = document.getElementById('year-filter');
          const tbody = document.getElementById('table-body');

          const uniqueSubCategories = [...new Set(data.map(item => item["Sub Category"]))];
          uniqueSubCategories.forEach(subCategory => {
              const option = document.createElement('option');
              option.value = subCategory;
              option.textContent = subCategory;
              subcategoryFilter.appendChild(option);
          });

          const uniqueYears = [...new Set(data.map(item => item.Year))];
          uniqueYears.forEach(year => {
              const option = document.createElement('option');
              option.value = year;
              option.textContent = year;
              yearFilter.appendChild(option);
          });

          const renderTable = () => {
              tbody.innerHTML = '';
              const filteredData = data.filter(item => {
                  const subCategoryMatch = subcategoryFilter.value === '' || item["Sub Category"] === subcategoryFilter.value;
                  const yearMatch = yearFilter.value === '' || item.Year == yearFilter.value;
                  return subCategoryMatch && yearMatch;
              });

              filteredData.forEach((item, index) => {
                  let row = document.createElement('tr');
                  let cellIndex = document.createElement('td');
                  cellIndex.textContent = index + 1;
                  row.appendChild(cellIndex);

                  let cellSubCategory = document.createElement('td');
                  cellSubCategory.textContent = item["Sub Category"];
                  row.appendChild(cellSubCategory);

                  let cellYear = document.createElement('td');
                  cellYear.textContent = item.Year;
                  row.appendChild(cellYear);

                  let cellSales = document.createElement('td');
                  cellSales.textContent = item.Sales;
                  row.appendChild(cellSales);

                  tbody.appendChild(row);
              });
          };

          subcategoryFilter.addEventListener('change', renderTable);
          yearFilter.addEventListener('change', renderTable);

          renderTable();
      })
      .catch(error => console.error('Error loading JSON data:', error));
});

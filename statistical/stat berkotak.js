google.charts.load('current', { 'packages': ['corechart', 'bar'] });
    google.charts.setOnLoadCallback(drawCharts);

    function drawCharts() {
      drawPieChart();
      drawBarChart();
      drawLineChart ();
      drawChart();
      drawChart2 ();
      drawLineChart2 ();
      drawBarChart2 ();
    }

    function drawPieChart() {
      var data = google.visualization.arrayToDataTable([
        ['City', 'Sales'],
        ['New York City', 256368.16],
        ['Los Angeles', 175851.34],
        ['Seattle', 119540.74],
        ['San Fransisco', 112669.09],
        ['Others', 1632771.52]
      ]);

      var options = {
        legend: 'right', // Menampilkan legenda di sebelah kanan grafik
        pieSliceText: 'percentage', // Menampilkan nilai penjualan di dalam slice pie chart
        pieSliceTextStyle: { color: 'black' }, // Mengatur warna teks pada slice pie chart
        chartArea: { width: '70%', height: '70%' }, // Mengatur ukuran area grafik pie chart
        colors: ['#AB0319', '#B73535', '#C04C4C', '#D48282', '#E99090'],
        backgroundColor: {fill: 'transparent'}
      };

      var chart = new google.visualization.PieChart(document.getElementById('piechart'));
      chart.draw(data, options);
    }

    function drawBarChart() {
      var data = google.visualization.arrayToDataTable([
        ['', 'Same Day', 'First Class', 'Second Class', 'Standard Class'],
        ['Consumer', 0.03, 2.17, 3.21, 5.03],
        ['Corporate', 0.05, 2.23, 3.25, 4.99],
        ['Head Office', 0.06, 2.13, 3.33, 4.98]
      ]);

      var options = {
        chart: {
          legend: 'right'
        },
        bars: 'vertical', // Required for Material Bar Charts.
        colors: ['#AB0319', '#B73535', '#C04C4C', '#D48282']
      };

      var chart = new google.charts.Bar(document.getElementById('barchart_material'));
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }

    function drawLineChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Profit'],
        ['2014',  49543.97],
        ['2015',  61618.6],
        ['2016',  81794.17],
        ['2017',  93439.27]
      ]);

      var options = {
        curveType: 'function',
        legend: { position: 'bottom' },
        pointSize: 4, // ukuran marker
        pointShape: { type: 'circle' }, // bentuk marker
        backgroundColor: {fill: 'transparent'},
        annotations: {
          textStyle: {
            fontSize: 12,
            color: '#AB0319',
          }
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

      chart.draw(data, options);
    }

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['City', 'Profit'],
        ['New York City', 62036.98],
        ['Los Angeles', 30440.76],
        ['Seattle', 29156.1],
        ['San Francisco', 17507.39],
        ['Detroit', 13181.79]
      ]);

      var options = {
        backgroundColor: '#AB0319', // Atur warna latar belakang
        bars: 'vertical', // Required for Material Bar Charts.
        legend: { 
            position: 'bottom',
            textStyle: {color: 'white'} // Atur warna tulisan legenda menjadi putih
        },
        hAxis: {
            textStyle: {color: 'white'} // Atur warna tulisan sumbu horizontal menjadi putih
        },
        vAxis: {
            textStyle: {color: 'white'} // Atur warna tulisan sumbu vertikal menjadi putih
        },
        colors: ['#D9D9D9']
      };

      var chart = new google.visualization.BarChart(document.getElementById('barchart'));
      chart.draw(data, options);
    }

    function drawChart2() {
      var data = google.visualization.arrayToDataTable([
        ['Sub Category', 'Profit'],
        ['Copiers', 55617.82],
        ['Phones', 44515.73],
        ['Accessories', 41936.64],
        ['Paper', 34053.57],
        ['Binders', 30221.76]
      ]);

      var options = {
        backgroundColor: '#AB0319', // Atur warna latar belakang
        bars: 'vertical', // Required for Material Bar Charts.
        legend: { 
            position: 'bottom',
            textStyle: {color: 'white'} // Atur warna tulisan legenda menjadi putih
        },
        hAxis: {
            textStyle: {color: 'white'} // Atur warna tulisan sumbu horizontal menjadi putih
        },
        vAxis: {
            textStyle: {color: 'white'} // Atur warna tulisan sumbu vertikal menjadi putih
        },
        colors: ['#D9D9D9']
      };

      var chart = new google.visualization.BarChart(document.getElementById('barchart2'));
      chart.draw(data, options);
    }

    function drawLineChart2() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Profit'],
        ['2014',  49543.97],
        ['2015',  61618.6],
        ['2016',  81794.17],
        ['2017',  93439.27]
      ]);

      var options = {
        curveType: 'function',
        legend: { position: 'bottom' },
        pointSize: 4, // ukuran marker
        pointShape: { type: 'circle' }, // bentuk marker
        annotations: {
          textStyle: {
            fontSize: 12,
            color: '#AB0319',
          }
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart2'));

      chart.draw(data, options);
    }

    function drawBarChart2() {
      var data = google.visualization.arrayToDataTable([
        ['', 'Same Day', 'First Class', 'Second Class', 'Standard Class'],
        ['Consumer', 0.03, 2.17, 3.21, 5.03],
        ['Corporate', 0.05, 2.23, 3.25, 4.99],
        ['Head Office', 0.06, 2.13, 3.33, 4.98]
      ]);

      var options = {
        chart: {
          legend: 'right'
        },
        bars: 'vertical', // Required for Material Bar Charts.
        colors: ['#E99090', '#D48282', '#C04C4C', '#B73535']
      };

      var chart = new google.charts.Bar(document.getElementById('barchart_material2'));
      chart.draw(data, google.charts.Bar.convertOptions(options));
    }


// tabel top profit subkategori
document.addEventListener('DOMContentLoaded', () => {
    fetch('topsales_subkategori.json')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('table-body');
            data.forEach((item, index) => {
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
        })
        .catch(error => console.error('Error loading JSON data:', error));
});


//tabel roi produk
document.addEventListener('DOMContentLoaded', () => {
        // Memuat data ke tabel kedua
        fetch('roi_produk.json')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Tambahkan ini untuk memastikan data diterima
                const tbody = document.getElementById('table-body2');
                data.forEach((item, index) => {
                    let row = document.createElement('tr');
                    let cellIndex = document.createElement('td');
                    cellIndex.textContent = index + 1;
                    row.appendChild(cellIndex);
    
                    let cellProductName = document.createElement('td');
                    cellProductName.textContent = item["Product_Name"];
                    row.appendChild(cellProductName);
    
                    let cellROI = document.createElement('td');
                    // Membulatkan nilai ROI menjadi 2 angka di belakang koma
                    let roundedROI = parseFloat(item.ROI).toFixed(2);
                    cellROI.textContent = roundedROI;
                    row.appendChild(cellROI);
    
                    tbody.appendChild(row);
                });
            })
            .catch(error => console.error('Error loading JSON data for table 2:', error));
    });
    

//tabel roi produk2
document.addEventListener('DOMContentLoaded', () => {
    // Memuat data ke tabel kedua
    fetch('roi_produk.json')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Tambahkan ini untuk memastikan data diterima
            const tbody = document.getElementById('table-body3');
            data.forEach((item, index) => {
                let row = document.createElement('tr');
                let cellIndex = document.createElement('td');
                cellIndex.textContent = index + 1;
                row.appendChild(cellIndex);

                let cellProductName = document.createElement('td');
                cellProductName.textContent = item["Product_Name"];
                row.appendChild(cellProductName);

                let cellROI = document.createElement('td');
                // Membulatkan nilai ROI menjadi 2 angka di belakang koma
                let roundedROI = parseFloat(item.ROI).toFixed(2);
                cellROI.textContent = roundedROI;
                row.appendChild(cellROI);

                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading JSON data for table 2:', error));
});


//tabel preferensi produk
document.addEventListener('DOMContentLoaded', () => {
    fetch('preferensi_produk.json')
        .then(response => response.json())
        .then(data => {
            const tbody = document.getElementById('table-body4');
            data.forEach((item, index) => {
                let row = document.createElement('tr');

                let cellIndex = document.createElement('td');
                cellIndex.textContent = index + 1;
                row.appendChild(cellIndex);

                let cellCustomerId = document.createElement('td');
                cellCustomerId.textContent = item["Customer_ID"];
                row.appendChild(cellCustomerId);

                let cellCity = document.createElement('td');
                cellCity.textContent = item["City"];
                row.appendChild(cellCity);

                let cellRegion = document.createElement('td');
                cellRegion.textContent = item["Region"];
                row.appendChild(cellRegion);

                let cellProductId = document.createElement('td');
                cellProductId.textContent = item["Product_ID"];
                row.appendChild(cellProductId);

                let cellProductName = document.createElement('td');
                cellProductName.textContent = item["Product_Name"];
                row.appendChild(cellProductName);

                let cellSubCategory = document.createElement('td');
                cellSubCategory.textContent = item["Sub_Category"];
                row.appendChild(cellSubCategory);

                let cellTotalPurchases = document.createElement('td');
                cellTotalPurchases.textContent = item["Total_Purchases"];
                row.appendChild(cellTotalPurchases);

                let cellTotalPurchasesTech = document.createElement('td');
                cellTotalPurchasesTech.textContent = item["Total_Purchases_Technology"];
                row.appendChild(cellTotalPurchasesTech);

                let cellTotalPurchasesUnwanted = document.createElement('td');
                cellTotalPurchasesUnwanted.textContent = item["Total_Purchases_Unwanted"];
                row.appendChild(cellTotalPurchasesUnwanted);

                tbody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading JSON data for table 4:', error));
});


// untuk clustering
document.addEventListener("DOMContentLoaded", function() {
    fetch('clustering.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById('table-body5');
            data.forEach(rowData => {
                const row = document.createElement('tr');
                Object.values(rowData).forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error loading JSON file:', error));
});


// dropdown
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  // const selected = dropdown.querySelector(".selected");->variabel untuk menampilkan teks option yang dipilih, kalau nd mau dipake bisa dihapus

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      // selected.innerText = option.innerText; // Menampilkan teks option yang dipilih, kalau nd mau dipake bisa dihapus
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});
//dropdown end
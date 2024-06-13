$(document).ready(function () {
  $(".menu-links li a").click(function (e) {
    $(".menu-links li.active").removeClass("active");
    var $parent = $(this).parent();
    $parent.addClass("active");
  });
  $(".hamburger-icon").click(function () {
    $(".menu-links").toggleClass("left");
  });
  $(".hamburger-icon").click(function () {
    $(this).toggleClass("ham-style");
  });
  const themeSwitch = document.querySelector("#checkbox");
  themeSwitch.addEventListener("change", () => {
    document.body.classList.toggle("dark-theme");
  });



    var lineCtx = document.getElementById('lineChart').getContext('2d');
    var lineChart = new Chart(lineCtx, {
        type: 'line',
        data: {
            labels: ['March', 'April', 'May', 'June', 'July', 'Auguest'],
            datasets: [{
                label: 'Sales',
                data: [30, 20, 50, 40, 60, 70],
                fill: false,
                borderColor: '#3558c3',
                tension: 0.2,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderWidth: 2,
                pointBackgroundColor: '#3558c3',
                pointBorderColor: '#3558c3',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Month'
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'Sales'
                    },
                    beginAtZero: true
                }
            }
        }
    });
  
    // Update Data Button
    $('#updateData').click(function() {
        lineChart.data.datasets[0].data = [
            Math.random() * 100, 
            Math.random() * 100, 
            Math.random() * 100, 
            Math.random() * 100, 
            Math.random() * 100, 
            Math.random() * 100
        ];
        lineChart.update();
    });
  });
 
  

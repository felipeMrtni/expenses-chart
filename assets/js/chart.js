const ctx = document.getElementById('myChart');

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [{
        label: '', //label: 'Spending - Last 7 days'
        data: [12, 19, 3, 5, 2, 3, 10],
        borderWidth: 1,
        backgroundColor: 'rgb(236, 119, 95)',
        //testes
        base: 0,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                display: false,
            },
            x: {
                grid: {
                    display:false,
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
        },
        // pointStyle: {
        //     pointStyle: 'circle',
        // }
    }
});
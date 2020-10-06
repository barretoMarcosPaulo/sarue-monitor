

new Chart(document.getElementById("chart"), {
    type: 'bar',
    data: {
        // labels: ["1900", "1950", "1999"],
        datasets: [

            {
                label: "CPU(%)",
                backgroundColor: "#f14666",
                data: [90]
            },

            {
                label: "Mémoria(%)",
                backgroundColor: "#FFC154",
                data: [33]
            },

            {
                label: "Disco(%)",
                backgroundColor: "#47B39C",
                data: [45]
            },
        ]
    },
    options: {
        title: {
            display: true,
            text: 'Em uso neste servidor:',
            position: 'bottom'
        }
    }
});
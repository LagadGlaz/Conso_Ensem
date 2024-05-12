// script.js
document.addEventListener("DOMContentLoaded", function() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet'],
            datasets: [{
                label: 'Consommation',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Fonction pour mettre à jour le diagramme en fonction de la période de temps sélectionnée
    document.getElementById('period').addEventListener('change', function() {
        var period = this.value;
        // Mettre à jour les données du diagramme en fonction de la période sélectionnée
        // Vous pouvez implémenter la logique pour charger les données appropriées en fonction de la période
        // Par exemple, en appelant une API ou en récupérant des données stockées localement
    });
});

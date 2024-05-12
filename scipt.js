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

 <script src="https://cdnjs.cloudflare.com/ajax/libs/paho-mqtt/1.0.1/mqttws31.min.js"></script>

// Créer un client MQTT
var client = new Paho.MQTT.Client("localhost", Number(8083), "clientId");

// Définir les callbacks de connexion
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

// Connecter le client
client.connect({ onSuccess: onConnect });

// Callback pour la connexion réussie
function onConnect() {
    console.log("Connected");
    client.subscribe("topic/temperature"); // S'abonner au sujet des capteurs
}

// Callback pour la perte de connexion
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        console.log("Connection lost: " + responseObject.errorMessage);
    }
}

// Callback pour l'arrivée d'un message
function onMessageArrived(message) {
    console.log("Message received: " + message.payloadString);
    updatePage(message.payloadString);
}

// Fonction pour mettre à jour la page web avec les données reçues
function updatePage(data) {
    // Mettre à jour le contenu de la page web avec les données
    document.getElementById("temperature").innerHTML = data;
}

});

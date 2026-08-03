const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.emqx.io:1883');

client.on('connect', () => {
  console.log('Conectado ao broker MQTT para receber mensagens');
  client.subscribe('controltech/teste', (err) => {
    if (err) {
      console.error('Erro ao assinar o tópico:', err);
      client.end();
    } else {
      console.log('Inscrito no tópico controltech/teste');
    }
  });
});

client.on('message', (topic, message) => {
  console.log(`Mensagem recebida no tópico ${topic}: ${message.toString()}`);
});

client.on('error', (err) => {
  console.error('Erro no cliente MQTT:', err);
  client.end();
});

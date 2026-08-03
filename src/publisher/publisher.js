const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.emqx.io:1883');

client.on('connect', () => {
  console.log('Conectado ao broker MQTT');

  //client.publish('controltech/teste', 'Olá ControlTech - Hello World!!', () => {
    client.publish('controltech/teste', JSON.stringify({
                                                        temperatura: 23.5,
                                                        pressao: 7.2
                                                        }), () => {
    console.log('Mensagem publicada com sucesso');
    client.end();
  });
});

client.on('error', (err) => {
  console.error('Erro no cliente MQTT:', err);
  client.end();
});

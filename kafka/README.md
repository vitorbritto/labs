# Micro-serviço com Node.js

- Utilizando Kafka;
- Utilizando Node;

## Aplicações

- API Principal (Station);
- Geração de certificado;

## Fluxo

- API principal envia uma mensagem pro serviço de certificado para gerar o certificado;
- Micro-serviço de certificado devolve uma resposta (sync/async);

Se conseguir sync/async:

- Receber uma resposta assíncrona de quando o e-mail com o certificado foi enviado;


## O que sabemos?

- Comunicação entre dois serviços usando REST, mas o problema é a latência;
- Redis / RabbitMQ / Kafka (Pub/Sub);


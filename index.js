const express = require("express");
const controller = require("./controller");
const KafkaConfig = require("./config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/send", controller.sendMessageToKafka);

const kafkaConfig = new KafkaConfig();
kafkaConfig.consume("my-topic", (value) => {
  console.log("Received:", value);
});

app.listen(8080, () => console.log("server is running on port 8080"));

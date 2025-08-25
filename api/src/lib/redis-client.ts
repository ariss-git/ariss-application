// src/lib/redis-client.ts

import { createClient } from "redis";
import { config } from "../config/index";

// Instance to connect to redis cache
const redisClient = createClient({
  username: config.redisUsername,
  password: config.redisPassword,
  socket: {
    host: config.redisHost,
    port: Number(config.redisPort),
  },
});

redisClient.on("connect", () => console.log("Connected to redis")); // Connection successful
redisClient.on("error", (err) => console.error("Redis error: ", err)); // Throw error

redisClient.connect();

export default redisClient;

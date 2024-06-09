import express from "express";
import cors from "cors";  // Importe o middleware cors
import prismaClient from "./db.js";

const app = express();
app.use(cors());  // Use o middleware cors
app.use(express.json());

const port = process.env.PORT ?? 4000;

app.get("/user", async (request, response) => {
  try {
    const users = await prismaClient.user.findMany();
    return response.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
});

app.post("/user", async (request, response) => {
  try {
    const { nome, email, telefone, relacao } = request.body;
    const user = await prismaClient.user.create({
      data: {
        nome,
        email,
        telefone,
        relacao,
      },
    });
    return response.json(user);
  } catch (error) {
    console.error("Error creating user:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
});

app.get("/feedback", async (request, response) => {
  try {
    const feedback = await prismaClient.feedback.findMany();
    return response.json(feedback);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
});

app.post("/feedback", async (request, response) => {
  try {
    const { nome, email} = request.body;
    const feedback = await prismaClient.feedback.create({
      data: {
        nome,
        email
      },
    });
    return response.json(feedback);
  } catch (error) {
    console.error("Error creating feedback:", error);
    return response.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => console.log("Server is running on port ", port));

<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="NodeJS" width="120"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express" width="120"/>
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="120"/>

  <h1>High Score Hazard - Backend API</h1>
  <p>The Node.js backend that powers the High Score Hazard game, managing the "Hall of Shame" leaderboard.</p>

  <p>
    <img src="https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js" alt="NodeJS">
    <img src="https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express" alt="Express">
    <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License">
  </p>
</div>

---

## 🏆 Features

*   **💾 Record Losses:** `POST` endpoint to find a player by name and increment their loss count (or create them if they're new).
*   **🏆 Fetch Leaderboard:** `GET` endpoint to retrieve all players, sorted by the highest number of losses.
*   **🗑️ Clear History:** `DELETE` endpoint to reset the entire leaderboard.

## 🚀 Setup and Installation

Follow these steps to get the server running locally.

**1. Clone the repository**
```bash
git clone https://github.com/your-username/card_game_backend.git
cd card_game_backend
```

**2. Install dependencies**
```bash
npm install
```

**3. Set up Environment Variables**
Create a file named `.env` in the root of the project and add your MongoDB connection string.

_.env.example_
```# The port the server will run on
PORT=5001

# Your connection string from MongoDB Atlas
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/yourDatabase?retryWrites=true&w=majority
```

**4. Run the server**
```bash
npm start
```
The API will be available at `http://localhost:5001`.

---

## ☁️ Deployment

This project is configured for easy deployment on [Render](https://render.com/).

1.  Push the code to a GitHub repository.
2.  Create a new "Web Service" on Render and connect it to your repository.
3.  Set the **Start Command** to `npm start`.
4.  Add an **Environment Variable** with the `Key` of `MONGO_URI` and your connection string as the `Value`.
5.  Deploy!

---

## 📡 API Endpoints

| Method | Endpoint               | Description                               |
| :----- | :--------------------- | :---------------------------------------- |
| `GET`  | `/leaderboard`         | Fetches all players sorted by losses.     |
| `POST` | `/leaderboard/loss`    | Records a loss. Requires `{"name": "player_name"}` in the body. |
| `DELETE`| `/leaderboard`        | Deletes all records from the leaderboard. |

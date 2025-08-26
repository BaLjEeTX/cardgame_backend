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
git clone https://github.com/your-username/cardgame_backend.git
cd cardgame_backend

# 🌡️ Webduino-Blockchain

A **Node.js** and **Webduino** application that logs **temperature and humidity** data from a Webduino DHT sensor to the **Ethereum blockchain**, with a responsive frontend for **real-time monitoring** and **transaction history**.

---

## 🔧 Features

### 📡 Real-time Sensor Readings
Displays live temperature and humidity data from a Webduino DHT sensor.

### ⛓️ Blockchain Data Storage
Stores sensor data on Ethereum when any of the following is true:
- Temperature changes by ±2°C
- Humidity changes by ±5%
- An hour has passed since the last upload

### 🧾 Transaction History
Fetches and displays recent blockchain transactions with timestamps and data values.

### ⏱️ Status Tracking
Tracks the last upload time and shows how long until the next allowed upload.

### 🎨 Responsive Interface
- Highlights out-of-range values in **red**:
  - Temperature < 18°C or > 25°C  
  - Humidity < 40% or > 70%
- Mobile-friendly layout

---

## 📋 Prerequisites

- Node.js (v16 or higher)
- Webduino Board with DHT sensor  
  (Device ID: `10VaR3wQ`, connected via MQTT)
- Ethereum RPC Provider (e.g., [Infura](https://infura.io) or [Alchemy](https://alchemy.com))
- Ethereum wallet private key (for signing transactions)
- Deployed Smart Contract (from `TempHumidity.sol`)

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/rtxmythically/Webduino-Blockchain.git
cd Webduino-Blockchain

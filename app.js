const express = require("express");

const app = express();

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwb3RudXJ1dGVqYS4yMy5jc2RAYW5pdHMuZWR1LmluIiwiZXhwIjoxNzgyMTk4NDAxLCJpYXQiOjE3ODIxOTc1MDEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJmZmQ1ODZjZS04YmExLTRlNTAtOTQ5MC1iZWIyODUxM2M2OTciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwb3RudXJ1IHRlamEiLCJzdWIiOiI5YzQ4NzY5YS0yODRkLTRjZGMtYWRiMy0xMWIxZDAyMDVkNjIifSwiZW1haWwiOiJwb3RudXJ1dGVqYS4yMy5jc2RAYW5pdHMuZWR1LmluIiwibmFtZSI6InBvdG51cnUgdGVqYSIsInJvbGxObyI6ImEyMzEyNjU1MTExNSIsImFjY2Vzc0NvZGUiOiJNVHF4YXIiLCJjbGllbnRJRCI6IjljNDg3NjlhLTI4NGQtNGNkYy1hZGIzLTExYjFkMDIwNWQ2MiIsImNsaWVudFNlY3JldCI6ImtZWHZaa3ZteFdjR1JKeU4ifQ.frM8XQqzUxjg4JrytjJkcV_PxB_nIcP1GXkBxPdoQqI"
const headers = {
  Authorization: `Bearer ${TOKEN}`,
};

async function getDepots() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/depots",
    { headers }
  );

  return await response.json();
}

async function getVehicles() {
  const response = await fetch(
    "http://4.224.186.213/evaluation-service/vehicles",
    { headers }
  );

  return await response.json();
}

app.get("/", async (req, res) => {
  try {
    const depotData = await getDepots();
    const vehicleData = await getVehicles();

    console.log("DEPOT DATA:");
    console.log(JSON.stringify(depotData, null, 2));

    console.log("VEHICLE DATA:");
    console.log(JSON.stringify(vehicleData, null, 2));

    res.json({
      depotData,
      vehicleData
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message
    });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
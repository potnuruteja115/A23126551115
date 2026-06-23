const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJwb3RudXJ1dGVqYS4yMy5jc2RAYW5pdHMuZWR1LmluIiwiZXhwIjoxNzgyMTk4NDAxLCJpYXQiOjE3ODIxOTc1MDEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJmZmQ1ODZjZS04YmExLTRlNTAtOTQ5MC1iZWIyODUxM2M2OTciLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJwb3RudXJ1IHRlamEiLCJzdWIiOiI5YzQ4NzY5YS0yODRkLTRjZGMtYWRiMy0xMWIxZDAyMDVkNjIifSwiZW1haWwiOiJwb3RudXJ1dGVqYS4yMy5jc2RAYW5pdHMuZWR1LmluIiwibmFtZSI6InBvdG51cnUgdGVqYSIsInJvbGxObyI6ImEyMzEyNjU1MTExNSIsImFjY2Vzc0NvZGUiOiJNVHF4YXIiLCJjbGllbnRJRCI6IjljNDg3NjlhLTI4NGQtNGNkYy1hZGIzLTExYjFkMDIwNWQ2MiIsImNsaWVudFNlY3JldCI6ImtZWHZaa3ZteFdjR1JKeU4ifQ.frM8XQqzUxjg4JrytjJkcV_PxB_nIcP1GXkBxPdoQqI";

async function Log(stack, level, packageName, message) {
  try {
    await fetch(
      "http://4.224.186.213/evaluation-service/logs",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          stack,
          level,
          package: packageName,
          message
        })
      }
    );
  } catch (err) {
    console.log("Log Error:", err.message);
  }
}

module.exports = Log;
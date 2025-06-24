const mockFlights = [
  {
    flight_number: "TG123",
    airline: "Thai Airways",
    departure: "Bangkok (BKK)",
    arrival: "Tokyo (NRT)",
    departure_time: "10:00",
    arrival_time: "17:30",
    status: "On Time"
  },
  {
    flight_number: "SQ456",
    airline: "Singapore Airlines",
    departure: "Singapore (SIN)",
    arrival: "London (LHR)",
    departure_time: "23:00",
    arrival_time: "06:00",
    status: "Delayed"
  }
];

function searchFlight() {
  const input = document.getElementById("flightInput").value.toUpperCase().trim();
  const resultDiv = document.getElementById("result");

  const flight = mockFlights.find(f => f.flight_number === input);

  if (flight) {
    resultDiv.innerHTML = `
      <strong>${flight.airline}</strong><br>
      เที่ยวบิน: ${flight.flight_number}<br>
      ต้นทาง: ${flight.departure}<br>
      ปลายทาง: ${flight.arrival}<br>
      เวลาออก: ${flight.departure_time}<br>
      เวลาถึง: ${flight.arrival_time}<br>
      สถานะ: ${flight.status}
    `;
  } else {
    resultDiv.innerHTML = "ไม่พบข้อมูลเที่ยวบินนี้";
  }
}

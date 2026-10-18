/* Role-play scenarios for the conversation with Claude. */
const CHAT_SCN = [
  { id: "client", title: "Klient pyta o termin dostawy", sit: "A customer from a British engineering company calls a Polish steel fabrication company because their order of steel frames is late.", role: "the customer, polite but a little impatient", me: "the production technologist at the Polish company" },
  { id: "quality", title: "Reklamacja spoin", sit: "A customer's quality engineer reports cracks in the welds of delivered brackets and wants to know the cause and what will be done.", role: "the customer's quality engineer, professional and demanding", me: "the technologist responsible for welding" },
  { id: "interview", title: "Rozmowa kwalifikacyjna", sit: "A job interview for a position of welding technologist at an international company.", role: "the interviewer, a friendly HR manager", me: "the candidate" },
  { id: "tower", title: "Wieża kontroli lotów", sit: "A student pilot in a Cessna 152 at a small airfield (runway 29) calls the tower for taxi and takeoff, then flies one circuit. Use standard ICAO radio phraseology.", role: "the tower controller", me: "the student pilot, callsign SP-ABC" },
  { id: "hotel", title: "W hotelu", sit: "Checking in at a hotel in London. The guest has a booking but there is a small problem with the room.", role: "the hotel receptionist", me: "the guest" },
  { id: "doctor", title: "U lekarza", sit: "A visit to a doctor in England because of a bad cough and fever.", role: "the doctor", me: "the patient" },
  { id: "colleague", title: "Small talk z kolegą z zagranicy", sit: "A colleague from a German partner company visits the factory and has lunch with the learner. Small talk about work, family, hobbies and Poland.", role: "the visiting colleague, friendly and curious", me: "the host" },
  { id: "shop", title: "Zwrot w sklepie", sit: "Returning a jacket to a shop because it is the wrong size; the receipt is missing.", role: "the shop assistant", me: "the customer" },
  { id: "code", title: "Rozmowa o kodzie", sit: "A senior developer asks the learner to explain a bug they found in their hobby project and how they fixed it.", role: "a friendly senior developer", me: "the learner who fixed the bug" }
];

/* Grammar topics. Exercise line: sentence with ___ | correct | wrong;wrong | explanation (optional). "–" = no word. */

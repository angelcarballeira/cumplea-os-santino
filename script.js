// =========================
// DATOS DE SANTINO
// =========================

const birthDate = new Date(2010, 9, 5);


// =========================
// ELEMENTOS HTML
// =========================

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const birthdayMessage = document.getElementById("birthday-message");

const subtitleElement = document.getElementById("subtitle");
const birthdayDateElement = document.getElementById("birthday-date");


// =========================
// ACTUALIZAR CUENTA
// =========================

function updateCountdown() {

  const now = new Date();
  // const now = new Date(2026, 9, 5, 12, 0, 0);

  const currentYear = now.getFullYear();

  // Cumpleaños de este año


  const birthdayThisYear = new Date(
    currentYear,
    birthDate.getMonth(),
    birthDate.getDate(),
    0,
    0,
    0
  );

  // =========================
  // ¿HOY ES EL CUMPLEAÑOS?
  // =========================

  const isBirthdayToday =
    now.getMonth() === birthDate.getMonth() &&
    now.getDate() === birthDate.getDate();


  // =========================
  // SI HOY ES EL CUMPLEAÑOS
  // =========================

  if (isBirthdayToday) {

    document.querySelector(".countdown").style.display = "none";

    birthdayMessage.style.display = "block";

    subtitleElement.style.display = "none";

    birthdayDateElement.style.display = "none";

    document.body.classList.add("birthday-mode");

    return;
  }


  // =========================
  // DETERMINAR PRÓXIMO CUMPLEAÑOS
  // =========================

  let nextBirthday = birthdayThisYear;

  if (now > birthdayThisYear) {

    nextBirthday = new Date(
      currentYear + 1,
      birthDate.getMonth(),
      birthDate.getDate(),
      0,
      0,
      0
    );
  }


  // =========================
  // EDAD QUE VA A CUMPLIR
  // =========================

  const nextAge =
    nextBirthday.getFullYear() - birthDate.getFullYear();


  // =========================
  // MOSTRAR FECHA Y EDAD
  // =========================

  birthdayDateElement.textContent =
    `5 de octubre 🎉 · Cumple ${nextAge} años`;


  // =========================
  // DIFERENCIA DE TIEMPO
  // =========================

  const difference = nextBirthday - now;


  // =========================
  // CÁLCULO DEL TIEMPO
  // =========================

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );


  // =========================
  // MOSTRAR EN HTML
  // =========================

  daysElement.textContent =
    String(days).padStart(2, "0");

  hoursElement.textContent =
    String(hours).padStart(2, "0");

  minutesElement.textContent =
    String(minutes).padStart(2, "0");

  secondsElement.textContent =
    String(seconds).padStart(2, "0");
}


// =========================
// INICIAR
// =========================

updateCountdown();

setInterval(updateCountdown, 1000);
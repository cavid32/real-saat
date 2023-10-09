const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const tarix = new Date();

let saniye = tarix.getSeconds();
let deqiqe = tarix.getMinutes();
let saat = tarix.getHours();

function customElectronClock() {
  saniye++;
  if (saniye == 60) {
    saniye = 0;
    deqiqe++;
    if (deqiqe == 60) {
      deqiqe = 0;
      saat++;
    }
  }
  second.textContent = ` ${saniye < 10 ? " 0" + saniye : saniye}`;
  minute.textContent = `${deqiqe < 10 ? " 0" + deqiqe : deqiqe} :  `;
  hour.textContent = `${saat < 10 ? " 0" + saat : saat} :  `;
}

setInterval(customElectronClock, 1000);

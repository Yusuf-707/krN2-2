let prm;
let passaword;
let year;
for (let i = 1; i <= 3; i++) {
  prm = prompt("Напишите имя.№" + i);
  if (prm == null) {
    alert("Регистрация приостановлена.");
    break;
  } else {
    if (prm == "admin") {
      passaword = prompt("Введите пароль.");
      if (passaword == 1234567) {
        alert("Привет админ!");
        console.log(prm, passaword, "правильный пароль");
      } else {
        alert("Неверный пароль!!");
        console.log(prm, passaword, "неправильно пароль");
      }
    } else {
      year = prompt("Введите возраст");
      while (year === null || year.trim() === "" || isNaN(year)) {
        year = prompt("Пожалуйста, укажите корректный возраст.");
      }

      if (year >= 18) {
        alert("Мистер " + prm + ", мы вас приняли.");
      } else {
        alert(
          `Вы не соответствуете возрастному требованию. Осталось ${18 - year} года.`,
        );
      }
      console.log(prm, year);
    }
  }
}

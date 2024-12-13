// Функция для получения текущего времени и даты и отображения их на странице
function showDateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Месяцы начинаются с 0
    const year = now.getFullYear();

    // Форматируем дату и время
    const currentTime = `${hours}:${minutes}:${seconds}`;
    const currentDate = `${day}.${month}.${year}`;

    // Отображаем дату и время в соответствующих элементах
    const timeElement = document.getElementById("hh");
    const dateElement = document.getElementById("date");
    if (timeElement) {
        timeElement.textContent = `Текущее время: ${currentTime}`;
    }
    if (dateElement) {
        dateElement.textContent = `Текущая дата: ${currentDate}`;
    }
}

// Запуск обновления времени и даты каждую секунду
setInterval(showDateTime, 1000);

// Показываем время и дату сразу при загрузке страницы
showDateTime();

// Настройка стилей для отображения времени и даты по центру страницы с фоном
document.addEventListener('DOMContentLoaded', () => {
    // Устанавливаем фон страницы
    document.body.style.backgroundImage = "linear-gradient(to right, #4facfe, #00f2fe)";
    document.body.style.height = "100vh";
    document.body.style.margin = "0";
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.color = "white";
    document.body.style.fontFamily = "Arial, sans-serif";

    // Настройка стилей для элементов времени и даты
    const timeElement = document.getElementById("hh");
    const dateElement = document.getElementById("date");

    if (timeElement) {
        timeElement.style.fontSize = "4rem"; // Увеличиваем размер шрифта для времени
    }
    if (dateElement) {
        dateElement.style.fontSize = "2rem"; // Увеличиваем размер шрифта для даты
        dateElement.style.marginTop = "1rem"; // Добавляем отступ между временем и датой
    }
});

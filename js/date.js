const calendar = document.querySelectorAll('.calendar')
const months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec")

calendar.forEach(calendar => {
    var date = new Date();
    var dayElement = calendar.querySelector('.day');
    var monthElement = calendar.querySelector('.month');

    dayElement.innerText = date.getDate();
    monthElement.innerText = months[date.getMonth()];
});
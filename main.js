let time = document.getElementById("hour"),
day = document.getElementById("day"),
date = document.getElementById("date"),
timezone = document.getElementById("timezone"),
string = document.querySelectorAll(".string");
time.innerHTML = day.innerHTML = date.innerHTML = timezone.innerHTML = "loading"
setInterval(() => {
    let data = new Date()
    var t = () => {
        n = data.getHours()
        a = data.getMinutes()
        d = data.getSeconds()
        return ( (n %= 12), (n = n || 12) + ":" + (a = a < 10 ? "0" + a : a) + ":" +(d = d < 10 ? "0" + d : d) + " " + (n >= 12 ? "pm" : "am") )
    }
    weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    time.innerHTML = `${t()}`
    day.innerHTML = `${weekDays[data.getDay()]}`
    date.innerHTML = `${data.getDate()}th ${months[data.getMonth()]} ${data.getFullYear()}`
    timezone.innerHTML = `${Intl.DateTimeFormat().resolvedOptions().timeZone}`
}, 1e3)
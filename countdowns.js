const countdown1 = () => {
    // Specify Date and Time
        const countDate1 = new Date("Jun 30, 2023 00:00:00").getTime();
        const now1 = new Date().getTime(); 
    // caculate time
    const remainingTime1 = countDate1 - now1;
    // Workout time in days, hours, minutes, seconds format


    const second1 = 1000;
    const minute1 = second1 * 60;
    const hour1 = minute1 * 60;
    const day1 = hour1 * 24;

    const textDay1 = Math.floor(remainingTime1 / day1);
    const textHour1 = Math.floor((remainingTime1 % day1) / hour1)
    const textMinute1 = Math.floor((remainingTime1 % hour1) / minute1)
    const TextSecond1 = Math.floor((remainingTime1 % minute1) / second1)

    // Update html

    document.querySelector(".day1").innerText = textDay1 > 0 ? textDay1: 0;
    document.querySelector(".hr1").innerText = textHour1 > 0 ? textHour1: 0;
    document.querySelector(".min1").innerText = textMinute1 > 0 ? textMinute1: 0;
    document.querySelector(".sec1").innerText = TextSecond1 > 0 ? TextSecond1: 0;
}   

// run tge countdown every often

setInterval(countdown1, 500);
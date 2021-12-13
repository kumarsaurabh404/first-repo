setInterval(() => {
    let d = new Date();

    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrot = 30 * htime + mtime / 2;
    mrot = mtime * 6;
    srot = stime * 6;

    hour.style.transform = `rotate(${hrot}deg)`;
    minutes.style.transform = `rotate(${mrot}deg)`;
    second.style.transform = `rotate(${srot}deg)`;
    console.log(d);



}, 1000);
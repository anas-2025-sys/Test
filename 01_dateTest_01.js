const formatData = (dateStr) => {
    const date = new Date(dateStr);
    const today = new Date();

    console.log("[date] formatDate date ---> ", date)
    console.log("[date] formatDate today date ---> ", today)
    
    const formatDate = (d) => {
        console.log("[date] formatDate d ---> ", d)
        console.log("[date] formatDate d.getFullYear() ---> ", d.getFullYear())
        console.log("[date] formatDate d.getMonth() ---> ", d.getMonth())
        console.log("[date] formatDate d.getDate() ---> ", d.getDate())
        return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    }

    const d1 = formatDate(date)
    const d2 = formatDate(today)

    console.log("[date] d1 ---> ", d1)
    console.log("[date] d2 ---> ", d2)
    
    const diffInTime = d2 - d1
    const diffInDays = diffInTime / (1000 * 60 * 60 * 24)

    console.log("[date] diffInTime ---> ", diffInTime)
    console.log("[date] diffInDays ---> ", diffInDays)

    if (diffInDays == 0) {
        return "Today";
    } else if (diffInDays == 1) {
        return "Yesterday";
    } else {
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "long" });
         console.log("[date] day ---> ", day)
         console.log("[date] month ---> ", month)
        return `${day} ${month}`;
    }
}

const today = "2025-10-10T10:00:00"
const yestarday = "2025-10-09T23:50:00"
const oct8 = "2025-10-09T23:50:00"
const jan1 = "2025-01-01T00:00:00"
const oct11 = "2025-10-11T08:00:00"

const curr = formatData(today)

// console.log("\n\n\n[Curr] curr ---> ", curr)


const d1 = new Date(2017, 2, 11, 11, 30);
console.log("log -----> ", d1.toString())
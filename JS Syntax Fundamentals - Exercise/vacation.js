function vacationPrice(count_people,type_of_group,day) {
    let total_price = count_people
    if (day === "Friday") {
        if (type_of_group === "Students") {
            total_price *= 8.45
        } else if (type_of_group === "Business") {
            total_price *= 10.90
            if (count_people >= 100) {
                total_price -= 10 * 10.90
            }
        } else if (type_of_group === "Regular") {
            total_price *= 15
        }
    } else if (day === "Saturday") {
        if (type_of_group === "Students") {
            total_price *= 9.80
        } else if (type_of_group === "Business") {
            total_price *= 15.60
            if (count_people >= 100) {
                total_price -= 10 * 15.60
            }
        } else if (type_of_group === "Regular") {
            total_price *= 20       
        } 

    } else if (day === "Sunday") {
        if (type_of_group === "Students") {
            total_price *= 10.46
        } else if (type_of_group === "Business") {
            total_price *= 16
            if (count_people >= 100) {
                total_price -= 10 * 16
            }
        } else if (type_of_group === "Regular") {
            total_price *= 22.50       
        } 
    }
    if (type_of_group === "Students" && count_people >= 30) {
        total_price *= 0.85
    } else if (type_of_group === "Regular" && count_people <= 20 & count_people >= 10) {
        total_price *= 0.95
    }
    console.log(`Total price: ${(total_price).toFixed(2)}`)
}


vacationPrice(30,"Students","Sunday");

vacationPrice(40,"Regular","Saturday");

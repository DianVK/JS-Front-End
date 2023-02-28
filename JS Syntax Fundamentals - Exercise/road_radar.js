function roadRadar(speed,typeRoad) {
    function checkStatus(difference) {

        if (difference <= 20) {
            stats = "speeding"
            return stats
        } else if (difference <= 40) {
            stats = "excessive speeding"
            return stats
        } else {
            stats = "reckless driving"
            return stats
        }
    }
    let speedLimit = 0

    if (typeRoad === "motorway") {
        speedLimit = 130
        if (speed > 130){
            let diff = speed - speedLimit
            let status = checkStatus(diff)
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }
    } else if (typeRoad === "interstate") {

        speedLimit = 90
        if (speed > 90){
            let diff = speed - speedLimit
            let status = checkStatus(diff)
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }
    } else if (typeRoad === "city") {

        speedLimit = 50
        if (speed > 50){
            let diff = speed - speedLimit
            let status = checkStatus(diff)
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }
    } else if (typeRoad === "residential") {
        
        speedLimit = 20
        if (speed > 20){
            let diff = speed - speedLimit
            let status = checkStatus(diff)
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit} - ${status}`)
        } else {
            console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
        }
    }

}

roadRadar(40, 'city')

roadRadar(21, 'residential')

roadRadar(120, 'interstate')

roadRadar(200, 'motorway')
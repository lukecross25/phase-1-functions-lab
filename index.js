function distanceFromHqInBlocks(number){
    if (number>42)
    return number-42
    if (number<42)
    return 42-number
}
function distanceFromHqInFeet(number){
   return distanceFromHqInBlocks(number)* 264
}
function distanceTravelledInFeet(start, destination){
    if (start-destination < 0)
    return ((start-destination)*-264)
    if (start-destination > 0)
    return((start-destination)*264)
}
function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start,destination) <= 400)
    return (0)
    if (distanceTravelledInFeet(start, destination) <+ 2000)
    return ((distanceTravelledInFeet(start,destination)-400)*0.02)
    if (distanceTravelledInFeet(start,destination) < 2500)
    return (25)
    if (distanceTravelledInFeet(start, destination) >2500)
    return ("cannot travel that far")
}   
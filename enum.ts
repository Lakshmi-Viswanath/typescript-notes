/*
enum - group of constants
*/
enum ticketStatus {
    "INITILIZED",
    "PENDING",
    "CLOSED"
}
let t1 = {
    name: "tic",
    status : ticketStatus.CLOSED
}
console.log(t1);

enum ticketStatus1 {
    "Not Found" = 404,
    "Success" = 200,
    "Intenal Server" = 500
}
let t2 = {
    name: "tic",
    status : ticketStatus1.Success
}
console.log(t2);
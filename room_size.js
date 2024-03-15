function room_size(tower, floor, Living_Dining_Room, Kitchen, Powder_Room, Bedroom, Laundry, Wardrobe, Bathroom) {
    this.tower = tower;
    this.floor = floor;
    this.Living_Dining_Room = Living_Dining_Room;
    this.Kitchen = Kitchen;
    this.Powder_Room = Powder_Room;
    this.Bedroom = Bedroom;
    this.Laundry = Laundry;
    this.Wardrobe = Wardrobe;
    this.Bathroom = Bathroom;
}

var StudioType_B_0 = new room_size("Cassia", 0, "4.2x5.4 m", "2.5x2.5 m", "1.9x2.2 m", "4.2x3.5 m", "1.5x1.1 m", "2.4x1.6 m", "2.4x2.7 m");
var StudioType_B_1 = new room_size("Cassia", 1, "4.2x5.6 m", "2.6x2.4 m", "1.9x2.2 m", "4.2x3.5 m", "1.5x1.1 m", "2.4x1.6 m", "2.4x2.7 m");

var StudioType_B_0_m = new Array("Cassia", 0, "4.2x5.4 m", "2.5x2.5 m", "1.9x2.2 m", "4.2x3.5 m", "1.5x1.1 m", "2.4x1.6 m", "2.4x2.7 m")
var StudioType_B_1_m = new Array("Cassia", 1, "4.2x5.6 m", "2.5x2.5 m", "1.9x2.2 m", "4.2x3.5 m", "1.5x1.1 m", "2.4x1.6 m", "2.4x2.7 m");

if (StudioType_B_0_m[0] == StudioType_B_0.tower) {
    console.log("0 Tower ok");
}
else {
    console.log("0 Tower error");
}

if (StudioType_B_0_m[1] == StudioType_B_0.floor) {
    console.log("0 Floor ok");
}
else {
    console.log("0 Floor error");
}

if (StudioType_B_0_m[2] == StudioType_B_0.Living_Dining_Room) {
    console.log("0 Living_Dining_Room ok");
}
else {
    console.log("0 Living_Dining_Room error");
}

if (StudioType_B_0_m[3] == StudioType_B_0.Kitchen) {
    console.log("0 Kitchen ok");
}
else {
    console.log("0 Kitchen error");
}

if (StudioType_B_0_m[4] == StudioType_B_0.Powder_Room) {
    console.log("0 Powder_Room ok");
}
else {
    console.log("0 Powder_Room error");
}

if (StudioType_B_0_m[5] == StudioType_B_0.Bedroom) {
    console.log("0 Bedroom ok");
}
else {
    console.log("0 Bedroom error");
}

if (StudioType_B_0_m[6] == StudioType_B_0.Laundry) {
    console.log("0 Laundry ok");
}
else {
    console.log("0 Laundry error");
}

if (StudioType_B_0_m[7] == StudioType_B_0.Wardrobe) {
    console.log("0 Wardrobe ok");
}
else {
    console.log("0 Wardrobe error");
}

if (StudioType_B_0_m[8] == StudioType_B_0.Bathroom) {
    console.log("0 Bathroom ok");
}
else {
    console.log("0 Bathroom error");
}

function arraysAreEqual(o, m) {
    for (var i = 0; i < o.length; i++) {
        if (o[i] != m[i]) return false;
    }
    return true;
}

// Создание массивов с чего сверяем
var StudioType_B_1 = ["Cassia", 1, "4.2x5.6 m", "2.6x2.4 m", "1.9x2.2 m", "4.2x3.5 m", "1.5x1.1 m", "2.4x1.6 m", "2.4x2.7 m"];
var StudioType_B_0 = new Array("Cassia", 0, "4.2x5.4 m", "2.5x2.5 m", "1.9x2.2 m", "4.2x3.5 m", "1.5x1.1 m", "2.4x1.6 m", "2.4x2.7 m");

//Проверка по красоте 1F
console.log(arraysAreEqual(StudioType_B_1, StudioType_B_1_m));  // Выводит true/false

//Проверка GF по красоте
console.log(arraysAreEqual(StudioType_B_0, StudioType_B_0_m));  // Выводит true/false
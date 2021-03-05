// for loop
for(j = 0 ; j < 5 ; j++){
    document.write("I love homework ");
}
document.write("<br>");
for(j = 0 ; j < 5 ; j++){
    document.write(j + " ");
}
document.write("<br>");
for(j = 15 ; j < 31 ; j+=3){
    document.write(j + " ");
}
document.write("<br>");
for(i = 1 ; i < 5 ; i++){
    for(j = 1 ; j < 5 ; j++){
        document.write("⬜");
    }
    document.write("<br>");
}
document.write("<br>");
for(i = 8 ; i > 0 ; i--){
    for(j = i ; j < 8 ; j++){
        document.write("🦴");
    }
    document.write("<br>");
}

document.write("<br>");

for(i = 0 ; i < 7 ; i++){
    for(k = i ; k < 7 ; k++){
        document.write("~");
    }
    for(j = i ; j >= 0 ; j--){
        document.write("🦴");
    }
    document.write("<br>");
}
document.write("<br>");
for(x = 1 ; x < 6 ; x++){
    for(i = 0 ; i < x ; i++){
        for(j = i ; j >= 0 ; j--){
            document.write("🦴");
        }
        document.write("<br>");
    }
    document.write("<br>");

}
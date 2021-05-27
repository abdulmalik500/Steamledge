
//if statement nested
if ((x === y || a === b) && c === d) {
    g = h;
}
else {
    e = f;
}

// another way to write this is 

if (c === d) {
    if (x === y) {
        g = h;
    }
    else if (a === b) {
        g = h;
    }
    else {
        e = f;
    }
}
else {
    e = f;
}

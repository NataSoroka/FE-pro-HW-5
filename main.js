var n = 20;
var m = 20;

var A = new Array(n);

for (var i = 0; i < A.length; i++) {
    A[i] = new Array(m);
}

for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random() * 10);
    }
}


for (i = 0; i < A.length; i++) {
    for (j = 0; j < A[i].length; j++) {
        document.write(A[i][j]);
        document.write(" ");
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<hr>");
document.write("<br>");

var center = Math.floor(A[0].length / 2),
    half = Math.floor(center / 2);

for (i = 0; i < A.length; i++) {
    for (j = 0; j < A[i].length; j++) {

        ///////////// Area A /////////////////

        if (i < center && j < center) {
            A[i][j] = "<span class=blue>A</span>";
        }

        //////////// Area B //////////////////

        if (i <= j && i >= center && j >= center) {
            A[i][j] = "<span class=red>B</span>";
        }

        ///////////// Area C /////////////////

        if (i > center - 1 + half && i > j) {
            A[i][j] = "<span class=green>C</span>";
        }
    }
}

for (i = 0; i < A.length; i++) {
    for (j = 0; j < A[i].length; j++) {
        document.write(A[i][j]);
        document.write(" ");
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<hr>");
document.write("<br>");

for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random() * 10);
    }
}

for (i = 0; i < A.length; i++) {
    for (j = 0; j < A[i].length; j++) {

        ///////////// Area D /////////////////

        if ((i >= j && j >= center) || (i <= center && j > half && j < center && i >= j)) {
            A[i][j] = "<span class=yellow>D</span>";
        }
    }
}

for (i = 0; i < A.length; i++) {
    for (j = 0; j < A[i].length; j++) {
        document.write(A[i][j]);
        document.write(" ");
    }
    document.write("<br>");
}

document.write("<br>");
document.write("<hr>");
document.write("<br>");

for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A[i].length; j++) {
        A[i][j] = Math.floor(Math.random() * 10);
    }
}

for (i = 0; i < A.length; i++) {
    for (j = 0; j < A[i].length; j++) {

        ///////////// HW#5 Area A /////////////////

        if (i + j >= A.length - 1 && i <= center + half && j >= center) {
            A[i][j] = "<span class=brown>A</span>"
        }

        /////////////////// Area B ////////////////

        if ((i + j <= A.length - 1 && j >= center + half) || (i <= half && j <= half) || (i >= half && i <= center && j >= half && j <= center) || (j <= half && i >= center && i <= center + half)) {
            A[i][j] = "<span class=margenta>B</span>"
        }

    }
}

for (i = 0; i < A.length; i++) {
    for (j = 0; j < A[i].length; j++) {
        document.write(A[i][j]);
        document.write(" ");
    }
    document.write("<br>");
}
//global variables
let r = prompt("How many rows for your multiplication table?");
let c = prompt("How many columns for your multiplication table?");

//check to ensure some value if entered if not hard code row and or/column to 10
if (r == "" || r == null)
    r = 10;
if (c == "" || c == null)
    c = 10;

//function to create tables based on user entered values
function createTable(r, c) {
    let j = 1
    let output = "<table border='1' width='250' cellspacing='0' cellpadding='3'>";
    for (i = 1; i <= r; i++) {
        output = output + "<tr>";
        while (j <= c) {
            output = output + "<td>" + i * j + "</td>";
            j = j + 1;
        }
        output = output + "</tr>";
        j = 1;
    }
    output = output + "</table>";
    document.write(output);
}

//invoke function
createTable(r, c);
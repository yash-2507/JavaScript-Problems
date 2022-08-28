var grade = 'B';
var result = 0;

switch (grade) {
    case 'A':
        result += 10;
    case 'B':
        result += 9;
        break;
    case 'C':
        result += 7;
    default:
        result += 1;
}

console.log(result);

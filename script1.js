function calculateAge(event) {
    // Prevent form from submitting
    event.preventDefault();

    // Get input values
    let d1 = parseInt(document.getElementById('day').value);
    let m1 = parseInt(document.getElementById('month').value);
    let y1 = parseInt(document.getElementById('year').value);
    let result = document.getElementById('result');

    // Get current date
    let date = new Date();
    let d2 = date.getDate();
    let m2 = 1 + date.getMonth(); // Months are zero-based in JavaScript
    let y2 = date.getFullYear();

    if (y1 > y2 || (y1 === y2 && m1 > m2) || (y1 === y2 && m1 === m2 && d1 > d2)) {
        result.innerHTML = 'You cannot put future information.';
        return;
    }


    // Check for future date
    if (y1 > y2 || (y1 === y2 && m1 > m2) || (y1 === y2 && m1 === m2 && d1 > d2)) {
        result.innerHTML = 'You cannot put future information.';
        return;
    }
    if (d1 < 1 || d1 > 31 || m1 < 1 || m1 > 12 || y1 < 1) {
        result.innerHTML = 'You are putting wrong date.';
        return;
    }
    
    // Array of days in each month
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Check for leap year
    if ((y2 % 4 == 0 && y2 % 100 != 0) || (y2 % 400 == 0)) {
        month[1] = 29;
    }

    function isValidDate(day, month, year) {
        // Array of days in each month
        let monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
        // Check for leap year and adjust February days
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            monthDays[1] = 29;
        }
    
        // Check if the day is valid for the given month and year
        if (month < 1 || month > 12 || day < 1 || day > monthDays[month - 1]) {
            return false;
        }
    
        return true;
    }
    

    // Adjust day and month for negative values
    if (d1 > d2) {
        d2 = d2 + month[m2 - 2];
        m2 = m2 - 1;
    }

    if (m1 > m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
if (d1<31) {
    result.innerHTML =`You cannot add wrong the date`;
    
}
    // Calculate age
    let d3 = d2 - d1;
    let m3 = m2 - m1;
    let y3 = y2 - y1;
    let totalResult =`You are `;
    if (y3>0) {
        totalResult+=`${y3} years`
    }
    if (m3>0) {
if(y3>0) {
  totalResult+=  `, `
}
        totalResult+=`${m3} months `
    }
    if (d3>0) {
        if (y3>0 || m3>0) {
            totalResult+=` and `
        }
        totalResult+=`${d3} days old.`
    }else{
        totalResult+=`old`
    }
    // Display result
    result.innerHTML =totalResult ;
}

function resetFields() {
    // Clear input fields
    document.getElementById('day').value = '';
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';
    document.getElementById('result').innerHTML = '';
}

// Add event listener to the form to handle the calculation on submit
document.getElementById('input-box').addEventListener('submit', calculateAge);

// Add event listener to the reset button to clear the input fields
document.getElementById('reset-btn').addEventListener('click', resetFields);

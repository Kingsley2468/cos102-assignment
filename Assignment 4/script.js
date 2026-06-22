// 1. The JSON string exactly as you provided it
let schoolData = '{" classA ":[\n{" name ":" Amara ", " CSC101 ":72 , " CSC102 ":55 , " CSC103 ":68} ,\n{" name ":" Chidi ", " CSC101 ":40 , " CSC102 ":48 , " CSC103 ":35} ,\n{" name ":" Ngozi ", " CSC101 ":85 , " CSC102 ":90 , " CSC103 ":78} ,\n{" name ":" Emeka ", " CSC101 ":60 , " CSC102 ":52 , " CSC103 ":44}] , \n" classB ":[\n{" name ":" Fatima ", " CSC101 ":91 , " CSC102 ":88 , " CSC103 ":95} ,\n{" name ":" Tunde ", " CSC101 ":30 , " CSC102 ":45 , " CSC103 ":50} ,\n{" name ":" Blessing " ," CSC101 ":77 , " CSC102 ":63 , " CSC103 ":70} ,\n{" name ":" Seun ", " CSC101 ":55 , " CSC102 ":49 , " CSC103 ":58}]} ';

// 2. Parse the string into an object
const parsedData = JSON.parse(schoolData);

// 3. Extract and combine the class arrays
const classA = parsedData[" classA "];
const classB = parsedData[" classB "];
const allStudents = [...classA, ...classB];

const PASS_MARK = 50;

function generateResultsTable() {
    const container = document.getElementById('table-container');

    // Build the table with a standard HTML border attribute
    let tableHTML = `
        <table border="1" style="border-collapse: collapse; width: 100%; max-width: 500px;">
            <thead>
                <tr>
                    <th style="padding: 8px; text-align: left;">Name</th>
                    <th style="padding: 8px; text-align: left;">Average</th>
                    <th style="padding: 8px; text-align: left;">Status</th>
                </tr>
            </thead>
            <tbody>
    `;

    // 4. Loop through all combined students
    allStudents.forEach(student => {
        // Calculate the score total and average across courses
        const totalScore = student[" CSC101 "] + student[" CSC102 "] + student[" CSC103 "];
        const average = totalScore / 3;

        // Determine Pass / Fail Status
        const statusText = average >= PASS_MARK ? "Pass" : "Fail";
        const studentName = student[" name "].trim();

        // Add standard row elements
        tableHTML += `
            <tr>
                <td style="padding: 8px;">${studentName}</td>
                <td style="padding: 8px;">${average.toFixed(1)}%</td>
                <td style="padding: 8px;">${statusText}</td>
            </tr>
        `;
    });

    tableHTML += `
            </tbody>
        </table>
    `;

    // 5. Inject complete HTML layout into target container
    container.innerHTML = tableHTML;
}

// Execute calculation map display runtime sequence
generateResultsTable();
const students = [
  {
    name: "Salmaan Ahmed",
    marks: 38,
    class: "3rd",
    address: "India",
  },
  {
    name: "Riya Sharma",
    marks: 85,
    class: "10th",
    address: "123, ABC Colony, Delhi",
  },
  {
    name: "Rohan Patel",
    marks: 70,
    class: "12th",
    address: "456, XYZ Street, Mumbai",
  },
  {
    name: "Priya Singh",
    marks: 95,
    class: "8th",
    address: "789, PQR Nagar, Bangalore",
  },
  {
    name: "Ankit Gupta",
    marks: 60,
    class: "9th",
    address: "101, LMN Road, Kolkata",
  },
  {
    name: "Neha Verma",
    marks: 80,
    class: "11th",
    address: "222, DEF Avenue, Chennai",
  },
  {
    name: "Manoj Kumar",
    marks: 75,
    class: "10th",
    address: "333, GHI Lane, Hyderabad",
  },
  {
    name: "Pooja Mishra",
    marks: 88,
    class: "12th",
    address: "444, STU Colony, Pune",
  },
  {
    name: "Rajesh Singhania",
    marks: 92,
    class: "9th",
    address: "555, VWX Street, Jaipur",
  },
];

const cardContainer = document.getElementById("cardContainer");
const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");

function renderStudents(list) {
  if (list.length === 0) {
    cardContainer.innerHTML = "<p>No students found.</p>";
    return;
  }

  cardContainer.innerHTML = list
    .map((student) => `
        <div class="card">
          <div>
            <span>
                Student Name:
            </span> 
            <strong>${student.name}</strong>
          </div>
          <div>
            <span>
            Marks:</span> <strong>${student.marks}%</strong>
          </div>
          <div>
            <span>Class:</span> <strong>${student.class}</strong>
          </div>
          <div>
            <span>Address:</span> <strong>${student.address}</strong>
          </div>
        </div>
      `,
    )
    .join("");
}

function searchStudents() {
  const query = searchBox.value.trim().toLowerCase();

  const filtered = students.filter((student) =>
    student.name.toLowerCase().includes(query),
  );

  renderStudents(filtered);
}

searchBox.addEventListener("input", searchStudents);
searchBtn.addEventListener("click", searchStudents);

renderStudents(students);

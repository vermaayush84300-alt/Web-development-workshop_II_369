import './App.css';
function studentCard() {
    return (
        <div className="container">
            <h1>Student Information</h1>
            <div className="card">
                <h2>Name: Ayush Kumar</h2>
                <p>course: Computer Science</p>
                <p>marks:97</p>
            </div>
            <div className="studentCard">
                <h2>Name: Sumit</h2>
                <p>course: Mathematics</p>
                <p>marks:95</p>
            </div>
            <div className="marksCard">
                <h2>Name: Rohan</h2>
                <p>Course: web develpment</p>
                <p>Marks: 94</p>
            </div>
        </div>
    );
}
export default studentCard
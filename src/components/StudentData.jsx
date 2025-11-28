import React from "react"

const StudentData = (data) => {
    return(
        <>
            <div className="student-card">
                <h2>Student Data</h2>
                <p>Data: { data.name }</p>
                <p>Age: { data.age }</p>
                <p>isStudent: { data.isStudent ? "Yes" : "No" }</p>
            </div>
        </>
    )
}

export default StudentData

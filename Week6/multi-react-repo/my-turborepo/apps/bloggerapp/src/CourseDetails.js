import React from "react";

function CourseDetails() {
  const courses = [
    { id: 1, name: "Photography Basics", duration: "4 weeks", mentor: "Sana" },
    { id: 2, name: "Creative Writing", duration: "6 weeks", mentor: "Vikram" },
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            {course.name} - {course.duration} (Mentor: {course.mentor})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;

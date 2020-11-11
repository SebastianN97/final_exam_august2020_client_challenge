import React from 'react'

const DisplayCourses = () => {



  return (
    <div>
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <p>{course.category}</p>
      <p>{course.instructors}</p>
      <p>{course.info}</p>
      <p>{course.price}</p>
    </div>
  )
}

export default DisplayCourses

function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
      return function() {
        return seat;
      };
    }
  
    const students = [];
  
    for (let i = 0; i < numbersOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    return students;
  }
  
  // Create the closure with 10 students
  const classRoom = createClassRoom(10);
  
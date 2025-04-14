function welcomeMessage(fullName) {
    return function() {
      alert("Welcome " + fullName);
    };
  }
  
  // Create the closures
  const guillaume = welcomeMessage("Guillaume");
  const alex = welcomeMessage("Alex");
  const fred = welcomeMessage("Fred");
  
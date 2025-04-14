class studentHogwarts {
    #privateScore = 0;
    #name = null;
  
    // Private method
    #changeScoreBy(points) {
      this.#privateScore += points;
    }
  
    // Public methods
    setName(newName) {
      this.#name = newName;
    }
  
    rewardStudent() {
      this.#changeScoreBy(1);
    }
  
    penalizeStudent() {
      this.#changeScoreBy(-1);
    }
  
    getScore() {
      return `${this.#name}: ${this.#privateScore}`;
    }
  }
  
  // Create Harry
  const harry = new studentHogwarts();
  harry.setName('Harry');
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore()); // Harry: 4
  
  // Create Draco
  const draco = new studentHogwarts();
  draco.setName('Draco');
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  console.log(draco.getScore()); // Draco: -2
  
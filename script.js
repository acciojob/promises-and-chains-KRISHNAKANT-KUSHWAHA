document.getElementById("voteForm").addEventListener("submit", function (event) {
  event.preventDefault(); // stop form from refreshing

  const age = document.getElementById("age").value.trim();
  const name = document.getElementById("name").value.trim();

  // Validation
  if (!age || !name) {
    alert("Please enter valid details.");
    return;
  }

  // Create promise
  const checkVotingEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4 second delay
  });

  // Handle promise
  checkVotingEligibility
    .then((message) => alert(message))
    .catch((error) => alert(error));
});

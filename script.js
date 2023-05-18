var randomSpeakers = [];

var randomColleges = [];

var time = ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday"];

async function produceResults() {
  document.getElementById("table-body").innerHTML = "";
  let zipCode = document.getElementById("zipCodeInput").value;
  if (zipCode.length == 5) {
    fetch("http://localhost:3000/getData")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        var speakers = data.speakers;
        var colleges = data.colleges;
        console.log(speakers.length, colleges.length);
        randomColleges = [];
        randomSpeakers = [];

        for (let i = 0; i < 5; i++) {
          var index1 = Math.floor(Math.random() * speakers.length);
          randomSpeakers.push(speakers[index1].name);
          speakers.splice(index1, 1);
        }

        for (let i = 0; i < 5; i++) {
          var index2 = Math.floor(Math.random() * colleges.length);
          randomColleges.push(colleges[index2].name);
          colleges.splice(index2, 1);
        }

        for (let i = 0; i < 5; i++) {
          document.getElementById("table-body").innerHTML += `<tr>
      <td>${randomSpeakers[i]}</td>
      <td>${time[i]}</td>
      <td>${randomColleges[i]}</td>
      </tr>`;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    alert("Insert Correct Zip Code");
  }
}

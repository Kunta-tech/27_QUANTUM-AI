
let fetchedHTML = ["<div class=\"container\"><div class=\"question\">","</div><p>","</p><p><b>Review: </b>","</div>"];
function question(q,a,r) {
    const newQues = fetchedHTML[0] + q + fetchedHTML[1] + a + fetchedHTML[2] + r + fetchedHTML[3]
    console.log(newQues)
    document.getElementById('questions').innerHTML += newQues
}

fetch('/static/50-out.json')
  .then(response => {
    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    // Parse JSON response
    return response.json();
  })
  .then(data => {
    processdata(data)
    console.log("json loaded!")
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch
    console.error('There was a problem with the fetch operation:', error);
  });

function processdata(data){
    data.slice(0, 5).forEach(element => {
        question(element.question_number + ') ' + element.Question, element.Answer, element.Review)
    });
}
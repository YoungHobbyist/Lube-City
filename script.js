/*
    LUBE CITY NFC LANDING PAGE

    Put your links below.
*/


const REVIEW_URL =
  "https://shorturl.at/tcxbW";

const SURVEY_URL =
  "https://take.supersurvey.com/Q8NGAF0TL";


const reviewButton =
  document.getElementById("reviewButton");

const surveyButton =
  document.getElementById("surveyButton");

const reviewStep =
  document.getElementById("review-step");

const surveyStep =
  document.getElementById("survey-step");

const alreadyReviewed =
  document.getElementById("alreadyReviewed");


/*
    Set the buttons to your links.
*/

reviewButton.href = REVIEW_URL;
surveyButton.href = SURVEY_URL;


/*
    Remember that the customer clicked
    the Google Review button.
*/

reviewButton.addEventListener("click", () => {

  sessionStorage.setItem(
    "reviewClicked",
    "true"
  );

});


/*
    Show the survey when they return
    to this page.
*/

function showSurveyStep() {

  reviewStep.classList.add("hidden");

  surveyStep.classList.remove("hidden");

  alreadyReviewed.classList.add("hidden");

}


/*
    If they already clicked the review
    button during this session, show survey.
*/

if (
  sessionStorage.getItem("reviewClicked")
  === "true"
) {

  showSurveyStep();

}


/*
    Allows someone who already reviewed
    to skip directly to the survey.
*/

alreadyReviewed.addEventListener(
  "click",
  showSurveyStep
);
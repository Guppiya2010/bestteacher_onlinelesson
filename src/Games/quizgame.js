import logo from './logo.svg';
import intodisney from './Disney_Trivia/intro.jpeg'

function Quizgame() {

  /* --------------- Query Selectors --------------- */

let quiz = document.querySelector("#quiz");
let intro = document.querySelector("#introduction");
let assesFT = document.querySelector("#assess-ft");
let progressBar = document.querySelector(".progress");
let startBtn = document.getElementById("#startBtn");
let timeSpan = document.querySelector("#timeSpan");
let questionH5 = document.querySelector("#question");
let answersDiv = document.querySelector("#answers");
let allDone = document.querySelector("#allDone");
let finalScore = document.querySelector("#finalScore");
let audioCorrect = document.querySelector("#audioCorrect");
let audioIncorrect = document.querySelector("#audioIncorrect");
let audioApplause = document.querySelector("#audioApplause");
let audioTollingBell = document.querySelector("#audioTollingBell");
let audioThunder = document.querySelector("#audioThunder");
let submit = document.querySelector("#submit");
let highScoresList = document.querySelector("#highScoresList");
let initials = document.querySelector("#initials");
let clearHighscoresBtn = document.querySelector("#clearHighscoresBtn");
let image_area = document.querySelector("#image_area");

/* --------------- Quiz Array --------------- */
// startBtn.addEventListener("click", startQuiz);
// answersDiv.addEventListener("click", assesSelection);
// submit.addEventListener("click", addToHighscores);
// clearHighscoresBtn.addEventListener("click", clearHighscores);
// Questions based on: laffgaff "DISNEY TRIVIA QUESTIONS AND ANSWERS": https://laffgaff.com/disney-trivia-questions-answers/
let quizArray = [
  {
    question:
      "In The Jungle Book who teaches Mowgli about The Bare Necesseties of life?",
    options: ["Baloo", "Shere Khan", "Kaa", "King Louie", "Bagheera"],
    correct: 0,
    image: "./assets/Disney_Trivia/jungle_book.jpeg",
  },
  {
    question: "Cruella de Vil is the villain in which Disney movie?",
    options: [
      "101 Dalmatians",
      "The Little Mermaid",
      "Mulan",
      "The Lion King",
      "Aladdin",
      "Hercules",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/101_dalmatas.jpeg",
  },
  {
    question:
      "What is the name of the boy who owns Buzz Lightyear in the movie Toy Story?",
    options: [
      "Andy",
      "Jessie",
      "Forkie",
      "Sheriff Woody",
      "Sid",
      "Bonnie",
      "Ryan",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/toy_story.jpeg",
  },
  {
    question: "Which Disney princess has a raccoon as a sidekick?",
    options: [
      "Pocahontas",
      "Ariel",
      "Jasmine",
      "Belle",
      "Merida",
      "Rapunzel",
      "Cinderella",
      "Snow White",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/princesses.jpeg",
  },
  {
    question:
      "In the movie Frozen, which song does Elsa sing as she builds the castle?",
    options: [
      "Let It Go",
      "A Whole New World",
      "Part Of Your World",
      "Colors Of the Wind",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/frozen.jpeg",
  },
  {
    question:
      "In the movie Finding Nemo, which country has Nemo been taken to?",
    options: [
      "Australia",
      "Mexico",
      "United States",
      "China",
      "Japan",
      "Sweden",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/nemo.jpeg",
  },
  {
    question: "What is the name of Bambi’s rabbit friend?",
    options: ["Thumper", "Faline", "Flower", "Friend Owl"],
    correct: 0,
    image: "./assets/Disney_Trivia/bambi.jpeg",
  },
  {
    question: "What does the crocodile swallow in Peter Pan?",
    options: ["A clock", "A bottle", "A coin", "A bracelet"],
    correct: 0,
    image: "./assets/Disney_Trivia/peter_pan.jpeg",
  },
  {
    question:
      "In Peter Pan, did Captain Hook have a hook for his left hand or his right hand?",
    options: ["His left hand", "His right hand"],
    correct: 0,
    image: "./assets/Disney_Trivia/peter_pan.jpeg",
  },
  {
    question:
      "In the movie Dumbo, what type of animal were Dandy Fat Glasses Preacher and Straw Hat??",
    options: ["Crows", "Eagles", "Cats", "Horses", "Dogs"],
    correct: 0,
    image: "./assets/Disney_Trivia/dumbo.jpeg",
  },
  {
    question: "What is the name of Donald Duck’s sister?",
    options: ["Dumbella", "Daisy", "Louie"],
    correct: 0,
    image: "./assets/Disney_Trivia/donald_duck.jpeg",
  },
  {
    question: "What does Cinderella’s fairy godmother turn into a carriage?",
    options: ["A pumpkin", "A cake", "A watermelon", "An apple"],
    correct: 0,
    image: "./assets/Disney_Trivia/cinderella.jpeg",
  },
  {
    question:
      "Which was the first Disney movie to receive an Oscar nomination for Best Picture?",
    options: [
      "Beauty and the Beast",
      "Tron",
      "Pinocchio",
      "Lady and the Tramp",
      "Treasure Planet",
      "Robin Hood",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/disney_movies.jpeg",
  },
  {
    question: "What type of animal does Jasmine have for a pet in Aladdin?",
    options: ["A tiger", "A pig", "A cat", "A hampster"],
    correct: 0,
    image: "./assets/Disney_Trivia/aladdin.jpeg",
  },
  {
    question: "What is the name of The Lion King?",
    options: [
      "Simba",
      "Scar",
      "Nala",
      "Mufasa",
      "Zazu",
      "Timon",
      "Pumbaa",
      "Sarabi",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/lion_king.jpeg",
  },
  {
    question: "What type of animal is Bernard in The Rescuers?",
    options: ["A mouse", "A cat", "A dog", "A horse", "An eagle"],
    correct: 0,
    image: "./assets/Disney_Trivia/rescuers.jpeg",
  },
  {
    question: "The song “You Can Fly” is from which Disney movie?",
    options: [
      "Peter Pan",
      "Robin Hood",
      "Lolo & Stitch",
      "The Aristocats",
      "Cinderella",
      "Mulan",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/disney_movies.jpeg",
  },
  {
    question: "What color are Mickey Mouse’s shorts?",
    options: ["Red", "Green", "Blue", "Yellow"],
    correct: 0,
    image: "./assets/Disney_Trivia/mickey_mouse.jpeg",
  },
  {
    question: "What is the wizard’s name in the movie The Sword in the Stone?",
    options: ["Merlin", "Arthur", "Archimedes", "Sir Kay"],
    correct: 0,
    image: "./assets/Disney_Trivia/sword_stone.jpeg",
  },
  {
    question: "What does Dumbo use to fly?",
    options: ["A feather", "A hat", "A botle", "A lamp"],
    correct: 0,
    image: "./assets/Disney_Trivia/dumbo.jpeg",
  },
  {
    question:
      "Which was the first full-length animated movie to be released by Disney?",
    options: [
      "Snow White and the Seven Dwarfs",
      "The Lottle Mermaid",
      "Mickey Mouse",
      "Donald Duck",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/disney_movies.jpeg",
  },
  {
    question: "In which city is the Disney movie Ratatouille based?",
    options: ["Paris", "Tokio", "Brussels", "Tallinn", "New York"],
    correct: 0,
    image: "./assets/Disney_Trivia/ratatouille.jpeg",
  },
  {
    question: "Scar is a villain in which Disney movie?",
    options: ["The Lion King", "Beauty and the Best", "Hercules", "Aladdin"],
    correct: 0,
    image: "./assets/Disney_Trivia/disney_movies.jpeg",
  },
  {
    question: "What is Cinderella’s slipper made of?",
    options: ["Glass", "Plastic", "Rubber", "leather", "Wood"],
    correct: 0,
    image: "./assets/Disney_Trivia/cinderella.jpeg",
  },
  {
    question: "In The Jungle Book, what kind of animal is Shere Khan?",
    options: [
      "A tiger",
      "A panda",
      "A snake",
      "A cocodrile",
      "A hipo",
      "A panther",
    ],
    correct: 0,
    image: "./assets/Disney_Trivia/jungle_book.jpeg",
  },
];


/* ------- Global Variable Declarations ------- */

let totalSeconds = 0;
let timeRemining = totalSeconds;
let secondsElapsed = 0;
let discountSeconds = 0;
let currentQuestion = 0;
let progress = 0;
let correctAnswers = 0;
let correctScore = 0;
var localHighscoresArray = [];
let time = setInterval(timer, 1000);
let justRegistered = false;
clearInterval(time);


function timer() {
  timeRemining = totalSeconds + secondsElapsed + 1 ;
  timeSpan.textContent = timeRemining;
  secondsElapsed++;
  // if (timeRemining <= 0) {
  //   clearInterval(time);
  //   disableQuestions();
  //   gameOver("time_out");
  // }
}



function startQuiz() {
  intro.style.display = "none";
  startBtn.style.display = "none";
  quiz.style.display = "block";
  time = setInterval(timer, 1000);
  progressBar.style.display = "block";
  showQuestion();
}
function showQuestion() {
  questionH5.textContent = quizArray[currentQuestion].question;
  var optionsBtnsArray = [];
  var indexArray = [];
  var image = document.createElement("img");
  image.setAttribute("src", quizArray[currentQuestion].image);
  image.setAttribute("class", "movie-image rounded");
  image_area.append(image);

  for (let i = 0; i < quizArray[currentQuestion].options.length; i++) {
    var questionBtn = document.createElement("button");
    questionBtn.setAttribute("type", "button");
    questionBtn.setAttribute(
      "class",
      "list-group-item list-group-item-action list-group-item-info mt-1 answerButton"
    );
    questionBtn.setAttribute("data-index", i);
    if (i === 0) {
      questionBtn.setAttribute("correct", "yes");
    } else {
      questionBtn.setAttribute("correct", "no");
    }
    questionBtn.textContent = quizArray[currentQuestion].options[i];
    answersDiv.append(questionBtn);
    indexArray.push(i);
  }

  answersDiv.childNodes.forEach(function (child) {
    var rndIndex = Math.floor(Math.random() * indexArray.length);
    answersDiv.append(answersDiv.children[rndIndex]);
    indexArray.splice(rndIndex, 1);
  });
}
  return (
   <div>
 
  <title>Document</title>
  {/* Container */}
  <div className="container">
    {/* Header */}
    <header className="col text-center p-4">
      <h2>Disney Movies Quiz</h2>
    </header>
    {/* /Header */}
    {/* Highscores Modal */}
    <section className="modal fade" id="staticBackdrop" data-backdrop="static" tabIndex={-1} role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title" id="staticBackdropLabel">
              Highscores
            </h2>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <ul className="list-group" id="highScoresList" />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary" id="clearHighscoresBtn">
              Clear Highscores
            </button>
          </div>
        </div>
      </div>
    </section>
    {/* /Highscores Modal */}
    {/* The Main Card */}
    <section className="card">
      {/* Card Header */}
      <section className="card-header pt-0 pb-0">
        <div className="row row-cols-2">
          <div className="col">
            {/* Button trigger modal */}
            <a style={{textDecoration: 'none'}} id="viewHighscores" data-toggle="modal" data-target="#staticBackdrop" href="#">View Highscores</a>
          </div>
          <div className="col text-right">
            <p className="mb-0" id="timeP">
              Available Time <strong><span id="timeSpan" /></strong>
            </p>
          </div>
        </div>
      </section>
      {/* /Card Header */}
      {/* Card Body */}
      <section className="card-body">
        {/* Quiz Introduction */}
        <section className="card bg-dark text-white" id="introduction">
          <img src={intodisney} className="card-img" alt="disney" id="intro-disney-img" />
          <div className="card-img-overlay text-center mt-3">
            <h3 className="card-title">Welcome!!</h3>
            <p className="card-text">
              Try to answer the following code-related questions within the
              time limit.
            </p>
            <p className="card-text">
              Keep in mind that incorrect answers will penalize your time by 3
              seconds.
            </p>
          </div>
        </section>
        <a href="#" className="btn btn-primary" id="startBtn">Start Quiz</a>
        {/* /Quiz Introduction */}
        {/* Quiz */}
        <section id="quiz">
          <h5 id="question">Question 1 xxx xxxx xxx xxx xxx xxx</h5>
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col">
              <div className="list-group mb-4" id="answers" />
            </div>
            <div className="col">
              <div id="image_area" />
            </div>
          </div>
        </section>
        {/* /Quiz */}
        {/* All Done */}
        <section id="allDone">
          <div className="alert alert-success mt-0 mb-0">
            <h4 className="alert-heading">All Done!</h4>
            <hr />
            <h5 className="mb-0">Final score <span id="finalScore">xx</span></h5>
            <hr />
            <form className="form-inline">
              <input className="form-control mr-2" type="text" id="initials" placeholder="Enter your initials" />
              <button type="submit" className="btn btn-info" id="submit">
                Submit
              </button>
            </form>
          </div>
        </section>
        {/* /All Done */}
      </section>
      {/* /Card Body */}
      {/* Card Footer */}
      <div className="card-footer text-muted p-0">
        <div className="progress" style={{height: '100%'}}>
          <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" style={{width: '0%', height: '100%'}} />
        </div>
        <div className="alert alert-success mt-0 mb-0 pt-0 pb-0" id="assess-ft">
          <strong />
        </div>
      </div>
      {/* /Card Footer */}
    </section>
    {/* /The Main Card */}
  </div>
  {/* / Container */}
  {/* Audio */}
  <audio id="audioCorrect">
    <source src="./assets/audios/Air Plane Ding-SoundBible.com-496729130.mp3" type="audio/mpeg" />
  </audio>
  <audio id="audioIncorrect">
    <source src="./assets/audios/Computer Error Alert-SoundBible.com-783113881.mp3" type="audio/mpeg" />
  </audio>
  <audio id="audioApplause">
    <source src="./assets/audios/SMALL_CROWD_APPLAUSE-Yannick_Lemieux-1268806408.mp3" type="audio/mpeg" />
  </audio>
  <audio id="audioTollingBell">
    <source src="./assets/audios/tolling-bell_daniel-simion.mp3" type="audio/mpeg" />
  </audio>
  <audio id="audioThunder">
    <source src="./assets/audios/Thunder-Mike_Koenig-315681025.mp3" type="audio/mpeg" />
  </audio>
  {/* jQuery */}
  {/* Popper */}
  {/* Bootstrap */}
  {/* Main JavaScript */}
</div>


  );
}

export default Quizgame;

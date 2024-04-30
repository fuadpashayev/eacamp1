// Timing functions

// setInterval() - davamli
// setTimeout() - 1 defelik

// A -> Server <- B

//  - Web Socket - korpu uzerinde data alish verishi
//  - Short polling - qisa zamanli sorgular (mes: 1 saniyeden bir )

const convertTextToSeconds = (secondsText = "02:13") => {
  const [minutes, seconds] = secondsText.split(":");

  return parseInt(minutes) * 60 + parseInt(seconds);
};

const convertSecondsToText = (secondsNumber) => {
  const minutes = Math.floor(secondsNumber / 60) + "";
  const seconds = secondsNumber - minutes * 60 + "";

  return `${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)}`;
};

const calculatePercentage = (startTime, currentTime) => {
  return (currentTime / startTime) * 100;
};

const timerContainer = document.getElementById("timer");
const progressContainer = document.querySelector("#progress div");

let seconds = convertTextToSeconds(timerContainer.textContent);
let startSeconds = seconds;

const timerHandler = function () {
  seconds--;
  if (seconds <= 0) {
    clearInterval(timer);
    console.log("vaxt bitdi");
  }
  timerContainer.textContent = convertSecondsToText(seconds);
  progressContainer.style.width = `${calculatePercentage(
    startSeconds,
    seconds
  )}%`;
};

const timer = setInterval(timerHandler, 1000);

const timer2 = setTimeout(() => {
  console.log("testing...");
}, 2500);

clearTimeout(timer2);

// throttle

// debouncing
let searchTimer = null;
document.getElementById("search-container").addEventListener("input", (e) => {
  clearTimeout(searchTimer);

  searchTimer = setTimeout(() => {
    console.log(e.target.value);
    //fetch
  }, 750);
});


interface News {
    newsList;

    getNews();
}

interface CommonNews extends News {
    
}

interface SportNews extends News {
    sportNewsList;

    getSportNewsList();
}

class Aztv extends CommonNews {
   newsList = [];
   sportNewsList = [];

   getNews() {
    this.newsList = [1,2,3];
   }
}

class Spacetv extends CommonNews {
    newsList = [];

    getNews() {

    }
}

class CBCSport extends SportNews {
    newsList = [];
    sportNewsList = [];

    getNews() {

    }

    getSportNewsList() {

    }
}


// SOLID - OOP principles

// Single Responsibility
// Open (for extension) - close (for modification)
// Liskov's subsititon
// Interface segregation
// Dependency inversion

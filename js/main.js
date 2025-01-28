/*!
 * Copyright © 2025 KeyQuake by Mina Anis. All rights reserved.
 */

const typingTexts = [
    "Typing is an essential skill in the modern world. It allows people to communicate faster and more effectively. Practicing regularly can greatly improve your accuracy and speed. The quick brown fox jumps over the lazy dog. This sentence contains all the letters of the English alphabet. Consistency and patience are key to mastering typing skills. Remember to keep your hands on the home row keys for better control. With time and effort, you can type faster without looking at the keyboard. Stay focused and avoid unnecessary breaks while practicing. Good posture also plays a vital role in comfortable typing. Improving these skills can make both personal and professional communication more efficient.",

    "Technology has transformed the way we live and work. Computers, smartphones, and the internet have connected people across the globe. Information is now more accessible than ever before. Learning to type efficiently can boost productivity and confidence. Each keystroke matters when working with precision. Fast typists often find themselves better suited for data entry and creative writing tasks. Speed and accuracy go hand in hand. A well-structured practice routine can help you improve both. Remember to take breaks to avoid strain on your wrists. Keep challenging yourself with longer texts for better results. Mastering typing can open doors to various career paths and personal growth opportunities.",

    "Reading and writing are fundamental skills that shape our learning journey. Typing bridges the gap between thinking and expressing ideas digitally. From essays to code, everything benefits from faster input. Great authors often credit their success to writing discipline. Typing tests can help you measure progress over time. Set goals to increase both speed and accuracy. The brain processes words faster than the hands can type, so practice matters. Stay relaxed while typing to reduce errors. Make typing practice a daily habit for consistent improvement. Your skills will grow with persistence, helping you become more effective in both personal and professional tasks.",

    "Music and language share rhythmic patterns that make them easier to learn. Typing speed improves when you find a steady rhythm. The fingers dance on the keys as words flow effortlessly. Developing muscle memory takes time and patience. Keyboards are designed with efficiency in mind. The QWERTY layout balances speed and comfort. Practicing different sentence structures can boost flexibility. Learning shortcuts can also enhance productivity. Speed is not just about racing but maintaining control. Aim for accuracy first, then focus on increasing speed. Mastering rhythm and flow in typing can make complex tasks feel more natural and intuitive.",

    "History is full of great inventors who changed the world. Each breakthrough began with curiosity and persistence. Writing helps preserve ideas for future generations. Typing transforms handwritten notes into digital formats instantly. The printing press revolutionized the way knowledge was shared. Today, typing plays a similar role in global communication. Words have the power to inspire and educate. Practicing typing is like sharpening a tool for expression. Remember, even small improvements make a big difference. Keep pushing your limits and track your progress. Consistent practice can help you become a more confident and effective communicator.",

    "Nature has always inspired creativity and wonder. The colors of a sunset, the sound of waves, and the scent of flowers evoke powerful emotions. Observing the natural world can spark ideas for art, music, and writing. Every season brings its own beauty, from autumn leaves to spring blossoms. Taking a walk outside can clear the mind and boost focus. Nature teaches us patience as plants grow steadily over time. Appreciating the small details can lead to a greater sense of calm. Even a gentle breeze can remind us to slow down. Spend time outdoors and reconnect with the world around you. The beauty of nature is all around us, waiting to be explored and appreciated.",

    "Healthy habits can transform your life. Drinking enough water keeps your body hydrated and energized. Regular exercise strengthens the heart and muscles. A balanced diet fuels both the body and mind. Quality sleep allows the brain to recharge and process information. Reducing screen time can improve focus and mental clarity. Staying organized helps reduce stress and improves productivity. Exploring new hobbies can boost creativity and joy. Setting small goals makes it easier to build lasting habits. Remember, progress takes time and patience. A healthier lifestyle starts with consistent, positive choices. Committing to healthy habits can lead to long-term wellness and productivity.",

    "The power of storytelling connects people across cultures and generations. Ancient myths and legends shaped the beliefs of early civilizations. Stories teach lessons, share wisdom, and inspire change. From classic novels to modern films, storytelling continues to evolve. Great stories often explore themes of courage, love, and resilience. The most memorable tales create emotional connections with the audience. Whether written, spoken, or visual, stories have the power to influence minds. Sharing personal stories can build empathy and understanding. Every culture has its own rich history of storytelling. Embrace the art of storytelling as a way to share your voice and connect with others in meaningful ways.",

    "The universe is vast and filled with mysteries waiting to be uncovered. Galaxies stretch across unimaginable distances. Stars are born, burn brightly, and eventually fade. Black holes, though invisible, hold incredible power. Scientists continue to explore the secrets of space through telescopes and satellites. The moon has inspired poetry and scientific discovery alike. Space travel has expanded our understanding of the cosmos. Each new discovery reveals the complexity and beauty of the universe. Curiosity drives humanity to keep exploring the unknown. The universe reminds us of how small yet significant we are. Keep asking questions, for the answers could change the way we see the world and inspire future explorations.",

    "Learning a new language opens doors to endless possibilities. It allows you to connect with people from different backgrounds. Mastering a language takes time, practice, and persistence. Each word learned brings you closer to fluency. Listening to native speakers can improve pronunciation and comprehension. Practicing daily helps build confidence in conversation. Mistakes are a natural part of the learning process. The more you immerse yourself, the faster you will improve. Language learning also enhances cognitive skills and memory. Embrace the challenge, and celebrate every step of progress. Language opens new horizons for both personal and professional growth.",

    "Creativity fuels the human spirit, allowing people to express ideas in unique ways. Whether through painting, writing, music, or coding, creativity enriches life. Creative projects often lead to personal growth and self-discovery. Exploring new forms of expression can unlock hidden talents. Encouraging curiosity and exploration helps creativity flourish. Taking breaks can also reignite inspiration. Collaborating with others fosters diverse perspectives. Creative thinking can solve complex problems in innovative ways. Challenge yourself to think outside the box and push your creative boundaries.",

    "Teamwork is the backbone of successful projects. Collaborating with others encourages idea-sharing and enhances productivity. Effective communication is key to avoiding misunderstandings. Teams often achieve more together than individuals alone. Embracing diversity of thought leads to better solutions. Clear goals and shared responsibilities keep projects on track. Trust and accountability build stronger working relationships. Celebrating achievements together strengthens morale. Working in a team teaches valuable skills for both professional and personal growth."
];

let startBtn = document.querySelector(".start-btn");
let testContainer = document.querySelector(".test-container");
let inputText = document.querySelector(".input-text");
let testText = document.querySelector(".test p");
let timerContainer = document.querySelector(".timer");
let timer = document.querySelector(".timer span");
let resBtn = document.querySelector(".res-btn");
let typedTextTitle = document.querySelector(".typed-title");
let startOver = document.querySelector(".test-results .actions button");
let navLinks = document.querySelector("header ul").children;
let homeContent = document.querySelector("main .home");
let trackerContent = document.querySelector("main .tracker");
let resultsHistBtn = document.querySelector("[value='Results History'");
let firstkey = false;
let KPM = 0, skippedLetters = 0;
let currectTab = sessionStorage.getItem("activeTab") != null ? sessionStorage.getItem("activeTab") : 0;

getCurrentTab();
getResultsHistory();

navLinks[0].addEventListener("click", () => {
    homeTab();
});

navLinks[1].addEventListener("click", () => {
    trackerTab();
});

startBtn.addEventListener("click", function () {
    this.classList.add("remove-btn");
    this.onanimationend = function () {
        this.classList.add("hidden")
        testContainer.classList.remove("hidden");
        testContainer.classList.add("test-down");

        setTimeout(() => {
            testContainer.classList.remove("test-down");
        }, 300);

        startTest();
    }
});

startOver.addEventListener("click", function () {
    location.reload();
});

inputText.addEventListener('keydown', function (event) {
    if (!firstkey) {
        firstkey = true;
        KPM = 0;
        countDown();
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'ArrowUp' || event.key === 'ArrowDown') {
        event.preventDefault();
    }

    KPM++;
});

resBtn.addEventListener("click", () => {
    let activeLetter = document.querySelector(".letter.active") ?? document.querySelector(".letter.active-last");

    activeLetter.classList.remove("active", "active-last");
    resBtn.classList.add("disappear");

    let promise = new Promise((resolve) => {
        setTimeout(() => {
            resBtn.classList.add("hidden");

            testContainer.classList.remove("blur");

            resolve();
        }, 400);
    });

    promise.then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                timerContainer.classList.add("disappear");
                resolve();
            }, 400);
        });
    }).then(() => {
        return new Promise(resolve => {
            setTimeout(() => {
                timerContainer.classList.add("timer-hidden");
                testContainer.classList.add("result");
                testContainer.children[1].classList.add("result");
                typedTextTitle.classList.remove("hidden");
                typedTextTitle.classList.add("top-to-bottom");
                resolve();
            }, 500);
        }).then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    timerContainer.classList.add("hidden");
                    timerContainer.classList.remove("timer-hidden");
                    typedTextTitle.classList.remove("top-to-bottom");
                    getCompletedWords();
                    resolve();
                }, 500);
            });
        }).then(() => {
            let testRes = document.querySelector(".test-results");

            calculateMetrics();
            setTimeout(() => {
                testRes.classList.remove("hidden");
                testRes.classList.add("bottom-to-top");

                setTimeout(() => {
                    testRes.classList.remove("bottom-to-top");
                }, 500);
            }, 500);


        });
    });
});

resultsHistBtn.addEventListener("click", trackerTab);

document.querySelector(".tracker .clear-records").addEventListener("click", () => {
    localStorage.clear();
    getResultsHistory();
});

document.querySelector(".copyright-year").innerHTML = new Date().getFullYear();


document.addEventListener("click", (event) => {
    if (event.target.className == "delete-btn") {
        let id = event.target.parentElement.id;
        let resultsHistory = JSON.parse(localStorage.getItem("resultsHistory"));

        event.target.parentElement.remove();
        resultsHistory.splice(resultsHistory.length - id, 1);

        localStorage.setItem("resultsHistory", JSON.stringify(resultsHistory));

        if (resultsHistory.length == 0) {
            document.querySelector(".tracker .data-container").classList.add("hidden");
            document.querySelector(".tracker .no-data").classList.remove("hidden");
        }
    }
});


document.querySelector(".tracker .action button").addEventListener("click", () => {
    location.reload();
    homeTab();
});

function startTest() {
    generateTestText();

    inputText.focus();

    let word = 0, letter = 0, typos = 0;
    let wordElement = testText.children[word];
    let letterElement = wordElement.children[letter];


    inputText.addEventListener("input", function (event) {
        if (event.inputType === 'deleteContentBackward') {

            if (letterElement.classList.contains("active-last")) {
                if (letterElement.classList.contains("wrong")) typos--;

                letterElement.className = "letter active";
            }
            else if (letter > 0) {
                letterElement.className = "letter";
                letter--;
                letterElement = wordElement.children[letter];

                if (letterElement.classList.contains("wrong")) typos--;

                letterElement.className = "letter active";
            }
        }
        else if (event.inputType === 'deleteWordBackward') {
            while (letter > 0) {
                wordElement.children[letter].className = "letter";
                letter--;
            }

            letterElement = wordElement.children[letter]
            letterElement.className = "letter active";
            typos = 0;
        }
        else if (event.data === ' ') {
            if (!letterElement.classList.contains("active-last")) {
                wordElement.classList.add("wrong-space");
                typos++;
            };

            increamentLetter(newWord = true);

            typos = 0;
        }
        else {
            if (letterElement.innerText === inputText.value.at(-1)) {
                letterElement.classList.add("correct");
            }
            else if (!letterElement.classList.contains("wrong")) {
                letterElement.classList.add("wrong");
                typos++;
            }

            increamentLetter();
        }
    });

    function increamentLetter(newWord = false) {
        if (newWord && word < testText.children.length - 1) {
            let firstWordOffset = wordElement.offsetTop,
                secondWordOfsset;

            let skipped = wordElement.children.length - letter;
            if (skipped > 1) {
                skippedLetters += skipped;
            }
            else if (skipped == 1 && !wordElement.children[letter].classList.contains("active-last")) {
                skippedLetters += skipped;
            }

            wordElement.classList.add("completed");

            letterElement.classList.remove("active-last", "active");

            if (typos > 0) wordElement.classList.add("typo");

            word++;
            letter = 0;
            wordElement = testText.children[word];
            letterElement = wordElement.children[letter];
            inputText.value = '';
            letterElement.classList.add("active");

            secondWordOfsset = wordElement.offsetTop;

            if (secondWordOfsset > firstWordOffset) testText.scrollTop += secondWordOfsset - firstWordOffset;
        }
        else {
            wordElement.children[letter].classList.remove("active");
            if (letter < wordElement.children.length - 1) {
                letter++;
                letterElement = wordElement.children[letter];
                wordElement.children[letter].classList.add("active");
            }
            else {
                wordElement.children[letter].classList.add("active-last");
            }
        }
    }
}

function generateTestText() {
    let selectedText = typingTexts[Math.floor(Math.random() * typingTexts.length)];
    let firstLetter = true;

    selectedText = selectedText.split(' ');

    selectedText.forEach(word => {
        let wordDiv = document.createElement("span");
        wordDiv.className = "word";

        word = word.split('');

        word.forEach(letter => {
            let letterElement = document.createElement("span");

            if (firstLetter) {
                letterElement.className = "letter active";
                firstLetter = false;
            }
            else {
                letterElement.className = "letter";
            }
            letterElement.innerText = letter;
            wordDiv.append(letterElement);
        });

        testText.append(wordDiv);
    });
}

function countDown() {
    let counter = 60;
    let timerInterval = setInterval(function () {
        timer.innerHTML = `${--counter}`.length < 2 ? "0" + counter : counter;

        if (counter == 0) {
            inputText.setAttribute("disabled", "true");

            clearInterval(timerInterval);

            let promise = new Promise((resolve) => {
                setTimeout(() => {
                    testContainer.classList.add("blur");
                    resolve();
                }, 1000);
            });

            promise.then(() => {
                setTimeout(() => {
                    resBtn.classList.remove("hidden");
                }, 300);
            });
        };
    }, 1000);
}

function getCompletedWords() {
    let completedWords = Array.from(document.querySelectorAll(".word.completed"));

    if (completedWords.length === 0) {
        let firstLetter = testText.children[0].children[0]

        if (firstLetter.classList.contains("correct") || firstLetter.classList.contains("wrong")) {
            let word = testText.children[0];
            testText.innerHTML = '';
            testText.append(word);
        }
        else {
            testText.innerHTML = "No words was typed!";
        }
    }
    else {
        let nextWord = completedWords.at(-1).nextElementSibling;

        if (nextWord != null && (nextWord.children[0].classList.contains("correct") || nextWord.children[0].classList.contains("wrong"))) {
            completedWords.push(nextWord);
        }

        testText.innerHTML = '';

        completedWords.forEach((word) => {
            testText.append(word);
        });
    }
}

function calculateMetrics() {
    let correctLetters = document.querySelectorAll(".letter.correct").length;
    let wrongLetters = document.querySelectorAll(".letter.wrong").length;
    let allSpaces = document.querySelectorAll(".word.completed").length;
    let wrongSpaces = document.querySelectorAll(".word.wrong-space").length;
    let correctSpaces = allSpaces - wrongSpaces;
    let wpm = document.querySelector(".wpm");
    let accuracy = document.querySelector(".accuracy");
    let kpm = document.querySelector(".kpm");
    let errorRate = document.querySelector(".error-rate");
    let corrLet = document.querySelector(".correct-letters");
    let wrongLet = document.querySelector(".wrong-letters");
    let corrSp = document.querySelector(".correct-spaces");
    let wrongSp = document.querySelector(".wrong-spaces");
    let skpdL = document.querySelector(".skipped-letters");
    let wpmScore, accuracyScore;

    wpmScore = Math.round((correctLetters + wrongLetters + allSpaces) / 5);
    wpm.children[0].children[0].innerText = wpmScore;

    if (wpmScore < 40) {
        wpm.setAttribute("data-category", "novice");
    }
    else if (wpmScore < 60) {
        wpm.setAttribute("data-category", "typist");
    }
    else {
        wpm.setAttribute("data-category", "keyboard-master");
    }

    accuracyScore = (((correctLetters + correctSpaces) / (correctLetters + wrongLetters + allSpaces + skippedLetters)) * 100).toFixed(1);

    if (isNaN(accuracyScore)) accuracyScore = 0;

    accuracy.children[0].children[0].innerText = accuracyScore.length == 5 ? accuracyScore.slice(0, -2) + "%" : accuracyScore + "%";;

    document.documentElement.style.setProperty("--progress", accuracyScore + "%");

    if (accuracyScore < 80) {
        accuracy.setAttribute("data-category", "novice");
    }
    else if (accuracyScore < 95) {
        accuracy.setAttribute("data-category", "typist");
    }
    else {
        accuracy.setAttribute("data-category", "keyboard-master");
    }

    kpm.innerText = KPM;

    let errorScore = ((wrongLetters + wrongSpaces + skippedLetters) / (correctLetters + wrongLetters + allSpaces + skippedLetters)) * 100;

    if (isNaN(errorScore)) errorScore = 0;

    errorRate.innerText = (errorScore).toFixed(1) + "%";
    corrLet.innerText = correctLetters;
    wrongLet.innerText = wrongLetters
    corrSp.innerText = correctSpaces;
    wrongSp.innerText = wrongSpaces;
    skpdL.innerText = skippedLetters;

    let resultsHistory = JSON.parse(localStorage.getItem("resultsHistory")) ?? [];
    let id = resultsHistory.length == 0 ? 1 : resultsHistory[0].id + 1;
    let results = {
        id: id,
        date: new Date().toLocaleString(),
        wpm: wpmScore,
        accuracy: accuracyScore + "%",
        errorRate: (errorScore).toFixed(1) + "%",
        kpm: KPM,
        correctLetters: correctLetters,
        correctSpaces: correctSpaces,
        wrongLetters: wrongLetters,
        wrongSpaces: wrongSpaces
    };

    resultsHistory.unshift(results);
    localStorage.setItem("resultsHistory", JSON.stringify(resultsHistory));

    getResultsHistory();
}

function getCurrentTab() {
    if (currectTab == 0) {
        homeContent.classList.remove("hidden");
        navLinks[0].classList.add("active");
    }
    else {
        trackerContent.classList.remove("hidden");
        navLinks[1].classList.add("active");
    }
}

function trackerTab() {
    if (currectTab != 1) {
        navLinks[currectTab].classList.remove("active");
        navLinks[1].classList.add("active");
        currectTab = 1;
        sessionStorage.setItem("activeTab", currectTab);

        homeContent.classList.remove("from-right");
        trackerContent.classList.remove("to-left");
        homeContent.classList.add("to-right");

        setTimeout(() => {
            homeContent.classList.add("hidden");
            trackerContent.classList.remove("hidden");
            trackerContent.classList.add("from-left");
        }, 500);
    }
}

function homeTab() {
    if (currectTab != 0) {
        navLinks[currectTab].classList.remove("active");
        navLinks[0].classList.add("active");
        currectTab = 0;
        sessionStorage.setItem("activeTab", currectTab);

        trackerContent.classList.add("to-left");

        setTimeout(() => {
            trackerContent.classList.add("hidden");
            homeContent.classList.add("from-right");
            homeContent.classList.remove("to-right", "hidden");
            setTimeout(() => {
                inputText.focus();
            }, 510);
        }, 500);
    }
}

function getResultsHistory() {
    let dataContainer = document.querySelector(".tracker .data-container");
    let noDataParagraph = document.querySelector(".tracker .no-data");
    let tBody = document.querySelector(".tracker tbody");
    let resultsHistory = JSON.parse(localStorage.getItem("resultsHistory")) ?? [];

    if (resultsHistory.length == 0) {
        dataContainer.classList.add("hidden");
        noDataParagraph.classList.remove("hidden");
    }
    else {
        noDataParagraph.classList.add("hidden");
        dataContainer.classList.remove("hidden");

        tBody.innerHTML = '';

        resultsHistory.forEach((entry) => {
            let tRow = document.createElement("tr");
            let dateCell = document.createElement("td");
            let wpmCell = document.createElement("td");
            let accCell = document.createElement("td");
            let errorCell = document.createElement("td");
            let kpmCell = document.createElement("td");
            let corrLCell = document.createElement("td");
            let corrSCell = document.createElement("td");
            let wrongLCell = document.createElement("td");
            let wrongSCell = document.createElement("td");
            let delCell = document.createElement("td");

            tRow.id = entry.id;
            dateCell.innerText = entry.date;
            wpmCell.innerText = entry.wpm;
            accCell.innerText = entry.accuracy;
            errorCell.innerText = entry.errorRate;
            kpmCell.innerText = entry.kpm;
            corrLCell.innerText = entry.correctLetters;
            corrSCell.innerText = entry.correctSpaces;
            wrongLCell.innerText = entry.wrongLetters;
            wrongSCell.innerText = entry.wrongSpaces;
            delCell.innerText = "Delete";
            delCell.className = "delete-btn";

            tRow.append(dateCell, wpmCell, accCell, errorCell, kpmCell, corrLCell, corrSCell, wrongLCell, wrongSCell, delCell);
            tBody.append(tRow);
        });
    }
}
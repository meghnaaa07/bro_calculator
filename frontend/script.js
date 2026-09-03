// ========================================
// BRO CALCULATOR™
// FRONTEND ENGINE
// ========================================


// ========================================
// STATE
// ========================================

let selectedCategory = "basic";
let isCalculating = false;
let currentExplanation = "";


// ========================================
// DOM
// ========================================

const expressionInput =
    document.getElementById("expression");

const resultPanel =
    document.getElementById("resultPanel");

const resultLabel =
    document.getElementById("resultLabel");

const answer =
    document.getElementById("answer");

const broMessage =
    document.getElementById("broMessage");

const confidence =
    document.getElementById("confidence");

const difficulty =
    document.getElementById("difficulty");

const aura =
    document.getElementById("aura");

const explanation =
    document.getElementById("explanation");

const explainButton =
    document.getElementById("explainButton");

const vibeMode =
    document.getElementById("vibeMode");

const calculateButton =
    document.getElementById("calculateButton");

const glitchStatus =
    document.getElementById("glitchStatus");


// ========================================
// CATEGORY BUTTONS
// ========================================

document
    .querySelectorAll(".category")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".category")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            selectedCategory =
                button.dataset.category;

            updateSuggestions();
        });
    });


// ========================================
// KEYPAD
// ========================================

function add(value) {

    expressionInput.value += value;

    expressionInput.focus();
}


function setExpression(value) {

    expressionInput.value = value;

    expressionInput.focus();
}


function clearInput() {

    expressionInput.value = "";

    resultPanel.classList.remove("visible");

    explanation.classList.remove("visible");

    hideGlitchStatus();

    currentExplanation = "";
}


// ========================================
// ENTER KEY
// ========================================

expressionInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter" &&
            !isCalculating
        ) {

            calculate();
        }
    }
);


// ========================================
// SLEEP
// ========================================

function sleep(ms) {

    return new Promise(
        resolve => setTimeout(resolve, ms)
    );
}


// ========================================
// THINKING MESSAGES
// ========================================

const thinkingMessages = [

    "Consulting the bro council...",

    "Checking the vibes...",

    "Doing absolutely necessary calculations...",

    "Asking mathematics for permission...",

    "Running advanced bro algorithms...",

    "Calculating with suspicious confidence...",

    "Looking for the nearest answer...",

    "Downloading intelligence...",

    "Checking if numbers are real...",

    "Applying emotional mathematics..."
];


function randomThinkingMessage() {

    return thinkingMessages[
        Math.floor(
            Math.random() *
            thinkingMessages.length
        )
    ];
}


// ========================================
// FAKE THINKING
// ========================================

async function fakeThinking() {

    const iterations =
        4 +
        Math.floor(Math.random() * 3);


    for (
        let i = 0;
        i < iterations;
        i++
    ) {

        resultLabel.innerText =
            randomThinkingMessage();

        await sleep(
            400 +
            Math.random() * 500
        );
    }
}


// ========================================
// CALCULATE
// ========================================

async function calculate() {

    if (isCalculating) {
        return;
    }


    const expression =
        expressionInput.value.trim();


    if (!expression) {

        showResult(
            "BRO NEEDS AN EQUATION.",
            "Type something first."
        );

        return;
    }


    isCalculating = true;

    calculateButton.disabled = true;


    // ========================================
    // RESET UI
    // ========================================

    resultPanel.classList.add("visible");

    explanation.classList.remove("visible");

    hideGlitchStatus();

    resultLabel.innerText =
        "BRO IS COOKING";

    answer.innerText =
        "···";

    broMessage.innerText =
        "Please remain mathematically calm.";

    confidence.innerText =
        "--";

    difficulty.innerText =
        "--";

    aura.innerText =
        "--";


    // ========================================
    // THINK
    // ========================================

    await fakeThinking();


    try {

        const response =
            await fetch("/api/calculate", {

                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({

                    expression,

                    category:
                        selectedCategory,

                    vibeMode:
                        vibeMode.checked
                })
            });


        const data =
            await response.json();


        // ========================================
        // REFUSAL
        // ========================================

        if (data.vibeFail) {

            resultLabel.innerText =
                "BRO REFUSES";

            answer.innerText =
                "NOPE.";

            broMessage.innerText =
                data.bro.message;

            confidence.innerText =
                "0%";

            difficulty.innerText =
                "∞";

            aura.innerText =
                "-999";

            hideGlitchStatus();

            currentExplanation = "";

            isCalculating = false;

            calculateButton.disabled = false;

            return;
        }


        // ========================================
        // ERROR
        // ========================================

        if (!data.success) {

            resultLabel.innerText =
                "CALCULATION FAILED";

            answer.innerText =
                "ERROR";

            broMessage.innerText =
                data.error ||
                "Bro has encountered mathematics.";

            confidence.innerText =
                "0%";

            difficulty.innerText =
                "???";

            aura.innerText =
                "-999";

            hideGlitchStatus();

            currentExplanation = "";

            isCalculating = false;

            calculateButton.disabled = false;

            return;
        }


        // ========================================
        // DISPLAY INITIAL RESULT
        // ========================================

        resultLabel.innerText =
            data.bro.wasWrong
                ? "THE ANSWER™ ⚠"
                : "THE ANSWER™";

        answer.innerText =
            formatResult(data.result);

        broMessage.innerText =
            data.bro.message;

        confidence.innerText =
            `${data.bro.confidence}%`;

        difficulty.innerText =
            `${data.bro.difficulty}%`;

        aura.innerText =
            formatAura(data.bro.aura);

        currentExplanation =
            data.bro.explanation || "";


        // ========================================
        // GLITCH
        // ========================================

        if (
            data.glitch &&
            data.glitchResult !== null
        ) {

            await performGlitch(data);
        }


    } catch (error) {

        console.error(error);


        resultLabel.innerText =
            "BROKEN";

        answer.innerText =
            "💀";

        broMessage.innerText =
            "The server has left the chat.";

        confidence.innerText =
            "0%";

        difficulty.innerText =
            "???";

        aura.innerText =
            "-999";

        hideGlitchStatus();

        currentExplanation = "";

    } finally {

        isCalculating = false;

        calculateButton.disabled = false;
    }
}


// ========================================
// VISIBLE GLITCH
// ========================================

async function performGlitch(data) {

    // Let the user see the initial answer
    await sleep(850);


    // ========================================
    // WARNING
    // ========================================

    showGlitchStatus(
        "⚡ SIGNAL CORRUPTION DETECTED"
    );


    resultLabel.innerText =
        "CALCULATION SIGNAL LOST";


    // Add glitch class

    answer.classList.add("glitching");

    resultPanel.classList.add(
        "system-glitch"
    );


    // ========================================
    // RAPID CORRUPTION
    // ========================================

    const corruptionFrames = [
        "#@!%",
        "ERROR",
        "??",
        "0x69",
        "####",
        "NULL",
        "BRO",
        "4.20",
        "69",
        "???"
    ];


    for (
        let i = 0;
        i < 10;
        i++
    ) {

        answer.innerText =
            corruptionFrames[
                Math.floor(
                    Math.random() *
                    corruptionFrames.length
                )
            ];


        await sleep(
            60 +
            Math.random() * 90
        );
    }


    // ========================================
    // BLACKOUT
    // ========================================

    answer.innerText =
        "█ █ █";

    await sleep(180);


    // ========================================
    // CORRUPTED ANSWER
    // ========================================

    answer.innerText =
        formatResult(
            data.glitchResult
        );


    resultLabel.innerText =
        "THE ANSWER™ // CORRUPTED";


    broMessage.innerText =
        data.glitchBro.message;


    confidence.innerText =
        `${data.glitchBro.confidence}%`;


    difficulty.innerText =
        `${data.glitchBro.difficulty}%`;


    aura.innerText =
        formatAura(
            data.glitchBro.aura
        );


    currentExplanation =
        data.glitchBro.explanation || "";


    // ========================================
    // FINISH GLITCH
    // ========================================

    await sleep(250);


    answer.classList.remove(
        "glitching"
    );

    resultPanel.classList.remove(
        "system-glitch"
    );


    showGlitchStatus(
        "⚠ RESULT CORRUPTED — BRO STANDS BY IT"
    );
}


// ========================================
// GLITCH STATUS
// ========================================

function showGlitchStatus(message) {

    if (!glitchStatus) {
        return;
    }

    glitchStatus.innerText = message;

    glitchStatus.classList.add("active");
}


function hideGlitchStatus() {

    if (!glitchStatus) {
        return;
    }

    glitchStatus.innerText = "";

    glitchStatus.classList.remove("active");
}


// ========================================
// FORMAT RESULT
// ========================================

function formatResult(value) {

    if (
        typeof value === "string"
    ) {

        return value;
    }


    if (
        typeof value !== "number"
    ) {

        return String(value);
    }


    if (
        !Number.isFinite(value)
    ) {

        return "∞";
    }


    if (
        Number.isInteger(value)
    ) {

        return value.toLocaleString();
    }


    return Number(
        value.toFixed(10)
    ).toString();
}


// ========================================
// FORMAT AURA
// ========================================

function formatAura(value) {

    if (
        typeof value !== "number"
    ) {

        return String(value);
    }


    if (
        value > 0
    ) {

        return `+${value}`;
    }


    return String(value);
}


// ========================================
// SHOW RESULT
// ========================================

function showResult(label, message) {

    resultPanel.classList.add("visible");

    resultLabel.innerText =
        label;

    answer.innerText =
        "???";

    broMessage.innerText =
        message;
}


// ========================================
// EXPLANATION
// ========================================

if (explainButton) {

    explainButton.addEventListener(
        "click",
        () => {

            explanation.classList.toggle(
                "visible"
            );

            if (
                explanation.classList.contains(
                    "visible"
                )
            ) {

                explanation.innerHTML =
                    currentExplanation ||
                    "Bro has no explanation.";
            }
        }
    );
}


// ========================================
// SUGGESTIONS
// ========================================

function updateSuggestions() {

    const suggestions =
        document.querySelector(
            ".suggestions"
        );

    if (!suggestions) {
        return;
    }


    const examples = {

        basic: [
            "2 + 2",
            "15 * 7",
            "sqrt(144)",
            "100 / 4"
        ],

        trig: [
            "sin(pi / 2)",
            "cos(0)",
            "tan(pi / 4)",
            "sin(pi)"
        ],

        algebra: [
            "simplify((x+2)^2)",
            "simplify(x^2 + 2*x + 1)",
            "simplify((x+1)*(x-1))"
        ],

        calculus: [
            "derivative(x^2, x)",
            "derivative(sin(x), x)",
            "derivative(x^3 + 2*x, x)"
        ],

        matrix: [
            "[1,2;3,4]",
            "det([1,2;3,4])",
            "transpose([1,2;3,4])"
        ],

        stats: [
            "mean([1,2,3,4,5])",
            "median([1,2,8,10])",
            "std([2,4,6,8])"
        ]
    };


    const selected =
        examples[selectedCategory] ||
        examples.basic;


    suggestions.innerHTML =
        selected
            .map(
                item =>
                    `<button onclick="setExpression('${item.replace(/'/g, "\\'")}')">${item}</button>`
            )
            .join("");
}


// ========================================
// INITIALIZE
// ========================================

updateSuggestions();
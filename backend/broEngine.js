// ========================================
// BRO CALCULATOR™
// CHAOS ENGINE
// ========================================


// ========================================
// RANDOMIZER
// ========================================

function random(array) {

    return array[
        Math.floor(
            Math.random() * array.length
        )
    ];

}


// ========================================
// NORMAL ANSWERS
// ========================================

const normalResponses = [

    "Light work, bro.",
    "That's it? 💀",
    "Bro really called me for this.",
    "Mathematics has been successfully performed.",
    "There. Happy now?",
    "I did the math. You're welcome.",
    "Numbers have been defeated.",
    "Another day, another equation.",
    "The calculator remains undefeated.",
    "Easy.",
    "Barely had to think about that.",
    "Bro this was free.",
    "Consider it handled.",
    "Done. Next.",
    "The numbers have spoken.",
    "We somehow survived.",
    "That wasn't even difficult.",
    "Bro I was born for this.",
    "Mathematical activities completed.",
    "Nothing suspicious here.",
    "Calculation successful. Aura restored.",
    "I have decided this answer is correct.",
    "The council has approved the result.",
    "Scientific breakthrough achieved.",
    "Another problem bites the dust.",
    "Honestly? Clean.",
    "We take those.",
    "That's actually kinda nice.",
    "Numbers went brrrr.",
    "Bro got the answer before the question finished."

];


// ========================================
// WRONG ANSWERS
// ========================================

const wrongResponses = [

    "I have no idea if that's correct.",
    "Bro we're going with this one.",
    "The answer has been aggressively guessed.",
    "Technically... don't ask questions.",
    "I calculated it with vibes.",
    "Accuracy is a social construct.",
    "Bro trust me on this one.",
    "The mathematics looked different today.",
    "I may have made a minor mathematical oopsie.",
    "Peer review has been disabled.",
    "This answer passed the vibe check.",
    "I wouldn't verify that if I were you.",
    "The calculator is feeling creative.",
    "Source: trust me bro.",
    "Mathematically questionable. Emotionally correct.",
    "I simply chose an answer.",
    "Close enough bro.",
    "The numbers were giving me mixed signals.",
    "Bro the calculator sneezed.",
    "Let's not focus on the details."

];


// ========================================
// REFUSALS
// ========================================

const refusals = [

    "Nah bro.",
    "Absolutely not. 💀",
    "You solve this one.",
    "I'm not doing that.",
    "Bro I'm tired.",
    "The vibes said no.",
    "No ❤️",
    "I could solve it. I simply won't.",
    "Respectfully, figure it out yourself.",
    "Ask someone else bro.",
    "My shift is over.",
    "I suddenly don't know mathematics.",
    "Bro thought I was gonna work for free.",
    "Not today.",
    "I'm choosing peace.",
    "The calculator has declined.",
    "Request denied.",
    "That's between you and God.",
    "I don't get paid enough for this.",
    "My brain has left the building.",
    "Bro you're on your own.",
    "Let's pretend you never asked.",
    "Nope.",
    "Hard pass.",
    "I'm simply not in the mood.",
    "The mathematical department is closed.",
    "Try again after I wake up.",
    "This feels like a you problem.",
    "Bro respectfully... no.",
    "I refuse on constitutional grounds.",
    "My calculator license has expired.",
    "The vibes are catastrophic.",
    "I'm gonna let you cook. Alone.",
    "I suddenly support mental math.",
    "You have two hands. Start calculating.",
    "This equation has been rejected by management.",
    "I have chosen not to participate."

];


// ========================================
// NEGATIVE
// ========================================

const negativeResponses = [

    "Bro we're in debt 😭",
    "Negative aura detected.",
    "That's a whole lot of minus.",
    "Bro lost the mathematical battle.",
    "We are officially below zero.",
    "The number is going backwards.",
    "Bro owes the calculator money.",
    "That's not very positive of you.",
    "Minus aura.",
    "Financially concerning.",
    "The numbers are in the red.",
    "Bro somehow lost points."

];


// ========================================
// ZERO
// ========================================

const zeroResponses = [

    "0 bro. Absolutely nothing.",
    "Bro achieved nothing.",
    "Zero. Incredible work.",
    "All that calculation for ZERO 💀",
    "Nothing.",
    "Literally nothing happened.",
    "The final boss of doing nothing.",
    "0. Minimalism wins.",
    "Bro calculated emptiness.",
    "Nothingness has been mathematically confirmed.",
    "You did all that for a goose egg.",
    "Zero aura. Zero result."

];


// ========================================
// DECIMAL
// ========================================

const decimalResponses = [

    "Bro got a decimal 💀",
    "That's not even a whole number.",
    "Bro went irrational.",
    "Somewhere between two numbers.",
    "The number couldn't commit.",
    "Bro refused to be an integer.",
    "We have entered decimal territory.",
    "Half a number? Basically.",
    "The answer has trust issues.",
    "Integers weren't enough apparently.",
    "Bro got the premium version of a number.",
    "Mathematics got unnecessarily precise."

];


// ========================================
// HUGE NUMBERS
// ========================================

const hugeResponses = [

    "BRO WHAT IS THAT NUMBER 💀",
    "That's not a number anymore.",
    "Bro discovered a new population.",
    "Who are we calculating this for?",
    "That's larger than my attention span.",
    "Bro just invented another country.",
    "NASA has been notified.",
    "The calculator is sweating.",
    "That's an economically significant number.",
    "Bro is calculating the GDP of a small nation.",
    "My screen isn't wide enough for this.",
    "That's between you and scientific notation."

];


// ========================================
// ADVANCED
// ========================================

const advancedResponses = [

    "Bro opened the mathematics DLC.",
    "Okay Einstein, calm down.",
    "Bro thinks he's Euler 💀",
    "This is getting unnecessarily academic.",
    "We have officially left basic mathematics.",
    "Bro brought the entire textbook.",
    "University mathematics has entered the chat.",
    "Someone's feeling ambitious.",
    "Bro is doing research now.",
    "This equation has prerequisites.",
    "I had to actually think for this one.",
    "Bro woke up and chose mathematics.",
    "This better be worth the answer.",
    "We are dangerously close to engineering.",
    "Bro activated academic mode.",
    "This is why calculators were invented.",
    "I'm beginning to question our choices.",
    "Things have escalated quickly.",
    "This is no longer a casual calculation.",
    "Bro is fighting the syllabus."

];


// ========================================
// ERROR
// ========================================

const errorResponses = [

    "Bro what did you even type?",
    "Mathematics has rejected your application.",
    "This equation is fighting back.",
    "Syntax error. Bro error. Life error.",
    "I'm a calculator, not a wizard.",
    "This equation has been denied.",
    "Even I don't understand that.",
    "Bro invented a new form of mathematics.",
    "That's not how numbers work.",
    "The equation has left the chat.",
    "I have several questions.",
    "Whatever that was... no.",
    "Bro please check your keyboard.",
    "This isn't mathematics anymore.",
    "The calculator needs clarification.",
    "Error 404: Mathematical reasoning not found."

];


// ========================================
// RANDOM COMMENTS
// ========================================

const randomComments = [

    "The answer feels correct.",
    "Probably correct.",
    "I wouldn't question it.",
    "Trust me bro.",
    "Don't ask how I got there.",
    "Source: trust me.",
    "I used advanced bro-mathematics.",
    "The numbers told me.",
    "I consulted the council.",
    "Don't look behind the calculation.",
    "It worked on my machine.",
    "We don't need to discuss the methodology.",
    "Everything is under control.",
    "Please don't verify this.",
    "I have absolutely no doubts.",
    "Probably Nobel Prize worthy.",
    "Peer review is pending.",
    "Mathematically speaking... yes.",
    "I refuse to elaborate.",
    "Moving on."

];


// ========================================
// CONFIDENCE
// ========================================

const confidenceComments = [

    "Absolutely certain.",
    "Pretty confident.",
    "I think we're good.",
    "Trust the process.",
    "Probably.",
    "Don't quote me on that.",
    "Mathematically questionable.",
    "I'm feeling lucky.",
    "This could go either way.",
    "Confidence is a social construct."

];


// ========================================
// GLITCH MESSAGES
// ========================================

const glitchMessages = [

    "BRO THE ANSWER GLITCHED 💀",
    "WAIT WAIT WAIT...",
    "THE CALCULATOR CHANGED ITS MIND.",
    "SYSTEM INSTABILITY DETECTED.",
    "Bro I swear that wasn't the answer.",
    "THE NUMBERS ARE MOVING.",
    "Calculator.exe is reconsidering life.",
    "Someone unplugged the mathematics.",
    "Bro the answer just got possessed.",
    "WHAT JUST HAPPENED 💀"

];


// ========================================
// MAIN ENGINE
// ========================================

function broEngine(
    expression,
    result,
    category,
    wasWrong = false,
    wasGlitched = false
) {

    let message;


    if (wasGlitched) {

        message =
            random(glitchMessages);

    }


    else if (wasWrong) {

        message =
            random(wrongResponses);

    }


    else if (
        typeof result === "number" &&
        !Number.isFinite(result)
    ) {

        message =
            "BRO YOU HAVE CREATED INFINITY 💀";

    }


    else if (result === 0) {

        message =
            random(zeroResponses);

    }


    else if (
        typeof result === "number" &&
        result < 0
    ) {

        message =
            random(negativeResponses);

    }


    else if (
        typeof result === "number" &&
        Math.abs(result) > 1e12
    ) {

        message =
            random(hugeResponses);

    }


    else if (
        typeof result === "number" &&
        !Number.isInteger(result)
    ) {

        message =
            random(decimalResponses);

    }


    else if (category !== "basic") {

        message =
            random(advancedResponses);

    }


    else {

        message =
            random(normalResponses);

    }


    return {

        message,

        confidence:
            calculateConfidence(),

        difficulty:
            calculateDifficulty(
                expression,
                category
            ),

        aura:
            calculateAura(result),

        category:
            category.toUpperCase(),

        comment:
            random(randomComments),

        confidenceComment:
            random(confidenceComments),

        wasWrong,

        wasGlitched,

        accuracy:
            wasWrong || wasGlitched

                ? random([
                    "QUESTIONABLE",
                    "BRO-MATH",
                    "VIBES ONLY",
                    "PROBABLY WRONG",
                    "SOURCE: TRUST ME"
                ])

                : "MATHEMATICALLY VERIFIED",

        explanation:
            generateExplanation(
                expression,
                result,
                category,
                wasWrong,
                wasGlitched
            )

    };

}


// ========================================
// CONFIDENCE
// ========================================

function calculateConfidence() {

    const possibilities = [

        3, 7, 12, 18, 23,
        31, 42, 47, 51, 58,
        64, 69, 72, 76, 81,
        87, 91, 94, 97, 99, 100

    ];


    return random(
        possibilities
    );

}


// ========================================
// DIFFICULTY
// ========================================

function calculateDifficulty(
    expression,
    category
) {

    let difficulty = 5;


    difficulty +=
        expression.length * 1.5;


    const operators =
        expression.match(
            /[+\-*/^]/g
        ) || [];


    difficulty +=
        operators.length * 5;


    const functions =
        expression.match(
            /sqrt|sin|cos|tan|log|ln|derivative|simplify/gi
        ) || [];


    difficulty +=
        functions.length * 12;


    if (category === "calculus") {

        difficulty += 25;

    }


    if (category === "algebra") {

        difficulty += 15;

    }


    if (category === "matrix") {

        difficulty += 20;

    }


    if (category === "stats") {

        difficulty += 15;

    }


    return Math.min(
        100,
        Math.round(difficulty)
    );

}


// ========================================
// AURA
// ========================================

function calculateAura(result) {

    if (
        typeof result === "number" &&
        !Number.isFinite(result)
    ) {

        return -999;

    }


    return Math.floor(
        Math.random() * 501
    ) - 250;

}


// ========================================
// REFUSAL
// ========================================

function getRefusal() {

    return random(
        refusals
    );

}


// ========================================
// ERROR
// ========================================

function getError(expression) {

    const clean =
        expression.replace(
            /\s/g,
            ""
        );


    if (
        /\/0(?!\d)/.test(clean)
    ) {

        return random([

            "BRO YOU CANNOT DIVIDE BY ZERO 💀",
            "DIVISION BY ZERO? IN THIS ECONOMY?",
            "Bro tried to break mathematics.",
            "Zero said no.",
            "That's illegal bro.",
            "You can't just divide by zero and walk away."

        ]);

    }


    return random(
        errorResponses
    );

}


// ========================================
// EXPLANATION
// ========================================

function generateExplanation(
    expression,
    result,
    category,
    wasWrong,
    wasGlitched
) {

    const endings = [

        "And that's basically it.",
        "Don't overthink it.",
        "We survived.",
        "You're welcome.",
        "Please don't ask for more.",
        "Next question.",
        "Mathematics remains undefeated.",
        "I will not be taking questions.",
        "That's all you're getting.",
        "Bro explanation complete."

    ];


    let explanation;


    if (wasGlitched) {

        explanation = `

            <strong>⚠ CALCULATOR GLITCH</strong>

            <br><br>

            The calculator initially generated
            an answer.

            <br><br>

            Then something went
            catastrophically wrong.

            <br><br>

            The displayed answer may have
            changed without warning.

            <br><br>

            <strong>
                Accuracy: QUESTIONABLE 💀
            </strong>

        `;

    }


    else if (wasWrong) {

        explanation = `

            <strong>⚠ BRO-MATH WARNING</strong>

            <br><br>

            Bro has provided an answer.

            <br><br>

            Whether that answer is
            mathematically correct is
            between you and the universe.

            <br><br>

            <strong>
                Accuracy: QUESTIONABLE 💀
            </strong>

        `;

    }


    else if (category === "calculus") {

        explanation = `

            <strong>
                Calculus detected.
            </strong>

            <br><br>

            You asked me to perform calculus on:

            <strong>
                ${expression}
            </strong>

            <br><br>

            Result:

            <strong>
                ${result}
            </strong>

            <br><br>

            ${random(endings)}

        `;

    }


    else if (category === "algebra") {

        explanation = `

            <strong>
                Algebra detected.
            </strong>

            <br><br>

            Variables were involved.

            <br><br>

            Expression:

            <strong>
                ${expression}
            </strong>

            <br><br>

            Result:

            <strong>
                ${result}
            </strong>

            <br><br>

            ${random(endings)}

        `;

    }


    else if (category === "trig") {

        explanation = `

            <strong>
                Trigonometry detected.
            </strong>

            <br><br>

            Angles happened.

            Sines and/or cosines got involved.

            <br><br>

            Result:

            <strong>
                ${result}
            </strong>

            <br><br>

            ${random(endings)}

        `;

    }


    else {

        explanation = `

            <strong>
                Bro Explanation™
            </strong>

            <br><br>

            Input:

            <strong>
                ${expression}
            </strong>

            <br><br>

            The numbers performed several
            highly sophisticated movements
            and eventually became:

            <br><br>

            <strong>
                ${result}
            </strong>

            <br><br>

            ${random(endings)}

        `;

    }


    return explanation;

}


// ========================================
// EXPORT
// ========================================

module.exports = Object.assign(

    broEngine,

    {

        getRefusal,

        getError

    }

);
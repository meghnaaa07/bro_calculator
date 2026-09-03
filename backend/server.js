// ========================================
// BRO CALCULATOR™
// SERVER
// ========================================

const express = require("express");
const cors = require("cors");
const path = require("path");
const math = require("mathjs");
const broEngine = require("./broEngine");

const app = express();

const PORT = 3000;


// ========================================
// CHAOS SETTINGS™
// ========================================

// Refusal
const REFUSAL_CHANCE = 0.15;

// Immediately wrong
const WRONG_ANSWER_CHANCE = 0.55;

// Visible glitch
const GLITCH_CHANCE = 0.50;


// ========================================
// MIDDLEWARE
// ========================================

app.use(cors());
app.use(express.json());


// ========================================
// FRONTEND
// ========================================

const frontendPath = path.join(__dirname, "../frontend");

app.use(express.static(frontendPath));

app.get("/", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
});


// ========================================
// API STATUS
// ========================================

app.get("/api", (req, res) => {
    res.json({
        success: true,
        message: "BRO CALCULATOR™ IS ALIVE",
        accuracy: "questionable"
    });
});


// ========================================
// RANDOM NUMBER
// ========================================

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


// ========================================
// CREATE WRONG ANSWER
// ========================================

function createWrongAnswer(result) {

    let wrong;

    const method = Math.floor(Math.random() * 7);

    switch (method) {

        case 0:
            wrong = result + randomNumber(-10, 10);
            break;

        case 1:
            wrong = result + randomNumber(-50, 50);
            break;

        case 2:
            wrong = result * randomNumber(0.4, 1.6);
            break;

        case 3:
            wrong = result + randomNumber(-100, 100);
            break;

        case 4:
            wrong = result * randomNumber(0.5, 1.5);
            break;

        case 5:
            wrong = result * randomNumber(0.1, 3);
            break;

        default:
            wrong = result === 0
                ? 69
                : result * randomNumber(0.25, 2.5);

            break;
    }


    // Make sure the answer is actually different

    if (
        wrong === result ||
        !Number.isFinite(wrong)
    ) {

        if (result === 0) {

            wrong = 69;

        } else {

            wrong =
                result +
                Math.max(
                    1,
                    Math.abs(result) * 0.05
                );
        }
    }


    // Prevent -0

    if (Object.is(wrong, -0)) {
        wrong = 0;
    }


    return Number(wrong.toFixed(8));
}


// ========================================
// CALCULATE
// ========================================

app.post("/api/calculate", async (req, res) => {

    const {
        expression,
        category = "basic",
        vibeMode = true
    } = req.body;


    // ========================================
    // VALIDATION
    // ========================================

    if (
        typeof expression !== "string" ||
        !expression.trim()
    ) {

        return res.status(400).json({
            success: false,
            error: "No expression provided."
        });
    }


    const cleanExpression = expression.trim();


    // ========================================
    // REFUSAL
    // ========================================

    // This is completely random.
    // Difficulty does NOT affect it.

    if (
        vibeMode &&
        Math.random() < REFUSAL_CHANCE
    ) {

        return res.json({

            success: true,

            vibeFail: true,

            expression: cleanExpression,

            category,

            bro: {
                message: broEngine.getRefusal(),
                confidence: 0,
                difficulty: 100,
                aura: -999,
                category: String(category).toUpperCase()
            }
        });
    }


    // ========================================
    // ACTUAL MATH
    // ========================================

    try {

        let correctResult;


        // ========================================
        // CALCULUS
        // ========================================

        if (
            String(category).toLowerCase() === "calculus"
        ) {

            correctResult =
                handleCalculus(cleanExpression);
        }


        // ========================================
        // ALGEBRA
        // ========================================

        else if (
            String(category).toLowerCase() === "algebra"
        ) {

            correctResult =
                handleAlgebra(cleanExpression);
        }


        // ========================================
        // NORMAL MATH
        // ========================================

        else {

            correctResult =
                math.evaluate(cleanExpression);
        }


        // ========================================
        // CHAOS VARIABLES
        // ========================================

        let finalResult = correctResult;

        let wasWrong = false;

        let glitch = false;

        let glitchResult = null;

        let glitchBro = null;


        // ========================================
        // NUMERICAL CHAOS
        // ========================================

        if (
            typeof correctResult === "number" &&
            Number.isFinite(correctResult)
        ) {

            const chaosRoll = Math.random();


            // ====================================
            // 30% — VISIBLE GLITCH
            // ====================================

            if (
                chaosRoll < GLITCH_CHANCE
            ) {

                glitch = true;

                // Initial answer is correct

                finalResult = correctResult;


                // Generate the corrupted answer

                glitchResult =
                    createWrongAnswer(correctResult);


                // Generate Bro response
                // for corrupted answer

                glitchBro =
                    broEngine(
                        cleanExpression,
                        glitchResult,
                        category,
                        true
                    );
            }


            // ====================================
            // 55% — IMMEDIATELY WRONG
            // ====================================

            else if (
                chaosRoll <
                GLITCH_CHANCE +
                WRONG_ANSWER_CHANCE
            ) {

                finalResult =
                    createWrongAnswer(correctResult);

                wasWrong = true;
            }


            // ====================================
            // 15% — CORRECT
            // ====================================

            else {

                finalResult =
                    correctResult;

                wasWrong = false;
            }
        }


        // ========================================
        // BRO RESPONSE
        // ========================================

        const broData =
            broEngine(
                cleanExpression,
                finalResult,
                category,
                wasWrong
            );


        // ========================================
        // RESPONSE
        // ========================================

        return res.json({

            success: true,

            expression: cleanExpression,

            category,

            result: finalResult,

            bro: broData,

            // Glitch data

            glitch,

            glitchResult,

            glitchBro
        });


    } catch (error) {

        console.error(
            "BRO CALCULATOR ERROR:",
            error
        );


        return res.status(400).json({

            success: false,

            vibeFail: false,

            error:
                broEngine.getError(
                    cleanExpression
                )
        });
    }
});


// ========================================
// CALCULUS
// ========================================

function handleCalculus(expression) {

    const derivativeMatch =
        expression.match(
            /^derivative\s*\(\s*(.*)\s*,\s*([a-zA-Z]+)\s*\)$/i
        );


    if (!derivativeMatch) {

        throw new Error(
            "Invalid derivative format."
        );
    }


    const equation =
        derivativeMatch[1];

    const variable =
        derivativeMatch[2];


    return math
        .derivative(
            equation,
            variable
        )
        .toString();
}


// ========================================
// ALGEBRA
// ========================================

function handleAlgebra(expression) {

    const simplifyMatch =
        expression.match(
            /^simplify\s*\(([\s\S]*)\)$/i
        );


    if (simplifyMatch) {

        return math
            .simplify(
                simplifyMatch[1]
            )
            .toString();
    }


    return math.evaluate(expression);
}


// ========================================
// START SERVER
// ========================================

app.listen(PORT, () => {

    console.log("");
    console.log("========================================");
    console.log("       BRO CALCULATOR™");
    console.log("       CHAOS ENGINE ONLINE");
    console.log("========================================");
    console.log("");

    console.log(
        `Server running on http://localhost:${PORT}`
    );

    console.log("");

    console.log("CHAOS SETTINGS:");
    console.log(
        `Refusal:       ${REFUSAL_CHANCE * 100}%`
    );

    console.log(
        `Wrong answer:  ${WRONG_ANSWER_CHANCE * 100}%`
    );

    console.log(
        `Glitch:        ${GLITCH_CHANCE * 100}%`
    );

    console.log("");

    console.log(
        "Mathematical integrity: COMPROMISED."
    );

    console.log("");
});
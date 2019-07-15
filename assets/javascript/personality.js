// -------------Start of Quiz --------------//

//variable for quiz stored in an array where each question is its own object 
var prompts = [{
        prompt: '1. … is reserved',
        trait: "Extraversion",
        class: 'group0',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2,
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: ""
    },
    {
        prompt: '2. … is generally trusting',
        trait: "Agreeableness",
        class: 'group1',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: ""
    },
    {
        prompt: '3. … tends to be lazy',
        trait: "Conscientiousness",
        class: 'group2',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: ""
    },
    {
        prompt: '4. … is relaxed, handles stress well',
        trait: "Neuroticism",
        class: 'group3',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2,
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: ""
    },
    {
        prompt: '5. … has few artistic interests',
        trait: "Openness to Experience",
        class: 'group4',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2,
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: ""
    },
    {
        prompt: '6. … is outgoing, sociable',
        trait: "Extraversion",
        class: 'group5',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: ""
    },
    {
        prompt: '7. … tends to find fault with others',
        trait: "Agreeableness",
        class: 'group6',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 1
            },
            {
                value: 'Agree',
                weight: 2,
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 4
            },
            {
                value: 'Strongly Disagree',
                weight: 5
            }
        ],
        userChoice: ""
    },
    {
        prompt: '8. … does a thorough job',
        trait: "Conscientiousness",
        class: 'group7',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: ""
    },
    {
        prompt: '9. … gets nervous easily',
        trait: "Neuroticism",
        class: 'group8',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: ""
    },
    {
        prompt: '10. … has an active imagination',
        trait: "Openness to Experience",
        class: 'group9',
        prompt_values: [{
                value: 'Strongly Agree',
                weight: 5
            },
            {
                value: 'Agree',
                weight: 4
            },
            {
                value: 'Neutral',
                weight: 3
            },
            {
                value: 'Disagree',
                weight: 2
            },
            {
                value: 'Strongly Disagree',
                weight: 1
            }
        ],
        userChoice: ""
    }
]

// For each prompt, create a p tag to hold questions
function createPromptItems() {
    for (var i = 0; i < prompts.length; i++) {
        var inputlVal = prompts[i].prompt;
        var promptsVals = prompts[0].prompt_values;
        $("#quiz").append(`<p>${inputlVal}</p>`);
        //for each option create a radio button that groups questions together
        for (var x = 0; x < promptsVals.length; x++) {
            var radioVal = prompts[i].prompt_values[x].value;
            var radioWeight = prompts[i].prompt_values[x].weight;
            var inputGroup = i;
            $("#quiz").append(
                `<p>
            <label >
            <input class="form-check-input" name="${inputGroup}" type="radio" value="${radioWeight}">
            <span  value="${radioVal}" name="${inputGroup}">${radioVal}</span>
            </label>
          </p><br>`
            );
        }
    }
}
createPromptItems();

// function that stores user answer 
$('#quiz').on('change', '.form-check-input', function () {
    // GET question index out of "name" attribute so we know what question you answered
    const questionIndex = $(this).attr('name');
    // get value out of radio button selected
    console.log(questionIndex);
    const answer = $(this).val();
    // set answer to question's userAnswer property
    console.log(answer);
    console.log(prompts.userChoice)
    prompts.userChoice = answer;
    console.log(prompts.userChoice)
});

//---------------------------------------RESPONSE / SUBMISSION LOGIC -------------------//   

//Global variables for response function
var eTotal = 0;
var aTotal = 0;
var cTotal = 0;
var nTotal = 0;
var oTotal = 0;

//----Submit button click function that adds values together and displays results
$(document).on("click", "#submit-btn", function () {
    $('.results').removeClass('hide');
    $('.results').addClass('show');
    eTotal = prompts[0].userChoice + prompts[5].userChoice;
    aTotal = prompts[1].userChoice + prompts[6].userChoice;
    cTotal = prompts[2].userChoice + prompts[7].userChoice;
    nTotal = prompts[3].userChoice + prompts[8].userChoice;
    oTotal = prompts[4].userChoice + prompts[9].userChoice;
    console.log("this is etotal" + eTotal);

    var resultsArr = [eTotal, aTotal, cTotal, nTotal, oTotal];
    var sortedResults = resultsArr.sort();

    console.log("this is results Arr" + resultsArr)
    console.log("this is sorted Results" + sortedResults)

});


// After clicking submit, add up the totals from answers
// For each group, find the value that is active


//     if(total < 0) {
//         // document.getElementById('intro-bar').style.width = ((total / 60) * 100) + '%';
//         // console.log(document.getElementById('intro-bar').style.width);
//         // document.getElementById('intro-bar').innerHTML= ((total / 60) * 100) + '%';
//         document.getElementById('results').innerHTML = '<b>You are introverted!</b><br><br>\
//         Introverts are tricky to understand, since it’s so easy for us to assume that introversion is the same as being shy, when, in fact, introverts are simply people who find it tiring to be around other people.\n\
// <br><br>\
// I love this explanation of an introvert’s need to be alone:\n\
// <br><br>\
// For introverts, to be alone with their thoughts is as restorative as sleeping, as nourishing as eating.\n\n\
// <br><br>\
// Introverted people are known for thinking things through before they speak, enjoying small, close groups of friends and one-on-one time, needing time alone to recharge, and being upset by unexpected changes or last-minute surprises. Introverts are not necessarily shy and may not even avoid social situations, but they will definitely need some time alone or just with close friends or family after spending time in a big crowd.\
//         ';
//     } else if(total > 0) {
//         document.getElementById('results').innerHTML = '<b>You are extroverted!</b><br><br>\
//         On the opposite side of the coin, people who are extroverted are energized by people. They usually enjoy spending time with others, as this is how they recharge from time spent alone focusing or working hard.\
// <br><br>\
// I like how this extrovert explains the way he/she gains energy from being around other people:\
// <br><br>\
// When I am among people, I make eye contact, smile, maybe chat if there’s an opportunity (like being stuck in a long grocery store line). As an extrovert, that’s a small ‘ping’ of energy, a little positive moment in the day.';
//     } else {
//         document.getElementById('results').innerHTML = '<b>You are ambiverted!</b><br><br>\
//         Since introverts and extroverts are the extremes of the scale, the rest of us fall somewhere in the middle. Many of us lean one way or the other, but there are some who are quite balanced between the two tendencies. These people are called ambiverts.\
// <br><br>\
// So let’s look at how an ambivert compares.\
// <br><br>\
// Ambiverts exhibit both extroverted and introverted tendencies. This means that they generally enjoy being around people, but after a long time this will start to drain them. Similarly, they enjoy solitude and quiet, but not for too long. Ambiverts recharge their energy levels with a mixture of social interaction and alone time.'
//     }

//     // Hide the quiz after they submit their results
//     $('#quiz').hide();
//     $('#submit-btn').hide();
//     $('#retake-btn').removeClass('hide');


// // Refresh the screen to show a new quiz if they click the retake quiz button
// $('#retake-btn').click(function () {
//     $('#quiz').removeClass('hide');
//     $('#submit-btn').removeClass('hide');
//     $('#retake-btn').addClass('hide');

//     $('.results').addClass('hide');
//     $('.results').removeClass('show');
// })
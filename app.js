
    const startbut =document.getElementById("startbtn");
    const nextbut =document.getElementById("nextbtn");
    const que=document.getElementById("questions-container");
    const questionelement=document.getElementById("question");
    const answers=document.getElementById("buttons");
    let shuffledque, currentqueindex;
    let countRightAnswers = 0;

function next()
{
    currentqueindex++;
    nextques();
}

function start()
{
    countRightAnswers = 0; 
    startbut.classList.add("hide");
    shuffledque=option.sort(() => Math.random()- .5)
    currentqueindex=0
    que.classList.remove("hide");
    nextques();
}

function nextques()
{
    resetstate();
    showquestion(shuffledque[currentqueindex])
}

function showquestion(question)
{
        questionelement.innerText = question.question;
        question.ans.forEach(ans => {
        const button = document.createElement("button")
        button.innerText = ans.text
        button.classList.add("btn")
        if(ans.correct){
            button.dataset.correct=ans.correct
        }
        button.addEventListener("click",selectans);
        answers.appendChild(button);
    }
        )
}

function resetstate()
{
    nextbut.classList.add("hide");
    while(answers.firstChild)
    {
        answers.removeChild(answers.firstChild)
    }

}
function selectans(e)
{
    const selectedbtn = e.target;
    const correct = selectedbtn.dataset.correct;
    statusclass(document.body, correct);
    Array.from(answers.children).forEach(button =>{
        statusclass(button,button.dataset.correct)
    })
    if(shuffledque.length > currentqueindex +1){
    nextbut.classList.remove("hide");
    }
    else{
        startbut.innerText= "Restart"
        startbut.classList.remove("hide");
        alert("Questions Finished Check Your Score")
    }
    if (selectedbtn.dataset = correct) {
        
        countRightAnswers++;
        document.getElementById('right-answers').innerHTML = countRightAnswers;
        
    }
}

function statusclass(element ,correct)
{
    clearstatusclass(element);
    if(correct){
        element.classList.add("correct")
    }
    else{
        element.classList.add("wrong")
    }
}

function clearstatusclass(element)
{
    element.classList.remove("correct");
    element.classList.remove("wrong");

}



















const option = [
    {
    question: "What is the name of president of Pakistan?",
    ans: [
        {text:"Donald trump",correct:false},
        {text:"Shahid Afridi",correct:false},
        {text:"Imran khan",correct:true},
        {text:"George bush",correct:false},
        ]
 },


    {
    question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of" ,
    ans: [
        {text:"Asia",correct:false},
        {text:"Africa",correct:false},
        {text:"Europe",correct:true},
        {text:"England",correct:false},
        ]
    },

    {
        question: "Hitler party which came into power in 1933 is known as" ,
        ans: [
            {text:"Labour Party",correct:false},
            {text:"Nazi Party",correct:true},
            {text:"Ku-Klux-Klan",correct:false},
            {text:"Democratic Party",correct:false},
            ]
        },
        {
            question: "Gulf cooperation council was originally formed by" ,
            ans: [
                {text:"Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and United Arab Emirates",correct:true},
                {text:"Second World Nations",correct:false},
                {text:"Third World Nations",correct:false},
                {text:"	Fourth World Nations",correct:false},
                ]
            },
            {
                question: "Epsom (England) is the place associated with" ,
                ans: [
                    {text:"Horse racing",correct:true},
                    {text:"Polo",correct:false},
                    {text:"Shooting",correct:false},
                    {text:"	Snooker",correct:false},
                    ]
                },
                {
                    question: "First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted in" ,
                    ans: [
                        {text:"1968",correct:false},
                        {text:"1958",correct:false},
                        {text:"1967",correct:true},
                        {text:"1922",correct:false},
                        ]
                    },
                    {
                        question: "Galileo was an Italian astronomer who" ,
                        ans: [
                            {text:"developed the telescope",correct:false},
                            {text:"discovered four satellites of Jupiter",correct:false},
                            {text:"discovered that the movement of pendulum produces a regular time measurement",correct:false},
                            {text:"All of them",correct:true},
                            ]
                        },
                        {
                            question: "Golf player Vijay Singh belongs to which country?" ,
                            ans: [
                                {text:"USA",correct:false},
                                {text:"Fiji",correct:true},
                                {text:"India",correct:false},
                                {text:"UK",correct:false},
                                ]
                            },
]
    
    
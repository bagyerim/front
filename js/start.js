const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const endPoint = 12;
const select = [];

function calResult(){
  var pointArray = [
    {name: 'ISTJ', vaule: 0, key:0 },
    {name: 'ISFJ', vaule: 0, key:1 },
    {name: 'INFJ', vaule: 0, key:2 },
    {name: 'INTJ', vaule: 0, key:3 },
    {name: 'ISTP', vaule: 0, key:4 },
    {name: 'ISFP', vaule: 0, key:5 },
    {name: 'INFP', vaule: 0, key:6 },
    {name: 'INTP', vaule: 0, key:7 },
    {name: 'ESTP', vaule: 0, key:8 },
    {name: 'ESFP', vaule: 0, key:9 },
    {name: 'ENFP', vaule: 0, key:10 },
    {name: 'ENTP', vaule: 0, key:11 },
    {name: 'ESTJ', vaule: 0, key:12 },
    {name: 'ESFJ', vaule: 0, key:13 },
    {name: 'ENFJ', vaule: 0, key:14 },
    {name: 'ENTJ', vaule: 0, key:15 },
  ]
}

function goResult(){
    qna.style.WebkitAnimation = "fadeOut 1s";
    qna.style.animation = "fadeOut 1s";
    setTimeout(() => {
        result.style.WebkitAnimation ="fadeIn 1s";
        result.style.animation = "fadeIn 1s";
      setTimeout(() => {
        qna.style.display = "none";
        result.style.display = "block";
     }, 450)})

     console.log(select);
}


function addAnswer(answerText,qIdx,idx){
    var a = document.querySelector('.answerBox');
    var answer = document.createElement('button');
    answer.classList.add('answerList');
    answer.classList.add('my-3');
    answer.classList.add('py-3');
    answer.classList.add('mx-auto');
    answer.classList.add('fadeIn');

    a.appendChild(answer);
    answer.innerHTML = answerText;


    answer.addEventList("click",function(){
    var children = document.querySelectorAll('.answerList');
    for(let i =0; i < children.length; i++){
        children[i].disabled = true;
        children[i].style.WebkitAnimation="fadeOut 0.5s"
        children[i].style.animation = "fadeOut 0.5"; 
    }
    setTimeout(() =>{
        select[qIdx] = idx;
        for(let i = 0; i < children.length; i++){
            children[i].style.display = 'none';
        }
    goNext(++qIdx);
  } ,450); 
}, false);
}

function goNext(qIdx){
  if(qIdx+1 === endPoint){
    goResult();
    return;
   }

  var q = document.querySelector('.qBox');
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer,qIdx,i);
  }
  var status = document.querySelector('.statusBar');
  status.style.width = (100/endPoint) * (qIdx+1) + "%";
 }


function begin(){
    main.style.WebkitAnimation = "fadeOut 1s";
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        qna.style.WebkitAnimation ="fadeIn 1s";
        qna.style.animation = "fadeIn 1s";
      setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block";
      }, 450)
      let qIdx = 0;
     goNext(qIdx);
    }, 450);
}
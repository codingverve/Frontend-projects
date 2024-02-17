const question = [...document.querySelectorAll(".formquestions")];
const contBtn = document.querySelector('#primary');
const backBtn = document.querySelector('#secondary'); 
const pageNo = document.querySelector('#page-no');
const pageindicator = [...document.querySelectorAll('.indicator')];

console.log(pageindicator)
let currQuestion = question.findIndex(step=>{
    return step.classList.contains('active');
})
showQuestion();
console.log(currQuestion)
contBtn.addEventListener('click',()=>{
    if(currQuestion===question.length-1){
        return;
    }
    currQuestion+=1;
    showQuestion()
})
backBtn.addEventListener('click',()=>{
    if(currQuestion===0){
        return;
    }
    currQuestion-=1;
    showQuestion();
})

function showQuestion(){
    if(currQuestion<0 || currQuestion>4){
        currQuestion=0;
        question[currQuestion].classList.add('active');
    }
    question.forEach((step,index)=>{
        step.classList.toggle('active',index === currQuestion)
    })
    pageIndicators()
    console.log(currQuestion)
}

function pageIndicators(){
    console.log(currQuestion)
    if(currQuestion<4){
    pageNo.textContent= `${currQuestion+1} of 4`;

    pageindicator.forEach((item,index)=>{
        if(index<currQuestion){
            item.style.backgroundColor="#234633";
        }
        if(index===currQuestion){
            item.style.backgroundColor="#A3D95D";
        }
        if(index>currQuestion){
            item.style.backgroundColor='gray'
        }
    
    })
}
else{
    pageNo.textContent=' ';
}
    
}

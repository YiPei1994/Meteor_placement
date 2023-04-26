
        // colors
        const tile = document.querySelector('.tile');

        const yellow ='#ffc600';
        const blue = '#00a6ff';
        const zerohp =  '#000000';
        const onehp =  '#FFA500';
        const twohp = '#9ACD32';
        const fullhp = '#3e274f';
        // btns
      const btnStart =  document.querySelector('.start');
      const btnPrev =  document.querySelector('.prev');
      const btnNext =  document.querySelector('.next');
      const btnReset =  document.querySelector('.reset');
      // biles
      const tTwelve =  document.querySelector('.twelve');
      const tOne =  document.querySelector('.one');
      const tThree =  document.querySelector('.three');
      const tEleven =  document.querySelector('.eleven');
      const tZero =  document.querySelector('.zero');
      const tFive =  document.querySelector('.five');
      const tNine =  document.querySelector('.nine');
      const tSeven =  document.querySelector('.seven');
      const tSix =  document.querySelector('.six');

      // create meteors
      const bMeteor = document.createElement('span');
      bMeteor.setAttribute("class", "blue");  
      const bMeteor2 = document.createElement('span');
      bMeteor2.setAttribute("class", "blue2")  
      const bMeteor3 = document.createElement('span');
      bMeteor3.setAttribute("class", "blue");  
      const bMeteor4 = document.createElement('span');
      bMeteor4.setAttribute("class", "blue2")  
      const gMeteor = document.createElement('span');
      gMeteor.setAttribute("class", "gold")

    // hp bar
    const hpBar = document.querySelector('.hpbar')
  

    function afterFirstSet( ) {
        tEleven.appendChild(bMeteor);
            tTwelve.appendChild(bMeteor2);
            tSix.style.background = zerohp;
            tSeven.style.background = zerohp;
            tFive.style.background = zerohp;
            tNine.style.background = twohp;
            tEleven.style.background = twohp;
            tTwelve.style.background = twohp;
            tOne.style.background = onehp;
            hpBar.innerHTML = 'Around 173x bars';
    }

    
    function afterSecondSet( ) {
        tEleven.removeChild(bMeteor);
            tTwelve.removeChild(bMeteor2);
          tEleven.appendChild(bMeteor3);
        tEleven.appendChild(bMeteor2);
            tSix.appendChild(bMeteor);
            tSix.style.background = fullhp;
            tSeven.style.background = fullhp;
            tFive.style.background = fullhp;
            tNine.style.background = twohp;
            tEleven.style.background = onehp;
            tTwelve.style.background = onehp;
            tOne.style.background = onehp;
            hpBar.innerHTML = 'Around 158x bars';
    }

    function afterThirdSet( ) {
        tSeven.appendChild(bMeteor);
            tSeven.appendChild(bMeteor2);
            tFive.appendChild(bMeteor3);
            tFive.appendChild(bMeteor4);
            tSix.style.background = twohp;
            tSeven.style.background = fullhp;
            tFive.style.background = fullhp;
            tNine.style.background = twohp;
            tEleven.style.background = zerohp;
            tTwelve.style.background = onehp;
            tOne.style.background = onehp;
            hpBar.innerHTML = 'Around 143x bars';
    }


    function afterFourthdSet( ) {
        tSeven.removeChild(bMeteor);
            tSeven.removeChild(bMeteor2);
            tFive.removeChild(bMeteor3);
            tFive.removeChild(bMeteor4);
        tTwelve.appendChild(gMeteor);
            tSix.style.background = twohp;
            tSeven.style.background = onehp;
            tFive.style.background = onehp;
            tNine.style.background = twohp;
            tEleven.style.background = zerohp;
            tTwelve.style.background = onehp;
            tOne.style.background = onehp;
            hpBar.innerHTML = 'Around 138x bars';
    }

    function afterFifthdSet( ) {
        tEleven.appendChild(bMeteor);
        tEleven.appendChild(bMeteor2);
        tSix.appendChild(bMeteor3);
        tTwelve.removeChild(gMeteor);
    
            tSix.style.background = twohp;
            tSeven.style.background = onehp;
            tFive.style.background = onehp;
            tNine.style.background = twohp;
            tEleven.style.background = fullhp;
            tTwelve.style.background = zerohp;
            tOne.style.background = zerohp;
            hpBar.innerHTML = 'Around 123x bars';

    }

    function afterShandiSet( ) {

        tTwelve.appendChild(bMeteor);
        tOne.appendChild(bMeteor2);
        tFive.appendChild(bMeteor3);
        tFive.appendChild(bMeteor4);
            tSix.style.background = onehp;
            tSeven.style.background = onehp;
            tFive.style.background = onehp;
            tNine.style.background = twohp;
            tEleven.style.background = onehp;
            tTwelve.style.background = fullhp;
            tOne.style.background = fullhp;
            hpBar.innerHTML = 'Around 100x bars';
    }

    function afterShandiOneSet( ) {
        tTwelve.removeChild(bMeteor);
        tOne.removeChild(bMeteor2);
        tFive.removeChild(bMeteor3);
        tFive.removeChild(bMeteor4);
        tSix.appendChild(gMeteor);
            tSix.style.background = onehp;
            tSeven.style.background = onehp;
            tFive.style.background = zerohp;
            tNine.style.background = twohp;
            tEleven.style.background = onehp;
            tTwelve.style.background = twohp;
            tOne.style.background = twohp;
            hpBar.innerHTML = 'Around 88x bars';
    }

    function afterShandiTwoSet( ) {
        tTwelve.appendChild(bMeteor);
        tOne.appendChild(bMeteor2);
        tThree.appendChild(bMeteor3);
        tSix.removeChild(gMeteor);
            tSix.style.background = zerohp;
            tSeven.style.background = zerohp;
            tFive.style.background = zerohp;
            tNine.style.background = twohp;
            tEleven.style.background = onehp;
            tTwelve.style.background = twohp;
            tOne.style.background = twohp;
            hpBar.innerHTML = 'Around 76x bars';
    }

    function afterShandiThreeSet( ) {

        tTwelve.removeChild(bMeteor);
        tOne.removeChild(bMeteor2);
        tThree.removeChild(bMeteor3);
        tEleven.appendChild(bMeteor);
        tEleven.appendChild(bMeteor2);
        tSeven.appendChild(bMeteor4);
        tSix.appendChild(bMeteor3);
            tSix.style.background = fullhp;
            tSeven.style.background = fullhp;
            tFive.style.background = fullhp;
            tNine.style.background = twohp;
            tEleven.style.background = onehp;
            tTwelve.style.background = onehp;
            tOne.style.background = onehp;
            tThree.style.background = twohp;
            hpBar.innerHTML = 'Around 64x bars';
    }

    function afterShandiFourthSet( ) {
        tEleven.removeChild(bMeteor);
        tEleven.removeChild(bMeteor2);
        tSeven.removeChild(bMeteor4);
        tSix.removeChild(bMeteor3);
        tFive.appendChild(bMeteor2);
        tSeven.appendChild(bMeteor4);
        tSix.appendChild(bMeteor3);
            tSix.style.background = twohp;
            tSeven.style.background = twohp;
            tFive.style.background = fullhp;
            tNine.style.background = twohp;
            tEleven.style.background = zerohp;
            tTwelve.style.background = onehp;
            tOne.style.background = onehp;
            tThree.style.background = twohp;
            hpBar.innerHTML = 'Around 52x bars';
    }




function afterShandiFifthSet( ) {
    tFive.removeChild(bMeteor2);
        tSeven.removeChild(bMeteor4);
        tSix.removeChild(bMeteor3);
    tEleven.appendChild(bMeteor);
  tEleven.appendChild(bMeteor2);
  tNine.appendChild(bMeteor4);
  tFive.appendChild(bMeteor3);
      tSix.style.background = onehp;
      tSeven.style.background = onehp;
      tFive.style.background = twohp;
      tNine.style.background = twohp;
      tEleven.style.background = fullhp;
      tTwelve.style.background = onehp;
      tOne.style.background = onehp;
      tThree.style.background = twohp;
      hpBar.innerHTML = 'Around 40x bars';
}


function afterShandiSixSet( ) {
    tEleven.removeChild(bMeteor);
  tEleven.removeChild(bMeteor2);
  tNine.removeChild(bMeteor4);
  tFive.removeChild(bMeteor3);
    tTwelve.appendChild(gMeteor);
      tSix.style.background = onehp;
      tSeven.style.background = onehp;
      tFive.style.background = onehp;
      tNine.style.background = onehp;
      tEleven.style.background = onehp;
      tTwelve.style.background = onehp;
      tOne.style.background = onehp;
      tThree.style.background = twohp;
      hpBar.innerHTML = 'Around 38x bars';
}

const array_of_functions = [
afterFirstSet,
afterSecondSet,
afterThirdSet,
afterFourthdSet,
afterFifthdSet,
afterShandiSet,
afterShandiOneSet,
afterShandiTwoSet,
afterShandiThreeSet,
afterShandiFourthSet,
afterShandiFifthSet,
afterShandiSixSet
]
   

function reset() {
    window.location.reload();
}

var interval;


function countDown() {
    var incomeTicker = 52;
    interval = setInterval(function(){
 if (incomeTicker > 0)
	 incomeTicker--;
      document.querySelector("#time").innerHTML =  incomeTicker ;
if (incomeTicker <= 0)
clearInterval(interval);
}, 1000);
} 


let i = 0;


    btnStart.addEventListener('click', function () {
        
        array_of_functions[0]();
        countDown();
        
    });



    btnNext.addEventListener('click', function(){
        i++;
       array_of_functions[i]();
       document.querySelector("#time").innerHTML =  '';

        clearInterval(interval);
        countDown();
    });

    btnReset.addEventListener('click',  reset)



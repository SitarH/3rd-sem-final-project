const StartGame = (event) => {
    let gridInput = document.querySelector(`[name = "grid"]:checked`);
    let gridSize = parseInt(gridInput.value);
    console.log(gridSize);
     event.preventDefault();
   

    final = [];
    let subI = 0;

    for (let index = 0; index < gridSize; index++) {
        let row = [];
        for (let j = 0; j < gridSize; j++) {
            let sub = {
                isSub: false,
                subId: null,
                isPress: false,
                subSize: null,
                id: subI,

            }
            row.push(sub);
            subI++;

        }

        final.push(row)

    }

    let nums = document.getElementsByName("array[]");

    const ShipArray = [{
            name: 1,
            Shiplenght: [0, 1],
            count: parseInt(nums[0].value),
        },
        {
            name: 2,
            Shiplenght: [0, 1, 2],
            count: parseInt(nums[1].value)
        },
        {
            name: 3,
            Shiplenght: [0, 1, 2, 3],
            count: parseInt(nums[2].value)
        },
        {
            name: 4,
            Shiplenght: [0, 1, 2, 3, 4],
            count: parseInt(nums[3].value)
        },

    ];

   

    const countShips = (ShipArray) =>{
       debugger
        for (let index = 0; index < amount.length; index++) {
            let amountIndx = parseInt(amount[index].value);
            for (let i = 0; i < amountIndx; i++) {
                InsertShips(ShipArray[index]);
                shipsCounter++;
                
            }
            
        }
    }

    const InsertShips = (ship) => {
        debugger
        let vertical=1;
        let horizontal =0;
        let rnd = Math.abs(Math.floor(Math.random() * 2));
 
        if (rnd ==horizontal) {
        let rndCol = Math.abs(Math.floor(Math.random() * gridSize - ship.Shiplenght.length));
        let rndRow = Math.abs(Math.floor(Math.random() * gridSize - 1));
        

        for (let index = 0; index < ship.Shiplenght.length; index++) {
            if (final[rndRow][rndCol + index].isSub == true) {
                InsertShips(ship)
            }
               
        }
        for (let index = 0; index < ship.Shiplenght.length; index++) {
            final[rndRow][rndCol + index].isSub = true;
            final[rndRow][rndCol + index].subId = ship.name;
            final[rndRow][rndCol + index].subSize = ship.Shiplenght.length;
               
        }
      
    }
        else if (rnd ==vertical){
            let rndCol = Math.abs(Math.floor(Math.random() *gridSize - 1 ));
            let rndRow = Math.abs(Math.floor(Math.random() * gridSize - ship.Shiplenght.length));
    
            for (let index = 0; index < ship.Shiplenght.length; index++) {
                if (final[rndRow+ index][rndCol].isSub == true) 
                    InsertShips(ship)
        
        }
        for (let index = 0; index < ship.Shiplenght.length; index++) {
            final[rndRow+ index][rndCol].isSub = true;
            final[rndRow+ index][rndCol].subId = ship.name;
            final[rndRow+ index][rndCol].subSize = ship.Shiplenght.length;
    
    }


        }


    }

  
    // InsertShips(ShipArray[0])
    // InsertShips(ShipArray[1])
    // InsertShips(ShipArray[2])
    // InsertShips(ShipArray[3])
    console.log(final);
    debugger
    countShips(ShipArray);
    CreateGameGrid(final, gridSize);
    Attempts(clicks,score)
    Clicked(gridSize);
  

}


const CreateGameGrid = (final, size) => {

    let board = document.querySelector(`.game-board`);
    let table = `<table>`;

    for (let i = 0; i < size; i++) {
        table += `<tr>`;
        for (let j = 0; j < size; j++) {
            table += `<td class="square" data-i="${i}"></td>`;

        }

        table += `</tr>`;
    }

    board.innerHTML = table;



}

const Clicked = (gridSize) => {
   
    let ship = [];
    let size = document.querySelectorAll(`.square`).length;
    tableArr = document.querySelectorAll(`.square`);
    let counter=-1;
    let tmp=-1;
    for (let index = 0; index < gridSize; index++) {

        for (let j = 0; j < gridSize; j++) {
            counter++;
            tableArr[counter].addEventListener(`click`, () => {
                Check(index, j);
                clicks++;
                Attempts(clicks,score)
                audio.play();
            })

        }

    }

}

const Check = (i, j) => {
    debugger
    if(final[i][j].isPress == false) {
        final[i][j].isPress = true;
        if (final[i][j].isSub == true){
           tableArr[final[i][j].id].style.backgroundColor = "red"
       
           if (final[i][j].isPress == true && final[i][j].isSub == true) {
               final[i].forEach(element => {
                 
                   if(element.isSub==true  && element.isPress == true && element.id == final[i][j].id) {
                       a.push(element);
                   }
                   if (a.length == final[i][j].subSize){
                       a.forEach(element => {
                        tableArr[element.id].classList.add("oneShip");
                           a=[];
                         
                       });
                       score++;
                       audio2.play();
                       Attempts(clicks,score);
                       console.log(score);
                       console.log(shipsCounter)
                       if (score == shipsCounter){
                       Winning();
                       }
                
                
                    }
                    
                   }
                
                   
               );
          
           }
            
            
        }
        else{
            tableArr[final[i][j].id].style.backgroundColor = "white"
        }
    }
}

const Attempts = (click, score) =>{
    let c = document.querySelector('.click');
    c.innerHTML = click;

    let s = document.querySelector('.score');
    s.innerHTML = score;


}

const Winning = () =>{
     audio3.play();
     let f = document.querySelector('.finish');
     f.innerHTML = "YOU WON!"
   

}

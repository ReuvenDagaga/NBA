const urlFilter = 'https://nbaserver-q21u.onrender.com/api/filter/'

interface Player {
    position: string;
    twoPercent: number;
    threePercent: number;
    points: number;
    playerName: string;
}

interface Req {
    position: string;
    twoPercent: number;
    threePercent: number;
    points: number;
}

async function getResaultFilter(req: Req): Promise<Player[]> {
    
    const response =  await fetch(urlFilter, {
      method: "POST",
      body: JSON.stringify(req),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    });
    const data: Player[] = await response.json()  
    pushPlayerToTable(data);  
    return data
  }


const myForm = document.querySelector('#myForm')?.addEventListener('submit', function(event) {event.preventDefault()});
 


const selectOption = document.querySelector('#selectOption') as HTMLSelectElement;


const points = document.querySelector('#points') as HTMLInputElement;
points.addEventListener('input', () => {points.textContent = points.value})
const pointstwoPercent = document.querySelector('#points-twoPercent') as HTMLInputElement;
pointstwoPercent.addEventListener('input', () => {pointstwoPercent.textContent = pointstwoPercent.value})
const pointsthreePercent = document.querySelector('#points-threePercent') as HTMLInputElement;
pointsthreePercent.addEventListener('input', () => {pointsthreePercent.textContent = pointsthreePercent.value})

const pointsLabel = document.querySelector('#pointsLabel') as HTMLLabelElement;
const twoPercentLabel = document.querySelector('#twoPercentLabel') as HTMLLabelElement;
const threePercentLabel = document.querySelector('#threePercentLabel') as HTMLLabelElement;

pointsLabel.textContent = points.value
twoPercentLabel.textContent = pointstwoPercent.value
pointsthreePercent.textContent = pointsthreePercent.value





function searchPlayers() : void {
    

    const askNewPlayer: Req = {
      position: selectOption.value ,
      twoPercent: Number(pointsthreePercent.value),
      threePercent: Number(pointstwoPercent.value),
      points: Number(points.value)
  }
    getResaultFilter(askNewPlayer);
  }

const table = document.querySelector(".table") as HTMLTableElement;
const tbody = document.createElement("tbody") as HTMLTableSectionElement;
table.appendChild(tbody);





function pushPlayerToTable(players: Player[]) {
    tbody.innerHTML = ""
    players.forEach(p => {
        const trow = document.createElement("tr") as HTMLTableRowElement;
        const tPlayer = document.createElement("td");
        const tPosition = document.createElement("td");
        const tPoints = document.createElement("td");
        const tFG = document.createElement("td");
        const t3P = document.createElement("td");
        const tAction = document.createElement("td");
        
        const btnPushToFantasy = document.createElement("button") as HTMLButtonElement;
        btnPushToFantasy.classList.add("btnPushToFantasy");
        btnPushToFantasy.textContent = "Add Damian to Current Team";
        tAction.appendChild(btnPushToFantasy);
        btnPushToFantasy.addEventListener('click', (event: any) => pushPlayerToFantasy(p))
        
        
        tPlayer.textContent = p.playerName;
        tPosition.textContent = p.position;
        tPoints.textContent = p.points.toString();
        tFG.textContent = p.twoPercent.toString();
        t3P.textContent = p.threePercent.toString();  
        
        tbody.appendChild(trow);
        trow.appendChild(tPlayer);
        trow.appendChild(tPosition);
        trow.appendChild(tPoints);
        trow.appendChild(tFG);
        trow.appendChild(t3P);
        trow.appendChild(tAction);
        trow.appendChild(tAction);
    });
}

function pushPlayerToFantasy(player: Player)  {
    const pg = document.querySelector('#pg') as HTMLDivElement;
    const sg = document.querySelector('#sg') as HTMLDivElement;
    const sf = document.querySelector('#sf') as HTMLDivElement;
    const pf = document.querySelector('#pf') as HTMLDivElement;
    const c = document.querySelector('#c') as HTMLDivElement;

    const blueHead = document.createElement('p');
    blueHead.classList.add('blue-head');
    const name = document.createElement('p');
    const tProsent = document.createElement('p');
    const treeProsent = document.createElement('p');
    const points = document.createElement('p');


    switch (player.position) {
        case "PG":
            pg.innerHTML = ""
            blueHead.textContent = "Point Guard";
            name.textContent = player.playerName;
            treeProsent.textContent = "Tree Prosent: " + player.threePercent.toString(); + "%";
            tProsent.textContent = "Tow Prosent: " + player.twoPercent.toString(); + "%";
            points.textContent = "Points: " + player.points.toString();
            pg.appendChild(blueHead);
            pg.appendChild(name);
            pg.appendChild(tProsent);
            pg.appendChild(treeProsent);
            pg.appendChild(points);
            break;    
        case "SG":
            sg.innerHTML =""
            blueHead.textContent = "Shoting Guard";
            name.textContent = player.playerName;
            treeProsent.textContent = "Tree Prosent: " + player.threePercent.toString(); + "%";
            tProsent.textContent = "Tow Prosent: " + player.twoPercent.toString(); + "%";
            points.textContent = "Points: " + player.points.toString();
            sg.appendChild(blueHead);
            sg.appendChild(name);
            sg.appendChild(tProsent);
            sg.appendChild(treeProsent);
            sg.appendChild(points);
            break;
        case "SF":
            sf.innerHTML = ""
            blueHead.textContent = "Smal Forward";
            name.textContent = player.playerName;
            treeProsent.textContent = "Tree Prosent: " + player.threePercent.toString(); + "%";
            tProsent.textContent = "Tow Prosent: " + player.twoPercent.toString(); + "%";
            points.textContent = "Points: " + player.points.toString();
            sf.appendChild(blueHead);
            sf.appendChild(name);
            sf.appendChild(tProsent);
            sf.appendChild(treeProsent);
            sf.appendChild(points);
            break;
        case "PF":
            pf.innerHTML = ""
            blueHead.textContent = "Point Forward";
            name.textContent = player.playerName;
            treeProsent.textContent = "Tree Prosent: " + player.threePercent.toString(); + "%";
            tProsent.textContent = "Tow Prosent: " + player.twoPercent.toString(); + "%";
            points.textContent = "Points: " + player.points.toString();
            pf.appendChild(blueHead);
            pf.appendChild(name);
            pf.appendChild(tProsent);
            pf.appendChild(treeProsent);
            pf.appendChild(points);
            break;
        case "C":
            c.innerHTML = ""
            blueHead.textContent = "Center";
            name.textContent = player.playerName;
            treeProsent.textContent = "Tree Prosent: " + player.threePercent.toString(); + "%";
            tProsent.textContent = "Tow Prosent: " + player.twoPercent.toString(); + "%";
            points.textContent = "Points: " + player.points.toString();
            c.appendChild(blueHead);
            c.appendChild(name);
            c.appendChild(tProsent);
            c.appendChild(treeProsent);
            c.appendChild(points);
            break;
    }

  

}









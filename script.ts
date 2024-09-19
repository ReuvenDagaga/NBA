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

const askNewPlayer: Req = {
    position: 'PG',
    twoPercent: 5,
    threePercent: 5,
    points: 5
}

console.log(getResaultFilter(askNewPlayer));
getResaultFilter(askNewPlayer);


const table = document.querySelector(".table") as HTMLTableElement;
const tbody = document.createElement("tbody") as HTMLTableSectionElement;
table.appendChild(tbody);


function pushPlayerToTable(players: Player[]) {
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







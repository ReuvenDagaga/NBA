var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _a;
var urlFilter = 'https://nbaserver-q21u.onrender.com/api/filter/';
function getResaultFilter(req) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(urlFilter, {
                        method: "POST",
                        body: JSON.stringify(req),
                        headers: { "Content-type": "application/json; charset=UTF-8" },
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    pushPlayerToTable(data);
                    return [2 /*return*/, data];
            }
        });
    });
}
var myForm = (_a = document.querySelector('#myForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) { event.preventDefault(); });
var selectOption = document.querySelector('#selectOption');
var points = document.querySelector('#points');
points.addEventListener('input', function () { return points.textContent = points.value; });
var pointstwoPercent = document.querySelector('#points-twoPercent');
pointstwoPercent.addEventListener('input', function () { return pointstwoPercent.textContent = pointstwoPercent.value; });
var pointsthreePercent = document.querySelector('#points-threePercent');
pointsthreePercent.addEventListener('input', function () { return pointsthreePercent.textContent = pointsthreePercent.value; });
var pointsLabel = document.querySelector('#pointsLabel');
var twoPercentLabel = document.querySelector('#twoPercentLabel');
var threePercentLabel = document.querySelector('#threePercentLabel');
pointsLabel.textContent = points.value;
twoPercentLabel.textContent = pointstwoPercent.value;
pointsthreePercent.textContent = pointsthreePercent.value;
function searchPlayers() {
    var askNewPlayer = {
        position: selectOption.value,
        twoPercent: Number(pointsthreePercent.value),
        threePercent: Number(pointstwoPercent.value),
        points: Number(points.value)
    };
    getResaultFilter(askNewPlayer);
}
var table = document.querySelector(".table");
var tbody = document.createElement("tbody");
table.appendChild(tbody);
function pushPlayerToTable(players) {
    tbody.innerHTML = "";
    players.forEach(function (p) {
        var trow = document.createElement("tr");
        var tPlayer = document.createElement("td");
        var tPosition = document.createElement("td");
        var tPoints = document.createElement("td");
        var tFG = document.createElement("td");
        var t3P = document.createElement("td");
        var tAction = document.createElement("td");
        var btnPushToFantasy = document.createElement("button");
        btnPushToFantasy.classList.add("btnPushToFantasy");
        btnPushToFantasy.textContent = "Add Damian to Current Team";
        tAction.appendChild(btnPushToFantasy);
        btnPushToFantasy.addEventListener('click', function (event) { return pushPlayerToFantasy(p); });
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
function pushPlayerToFantasy(player) {
    var pg = document.querySelector('#pg');
    var sg = document.querySelector('#sg');
    var sf = document.querySelector('#sf');
    var pf = document.querySelector('#pf');
    var c = document.querySelector('#c');
    var blueHead = document.createElement('p');
    blueHead.classList.add('blue-head');
    var name = document.createElement('p');
    var tProsent = document.createElement('p');
    var treeProsent = document.createElement('p');
    var points = document.createElement('p');
    switch (player.position) {
        case "PG":
            pg.innerHTML = "";
            blueHead.textContent = "Point Guard";
            name.textContent = player.playerName;
            treeProsent.textContent = "Tree Prosent: " + player.threePercent.toString();
            +"%";
            tProsent.textContent = "Tow Prosent: " + player.twoPercent.toString();
            +"%";
            points.textContent = "Points: " + player.points.toString();
            pg.appendChild(blueHead);
            pg.appendChild(name);
            pg.appendChild(tProsent);
            pg.appendChild(treeProsent);
            pg.appendChild(points);
            break;
        case "SG":
            sg.innerHTML = "";
            blueHead.textContent = "Shoting Guard";
            name.textContent = player.playerName;
            treeProsent.textContent = "Tree Prosent: " + player.threePercent.toString();
            +"%";
            tProsent.textContent = "Tow Prosent: " + player.twoPercent.toString();
            +"%";
            points.textContent = "Points: " + player.points.toString();
            sg.appendChild(blueHead);
            sg.appendChild(name);
            sg.appendChild(tProsent);
            sg.appendChild(treeProsent);
            sg.appendChild(points);
            break;
        case "SF":
            sf.innerHTML = "";
            blueHead.textContent = "Smal Forward";
            name.textContent = player.playerName;
            treeProsent.textContent = "Tree Prosent: " + player.threePercent.toString();
            +"%";
            tProsent.textContent = "Tow Prosent: " + player.twoPercent.toString();
            +"%";
            points.textContent = "Points: " + player.points.toString();
            sf.appendChild(blueHead);
            sf.appendChild(name);
            sf.appendChild(tProsent);
            sf.appendChild(treeProsent);
            sf.appendChild(points);
            break;
        case "PF":
            pf.innerHTML = "";
            blueHead.textContent = "Point Forward";
            name.textContent = player.playerName;
            treeProsent.textContent = "Tree Prosent: " + player.threePercent.toString();
            +"%";
            tProsent.textContent = "Tow Prosent: " + player.twoPercent.toString();
            +"%";
            points.textContent = "Points: " + player.points.toString();
            pf.appendChild(blueHead);
            pf.appendChild(name);
            pf.appendChild(tProsent);
            pf.appendChild(treeProsent);
            pf.appendChild(points);
            break;
        case "C":
            c.innerHTML = "";
            blueHead.textContent = "Center";
            name.textContent = player.playerName;
            treeProsent.textContent = "Tree Prosent: " + player.threePercent.toString();
            +"%";
            tProsent.textContent = "Tow Prosent: " + player.twoPercent.toString();
            +"%";
            points.textContent = "Points: " + player.points.toString();
            c.appendChild(blueHead);
            c.appendChild(name);
            c.appendChild(tProsent);
            c.appendChild(treeProsent);
            c.appendChild(points);
            break;
    }
}

let xnumber: number = 0;

function GeneratePage() {
    let buttonPlus = document.createElement("input");
    buttonPlus.setAttribute("type", "button");
    buttonPlus.setAttribute("value", "Плюс");
    buttonPlus.setAttribute("onclick", "SetH1()");
    document.body.append(buttonPlus);

    let buttonMinus = document.createElement("input");
    buttonMinus.setAttribute("type", "button");
    buttonMinus.setAttribute("value", "Минус");
    buttonMinus.setAttribute("onclick", `SetH1Minus(${10})`);
    document.body.append(buttonMinus);

    let h1 = document.createElement("h1");
    h1.setAttribute("id", "myH1");
    document.body.append(h1);
    h1.innerHTML = `Привет!`

    let selects = document.createElement("select");
    selects.setAttribute("id", "mySelect");

    for (var i = 0; i < 50; i++) {
        let options = document.createElement("option");
        options.innerHTML = `Опция ${i}`;
        selects.append(options);
    }
    document.body.append(selects);
}

function SetH1() {
    let x = document.getElementById('myH1');
    xnumber++;
    x.innerHTML = xnumber.toString();
}

function SetH1Minus(formal:number) {
    let x = document.getElementById('myH1');
    xnumber = xnumber - formal;
    x.innerHTML = xnumber.toString();

    if (xnumber <= 0) {
        x.remove();
    }
}
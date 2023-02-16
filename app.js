var xnumber = 0;
function GeneratePage() {
    var buttonPlus = document.createElement("input");
    buttonPlus.setAttribute("type", "button");
    buttonPlus.setAttribute("value", "Плюс");
    buttonPlus.setAttribute("onclick", "SetH1()");
    document.body.append(buttonPlus);
    var buttonMinus = document.createElement("input");
    buttonMinus.setAttribute("type", "button");
    buttonMinus.setAttribute("value", "Минус");
    buttonMinus.setAttribute("onclick", "SetH1Minus(".concat(10, ")"));
    document.body.append(buttonMinus);
    var h1 = document.createElement("h1");
    h1.setAttribute("id", "myH1");
    document.body.append(h1);
    h1.innerHTML = "\u041F\u0440\u0438\u0432\u0435\u0442!";
    var selects = document.createElement("select");
    selects.setAttribute("id", "mySelect");
    for (var i = 0; i < 50; i++) {
        var options = document.createElement("option");
        options.innerHTML = "\u041E\u043F\u0446\u0438\u044F ".concat(i);
        selects.append(options);
    }
    document.body.append(selects);
}
function SetH1() {
    var x = document.getElementById('myH1');
    xnumber++;
    x.innerHTML = xnumber.toString();
}
function SetH1Minus(formal) {
    var x = document.getElementById('myH1');
    xnumber = xnumber - formal;
    x.innerHTML = xnumber.toString();
    if (xnumber <= 0) {
        x.remove();
    }
}
//# sourceMappingURL=app.js.map
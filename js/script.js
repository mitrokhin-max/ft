function Imt() {  
    var h = parseFloat(document.getElementById("height").value);  
    var w = parseFloat(document.getElementById("weight").value);
    let imt = (w / ((h/100)**2)).toFixed(2);
    document.getElementById("imt").value = imt;   
};

function Exc() {  
    var vd = parseFloat(document.getElementById("vdoh").value);
    var vyd = parseFloat(document.getElementById("vydoh").value);
    let exc = vd - vyd;
    document.getElementById("excurtion").value = exc;   
};

function Sum() {  
    var kjs1 = parseFloat(document.getElementById("kjs1").value);
    var kjs2 = parseFloat(document.getElementById("kjs2").value);
    var kjs3 = parseFloat(document.getElementById("kjs3").value);
    let sum = kjs1 + kjs2 + kjs3;
    document.getElementById("sum").value = sum;   
};

function Pow() {  
    var r = parseFloat(document.getElementById("right").value);
    var l = parseFloat(document.getElementById("left").value);
    var w = parseFloat(document.getElementById("weight").value);
    let pow = (((r+l)/2/w)*100).toFixed(1);
    document.getElementById("power").value = pow;   
};

function Ird() {  
    var p1 = parseFloat(document.getElementById("p1").value);
    var p2 = parseFloat(document.getElementById("p2").value);
    var p3 = parseFloat(document.getElementById("p3").value);
    let ird = (4*(p1+p2+p3)-200)/10;
    document.getElementById("ird").value = ird;   
};
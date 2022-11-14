function sumat() {
    var m = parseInt(document.getElementById("m").value);
    var s = 0;
    for (n = 0; n <= m; n++) {
        var num = Math.pow((-1 / 3), n);
        var den = (2 * n) + 1;
        s = s + (num / den);

        var x = Math.sqrt(12) * s;

    }
    var f = x.toFixed(4);
    document.getElementById('Respuesta').innerHTML = f
}
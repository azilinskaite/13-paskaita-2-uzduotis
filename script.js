"use strict"

var valstybes = [ 
    {salis: "Jungtinė Karalystė", plotas: 242495, gyvSk: 67.886004},
    {salis: "Švedija", plotas: 450295, gyvSk: 10.402070},
    {salis: "Japonija", plotas: 377975, gyvSk: 125.927902},
    {salis: "Kirgizija", plotas: 199951, gyvSk: 6.729363},
    {salis: "Kenija", plotas: 582650, gyvSk: 48.466928},
]

for(var x of valstybes){

    var gyvPl = x.plotas / x.gyvSk
    var plMetrais = (gyvPl * 1000000).toFixed(2)

    console.log("Šalis: " + x.salis + ", joje gyvena " + x.gyvSk.toFixed(2) + " mln. gyventojų")
    console.log("Valstybės plotas: " + x.plotas + " km², plotas tenkantis vienam gyventojui: " + plMetrais + " m².")
    console.log("=====")
    }


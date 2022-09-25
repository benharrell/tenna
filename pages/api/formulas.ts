
// https://www.changpuak.ch/electronics/Dipole_folded.php

export function folded_dipole(freq: number, velocityFactor = 0.9209525, asMetric = true)
{
    
    // 1 " is 25.4 mm
    const lengthunit = asMetric ? 25.4 : 1;
    const precision = asMetric ? 100 : 10;

    // speed of light is 3E5
    var lambda = 3E5 / (freq * lengthunit);
     
    // a.value = Math.round(lambda * precision * 0.19 * velocityFactor) / precision ;
    // b.value = Math.round(lambda * precision * 0.10 * velocityFactor) / precision ;
    // c.value = Math.round(lambda * precision * 0.40 * velocityFactor) / precision ;
    // d.value = Math.round(lambda * precision * 0.20 * velocityFactor) / precision ;
    // gap.value = Math.round(lambda * precision * 0.01 * velocityFactor) / precision ;
    // r.value = Math.round(lambda * precision * ( 0.10 / 3.141592653 ) * velocityFactor) / precision ;
    // rod.value = Math.round(lambda * precision / 300 ) / precision ;
    // total.value = Math.round(lambda * precision * velocityFactor) / precision ;
    
    // https://www.nonstopsystems.com/radio/frank_radio_antenna_folded_dipole.htm

}


export function dipole(freq: number) {
    // 468 / frequency (MHz) = length of wire in feet. 
}

// function calculateLinkedAntDesElements(b) {
//   var a = 0, c = 0, d = 0, l = 0, f = 0, c = 0, k;

//   b = parseInt($("#selLinkedAntDesBands").val());

//   var m = parseFloat($("#selLAntDesSettingsVFactor").val()) / 100,
//     e = SPEED_OF_LIGHT * m / 4E3,
//     h = $("#inpLAntDesHighestFreq"),
//     g = $("#inpLAntDesMidFreq1"),
//     p = $("#inpLAntDesMidFreq2"),
//     q = $("#inpLAntDesMidFreq3"),
//     r = $("#inpLAntDesMidFreq4"),
//     n = $("#inpLAntDesLowestFreq"),
//     s = $("#divLADResultsHighestFreq"),
//     w = $("#divLADResultsMidFreq1"),
//     y = $("#divLADResultsMidFreq2"),
//     B = $("#divLADResultsMidFreq3"),
//     E = $("#divLADResultsMidFreq4"),
//     t = $("#divLADResultsLowestFreq"),
//     G = $("#divLADResultsLength1"),
//     d = $("#divLADResultsLength2"),
//     l = $("#divLADResultsLength3"),
//     f = $("#divLADResultsLength4"),
//     z = $("#divLADResultsLength5"),
//     u = $("#divLADResultsLength6"),
//     h = parseInt(isNaN(h.val()) || "" == h.val().trim() ? 0 : h.val()),
//     g = parseInt(isNaN(g.val()) || "" == g.val().trim() ? 0 : g.val()),
//     p = parseInt(isNaN(p.val()) || "" == p.val().trim() ? 0 : p.val()),
//     q = parseInt(isNaN(q.val()) || "" == q.val().trim() ? 0 : q.val()),
//     r = parseInt(isNaN(r.val()) || "" == r.val().trim() ? 0 : r.val()),
//     n = parseInt(isNaN(n.val()) || "" == n.val().trim() ? 0 : n.val());

//   s.html(h);

//   w.html("-");

//   y.html("-");

//   B.html("-");

//   E.html("-");

//   t.html("-");

//   d.html("-");

//   l.html("-");

//   f.html("-");

//   z.html("-");

//   u.html("-");


//   var s = userInputLengthsToMeters("centsupp"),
//     C = userInputLengthsToMeters("endsupp"),
//     x = userInputLengthsToMeters("ropeext"),
//     D = s - C;

//   if (0 > x) jAlert("Check your rope extender length",
//     "Calculate antenna section lengths");

//   else if (1800 > h)
//     jAlert("Lowest acceptable frequency is 1800kHz", "Calculate antenna section lengths");

//   else {
//     a = e / h;

//     if (1 < b) {
//       if (1800 > n) {
//         jAlert("Lowest acceptable frequency is 1800kHz",
//           "Calculate antenna section lengths");

//         return
//       } c = e / n
//     } k = 1 == b ? a : c;

//     if (Math.abs(D) >= k + x) $("#spanLAntDesApexHalfAngle").html("!!!"), alert("Check your support heights!");

//     else {
//       antDims = { hf: 0, mf1: 0, mf2: 0, mf3: 0, mf4: 0, lf: 0, totalLen: 0, apexAngle: 0, poleLen: s, endSuppLen: C, extLen: x, footLen: 0, wireEndHt: 0 };

//       var A = 1;

//       if (0 == D) {
//         var v = 90;
//         antDims.wireEndHt = s
//       }
//       else {
//         var H = 0;
//         do {
//           H++;
//           prevTotalLen = k;

//           for (var F = Math.asin(D / (k + x)), v = 90 - F / Math.PI * 180,
//             a = aInvVeeCorrections.length - 1;
//             0 <= a;
//             a--)
//             if (degsRangeStart = aInvVeeCorrections[a][0], corrRangeStart =
//               aInvVeeCorrections[a][1], v <= degsRangeStart && v >= degsRangeStart - 5) {
//               corrRange = aInvVeeCorrections[a][1] - aInvVeeCorrections[a - 1][1];

//               A = corrRangeStart - corrRange * (degsRangeStart - v) / 5;

//               break
//             } a = e / h * A;
//           1 < b && (c = e / n * A);

//           k = 1 == b ? a : c
//         } while (!eq(k, prevTotalLen));

//         deltaH = k * Math.sin(F);

//         antDims.wireEndHt = s - deltaH
//       } antDims.hf = a;

//       antDims.apexAngle = v;

//       antDims.totalLen = k;

//       $("#spanLAntDesTotalAntLength").html(formatLength(k));

//       $("#spanLAntDesApexHalfAngle").html(v.toFixed(1) + "&deg;
//       ");
      
//       $("#spanLAntDesWireEndHeight").html(formatLength(antDims.wireEndHt));

//       G.html(formatLength(a));

//       e = SPEED_OF_LIGHT * m * A / 4E3;

//       switch (b) {
//         case 2:
//           if (h <= n) {
//             jAlert("Check your frequency inputs", "Calculate antenna section lengths");
//             return
//           }
//           t.html(n);

//           antDims.lf = e / n - a;

//           u.html(formatLength(antDims.lf));

//           break;
//         case 3:
//           if (1800 > n) {
//             jAlert("Lowest acceptable frequency is 1800kHz", "Calculate antenna section lengths");
//             return
//           }
//           if (g <= n || h <= g) {
//             jAlert("Check your frequency inputs", "Calculate antenna section lengths");

//             return
//           } w.html(g);
//           t.html(n);
//           c = e / g;
//           antDims.mf1 = c - a;
//           d.html(formatLength(antDims.mf1));

//           antDims.lf = e / n - c;
//           u.html(formatLength(antDims.lf));
//           break;
//         case 4: if (1800 > n) {
//           jAlert("Lowest acceptable frequency is 1800kHz", "Calculate antenna section lengths");
//           return
//         } if (p <= n || g <= p || h <= g) {
//           jAlert("Check your frequency inputs", "Calculate antenna section lengths");
//           return
//         } w.html(g);
//           y.html(p);
//           t.html(n);
//           c = e / g;
//           antDims.mf1 = c - a;
//           d.html(formatLength(antDims.mf1));
//           d = e / p;
//           antDims.mf2 = d - c;
//           l.html(formatLength(antDims.mf2));
//           antDims.lf = e / n - d;
//           u.html(formatLength(antDims.lf));
//           break;
//         case 5: if (1800 > n) {
//           jAlert("Lowest acceptable frequency is 1800kHz",
//             "Calculate antenna section lengths");
//           return
//         } if (q <= n || p <= q || g <= p || h <= g) {
//           jAlert("Check your frequency inputs", "Calculate antenna section lengths");
//           return
//         } w.html(g);
//           y.html(p);
//           B.html(q);
//           t.html(n);
//           c = e / g;
//           antDims.mf1 = c - a;
//           d.html(formatLength(antDims.mf1));
//           d = e / p;
//           antDims.mf2 = d - c;
//           l.html(formatLength(antDims.mf2));
//           l = e / q;
//           antDims.mf3 = l - d;
//           f.html(formatLength(antDims.mf3));
//           antDims.lf = e / n - l;
//           u.html(formatLength(antDims.lf));
//           break;
//         case 6: if (1800 > n) {
//           jAlert("Lowest acceptable frequency is 1800kHz", "Calculate antenna section lengths");

//           return
//         } if (r <= n || q <= r || p <= q || g <= p || h <= g) {
//           jAlert("Check your frequency inputs", "Calculate antenna section lengths");
//           return
//         } w.html(g);
//           y.html(p);
//           B.html(q);
//           E.html(r);
//           t.html(n);
//           c = e / g;
//           antDims.mf1 = c - a;
//           d.html(formatLength(antDims.mf1));
//           d = e / p;
//           antDims.mf2 = d - c;
//           l.html(formatLength(antDims.mf2));
//           l = e / q;
//           antDims.mf3 = l - d;
//           f.html(formatLength(antDims.mf3));
//           f = e / r;
//           antDims.mf4 = f - l;
//           z.html(formatLength(antDims.mf4));
//           antDims.lf = e / n - f;
//           u.html(formatLength(antDims.lf))
//       }resultsCalculated = !0;
//       e = (new Date).toISOString();
//       e = e.replace("T",
//         " ");
//       e = e.substr(0, 19) + "z";
//       z = $("#selLinkedAntDesUnits").val();
//       objAntFave = new AntennaFavourite("", e, b, h, g, p, q, r, n, z, s, C, x);
//       drawAntennaOnCanvas()
//     }
//   }
// }



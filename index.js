let data = `1,100,0
2,236,100
3,347,336
4,448,683
5,540,1131
6,629,1671
7,712,2300
8,793,3012
9,871,3805
10,947,4676
11,1021,5623
12,1092,6644
13,1164,7736
14,1232,8900
15,1300,10132
16,1368,11432
17,1432,12800
18,1497,14232
19,1561,15729
20,1624,17290
21,1686,18914
22,1748,20600
23,1807,22348
24,1868,24155
25,1927,26023
26,1986,27950
27,2044,29936
28,2102,31980
29,2158,34082
30,2215,36240
31,2272,38455
32,2326,40727
33,2382,43053
34,2437,45435
35,2491,47872
36,2545,50363
37,2599,52908
38,2652,55507
39,2705,58159
40,2757,60864
41,2810,63621
42,2861,66431
43,2913,69292
44,2964,72205
45,3015,75169
46,3066,78184
47,3116,81250
48,3167,84366
49,3216,87533
50,3266,90749
51,3315,94015
52,3364,97330
53,3413,100694
54,3462,104107
55,3510,107569
56,3559,111079
57,3606,114638
58,3654,118244
59,3702,121898
60,3749,125600
61,3796,129349
62,3843,133145
63,3890,136988
64,3937,140878
65,3983,144815
66,4029,148798
67,4075,152827
68,4122,156902
69,4166,161024
70,4213,165190
71,4257,169403
72,4303,173660
73,4348,177963
74,4393,182311
75,4438,186704
76,4482,191142
77,4527,195624
78,4571,200151
79,4615,204722
80,4659,209337
81,4704,213996
82,4746,218700
83,4791,223446
84,4834,228237
85,4877,233071
86,4921,237948
87,4963,242869
88,5007,247832
89,5049,252839
90,5093,257888
91,5134,262981
92,5178,268115
93,5219,273293
94,5262,278512
95,5304,283774
96,5346,289078
97,5389,294424
98,5429,299813
99,5472,305242
100,5513,310714`

// Parsing data
let allXpReq = [];
let allTotalXp = [];
{
    let split = data.split("\n");
    for (let i in split) {
        splitData = split[i].split(",");
        allXpReq.push(splitData[1]);
        allTotalXp.push(splitData[2]);
    }
}

let levelBar = document.getElementById("level");
let xpBar = document.getElementById("xp");
let submitButton = document.getElementById("submit");

submitButton.onclick = () => {

    if (!levelBar.value || !xpBar.value) {
        alert("Please input values in the fields");
        return;
    }

    level = parseInt(levelBar.value);
    xp = parseInt(xpBar.value);

    // Check if xp and level are correct
    if (level < 1 || level > 99) {
        alert("Please input a level between 1 and 99");
        return;
    }

    required = allXpReq[level - 1];
    if (xp < 0 || xp > required - 1) {
        alert("Please input an xp-value between 0 and " + (required - 1));
        return;
    }

    levelBar.value = "";
    xpBar.value = "";

    total = parseInt(allTotalXp[level - 1]);
    progress = ((total + xp) / 310714 * 100).toFixed(2);
    alert("You are " + progress + "%" + " towards being able to prestige!");
}
/**
 * Created by trilok on 5/1/2016.
 */

function sort(strng){
    var map={};
    var split_arr=strng.split(" "); //spliting the string
    for(var i=0;i<split_arr.length;i++){
        var number_arr=split_arr[i].split(""); //spliting the number to calculate weight
        var sum=0;
        for(var j=0;j<number_arr.length;j++){
            sum+=parseInt(number_arr[j]);
        }
        // checking whether we have weight already existing
        if (map.hasOwnProperty(sum)) {
            map[sum].push(number_arr.join(""))
        }
        else
            map[sum] = [number_arr.join("")];
    }

    var sorted_map=[];
    //sorting the equal weighed numbers according to their length in descending order(if weight is equal. we sort according to the length)
    for (var key in map) {
        if (map.hasOwnProperty(key)) {
            sorted_map.push([key,map[key].sort(function(a,b){
                return -(a.length- b.length);
            })]);
        }
    }
    return sorted_map.map(function(a){
        return a[1].join(" ");
    }).join(" ");
}
console.log(sort("350 44 67 90 9 11 11 2 20 2000"));
console.log(sort("450 1 1 001 2 99 099 0099"));


editing again
we can edit as many times we want
// weight of 350=3+5+0=8
//if both weights are equal, We consider the number as string and sort according to string length.
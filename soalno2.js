function findLongestWord(str) {
    var t = 0;
    var ts = str.split(' ');
    for(var i=0; i<ts.length;i++){
    if(ts[i].length>t){
    str = ts[i];
    t = ts[i].length;
    }
    }
    return str;
    }
    var str = findLongestWord('Saya sangat senang mengerjakan soal algoritma');
    // console.log('jumlah huruf terpanjang dari '+kata2+' adalah '+str+' dengan jumlah huruf '+str.length);
    console.log(str)
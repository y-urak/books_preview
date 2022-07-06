//CSVファイルを読み込む関数getCSV()の定義
function getCSV(csvFilePath){
    var req = new XMLHttpRequest(); // HTTPでファイルを読み込むためのXMLHttpRrequestオブジェクトを生成
    req.open("get", csvFilePath, true); // アクセスするファイルを指定
    req.send(null); // HTTPリクエストの発行
	
    // レスポンスが返ってきたらconvertCSVtoArray()を呼ぶ	
    req.onload = function(){
	    convertCSVtoArray(req.responseText); // 渡されるのは読み込んだCSVデータ
    }
}

var result = []; // 最終的な二次元配列を入れるための配列
// 読み込んだCSVデータを二次元配列に変換する関数convertCSVtoArray()の定義
function convertCSVtoArray(str){ // 読み込んだCSVデータが文字列として渡される
    var tmp = str.split("\n"); // 改行を区切り文字として行を要素とした配列を生成
 
    // 各行ごとにカンマで区切った文字列を要素とした二次元配列を生成
    for(var i=0;i<tmp.length;++i){
        result[i] = tmp[i].split(',');
    }
    //alert(result[1][result[1].length-1])
    //複数のデータを指定して情報を取得
    for(var i=0;i<result.length;i++){
        strArr=result[i][result[i].length-1].split('/');
        console.log(strArr[7]);
        urlToImage(strArr[7]);
    }
}

function urlToImage(str){
    var baseURL='https://elib.maruzen.co.jp/app/images/l/'
    var imgArr=[
        baseURL+'0/'+str+'.jpg',
        baseURL+'1/'+str+'.jpg',
        baseURL+'2/'+str+'.jpg',
        baseURL+'3/'+str+'.jpg',
        baseURL+'4/'+str+'.jpg',
        baseURL+'5/'+str+'.jpg',
        baseURL+'6/'+str+'.jpg',
        baseURL+'7/'+str+'.jpg',
        baseURL+'8/'+str+'.jpg',
        baseURL+'9/'+str+'.jpg'
    ];
    sleep(200);
    for (var i = 0; i < imgArr.length; i++) {
        imagecheck(imgArr[i]);
        console.log("slept");
    }
}
var imageUrlList=[];
function imagecheck(url) {
    var newImage = new Image();
    // 画像があった時の処理
    newImage.onload = function() {
        //console.log('あり' + url);
        imageUrlList.push(url);
        var elem = document.getElementById("result");
        outputStr="";
        for(var i=0;i<imageUrlList.length;i++){
            outputStr+=imageUrlList[i];
            if(i<imageUrlList.length-1){
                outputStr+="<br/>"
            }
        }
        elem.innerHTML = "<span style='color: red;'>"+outputStr+"</span>";
    }
    // 画像がなかった時の処理
    newImage.onerror = function() {
        //console.log('なし' + url);
    }
    newImage.src = url;
}

/**
* Delay for a number of milliseconds
*/
function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
function outputImageUrlListToCsv(){
    //画像URLをarrに結合
    for(var i=0; i<imageUrlList.length;i++){
        result[i].push(imageUrlList[i])
    }
    var csvContent = "data:text/csv;charset=utf-8," + result.map(e => e.join(",")).join("\n");
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", file_name.split('/')[1].split('.')[0]+"_changed"+".csv");
    document.body.appendChild(link); 
    link.click();
}

let file_name = "books_info/no28.csv";
getCSV(file_name); //最初に実行される
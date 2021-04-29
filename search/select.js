
var Q1yes = document.querySelector('.Q1ans .yes');
var Q2yes = document.querySelector('.Q2ans .yes');
var Q3yes = document.querySelector('.Q3ans .yes');
var Q4yes = document.querySelector('.Q4ans .yes');
var Q1no = document.querySelector('.Q1ans .no');
var Q2no = document.querySelector('.Q2ans .no');
var Q3no = document.querySelector('.Q3ans .no');
var Q4no = document.querySelector('.Q4ans .no');
var content = document.querySelector('.birthday .swiper-wrapper');
var num = document.querySelector('.num');
var Xmas = document.querySelector('.list_Xmas');
var mom = document.querySelector('.list_mother');
var father = document.querySelector('.list_father');
var marry = document.querySelector('.list_marry');
var home = document.querySelector('.list_home');
var rei = document.querySelector('.list_rei');
var Valentine = document.querySelector('.list_Valentine');
var birthday = document.querySelector('.list_birthday');
var all = [
    {name:'01',url:'../img/syokuhin/001.jpg',type:1,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'02',url:'../img/syokuhin/002.jpg',type:2,Q1:3,Q2:2,Q3:3,Q4:3},
    {name:'03',url:'../img/syokuhin/003.jpg',type:3,Q1:1,Q2:3,Q3:3,Q4:3},
    {name:'04',url:'../img/syokuhin/004.jpg',type:4,Q1:3,Q2:3,Q3:3,Q4:3},
    {name:'05',url:'../img/syokuhin/005.jpg',type:1,Q1:1,Q2:3,Q3:3,Q4:3},
    {name:'06',url:'../img/syokuhin/006.jpg',type:2,Q1:3,Q2:2,Q3:3,Q4:3},
    {name:'07',url:'../img/syokuhin/007.jpg',type:3,Q1:2,Q2:1,Q3:3,Q4:3},
    {name:'08',url:'../img/syokuhin/008.jpg',type:4,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'09',url:'../img/syokuhin/009.jpg',type:1,Q1:2,Q2:1,Q3:3,Q4:3},
    {name:'10',url:'../img/syokuhin/010.jpg',type:2,Q1:3,Q2:1,Q3:3,Q4:3},
    {name:'11',url:'../img/syokuhin/011.jpg',type:3,Q1:3,Q2:1,Q3:3,Q4:3},
    {name:'12',url:'../img/syokuhin/012.jpg',type:4,Q1:1,Q2:3,Q3:3,Q4:3},
    {name:'13',url:'../img/syokuhin/013.jpg',type:1,Q1:2,Q2:3,Q3:1,Q4:1},
    {name:'14',url:'../img/syokuhin/014.jpg',type:2,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'15',url:'../img/syokuhin/015.jpg',type:3,Q1:2,Q2:2,Q3:3,Q4:3},
    {name:'16',url:'../img/syokuhin/016.jpg',type:4,Q1:2,Q2:1,Q3:3,Q4:3},
    {name:'17',url:'../img/syokuhin/017.jpg',type:1,Q1:1,Q2:1,Q3:3,Q4:3},
    {name:'18',url:'../img/syokuhin/018.jpg',type:2,Q1:2,Q2:1,Q3:3,Q4:1},
    {name:'19',url:'../img/syokuhin/019.jpg',type:3,Q1:2,Q2:3,Q3:3,Q4:1},
    {name:'20',url:'../img/syokuhin/020.jpg',type:4,Q1:2,Q2:3,Q3:3,Q4:1},
    {name:'21',url:'../img/syokuhin/021.jpg',type:1,Q1:2,Q2:3,Q3:3,Q4:1},
    {name:'22',url:'../img/syokuhin/022.jpg',type:2,Q1:3,Q2:1,Q3:3,Q4:3},
    {name:'23',url:'../img/syokuhin/023.jpg',type:3,Q1:3,Q2:1,Q3:3,Q4:3},
    {name:'24',url:'../img/syokuhin/024.jpg',type:4,Q1:3,Q2:1,Q3:3,Q4:3},
    {name:'25',url:'../img/syokuhin/025.jpg',type:1,Q1:2,Q2:1,Q3:3,Q4:1},
    {name:'26',url:'../img/syokuhin/026.jpg',type:2,Q1:2,Q2:1,Q3:3,Q4:1},
    {name:'27',url:'../img/syokuhin/027.jpg',type:3,Q1:1,Q2:2,Q3:3,Q4:1},
    {name:'28',url:'../img/syokuhin/028.jpg',type:4,Q1:3,Q2:1,Q3:3,Q4:3},
    {name:'29',url:'../img/syokuhin/029.jpg',type:1,Q1:1,Q2:1,Q3:3,Q4:1},
    {name:'30',url:'../img/syokuhin/030.jpg',type:2,Q1:1,Q2:1,Q3:3,Q4:3},
    {name:'31',url:'../img/syokuhin/031.jpg',type:3,Q1:1,Q2:1,Q3:3,Q4:3},
    {name:'32',url:'../img/syokuhin/032.jpg',type:4,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'33',url:'../img/syokuhin/033.jpg',type:1,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'34',url:'../img/syokuhin/034.jpg',type:2,Q1:1,Q2:3,Q3:1,Q4:3},
    {name:'35',url:'../img/syokuhin/035.jpg',type:3,Q1:2,Q2:1,Q3:3,Q4:1},
    {name:'36',url:'../img/syokuhin/036.jpg',type:4,Q1:2,Q2:2,Q3:3,Q4:3},
    {name:'37',url:'../img/syokuhin/037.jpg',type:1,Q1:2,Q2:2,Q3:3,Q4:3},
    {name:'38',url:'../img/syokuhin/038.jpg',type:1,Q1:2,Q2:1,Q3:3,Q4:3},
    {name:'39',url:'../img/syokuhin/039.jpg',type:2,Q1:2,Q2:1,Q3:3,Q4:1},
    {name:'40',url:'../img/syokuhin/040.jpg',type:3,Q1:2,Q2:1,Q3:3,Q4:1},
    {name:'41',url:'../img/syokuhin/041.jpg',type:4,Q1:2,Q2:1,Q3:3,Q4:1},
    {name:'42',url:'../img/syokuhin/042.jpg',type:2,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'43',url:'../img/syokuhin/043.jpg',type:3,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'44',url:'../img/syokuhin/044.jpg',type:4,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'45',url:'../img/syokuhin/045.jpg',type:2,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'46',url:'../img/syokuhin/046.jpg',type:3,Q1:2,Q2:2,Q3:3,Q4:3},
    {name:'47',url:'../img/syokuhin/047.jpg',type:4,Q1:2,Q2:2,Q3:3,Q4:3},
    {name:'48',url:'../img/syokuhin/048.jpg',type:1,Q1:2,Q2:2,Q3:3,Q4:3},
    {name:'49',url:'../img/syokuhin/049.jpg',type:1,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'50',url:'../img/syokuhin/050.jpg',type:2,Q1:2,Q2:1,Q3:3,Q4:3},
    {name:'51',url:'../img/syokuhin/041.jpg',type:3,Q1:2,Q2:1,Q3:3,Q4:3},
    {name:'52',url:'../img/syokuhin/052.jpg',type:4,Q1:2,Q2:1,Q3:3,Q4:3},
    {name:'53',url:'../img/syokuhin/053.jpg',type:1,Q1:2,Q2:1,Q3:3,Q4:1},
    {name:'54',url:'../img/syokuhin/054.jpg',type:2,Q1:2,Q2:1,Q3:3,Q4:3},
    {name:'55',url:'../img/syokuhin/055.jpg',type:3,Q1:2,Q2:1,Q3:3,Q4:3},
    {name:'56',url:'../img/syokuhin/056.jpg',type:4,Q1:1,Q2:1,Q3:3,Q4:3},
    {name:'57',url:'../img/syokuhin/057.jpg',type:1,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'58',url:'../img/syokuhin/058.jpg',type:2,Q1:1,Q2:1,Q3:3,Q4:3},
    {name:'59',url:'../img/syokuhin/059.jpg',type:3,Q1:1,Q2:1,Q3:3,Q4:3},
    {name:'60',url:'../img/syokuhin/060.jpg',type:4,Q1:3,Q2:3,Q3:1,Q4:3},
    {name:'61',url:'../img/syokuhin/061.jpg',type:1,Q1:1,Q2:1,Q3:3,Q4:3},
    {name:'62',url:'../img/syokuhin/062.jpg',type:2,Q1:1,Q2:2,Q3:3,Q4:3},
    {name:'63',url:'../img/syokuhin/063.jpg',type:3,Q1:2,Q2:1,Q3:3,Q4:3},
    {name:'64',url:'../img/syokuhin/064.jpg',type:4,Q1:1,Q2:1,Q3:3,Q4:3},
    {name:'65',url:'../img/syokuhin/065.jpg',type:1,Q1:1,Q2:1,Q3:3,Q4:3},
    {name:'66',url:'../img/syokuhin/066.jpg',type:2,Q1:2,Q2:1,Q3:3,Q4:3},
    {name:'67',url:'../img/syokuhin/067.jpg',type:3,Q1:3,Q2:1,Q3:3,Q4:3},
    {name:'68',url:'../img/syokuhin/068.jpg',type:4,Q1:3,Q2:1,Q3:3,Q4:3},
    {name:'69',url:'../img/syokuhin/069.jpg',type:1,Q1:1,Q2:2,Q3:3,Q4:3},
    {name:'70',url:'../img/syokuhin/070.jpg',type:2,Q1:1,Q2:3,Q3:3,Q4:3},
    {name:'71',url:'../img/syokuhin/071.jpg',type:3,Q1:1,Q2:2,Q3:3,Q4:3},
    {name:'72',url:'../img/syokuhin/072.jpg',type:4,Q1:1,Q2:2,Q3:3,Q4:3},
    {name:'73',url:'../img/syokuhin/073.jpg',type:1,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'74',url:'../img/syokuhin/074.jpg',type:2,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'75',url:'../img/syokuhin/075.jpg',type:3,Q1:2,Q2:3,Q3:3,Q4:3},
    {name:'76',url:'../img/syokuhin/076.jpg',type:4,Q1:2,Q2:3,Q3:1,Q4:3},
    {name:'77',url:'../img/syokuhin/077.jpg',type:2,Q1:1,Q2:1,Q3:3,Q4:3},
    ];
var Q1ans= 0;
var Q2ans= 0;
var Q3ans= 0;
var Q4ans= 0;
var step = 0;
console.log(birthday)
function check(){
    var select = all.filter(done);
    content.innerHTML="";
    for(let i=0;i<select.length;i++){
        content.insertAdjacentHTML('beforeend', 
        '<div class="swiper-slide"><div class="slide-img"><img src="' + select[i].url + '"></div></div>'
        ); 
    }
    num.innerHTML= select.length + '/'+ 77 ;
    console.log(select);
    if(select.length == 0){
        content.innerHTML= "<p>すみません、<br>合っている商品はありません。</p>";
    }
};
function done (item){
    if(step == 0){
        return item.type == typeans;
    }else if(step == 1){
        return item.type == typeans && (item.Q3 == Q3ans || item.Q3 == 3);            
    }else if(step ==2){
        return item.type == typeans && (item.Q3 == Q4ans || item.Q3 == 3) && (item.Q4 == Q4ans|| item.Q4 == 3);
    }else if(step ==3){
        return item.type == typeans && (item.Q3 == Q3ans || item.Q3 == 3) && (item.Q4 == Q4ans|| item.Q4 == 3) && (item.Q1 == Q1ans || item.Q1 == 3);
    }else if(step ==4){
        return item.type == typeans && (item.Q1 == Q1ans || item.Q1 == 3) && (item.Q2 == Q2ans|| item.Q2 == 3) && (item.Q3 == Q3ans || item.Q3 == 3) && (item.Q4 == Q4ans || item.Q4 == 3);
    };
}
birthday.addEventListener('click',function(){
    step = 0;
    typeans = 1;
    console.log(step);
    check();
    console.log("debug");
});
marry.addEventListener('click',function(){
    step = 0;
    typeans = 1;
    console.log(step);
    check();
    console.log("debug");
});
Xmas.addEventListener('click',function(){
    step = 0;
    typeans = 2;
    console.log(step);
    check();
    console.log("debug");
});
father.addEventListener('click',function(){
    step = 0;
    typeans = 4;
    console.log(step);
    check();
    console.log("debug");
});
mom.addEventListener('click',function(){
    step = 0;
    typeans = 3;
    console.log(step);
    check();
    console.log("debug");
});
home.addEventListener('click',function(){
    step = 0;
    typeans = 3;
    console.log(step);
    check();
    console.log("debug");
});
rei.addEventListener('click',function(){
    step = 0;
    typeans = 4;
    console.log(step);
    check();
    console.log("debug");
});
Valentine.addEventListener('click',function(){
    step = 0;
    typeans = 2;
    console.log(step);
    check();
    console.log("debug");
});
Q1yes.addEventListener('click',function(){
    step = 3;
    Q1ans = 1;
    console.log(step);
    check();
});

Q1no.addEventListener('click',function (){
    step = 3;
    Q1ans = 2;
    console.log(step);
    check();
});

Q2yes.addEventListener('click',function (){
    step = 4;
    Q2ans = 1;
    console.log(step);
    check();
});

Q2no.addEventListener('click',function (){
    step = 4;
    Q2ans = 2;
    console.log(step);
    check();
});
Q3yes.addEventListener('click',function (){
    step = 1;
    Q3ans = 1;
    console.log(step);
    check();
});

Q3no.addEventListener('click',function (){
    step = 1;
    Q3ans = 2;
    console.log(step);
    check();
});
Q4yes.addEventListener('click',function (){
    step = 2;
    Q4ans = 1;
    console.log(step);
    check();
});

Q4no.addEventListener('click',function (){
    step = 2;
    Q4ans = 2;
    console.log(step);
    check();
});
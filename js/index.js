

window.onload=function(){
	var as=getClass('banner-box')[0].getElementsByTagName('a');
	var lis=getClass('btn3')[0].getElementsByTagName('li');
	var index=0;
	var t=setInterval(move,3000);
	function move(){      //时间间隔函数  图片轮播
			index++;      //index下标每次加1
			if(index>as.length-1){    //判断 条件成立 index重新赋值为0
				index=0;
			}
			for(var i=0;i<as.length;i++){
				animate(as[i],{opacity:0},1000);   
                lis[i].style.background="";
			}
			animate(as[index],{opacity:1},1000);
			lis[index].style.background="#fff";
		}

    for(var i=0;i<lis.length;i++){   //选项卡思想
		lis[i].aa=i;   
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				animate(as[j],{opacity:0},1000);
				lis[j].style.background="";
			}
			animate(as[this.aa],{opacity:1},1000);
			lis[this.aa].style.background="#fff";
		}
	}

	var boxs=getClass('banner')[0];
	boxs.onmouseover=function(){
		clearInterval(t);    //清除时间函数
	}
	boxs.onmouseout=function(){
		t=setInterval(move,3000);  //启用
	}

	var btnleft=getClass('btn1')[0];
	btnleft.onclick=function(){  
		    index--;   
			if(index==-1){ 
				index=as.length-1;
			}
			for(var i=0;i<as.length;i++){
				animate(as[i],{opacity:0},1000);
                lis[i].style.background="";
			}
			animate(as[index],{opacity:1},1000);
			lis[index].style.background="#fff";
     
	}
	var btnright=getClass('btn2')[0];
	btnright.onclick=function(){
		move();
	}



 //  选项卡  1 2 3
var xzs=getClass('xz');
var dapeiTus=getClass('dapeiTu');
var aas,ds;
for(var i=0;i<xzs.length;i++){
	aas=xzs[i].getElementsByTagName('a');
	ds=dapeiTus[i].getElementsByClassName('dapeiRight');
	tab(aas,ds);
}
function tab(links,lists,color){
	for(var i=0;i<links.length;i++){
		links[i].bb=i;
		links[i].onmouseover=function(){
			for(var j=0;j<lists.length;j++){
				lists[j].style.display="none";
				links[j].style.color="";
				links[j].style['border-bottom']="";
			}
			lists[this.bb].style.display="block";
			links[this.bb].style.color="#ff6700";
			links[this.bb].style['border-bottom']="2px solid #ff6700";
	    }
    }
}

//  小米明星单品

var mxs=getClass('mx-box2')[0];
var bs=getClass('mingxingBox',mxs);
var btns=getClass('mingxing')[0].getElementsByTagName('div');
var bw=parseInt(getStyle(bs[0],'width'));
mxs.style.width=bw*bs.length+'px';
var cc=0;
var time=setInterval(aaa,6000);
function aaa(){
	cc++;
	if(cc==bs.length){
		cc=0;
	}
	animate(mxs,{marginLeft:-cc*bw},800);
}
var right=getClass('mxbtn')[0];
    right.onclick=function(){
    cc++;
	    if(cc==bs.length){
			cc=bs.length-1;
		}
		animate(mxs,{marginLeft:-cc*bw},800);
}
var left=getClass('mxbtn2')[0];
	left.onclick=function(){  
		cc--;
		if(cc==-1){
			cc=0;
		}
		animate(mxs,{marginLeft:-cc*bw},800);     
	}


//  为你推荐

var tjs=getClass('tj-box2')[0];
var tj=getClass('wntj',tjs);
// var bts=getClass('mingxing')[0].getElementsByTagName('div');
var ww=parseInt(getStyle(tj[0],'width'));
tjs.style.width=ww*tj.length+'px';
var ccc=0;
var tt=setInterval(bbb,6000);
function bbb(){
	ccc++;
	if(ccc==tj.length){
		ccc=0;
	}
	animate(tjs,{marginLeft:-ccc*ww},800);
}
var tjr=getClass('mxbtn')[1];
tjr.onclick=function(){
    ccc++;
	if(ccc==tj.length){
		ccc=tj.length-1;
	}
	animate(tjs,{marginLeft:-ccc*ww},800);
}
var tjl=getClass('mxbtn2')[1];
tjl.onclick=function(){  
	ccc--;
	if(ccc==-1){
		ccc=0;
	}
	animate(tjs,{marginLeft:-ccc*ww},800);
     
	}




  //  内容
/*var btn=getClass('btn4')[0];
var nr=getClass('nr-js2')[0];
// var bt,nrs;
// for(var i=0;i<nr.length;i++){
var	bt=btn.getElementsByTagName('li');
var	nrs=getClass('nr-js',nr);
	// tbb(bt,nrs);
// }
// function tbb(linkss,listss){
	for(var i=0;i<bt.length;i++){
		bt[i].ff=i;
		bt[i].onclick=function(){
			for(var j=0;j<nrs.length;j++){
				animate(nrs[j],{opacity:0})
				bt[j].style.border="";
				bt[j].style.background="";				
			}
			animate(nrs[this.ff],{opacity:1})
			this.style.border="2px solid #ff6700";
			this.style.background="#fff";
	    }
    }
// }

 	// var Rbox=getClass('nr-js2')[0];
 	// var Rimg=getClass('nr-js',nr);
 	// var Rw=parseInt(getStyle(Rimg[0],'width'));
 	// Rbox.style.width=Rimg.length*Rw+'px';
 	var Rleft=getClass('left')[0];
 	var Rright=getClass('right')[0];
 	var rr=0;
 	Rleft.onclick=function(){
 		rr--;
 		if(rr==-1){
 			rr=nrs.length-1;
 		}
 		for(var i=0;i<nrs.length;i++){
 			animate(nrs[i],{opacity:0})
 			bt[i].style.border="";
			bt[i].style.background="";
 		}
 		animate(nrs[rr],{opacity:1})
 		bt[rr].style.border="2px solid #ff6700";
		bt[rr].style.background="#fff";
 	}
 	Rright.onclick=function(){
 		rr++;
 		if(rr>nrs.length-1){
 			rr=0;
 		}
 		for(var i=0;i<nrs.length;i++){
 			animate(nrs[i],{opacity:0})
 			bt[i].style.border="";
			bt[i].style.background="";
 		}
 		animate(nrs[rr],{opacity:1})
 		bt[rr].style.border="2px solid #ff6700";
		bt[rr].style.background="#fff";
 	}
 		this.ff=rr;*/


 	// 内容

 	function Ran(r){
 	var Rbox=getClass('nr-js2')[r];
 	var Rimg=getClass('nr-js',Rbox);
 	var Rw=parseInt(getStyle(Rimg[0],'width'));
 	Rbox.style.width=Rimg.length*Rw+'px';
 	var Rleft=getClass('left')[r];
 	var Rright=getClass('right')[r];
 	var Rbtn=getClass('btn4')[r].getElementsByTagName('li');
 	var rr=0;
 	Rleft.onclick=function(){
 		rr--;
 		if(rr==-1){
 			rr=0;
 		}
 		for(i=0;i<Rbtn.length;i++){
 			Rbtn[i].id="";
 		}	
 		Rbtn[rr].id="R-btn";
 		animate(Rbox,{marginLeft:-rr*Rw})
 	}
 	Rright.onclick=function(){
 		rr++;
 		if(rr>Rimg.length-1){
 			rr=Rimg.length-1;
 		}
 		for(i=0;i<Rbtn.length;i++){
 			Rbtn[i].id="";
 		}	
 		Rbtn[rr].id="R-btn";		
 		animate(Rbox,{marginLeft:-rr*Rw})		
 	}   
		for(i=0;i<Rbtn.length;i++){
			Rbtn[i].ff=i;
			Rbtn[i].onclick=function(){
				for(var j=0;j<Rbtn.length;j++){
					Rbtn[j].id="";
				}
				Rbtn[this.ff].id="R-btn";
				animate(Rbox,{marginLeft:-this.ff*Rw})
				rr=this.ff;
		    }
		}    
    }
    Ran(0);
    Ran(1);
    Ran(2);
    Ran(3);



// 按需加载
var fls=getClass('fl');
var ch=document.documentElement.clientHeight;
var flarr=[];
for(var i=0;i<fls.length;i++){
	flarr.push(fls[i].offsetTop);
}
window.onscroll=function(){
	var tops=document.body.scrollTop||document.documentElement.scrollTop;
	for(var i=0;i<flarr.length;i++){
		if(tops+ch>flarr[i]){
			var imgs=fls[i].getElementsByTagName('img');
			for(var j=0;j<imgs.length;j++){
				imgs[j].src=imgs[j].getAttribute('asrc');
			}
		}
	}
}
window.onscroll();




}


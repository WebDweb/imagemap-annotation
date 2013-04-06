var polyClip=new function(){
	function s(b,c){
		q[b]=new Image;	// b  is the index of images, the script does the same for all b
		var e=q[b];
		$(c).attr("data-polyclip-index",b);
		$(e).bind("load",function(){
			d.drawShape(b,c)});
		e.src=c.src}
	var d=this,r,k=[],q=[];
	d.isOldIE=window.G_vmlCanvasManager;
	d.init=function(){
		r=$("img[data-polyclip]");	// for images whose attribute is data-polyclip
		r.each(s)};				//executes the function s for all such images
	d.drawShape=function(b,c){
		var e=$(c)	,a=document.createElement("canvas");
		a.width=c.offsetWidth;a.height=c.offsetHeight;
		a.id="polyClip"+b;
		var l=jQuery.trim(e.attr("data-polyclip")).split(",")		,j=c.src;
		k[a.id]=[];
		e.replaceWith(a);
		d.isOldIE&&G_vmlCanvasManager.initElement(a);
		for(var f=a.getContext("2d"),e=0;e<l.length;e+=2){
			var h=parseInt(jQuery.trim(l[e])), i=parseInt(jQuery.trim(l[e+1]));
			k[a.id].push({x:h,y:i});
			e==0?f.moveTo(h,i):f.lineTo(h,i) }
		if(d.isOldIE)
			f.fillStyle="",f.fill(),a=$("fill",a).get(0),a.color="",a.src=c.src,a.type="tile",a.alignShape=false;
		else{
			var g=new Image;
			g.onload=function(){
				var a=f.createPattern(g,"repeat");
				f.fillStyle=a;f.fill();
				a:{for(var b=parseInt(jQuery.trim(l[0])),c=parseInt(jQuery.trim(l[1])),e=-1;e<=1;e++)
						for(var d=0;d<=1;d++)
							if(a=f.getImageData(b+e,c+d,1,1).data[3],a!=0){
								a=true;
								break a}
						a=false}a||g.src.indexOf("?chromeError")<0&&(g.src+="?chromeError")};
			g.src=j}};
	d.findObject=function(b){
		var c=b.currentTarget;
		if($(c).hasClass("cropParent"))return $(c);
		for(var e in k)if(k.hasOwnProperty(e)&&(c=$("#"+e),d.isInPolygon(c,b.pageX,b.pageY,true)))return c};
	d.isInPolygon=function(b,c,e,a){
		var d=b.get(0),d=k[d.id],j=d.length,f,h,i,g,o,m,p=false,n={left:0,top:0};
		a&&(n=b.offset());
		if(j<3)return false;
f=d[j-1].x+n.left;h=d[j-1].y+n.top;for(m=0;m<j;m++)b=d[m].x+n.left,a=d[m].y+n.top,b>f?(i=f,o=b,g=h,h=a):(i=b,o=f,g=a),b<c==c<=f&&(e-g)*(o-i)<(h-g)*(c-i)&&(p=!p),f=b,h=a;return p}
	};

document.write('<style type="text/css">img[data-polyclip], img.polyClip { visibility: hidden; }</style>');
polyClip.isOldIE?$(window).bind("load",polyClip.init):$(document).ready(polyClip.init);


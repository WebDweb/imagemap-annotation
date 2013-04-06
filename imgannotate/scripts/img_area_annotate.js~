	var ready=1;
	var image = document.getElementById('central');
	function clearCanvas(){
 	   var canvas = document.getElementById("polyClip0");
	   var context = canvas.getContext("2d");
	   context.clearRect(0, 0, canvas.width, canvas.height);
	}
	function resetdimensions(){
		var a = document.getElementById("central").height;
		a = a + 'px';
		document.getElementById("cover").setAttribute('height',a);
		//document.getElementsByTagName("canvas")[0].setAttribute('height',a);
		document.getElementsByClassName("clipParent")[0].style.height = a;
		document.getElementById("infoParent").style.height = a;
		var a = document.getElementById("central").width;
		a = a + 'px';
		document.getElementById("cover").setAttribute('width',a);
		//document.getElementsByTagName("canvas")[0].setAttribute('width',a);
		document.getElementsByClassName("clipParent")[0].style.width = a;
		document.getElementById("infoParent").style.width = a;
	}
	function show(are){
		if(!ready){
			return 0;
		}
		var ele = document.getElementsByClassName('clipParent')[0];
		ele.innerHTML = "";
		var hov = document.createElement('img');
			hov.src = are.getAttribute('color')+".jpg";
			hov.setAttribute('data-polyclip',are.coords);
		ele.appendChild(hov);
		polyClip.init();
		resetdimensions();
		createinfo(are);
	}
	function createinfo(are){
		$("div#infoParent").html("<div id='infobox'></div>").css('opacity','1.0');
		pos = are.getAttribute('infopos').split(',');
		$("div#infobox").html(are.getAttribute('infocont')).css({"left":pos[0],"top":pos[1]});
	}
	
	$("document").ready(function(){
		resetdimensions();
		document.body.addEventListener("keyup", function(e){ if(e.keyCode==27) $("div.theatre").hide(); }, false);
		$("area").mouseover(function(){
			show(this);
		});
		$("#central").mouseover(function(){
			resetdimensions();
		});
		$("area").mouseout(function(){
			clearCanvas();
			$("div#infoParent").html("");
		});
	});

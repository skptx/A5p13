const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
  	$.getJSON(
  		dataURL,
  		function(data) {
  			handleData(data);
  		}
  	);
}

function handleData(data) {


  const var1 = $("input[name=var1]").val();
  const var2 = $("input[name=var2]").val();
  const var3 = $("input[name=var3]").val();
  const var4 = $("input[name=var4]").val();
  const var5 = $("input[name=var5]").val();
  const var6 = $("input[name=var6]").val();
  const speach = $("input[name=speach]").val();


  //let text = data.text;
  let text = String(data.text);
  let result = text.replace(/\{var1\}/g, var1).replace(/\{var2\}/g, var2).replace(/\{var3\}/g, var3).replace(/\{var4\}/g, var4).replace(/\{var5\}/g, var5).replace(/\{var6\}/g, var6).replace(/\{speach\}/g, speach);
  $("#result").text(result);
  $("#source").text(text);
  
}


function init() {

	let bf = $("#button-fetch");
	bf.click(handleButton);
}

$(document).ready(init);

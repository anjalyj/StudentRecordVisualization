var data = [
	{name:'ramesh',subject:'maths',score:87},
	{name:'suresh',subject:'maths',score:45},
	{name:'pokemon',subject:'english',score:65},
	{name:'mary',subject:'kannada',score:44},
	{name:'riya',subject:'science',score:72},
	{name:'katie',subject:'social studies',score:82},
	{name:'katie',subject:'maths',score:98},
	{name:'ramesh',subject:'bengali',score:25},
	{name:'suresh',subject:'science',score:55},
	{name:'riya',subject:'tamil',score:75},
	{name:'pokemon',subject:'sports',score:95},
	{name:'pokemon',subject:'social studies',score:32}
];

var subjects = ['maths','english','kannada','science','social studies','bengali','tamil','sports'];
var colors = d3.scaleOrdinal(d3.schemeCategory10)
			.domain(subjects);

var loadChart = function(data){
	var div = d3.select(".student_data")
		.selectAll("div")
		.data(data);

	div.enter().append("div")
		.style("height",10)
		.attr("class","bar")

		.text(function(d){ return d['name']+ " " + d['score']; })
		.style("width",function(d){ return (d['score'] * 5) + "px" ;})
		.style("background",function(d){ return colors(d.subject)});
}

var loadLegend = function(){
	var legend = d3.select(".legend")
		.selectAll("div")
		.data(subjects)
		.enter().append("div")
		.style("width", "70px")
		.style("background-color",function(d){ return colors(d)})
		.classed("legends",true)
		.text(function(d){ return d})

}

var updateData = function(value){
	d3.selectAll(".bar")
			.sort(function(a,b){return d3.ascending(a[value] , b[value])})
}

var sortByName =  function(){
	updateData('name');
}

var sortBySubject =  function(){
	updateData('subject');
}

var sortByScore =  function(){
	updateData('score');
}

window.onload = function(){
	loadChart(data);
	loadLegend();
}
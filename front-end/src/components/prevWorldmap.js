import React from 'react';
import * as d3 from 'd3';
import{useEffect,useState} from 'react';
import { legendColor } from 'd3-svg-legend'
//import d3data from './d3_data.json'

function Worldmap() {
    useEffect(() => {
        var width = 600,
            height = 500;
        var svg = d3.select("svg")
            .attr("width", width)
            .attr("height", height);
        // addtiltle
        svg.append("text")
            .attr("id", "map_title")
            .attr("x", width / 2)
            .attr("y",  (height/7) )
            .attr("text-anchor", "middle")
            .style("font-size", "16px")
            .style("text-decoration", "underline")
            .text("World Map with citation impact");
        
        var projection = d3.geoMercator()
        .scale(100)
        .center([0, 60])
        .translate([width / 2, height / 2]);

        // Data and color scale
        var data = d3.map();
        var colorScale = d3.scaleLinear()
        .range(["#f1eef6", "#bdc9e1", "#74a9cf","#2b8cbe", "#045a8d"])
        .domain([0,2000])  
        
                // Load external data and boot

        d3.queue()
        .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
        .defer(d3.csv, "http://127.0.0.1:3000/d3_data.csv", function(d) { data.set(d.country_code, +d.country_score);})
        .await(ready);

        function ready(error, topo) {


     
         // create a tooltip that showup when mouseover
         
         var tooltip_country = d3.select("body")
            .append("g")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("visibility", "hidden")
            .style("background-color", "white")
            .style("border", "solid")
            .style("border-width", "1px")
            .style("border-radius", "5px")
            .style("padding", "10px")
        

        let mouseOver = function(d) {
            d3.selectAll(".Country")
            .transition()
            .duration(200)
            .style("opacity", .5)
            d3.select(this)
            .transition()
            .duration(200)
            .style("opacity", 1)
            .style("stroke", "black")
            console.log("text",d.properties.name)
            tooltip_country.style("visibility", "visible")
            .text(d.properties.name + ": " + data.get(d.id))
        }

        let mouseLeave = function(d) {
            d3.selectAll(".Country")
            .transition()
            .duration(200)
            .style("opacity", .8)
            d3.select(this)
            .transition()
            .duration(200)
            .style("stroke", "transparent")
            tooltip_country.style("visibility", "hidden")
        }
        let mouseClick = function(d) {
            // select this when click
            d3.select(this)
            // this will display the country name selected
            // building second bar graph svg under mouse click
            // create a seperate svg for the bar graph
            // if the mouse is clicked
            // check if there is a svg2 element
            // if there is, remove it
            // if there is not, create one
            var svg2_exist = document.getElementById("org_bar_chart");
            if (svg2_exist) {
                d3.select("#org_bar_chart").remove();
            }


            // this will display the country name seleted
            // building second bar graph svg under mouse click
            // create a seperate svg for the bar graph
            var width2 = 300,
            height2 = 150;
            var svg2 = d3.select("#svg2")
            .append("g")
            .attr("id", "org_bar_chart")
            .attr("transform", "translate(50,30)")

            svg2.append("text")
            .attr("id", "org_title")
            .attr("x", width2 / 2)
            .attr("y",  0 )
            .attr("text-anchor", "middle")
            .style("font-size", "12px")
            .style("text-decoration", "underline")
            .text("Top Institution in " + d.properties.name);
            // import new json file
            d3.json("http://127.0.0.1:3000/orgs.json", function(error, orgs) {
                //find teh right country
                // find the orgs dictionary key that match the country name
                for (var country in orgs){
                    if (country === d.properties.name){
                        var country_obj = orgs[country]
                    }
                }
                var country = d.properties.name

                // find the right organization info
                var org_info = []
                var org_score = []
                for (var org in country_obj){
                    // check if org is a dict
                    if (typeof country_obj[org] === "object"){
                        // get the org key
                        org_info.push(org)
                        org_score.push(country_obj[org]["org_score"])
                    }
                }
                var org_data = org_info.map((el, i) => ({org: el, score: org_score[i]}))
                org_data.sort(function(b,a){
                    return a.score - b.score
                })
                // create x_axis for the bar chart
                var x_axis = d3.scaleBand()
                .range([0, width2])
                .domain(org_data.map(function(d) { return d.org; }))
                .padding(0.2);

                //add x axis to svg
                svg2.append("g")
                .attr("transform", "translate(0," + height2 + ")")
                .call(d3.axisBottom(x_axis))
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");

                // create y_axis for the bar chart
                var y_axis = d3.scaleLinear()
                .range([height2, 0])
                .domain([0, d3.max(org_data, function(d) { return d.score; })]);

                // add y axis to svg
                svg2.append("g")
                .call(d3.axisLeft(y_axis));

                
                // create the bar chart
                svg2.selectAll("rect")
                .data(org_data)
                .enter()
                .append("rect")
                .attr("x", function(d) { return x_axis(d.org); })
                .attr("y", function(d) { return y_axis(d.score); })
                .attr("width", x_axis.bandwidth())
                .attr("height", function(d) { return height2 - y_axis(d.score); })
                .attr("fill", function(d) { return colorScale(d.score); })
                .on("click", function(d) {
                        console.log(d.org + ": " + country)
                        window.open("http://www.google.com");
                    
                })
            

                
                

        })
    }


        // Draw the map
        svg.append("g")
            .selectAll("path")
            .data(topo.features)
            .enter()
            .append("path")
            // draw each country
            .attr("d", d3.geoPath()
                .projection(projection)
            )
            // set the color of each country
            .attr("fill", function (d) {
                d.total = data.get(d.id) || 0;
                return colorScale(d.total);
            })
            .style("stroke", "transparent")
            .attr("class", function(d){ return "Country" } )
            .style("opacity", .8)
            .on("click", mouseClick)
            .on("mouseover", mouseOver )
            .on("mousemove", function(){return tooltip_country.style("top", (d3.event.pageY ) + "px").style("left", (d3.event.pageX-200) + "px")})
            .on("mouseleave", mouseLeave )

        

            var linear = d3.scaleLinear()
            .range(["#f1eef6", "#045a8d"])
            .domain([0,10000]);

            svg.append("g")
            .attr("class", "legendLinear")
            .attr("transform", "translate(50,400)");

            var legendLinear = legendColor()
            .shapeWidth(20)
            .orient('vertical')
            .scale(linear);

            svg.select(".legendLinear")
            .call(legendLinear);
            
           
    
    }
            })
    return (
        <div>
            <svg id="my_dataviz" width="2000" height="2000" ></svg>
            <svg id="svg2" width="350" height="300"></svg>
            <svg id="svg3" width="350" height="300"></svg>

        </div>
    )

}
export default Worldmap;
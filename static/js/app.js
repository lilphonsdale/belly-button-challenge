// Identify the source of the data and store it in a variable

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// populate the default dashboard

function init() {
  d3.json("samples.json").then((data) => {
     … // do something to get samplenames
   }};
   var some_sample = samplenames[0]
   buildCharts(some_sample);
}

function buildCharts(sample) {
   buildBarChart(sample)
}

function buildBarChart(sample) {
   d3.json("samples.json").then((data) => {
      otuIds = …
      sampleValues = …
      otuLabels = …

      var plot_data = …

      Plotly.newPlot('bar',...)
    })
}


// Fetch the JSON data 

  d3.json(url).then(function (data) {
  // let metadata = data.metadata
    let names = data.names
    let samples = data.samples
  // console.log(names);
    let sample_values = samples.map(function (x) {
      return x.sample_values;
    });
    console.log(sample_values)

    // // Use otu_ids as the labels for the bar chart.

    let otu_ids = samples.map(function (x) {
    return x.otu_ids});

    // // Use otu_labels as the hovertext for the chart.

    let otu_labels = samples.map(function (x) {
    return x.otu_labels});

    // Use the names to populate the dropdown menu

    var choices = d3.select("#selDataset");
    Object.entries(names).forEach(([k,v]) => {
      choices.append("option").attr("value", v).text(v)});

    choices.onchange = function () {
    var choice = choices.property("value");
    console.log(choice);
    console.log(samples[choice])
    create_plot(samples[choice]);
    };


  // make a first plot to greet us on the page

    function create_plot(d){
      plot_data = [
        {
          x: sample_values[d],
          y: otu_ids[d],
          labels: otu_labels[d],
          type: "bar"
        }]
      layout = {
          title: "Graph"
      }
    Plotly.newPlot("bar", plot_data, layout);
}
// function update_plot(d){
//   let values = Object.values(d);
//   let labels =  Object.keys(d);
//   Plotly.restyle("pie", "values", [values]);
//   Plotly.restyle("pie", "labels", [labels]);
// }

create_plot(0);
});
}

init()

// function optionChanged(newSample) {
//   // Fetch new data each time a new sample is selected
//   buildMetadata(newSample);
//   buildCharts(newSample); 
// }

// Display the default plot
  // function init() {
  // let d = [{
  //   values: sample_values[0],
  //   labels: otu_ids[0],
  //   type: "bar"
  // }];

  
  // };

  // Plotly.newPlot("bar", d, layout);
  // // };

// Demographics Panel 
// function buildMetadata(sample) {
//   d3.json(url).then((data) => {
//     var metadata = data.metadata;
//     // Filter the data for the object with the desired sample number
//     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//     var result = resultArray[0];
//     // Use d3 to select the panel with id of `#sample-metadata`
//     var PANEL = d3.select("#sample-metadata");

//     // Use `.html("") to clear any existing metadata
//     PANEL.html("");

//     // Use `Object.entries` to add each key and value pair to the panel
//     // Hint: Inside the loop, you will need to use d3 to append new
//     // tags for each key-value in the metadata.
//     Object.entries(result).forEach(([key, value]) => {
//       PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
//     });

//   });
// }


// var choices = d3.select("#selDataset");
// Object.entries(names).forEach(([k,v])=>{
//     choices.append("option").attr("value",k).text(k)
// });

// choices.onchange = function(){
//     var choice = choices.property("value");
//     console.log(choice);
//     console.log(samples[choice]);
    // create_plot(samples[choice]);
// };

// function create_plot(d){
//     plot_data = [
//         {
//             values: Object.values(d),
//             labels: Object.values(d)
//         }
//     ]
//     Plotly.newPlot("bar",plot_data);
// };\

// function init() {
//   var selector = d3.select("#selDataset");

//   d3.json(url).then((data) => {
//     console.log(data);
//     var sampleNames = data.names;
//     sampleNames.forEach((sample) => {
//       selector
//         .append("option")
//         .text(sample)
//         .property("value", sample);
//     });
// })}

// init();

// function optionChanged(newSample) {
//   console.log(newSample);
//   buildMetadata(newSample);
//   //buildCharts(newSample);
// }

// function buildMetadata(sample) {
//   d3.json(url).then((data) => {
//     var metadata = data.metadata;
//     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
//     var result = resultArray[0];
//     var PANEL = d3.select("#sample-metadata");

//     PANEL.html("");
//     PANEL.append("h6").text("ID: " + result.id);
//     PANEL.append("h6").text("Ethnicity: " + result.ethnicity);
//     PANEL.append("h6").text("Gender: " + result.gender);
//     PANEL.append("h6").text("Age: " + result.age);
//     PANEL.append("h6").text("Location: " + result.location);
//     PANEL.append("h6").text("BB-type: " + result.bb_type);
//     PANEL.append("h6").text("WFREQ: " + result.wfreq);
//   });
// }


// // Use sample_values as the values for the bar chart.

//   let sample_values = samples.map(function (x) {
//     return x.sample_values;
//   });

//   // Use otu_ids as the labels for the bar chart.

//   let otu_ids = samples.map(function (x) {
//     return x.otu_ids;
//   });

//   // Use otu_labels as the hovertext for the chart.

//   let otu_labels = samples.map(function (x) {
//     return x.otu_labels;
//   });

//   console.log("sample_values:", sample_values)
//   console.log("otu_ids:", otu_ids)
//   console.log("otu_labels:", otu_labels)





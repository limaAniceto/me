// Put here the d3 js stuff

import React, { Component } from "react";
import * as d3 from "d3";

const colors = [
  "#800000",
  "#9A6324",
  "#808000",
  "#469990",
  "#000075",
  "#911eb4",
  "#3cb44b",
  "#ffe119",
  "#f58231",
];
class D3Vis extends Component {
  constructor(props) {
    super(props);
    this.createD3Vis = this.createD3Vis.bind(this);
  }
  componentDidMount() {
    this.createD3Vis();
  }
  componentDidUpdate() {
    this.createD3Vis();
  }
  createD3Vis() {
    var width = 450;
    var height = 400;

    var nodes = d3.range(200).map(function () {
        return { r: Math.random() * 12 + 4 };
      }),
      root = nodes[0];
    var color = (i) => colors[i];
    root.radius = 0;
    root.fixed = true;

    const forceX = d3.forceX(width / 2).strength(0.015);
    const forceY = d3.forceY(height / 2).strength(0.015);

    var force = d3
      .forceSimulation()
      .velocityDecay(0.2)
      .force("x", forceX)
      .force("y", forceY)
      .force(
        "collide",
        d3
          .forceCollide()
          .radius(function (d) {
            if (d === root) {
              return Math.random() * 50;
            }
            return d.r + 0.5;
          })
          .iterations(5)
      )
      .nodes(nodes)
      .on("tick", ticked);

    var svg = d3.select(this.node).attr("width", width).attr("height", height);

    svg
      .selectAll("circle")
      .data(nodes.slice(1))
      .enter()
      .append("circle")
      .attr("r", function (d) {
        return d.r;
      })
      .style("fill", function (d, i) {
        console.log(color(i % 3));
        return color(i % 3);
      });

    function ticked(e) {
      svg
        .selectAll("circle")
        .attr("cx", function (d) {
          return d.x;
        })
        .attr("cy", function (d) {
          return d.y;
        });
    }

    svg.on("mousemove", function () {
      var p1 = d3.mouse(this);
      root.fx = p1[0];
      root.fy = p1[1];
      force.alphaTarget(0.3).restart(); //reheat the simulation
    });
  }
  render() {
    return <svg ref={(node) => (this.node = node)} width={300} height={300} />;
  }
}

export default D3Vis;

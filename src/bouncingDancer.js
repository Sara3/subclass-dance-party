var MakeBouncingDancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  MakeDancer.apply(this, arguments);
  this.$node = $('<span class="bouncingDancer"></span>');
  this.setPosition(top, left);
  
};


MakeBouncingDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncingDancer.prototype.constructor = MakeBouncingDancer;

MakeBouncingDancer.prototype.step = function () {
  //this.$node.effect("bounce", { distance:100, times:2 }, 1000);


   
     // this.effect("bounce", { distance:100, times:2 }, 1000);
  //$(document).ready(function() {
     this.$node.effect("bounce", { distance:100, times:2 }, 1000);
  console.log("no error?");
  // .effect("bounce", { distance:100, times:2 }, 1000)
  // });

  // setTimeout(this.step.bind(this), this.timeBetweenSteps);
};
MakeBouncingDancer.step();
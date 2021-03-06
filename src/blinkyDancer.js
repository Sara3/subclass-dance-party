var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  //MakeDancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps;


  MakeDancer.apply(this, arguments);
  //this.$node = $('<span class="blinkyDancer"><img id="jennet" src="src/Jennet.png"></span>');
  this.setPosition(top, left);
this.$node = $('<span class="blinkyDancer"><img id="jennet" src="src/Jennet.png"></span>');

  //console.log(timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  // this.oldStep = blinkyDancer.step;
  // console.log(this);
  // console.log(this.step);
  // console.log(timeBetweenSteps);


};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;
// console.log(MakeDancer.prototype.step.bind(this));
MakeBlinkyDancer.prototype.oldStep = MakeDancer.prototype.step;
MakeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  //console.log(this.oldStep.bind(this));
  //console.log(this.timeBetweenSteps);
  this.oldStep.bind(this);
  this.oldStep();
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};

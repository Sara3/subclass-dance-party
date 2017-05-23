var MakeSquareDancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  MakeDancer.apply(this, arguments);
  this.$node = $('<span class="squareDancer"></span>');
  this.setPosition(top, left);
  
};


MakeSquareDancer.prototype = Object.create(MakeDancer.prototype);
MakeSquareDancer.prototype.constructor = MakeSquareDancer;

MakeSquareDancer.prototype.rotate = function () {
  
};
var MakeBouncingDancer = function (top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  MakeDancer.apply(this, arguments);
  this.$node = $('<span class="bouncingDancer"><img src="src/sara.jpg"></span>');
  this.setPosition(top, left);
  console.log(this.bounce());
};


MakeBouncingDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncingDancer.prototype.constructor = MakeBouncingDancer;
        
MakeBouncingDancer.prototype.bounce = function () {
  
  //debugger;
  $(this.$node).effect('bounce', { distance:1000, times:20 }, 'slow');
  
  setTimeout(this.bounce.bind(this), this.timeBetweenSteps);
  
  // setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

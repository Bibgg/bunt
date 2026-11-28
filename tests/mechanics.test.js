const test=require('node:test');
const assert=require('node:assert/strict');
const {wrapLane,speedMultiplier,levelForScore,themeProgress,superJumpHeight}=require('../www/mechanics.js');
test('moving left from first lane wraps to last lane',()=>assert.equal(wrapLane(0,-1,5),4));
test('moving right from last lane wraps to first lane',()=>assert.equal(wrapLane(4,1,5),0));
test('movement inside track advances one lane',()=>assert.equal(wrapLane(2,1,5),3));
test('speed rush uses boosted multiplier only while active',()=>{assert.equal(speedMultiplier(true),1.7);assert.equal(speedMultiplier(false),1);});

test('hold movement repeats at a controlled arcade interval',()=>{const {holdRepeatDelay}=require('../www/mechanics.js');assert.equal(holdRepeatDelay(),240);});

test('Level 1 stays active below 50 points and Level 2 unlocks at 50',()=>{
  assert.equal(levelForScore(49.99),1);
  assert.equal(levelForScore(50),2);
});
test('visual theme transitions smoothly from 35 to 50 points',()=>{
  assert.equal(themeProgress(35),0);
  assert.equal(themeProgress(42.5),0.5);
  assert.equal(themeProgress(50),1);
});
test('super jump creates three strong bounce peaks in one activation',()=>{
  assert.equal(superJumpHeight(0),0);
  assert.ok(superJumpHeight(1/6)>170);
  assert.ok(superJumpHeight(0.5)>170);
  assert.ok(superJumpHeight(5/6)>170);
  assert.equal(superJumpHeight(1),0);
});

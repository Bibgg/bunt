const test=require('node:test');
const assert=require('node:assert/strict');
const {wrapLane,speedMultiplier}=require('../www/mechanics.js');
test('moving left from first lane wraps to last lane',()=>assert.equal(wrapLane(0,-1,5),4));
test('moving right from last lane wraps to first lane',()=>assert.equal(wrapLane(4,1,5),0));
test('movement inside track advances one lane',()=>assert.equal(wrapLane(2,1,5),3));
test('speed rush uses boosted multiplier only while active',()=>{assert.equal(speedMultiplier(true),1.7);assert.equal(speedMultiplier(false),1);});

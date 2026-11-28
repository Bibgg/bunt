(function(root){'use strict';
function wrapLane(lane,direction,laneCount){const count=Math.max(1,Math.floor(laneCount||5));return ((Math.floor(lane)+Math.sign(direction)+count)%count);}
function speedMultiplier(active,normal=1,burst=1.7){return active?burst:normal;}
function holdRepeatDelay(){return 240;}
function levelForScore(score){return Number(score)>=50?2:1;}
function themeProgress(score){return Math.max(0,Math.min(1,(Number(score)-35)/15));}
function superJumpHeight(progress){const p=Math.max(0,Math.min(1,Number(progress)||0));const height=Math.abs(Math.sin(p*Math.PI*3))*180;return height<1e-9?0:height;}
const api={wrapLane,speedMultiplier,holdRepeatDelay,levelForScore,themeProgress,superJumpHeight};
if(typeof module!=='undefined'&&module.exports)module.exports=api;
if(root)root.NDMechanics=api;
})(typeof globalThis!=='undefined'?globalThis:this);

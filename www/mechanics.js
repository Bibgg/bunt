(function(root){'use strict';
function wrapLane(lane,direction,laneCount){const count=Math.max(1,Math.floor(laneCount||5));return ((Math.floor(lane)+Math.sign(direction)+count)%count);}
function speedMultiplier(active,normal=1,burst=1.7){return active?burst:normal;}
function holdRepeatDelay(){return 240;}
const api={wrapLane,speedMultiplier,holdRepeatDelay};
if(typeof module!=='undefined'&&module.exports)module.exports=api;
if(root)root.NDMechanics=api;
})(typeof globalThis!=='undefined'?globalThis:this);

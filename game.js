export function applyHit(target,attacker,facing){if(Math.abs(target.x-attacker.x)>55)return target;return {...target,vx:(target.vx||0)+facing*(3+attacker.power*.2),damage:target.damage+10}}
export function tickFighter(p){return {...p,x:p.x+(p.vx||0),vx:(p.vx||0)*.82}}
export function knockedOut(p){return p.x<0||p.x>320}

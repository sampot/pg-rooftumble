import {describe,it,expect} from 'vitest';import {applyHit,tickFighter,knockedOut} from './game.js';
describe('roof tumble',()=>{it('adds knockback nearby',()=>expect(applyHit({x:120,vx:0,damage:0},{x:90,power:5},1).vx).toBe(4));it('misses far away',()=>expect(applyHit({x:200,damage:0},{x:20,power:1},1).damage).toBe(0));it('loses beyond roof',()=>expect(knockedOut({x:-1})).toBe(true))});

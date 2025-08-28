import fs from 'fs';
import path from 'path';
import prologue from '../prologue.js';

const missing = [];

function collectScenes(root) {
  const map = new Map();
  function walk(obj, prefix=''){
    for(const [k,v] of Object.entries(obj)){
      const key = prefix ? `${prefix}.${k}` : k;
      if(v && typeof v === 'object' && ('text' in v)){
        map.set(k, v);
        if(v.nextScenes) walk(v.nextScenes, key);
      }
    }
  }
  walk(root.nextScenes || {});
  return map;
}

const scenes = collectScenes(prologue);

function checkNexts(obj, parentKey='root'){
  if(!obj || typeof obj !== 'object') return;
  if(Array.isArray(obj.choices)){
    for(const c of obj.choices){
      if(c.next && !scenes.has(c.next) && c.next !== 'forest' && c.next !== 'light'){
        missing.push({from: parentKey, to: c.next});
      }
    }
  }
  if(obj.nextScenes) for(const [k,v] of Object.entries(obj.nextScenes)) checkNexts(v, k);
}

checkNexts(prologue, 'prologue');

if(missing.length){
  console.error('Missing scene targets:');
  for(const m of missing) console.error(`${m.from} -> ${m.to}`);
  process.exit(2);
} else {
  console.log('All scene next targets resolve.');
}

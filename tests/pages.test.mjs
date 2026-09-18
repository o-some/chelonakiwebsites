import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const base='/chelonakiwebsites';
const root=new URL('../docs/',import.meta.url);
test('all exported HTML references resolve under the repository base path',()=>{
 const files=fs.readdirSync(root,{recursive:true}).filter(f=>f.endsWith('.html'));
 assert.ok(files.includes('index.html'));
 for(const file of files){
  const html=fs.readFileSync(new URL(file,root),'utf8');
  for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
   const url=match[1].split(/[?#]/)[0];if(!url.startsWith('/'))continue;
   assert.ok(url.startsWith(base+'/'),file+': outside base path '+url);
   const rel=url.slice(base.length+1);const target=new URL(rel,root);
   assert.ok(fs.existsSync(target),file+': missing '+url);
   if(fs.statSync(target).isDirectory())assert.ok(fs.existsSync(new URL(rel+'index.html',root)),url);
  }
 }
 assert.ok(fs.existsSync(new URL('.nojekyll',root)));
});
test('deployment contains no internal project state or source maps',()=>{
 const paths=fs.readdirSync(root,{recursive:true});
 assert.ok(!paths.some(p=>/\.masterbrain|\.openai|\.env|node_modules|\.map$/.test(p)));
});

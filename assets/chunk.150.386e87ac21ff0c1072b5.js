(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[150],{12:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>ki})
var r={}
i.r(r),i.d(r,{graphFor:()=>J,isBelongsTo:()=>h,peekGraph:()=>K})
var s={}
i.r(s),i.d(s,{FetchManager:()=>We,SaveOp:()=>Ve,Snapshot:()=>Ue,SnapshotRecordArray:()=>Le,upgradeStore:()=>Ge})
var n=i(1603),o=i(89),a=i(7375)
function l(e){return e._store}function c(e,t,i){return(e[t]=e[t]||Object.create(null))[i]}function d(e,t,i,r){(e[t]=e[t]||Object.create(null))[i]=r}function u(e){if(!e.id)return!0
const t=(0,o.p)(e)
return Boolean(t?.isNew(e))}function h(e){return"belongsTo"===e.definition.kind}function f(e){return e.definition.isImplicit}function p(e){return"hasMany"===e.definition.kind}function y(e,t){if(h(e))e.remoteState&&t(e.remoteState),e.localState&&e.localState!==e.remoteState&&t(e.localState)
else if(p(e)){for(let i=0;i<e.remoteState.length;i++){const r=e.remoteState[i]
t(r)}e.additions?.forEach(t)}else e.localMembers.forEach(t),e.remoteMembers.forEach((i=>{e.localMembers.has(i)||t(i)}))}function m(e,t,i,r){if(h(t))t.remoteState===i&&(t.remoteState=null),t.localState===i&&(t.localState=null,g(e,t))
else if(p(t)){t.remoteMembers.delete(i),t.additions?.delete(i)
const r=t.removals?.delete(i),s=t.remoteState.indexOf(i)
if(-1!==s&&t.remoteState.splice(s,1),!r){const r=t.localState?.indexOf(i);-1!==r&&void 0!==r&&(t.localState.splice(r,1),g(e,t))}}else t.remoteMembers.delete(i),t.localMembers.delete(i)}function g(e,t){if(!t.accessed)return
const i=t.identifier,r=t.definition.key
i!==e._removing&&e.store.notifyChange(i,"relationships",r)}function _(e){return"belongsTo"===e.kind||"hasMany"===e.kind}const b=null,v=Date.now()
function w(e,t){return`implicit-${e}:${t}${v}`}function k(e,t){e.inverseKind=t.kind,e.inverseKey=t.key,e.inverseType=t.type,e.inverseIsAsync=t.isAsync,e.inverseIsCollection=t.isCollection,e.inverseIsPolymorphic=t.isPolymorphic,e.inverseIsImplicit=t.isImplicit,e.inverseIsLinksMode=t.isLinksMode
const i=!1!==e.resetOnRemoteUpdate&&!1!==t.resetOnRemoteUpdate
e.resetOnRemoteUpdate=i,t.resetOnRemoteUpdate=i}function R(e){var t
_(e)||(e={kind:"resource"===(t=e).kind?"belongsTo":"hasMany",name:t.name,type:t.type,options:Object.assign({},{async:!1,inverse:null,resetOnRemoteUpdate:!1},t.options)})
const i={},r=e.options
return i.kind=e.kind,i.key=e.name,i.type=e.type,i.isAsync=r.async,i.isImplicit=!1,i.isCollection="hasMany"===e.kind,i.isPolymorphic=r&&!!r.polymorphic,i.isLinksMode=r.linksMode??!1,i.inverseKey=r&&r.inverse||"",i.inverseType="",i.inverseIsAsync=b,i.inverseIsImplicit=r&&null===r.inverse||b,i.inverseIsCollection=b,i.inverseIsLinksMode=b,i.resetOnRemoteUpdate=!!_(e)&&!e.options?.linksMode&&!1!==e.options?.resetOnRemoteUpdate,i}function S(e,t,i){i?function(e,t,i){const r=t.value,s=e.get(t.record,t.field)
i&&e._addToTransaction(s)
const o=s.isDirty
s.state.hasReceivedData||(s.isDirty=!0),s.state.hasReceivedData=!0
const{definition:a}=s,{type:l}=s.definition,c=T(r,s,(r=>{l!==r.type&&e.registerPolymorphicType(l,r.type),s.additions?.has(r)&&s.additions.delete(r),A(e,r,a.inverseKey,t.record,i)}),(r=>{s.removals?.has(r)&&s.removals.delete(r),M(e,r,a.inverseKey,t.record,i)}))
if(s.remoteMembers=c.finalSet,s.remoteState=c.finalState,c.changed&&(s.isDirty=!0),s._diff=c,"hasMany"===s.definition.kind&&!1!==s.definition.resetOnRemoteUpdate&&(c.changed||o)){const i={removals:[],additions:[],triggered:!1}
s.removals&&(s.isDirty=!0,s.removals.forEach((r=>{i.triggered=!0,i.removals.push(r),A(e,r,a.inverseKey,t.record,!1)})),s.removals=null),s.additions&&(s.additions.forEach((r=>{u(r)||(i.triggered=!0,i.additions.push(r),s.isDirty=!0,s.additions.delete(r),M(e,r,a.inverseKey,t.record,!1))})),0===s.additions.size&&(s.additions=null)),i.triggered&&(0,n.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${s.identifier.type}>.${s.definition.key} hasMany relationship but will not be once this deprecation is resolved by opting into the new behavior:\n\n\tAdded: [${i.additions.map((e=>e.lid)).join(", ")}]\n\tRemoved: [${i.removals.map((e=>e.lid)).join(", ")}]`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"})}s.isDirty&&!o&&C(e,s)}(e,t,i):function(e,t,i){const r=t.value,s=e.get(t.record,t.field)
s.state.hasReceivedData=!0
const{additions:n,removals:o}=s,{inverseKey:a,type:l}=s.definition,{record:c}=t,d=s.isDirty
let u=!1
const h=r=>{const s=o?.has(r)
!s&&n?.has(r)||(l!==r.type&&e.registerPolymorphicType(l,r.type),u=!0,A(e,r,a,t.record,i),s&&o.delete(r))},f=t=>{const r=n?.has(t)
!r&&o?.has(t)||(u=!0,M(e,t,a,c,i),r&&n.delete(t))},p=T(r,s,h,f)
n&&n.size>0&&n.forEach((e=>{p.add.has(e)||(u=!0,f(e))})),o&&o.size>0&&o.forEach((e=>{p.del.has(e)||(u=!0,h(e))}))
const y=p.changed||u
s.additions=p.add,s.removals=p.del,s.localState=p.finalState,y&&!d&&g(e,s)}(e,t,i)}function A(e,t,i,r,s){const n=e.get(t,i),{type:o}=n.definition
o!==r.type&&e.registerPolymorphicType(o,r.type),h(n)?(n.state.hasReceivedData=!0,n.state.isEmpty=!1,s&&(e._addToTransaction(n),null!==n.remoteState&&M(e,n.remoteState,n.definition.inverseKey,t,s),n.remoteState=r),n.localState!==r&&(!s&&n.localState&&M(e,n.localState,n.definition.inverseKey,t,s),n.localState=r,g(e,n))):p(n)?s?n.remoteMembers.has(r)||(e._addToTransaction(n),n.remoteState.push(r),n.remoteMembers.add(r),n.additions?.has(r)?n.additions.delete(r):(n.isDirty=!0,n.state.hasReceivedData=!0,C(e,n))):(n.isDirty||n.localState||(n.localState=[]),O(e,0,n,r,null,s)&&g(e,n)):s?n.remoteMembers.has(r)||(n.remoteMembers.add(r),n.localMembers.add(r)):n.localMembers.has(r)||n.localMembers.add(r)}function M(e,t,i,r,s){const n=e.get(t,i)
h(n)?(n.state.isEmpty=!0,s&&(e._addToTransaction(n),n.remoteState=null),n.localState===r&&(n.localState=null,g(e,n))):p(n)?s?(e._addToTransaction(n),D(n,r)&&g(e,n)):q(n,r)&&g(e,n):s?(n.remoteMembers.delete(r),n.localMembers.delete(r)):r&&n.localMembers.has(r)&&n.localMembers.delete(r)}function C(e,t){t.accessed&&e._scheduleLocalSync(t)}function E(e,t,i=!1){const r=e.get(t.record,t.field)
i&&e._addToTransaction(r)
const{definition:s,state:o}=r,a=i?"remoteState":"localState",l=r[a]
if(t.value!==l)if(l&&M(e,l,s.inverseKey,t.record,i),r[a]=t.value,o.hasReceivedData=!0,o.isEmpty=null===t.value,o.isStale=!1,o.hasFailedLoadAttempt=!1,t.value&&(s.type!==t.value.type&&e.registerPolymorphicType(s.type,t.value.type),A(e,t.value,s.inverseKey,t.record,i)),i){const{localState:t,remoteState:i}=r
if(t&&u(t)&&!i)return
t!==i&&t===l?(r.localState=i,g(e,r)):t!==i&&t!==l&&!1!==r.definition.resetOnRemoteUpdate&&(r.localState=i,(0,n.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${r.identifier.type}>.${r.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${t?"Added: "+t.lid+"\n\t":""}${l?"Removed: "+l.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),g(e,r))}else g(e,r)
else if(o.hasReceivedData=!0,i){const{localState:o}=r
if(o&&u(o)&&!l)return
l&&o===l?function(e,t,i,r,s){const n=e.get(t,i)
p(n)&&s&&n.remoteMembers.has(r)&&g(e,n)}(e,l,s.inverseKey,t.record,i):o!==t.value&&!1!==r.definition.resetOnRemoteUpdate&&(r.localState=l,(0,n.deprecate)(`EmberData is changing the default semantics of updates to the remote state of relationships.\n\nThe following local state was cleared from the <${r.identifier.type}>.${r.definition.key} belongsTo relationship but will not be once this deprecation is resolved:\n\n\t${o?"Added: "+o.lid+"\n\t":""}${l?"Removed: "+l.lid:""}`,!1,{id:"ember-data:deprecate-relationship-remote-update-clearing-local-state",for:"ember-data",since:{enabled:"5.3",available:"4.13"},until:"6.0",url:"https://deprecations.emberjs.com/v5.x#ember-data-deprecate-relationship-remote-update-clearing-local-state"}),g(e,r))}}function T(e,t,i,r){const s=new Set(e),{localState:n,remoteState:o,remoteMembers:a}=t
if(e.length!==s.size){const{diff:l,duplicates:c}=function(e,t,i,r,s,n,o,a){const l=t.length,c=r.length,d=Math.max(l,c)
let u=i.size!==s.size,h=!1
const f=new Set,p=new Set,y=new Map,m=new Set,g=[],_=e?.length??0
for(let b=0,v=0;b<d;b++){let d,w=!1
if(b<l)if(d=t[b],m.has(d)){let e=y.get(d)
void 0===e&&(e=[],y.set(d,e)),e.push(b)}else g[v]=d,m.add(d),w=!0,s.has(d)||(b<_&&e[b]!==d&&(u=!0),f.add(d),n(d))
if(b<c){const t=r[b]
d!==r[v]?(h=!0,!a&&b<_?e[v]!==d&&(u=!0):u=!0):a&&!u&&v<_&&e[v]!==d&&(u=!0),i.has(t)||(u=!0,p.add(t),o(t))}else w&&v<c&&d!==r[v]&&(u=!0)
w&&v++}return{diff:{add:f,del:p,finalState:g,finalSet:m,changed:u,remoteOrderChanged:h},duplicates:y}}(n,e,s,o,a,i,r,t.definition.resetOnRemoteUpdate)
return l}return function(e,t,i,r,s,n,o,a){const l=t.length,c=r.length,d=Math.max(l,c),u=e?l===e.length:l===c
let h=i.size!==s.size,f=e?i.size!==e.length:h
const p=new Set,y=new Set,m=e?.length??0
for(let g=0;g<d;g++){let d
if(g<l&&(d=t[g],!s.has(d))&&(g<m&&e[g]!==d&&(f=!0),p.add(d),n(d)),g<c){const t=r[g]
u&&d!==t?(h=!0,g<m?e[g]!==d&&(f=!0):g<l&&(f=!0)):a&&u&&!f&&g<m&&e[g]!==t&&(f=!0),i.has(t)||(h=!0,y.add(t),o(t))}}return{add:p,del:y,finalState:t,finalSet:i,changed:f,remoteOrderChanged:h}}(n,e,s,o,a,i,r,t.definition.resetOnRemoteUpdate)}function O(e,t,i,r,s,n){return n?function(e,t,i,r,s){const{remoteMembers:n,additions:o,removals:a,remoteState:l}=i
if(n.has(r))return!1
n.add(r)
const c=null!==s&&s>=0&&s<l.length
return c?l.splice(s,0,r):l.push(r),o?.has(r)?(o.delete(r),!1):(i.isDirty||i.localState&&(c?0===s?i.localState.unshift(r):a?.size?i.isDirty=!0:i.localState.splice(s,0,r):i.localState.push(r)),!0)}(0,0,i,r,s):function(e,t,i,r,s){const{remoteMembers:n,removals:o}=i
let a=i.additions
if((n.has(r)||a?.has(r))&&!o?.has(r))return!1
if(o?.has(r))o.delete(r)
else{a||(a=i.additions=new Set),i.state.hasReceivedData=!0,a.add(r)
const{type:t}=i.definition
t!==r.type&&e.registerPolymorphicType(r.type,t)}return i.localState&&(null!==s?i.localState.splice(s,0,r):i.localState.push(r)),!0}(e,0,i,r,s)}function q(e,t){const{remoteMembers:i,additions:r}=e
let s=e.removals
if(!i.has(t)&&!r?.has(t)||s?.has(t))return!1
if(r?.has(t)?r.delete(t):(s||(s=e.removals=new Set),s.add(t)),e.localState){const i=e.localState.indexOf(t)
e.localState.splice(i,1)}return!0}function D(e,t){const{remoteMembers:i,additions:r,removals:s,remoteState:n}=e
if(!i.has(t))return!1
i.delete(t)
let o=n.indexOf(t)
return n.splice(o,1),s?.has(t)?(s.delete(t),!1):(e.localState&&(o=e.localState.indexOf(t),e.localState.splice(o,1)),!0)}function j(e,t,i,r){h(r)?E(e,{op:"replaceRelatedRecord",record:t,field:i,value:r.remoteState},!1):(S(e,{op:"replaceRelatedRecords",record:t,field:i,value:r.remoteState.slice()},!1),g(e,r))}function N(e,t){e.accessed=!0
const i={}
return e.state.hasReceivedData&&(i.data=t?e.remoteState.slice():function(e){if(!e.isDirty)return e.localState
const t=e.remoteState.slice()
return e.removals?.forEach((e=>{const i=t.indexOf(e)
t.splice(i,1)})),e.additions?.forEach((e=>{t.push(e)})),e.localState=t,e.isDirty=!1,t}(e)),e.links&&(i.links=e.links),e.meta&&(i.meta=e.meta),i}function P(e,t){let i
e.accessed=!0
const r={}
return t&&e.remoteState?i=e.remoteState:!t&&e.localState&&(i=e.localState),(t&&null===e.remoteState||null===e.localState)&&e.state.hasReceivedData&&(i=null),e.links&&(r.links=e.links),void 0!==i&&(r.data=i),e.meta&&(r.meta=e.meta),r}function x(e,t,i,r,s,n){O(e,0,t,r,s,n)&&A(e,r,t.definition.inverseKey,i,n)}function F(e,t,i,r,s,n){(function(e,t,i,r,s,n){return n?D(i,r):q(i,r)})(0,0,i,r,0,n)&&M(e,r,i.definition.inverseKey,t,n)}function I(e){switch(typeof e){case"object":return e
case"string":return{href:e}}}function $(e,t){for(let i=0;i<e.length;i++)e[i]=t.upgradeIdentifier(e[i])
return e}const z=(0,a.L1)("Graphs",new Map)
class L{constructor(e){this._definitionCache=Object.create(null),this._metaCache=Object.create(null),this._potentialPolymorphicTypes=Object.create(null),this.identifiers=new Map,this.store=e,this.isDestroyed=!1,this._willSyncRemote=!1,this._willSyncLocal=!1,this._pushedUpdates={belongsTo:void 0,hasMany:void 0,deletions:[]},this._updatedRelationships=new Set,this._transaction=null,this._removing=null,this.silenceNotifications=!1}has(e,t){const i=this.identifiers.get(e)
return!!i&&void 0!==i[t]}getDefinition(e,t){let i=this._metaCache[e.type],r=i?.[t]
if(!r){const s=function(e,t,i){const r=e._definitionCache,s=e.store,n=e._potentialPolymorphicTypes,{type:o}=t
let a=c(r,o,i)
if(void 0!==a)return a
const u=s.schema.fields(t).get(i)
if(!u){if(n[o]){const e=Object.keys(n[o])
for(let t=0;t<e.length;t++){const s=c(r,e[t],i)
if(s)return d(r,o,i,s),s.rhs_modelNames.push(o),s}}return r[o][i]=null,null}const h=R(u)
let f,p
const y=h.type
if(null===h.inverseKey?f=null:(p=function(e,t,i){const r=e.schema.fields(t).get(i)
return r?r.options.inverse:null}(l(s),t,i),f=!p&&h.isPolymorphic&&h.inverseKey?{kind:"belongsTo",key:h.inverseKey,type:o,isAsync:!1,isImplicit:!1,isCollection:!1,isPolymorphic:!1}:p?R(s.schema.fields({type:y}).get(p)):null),!f){p=w(o,i),f={kind:"implicit",key:p,type:o,isAsync:!1,isImplicit:!0,isCollection:!0,isPolymorphic:!1},k(h,f),k(f,h)
const e={lhs_key:`${o}:${i}`,lhs_modelNames:[o],lhs_baseModelName:o,lhs_relationshipName:i,lhs_definition:h,lhs_isPolymorphic:h.isPolymorphic,rhs_key:f.key,rhs_modelNames:[y],rhs_baseModelName:y,rhs_relationshipName:f.key,rhs_definition:f,rhs_isPolymorphic:!1,hasInverse:!1,isSelfReferential:o===y,isReflexive:!1}
return d(r,y,p,e),d(r,o,i,e),e}const m=f.type
if(a=c(r,m,i)||c(r,y,p),a)return(a.lhs_baseModelName===m?a.lhs_modelNames:a.rhs_modelNames).push(o),d(r,o,i,a),a
k(h,f),k(f,h)
const g=[o]
o!==m&&g.push(m)
const _=m===y,b={lhs_key:`${m}:${i}`,lhs_modelNames:g,lhs_baseModelName:m,lhs_relationshipName:i,lhs_definition:h,lhs_isPolymorphic:h.isPolymorphic,rhs_key:`${y}:${p}`,rhs_modelNames:[y],rhs_baseModelName:y,rhs_relationshipName:p,rhs_definition:f,rhs_isPolymorphic:f.isPolymorphic,hasInverse:!0,isSelfReferential:_,isReflexive:_&&i===p}
return d(r,m,i,b),d(r,o,i,b),d(r,y,p,b),b}(this,e,t)
r=function(e,t,i){const r=e.isSelfReferential
return 1==(i===e.lhs_relationshipName)&&(!0===r||t===e.lhs_baseModelName||e.rhs_isPolymorphic&&e.lhs_modelNames.includes(t))}(s,e.type,t)?s.lhs_definition:s.rhs_definition,i=this._metaCache[e.type]=i||{},i[t]=r}return r}get(e,t){let i=this.identifiers.get(e)
i||(i=Object.create(null),this.identifiers.set(e,i))
let r=i[t]
if(!r){const s=this.getDefinition(e,t)
r="belongsTo"===s.kind?i[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},transactionRef:0,localState:null,remoteState:null,meta:null,links:null,accessed:!1}}(s,e):"hasMany"===s.kind?i[t]=function(e,t){return{definition:e,identifier:t,state:{hasReceivedData:!1,isEmpty:!0,isStale:!1,hasFailedLoadAttempt:!1,shouldForceReload:!1,hasDematerializedInverse:!1},remoteMembers:new Set,remoteState:[],additions:null,removals:null,meta:null,links:null,localState:null,isDirty:!1,transactionRef:0,accessed:!1,_diff:void 0}}(s,e):i[t]=function(e,t){return{definition:e,identifier:t,localMembers:new Set,remoteMembers:new Set}}(s,e)}return r}getData(e,t){const i=this.get(e,t)
return h(i)?P(i,!1):N(i,!1)}getRemoteData(e,t){const i=this.get(e,t)
return h(i)?P(i,!0):N(i,!0)}registerPolymorphicType(e,t){const i=this._potentialPolymorphicTypes
let r=i[e]
r||(r=i[e]=Object.create(null)),r[t]=!0
let s=i[t]
s||(s=i[t]=Object.create(null)),s[e]=!0}isReleasable(e){const t=this.identifiers.get(e)
if(!t)return!0
const i=Object.keys(t)
for(let r=0;r<i.length;r++){const s=t[i[r]]
if(void 0!==s&&s.definition.inverseIsAsync&&!u(e))return!1}return!0}unload(e,t){const i=this.identifiers.get(e)
i&&Object.keys(i).forEach((e=>{const r=i[e]
r&&(function(e,t,i){if(f(t))return void(e.isReleasable(t.identifier)&&V(e,t))
const{identifier:r}=t,{inverseKey:s}=t.definition
t.definition.inverseIsImplicit||y(t,(t=>function(e,t,i,r,s){if(!e.has(t,i))return
const n=e.get(t,i)
h(n)&&n.localState&&r!==n.localState||function(e,t,i,r){if(h(t)){const i=t.localState
!t.definition.isAsync||i&&u(i)?(t.localState===i&&null!==i&&(t.localState=null),t.remoteState===i&&null!==i&&(t.remoteState=null,t.state.hasReceivedData=!0,t.state.isEmpty=!0,t.localState&&!u(t.localState)&&(t.localState=null))):t.state.hasDematerializedInverse=!0,r||g(e,t)}else!t.definition.isAsync||i&&u(i)?m(e,t,i):t.state.hasDematerializedInverse=!0,r||g(e,t)}(e,n,r,s)}(e,t,s,r,i))),t.definition.inverseIsImplicit||t.definition.inverseIsAsync||(t.state.isStale=!0,U(t),t.definition.isAsync||i||g(e,t))}(this,r,t),f(r)&&(i[e]=void 0))}))}_isDirty(e,t){const i=this.identifiers.get(e)
if(!i)return!1
const r=i[t]
if(!r)return!1
if(h(r))return r.localState!==r.remoteState
if(p(r)){const e=null!==r.additions&&r.additions.size>0,t=null!==r.removals&&r.removals.size>0
return e||t||W(r)}return!1}getChanged(e){const t=this.identifiers.get(e),i=new Map
if(!t)return i
const r=Object.keys(t)
for(let s=0;s<r.length;s++){const e=r[s],n=t[e]
if(n)if(h(n))n.localState!==n.remoteState&&i.set(e,{kind:"resource",remoteState:n.remoteState,localState:n.localState})
else if(p(n)){const t=null!==n.additions&&n.additions.size>0,r=null!==n.removals&&n.removals.size>0,s=W(n);(t||r||s)&&i.set(e,{kind:"collection",additions:new Set(n.additions),removals:new Set(n.removals),remoteState:n.remoteState,localState:N(n,!1).data||[],reordered:s})}}return i}hasChanged(e){const t=this.identifiers.get(e)
if(!t)return!1
const i=Object.keys(t)
for(let r=0;r<i.length;r++)if(this._isDirty(e,i[r]))return!0
return!1}rollback(e){const t=this.identifiers.get(e),i=[]
if(!t)return i
const r=Object.keys(t)
for(let s=0;s<r.length;s++){const n=r[s],o=t[n]
o&&this._isDirty(e,n)&&(j(this,e,n,o),i.push(n))}return i}remove(e){this._removing=e,this.unload(e),this.identifiers.delete(e),this._removing=null}push(e){if("deleteRecord"===e.op)this._pushedUpdates.deletions.push(e)
else{const t=this.getDefinition(e.record,e.field)
!function(e,t,i){const r=e[t.kind]=e[t.kind]||new Map
let s=r.get(t.inverseType)
s||(s=new Map,r.set(t.inverseType,s))
let n=s.get(i.field)
n||(n=[],s.set(i.field,n)),n.push(i)}(this._pushedUpdates,t,e)}if(!this._willSyncRemote){this._willSyncRemote=!0
const e=l(this.store)
e._cbs?e._schedule("coalesce",(()=>this._flushRemoteQueue())):e._run((()=>this._flushRemoteQueue()))}}update(e,t=!1){switch(e.op){case"mergeIdentifiers":{const t=this.identifiers.get(e.record)
t&&function(e,t,i){Object.keys(i).forEach((r=>{const s=i[r]
s&&function(e,t,i){i.identifier=t.value,y(i,(r=>{const s=e.get(r,i.definition.inverseKey)
!function(e,t,i){h(t)?function(e,t,i){t.remoteState===i.record&&(t.remoteState=i.value),t.localState===i.record&&(t.localState=i.value,g(e,t))}(e,t,i):p(t)?function(e,t,i){if(t.remoteMembers.has(i.record)){t.remoteMembers.delete(i.record),t.remoteMembers.add(i.value)
const e=t.remoteState.indexOf(i.record)
t.remoteState.splice(e,1,i.value),t.isDirty=!0}t.additions?.has(i.record)&&(t.additions.delete(i.record),t.additions.add(i.value),t.isDirty=!0),t.removals?.has(i.record)&&(t.removals.delete(i.record),t.removals.add(i.value),t.isDirty=!0),t.isDirty&&g(e,t)}(e,t,i):function(e,t,i){t.remoteMembers.has(i.record)&&(t.remoteMembers.delete(i.record),t.remoteMembers.add(i.value)),t.localMembers.has(i.record)&&(t.localMembers.delete(i.record),t.localMembers.add(i.value))}(0,t,i)}(e,s,t)}))}(e,t,s)}))}(this,e,t)
break}case"update":case"updateRelationship":(function(e,t){const i=e.get(t.record,t.field),{definition:r,state:s,identifier:o}=i,{isCollection:a}=r,l=t.value
let c=!1,d=!1
if(l.meta&&(i.meta=l.meta),void 0!==l.data)if(c=!0,a){null===l.data&&(l.data=[])
const i=e.store.identifierCache
e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:$(l.data,i)},!0)}else e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:l.data?e.store.identifierCache.upgradeIdentifier(l.data):null},!0)
else!1!==r.isAsync||s.hasReceivedData||(c=!0,a?e.update({op:"replaceRelatedRecords",record:o,field:t.field,value:[]},!0):e.update({op:"replaceRelatedRecord",record:o,field:t.field,value:null},!0))
if(l.links){const e=i.links
if(i.links=l.links,l.links.related){const t=I(l.links.related),i=e&&e.related?I(e.related):null,a=i?i.href:null
t&&t.href&&t.href!==a&&((0,n.warn)(`You pushed a record of type '${o.type}' with a relationship '${r.key}' configured as 'async: false'. You've included a link but no primary data, this may be an error in your payload. EmberData will treat this relationship as known-to-be-empty.`,r.isAsync||s.hasReceivedData,{id:"ds.store.push-link-for-sync-relationship"}),d=!0)}}if(i.state.hasFailedLoadAttempt=!1,c){const e=null===l.data||Array.isArray(l.data)&&0===l.data.length
i.state.hasReceivedData=!0,i.state.isStale=!1,i.state.hasDematerializedInverse=!1,i.state.isEmpty=e}else d&&(a||!i.state.hasReceivedData||(u=i.transactionRef,h=e._transaction,0===u||null===h||u<h)?(i.state.isStale=!0,g(e,i)):i.state.isStale=!1)
var u,h})(this,e)
break
case"deleteRecord":{const t=e.record,i=this.identifiers.get(t)
i&&(Object.keys(i).forEach((e=>{const t=i[e]
t&&(i[e]=void 0,V(this,t))})),this.identifiers.delete(t))
break}case"replaceRelatedRecord":E(this,e,t)
break
case"add":(function(e,t,i){const{record:r,value:s,index:n}=t,o=e.get(r,t.field),a=h(o)
if(i&&a){if(s!==o.remoteState)E(e,{op:"replaceRelatedRecord",record:r,field:t.field,value:s},i)}else{if(o.isDirty||o.localState||(o.localState=[]),Array.isArray(s))for(let t=0;t<s.length;t++)x(e,o,r,s[t],void 0!==n?n+t:null,i)
else x(e,o,r,s,n??null,i)
g(e,o)}})(this,e,t)
break
case"remove":(function(e,t,i){const{record:r,value:s}=t,n=e.get(r,t.field),o=h(n)
if(i&&o){if(s===n.remoteState)E(e,{op:"replaceRelatedRecord",record:r,field:t.field,value:null},i)}else{if(Array.isArray(s))for(let o=0;o<s.length;o++)F(e,r,n,s[o],t.index,i)
else F(e,r,n,s,t.index,i)
g(e,n)}})(this,e,t)
break
case"replaceRelatedRecords":S(this,e,t)}}_scheduleLocalSync(e){this._updatedRelationships.add(e),this._willSyncLocal||(this._willSyncLocal=!0,l(this.store)._schedule("sync",(()=>this._flushLocalQueue())))}_flushRemoteQueue(){if(!this._willSyncRemote)return
let e=(0,a.Yj)("transactionRef")??0
this._transaction=++e,(0,a.dV)("transactionRef",e),this._willSyncRemote=!1
const t=this._pushedUpdates,{deletions:i,hasMany:r,belongsTo:s}=t
t.deletions=[],t.hasMany=void 0,t.belongsTo=void 0
for(let n=0;n<i.length;n++)this.update(i[n],!0)
r&&B(this,r),s&&B(this,s),this._transaction=null}_addToTransaction(e){e.transactionRef=this._transaction}_flushLocalQueue(){if(!this._willSyncLocal)return
if(this.silenceNotifications)return this.silenceNotifications=!1,void(this._updatedRelationships=new Set)
this._willSyncLocal=!1
const e=this._updatedRelationships
this._updatedRelationships=new Set,e.forEach((e=>g(this,e)))}destroy(){z.delete(this.store),this.identifiers.clear(),this.store=null,this.isDestroyed=!0}}function B(e,t){t.forEach((t=>{t.forEach((t=>{!function(e,t){for(let i=0;i<t.length;i++)e.update(t[i],!0)}(e,t)}))}))}function U(e){h(e)?(e.localState=null,e.remoteState=null,e.state.hasReceivedData=!1,e.state.isEmpty=!0):(e.remoteMembers.clear(),e.remoteState=[],e.additions=null,e.removals=null,e.localState=null)}function V(e,t){const{identifier:i}=t,{inverseKey:r}=t.definition
y(t,(t=>{e.has(t,r)&&m(e,e.get(t,r),i)})),h(t)?(t.definition.isAsync||U(t),t.localState=null):p(t)?t.definition.isAsync||(U(t),g(e,t)):(t.remoteMembers.clear(),t.localMembers.clear())}function W(e){if(e.isDirty)return!1
const{remoteState:t,localState:i,additions:r,removals:s}=e
if(null===i)return!1
for(let n=0,o=0;n<t.length;n++){const e=t[n],a=i[o]
if(e!==a){if(s&&s.has(e))continue
if(r&&r.has(a)){o++,n--
continue}return!0}o++}return!1}function H(e){return void 0!==e._instanceCache?e._instanceCache._storeWrapper:e}function K(e){return z.get(H(e))}function J(e){const t=H(e)
let i=z.get(t)
return i||(i=new L(t),z.set(t,i),l(t)._graph=i),i}function G(e){return e instanceof Error}i(8604),new Map
const Y={iterator:()=>({next:()=>({done:!0,value:void 0})})}
class Z{constructor(e){this.version="2",this._capabilities=e,this.__cache=new Map,this.__graph=J(e),this.__destroyedCache=new Map,this.__documents=new Map}put(e){if(G(e))return this._putDocument(e,void 0,void 0)
if(function(e){return!(e instanceof Error)&&e.content&&!("data"in e.content)&&!("included"in e.content)&&"meta"in e.content}(e))return this._putDocument(e,void 0,void 0)
const t=e.content,i=t.included
let r,s
const{identifierCache:n}=this._capabilities
if(i)for(r=0,s=i.length;r<s;r++)i[r]=ce(this,n,i[r])
if(Array.isArray(t.data)){s=t.data.length
const o=[]
for(r=0;r<s;r++)o.push(ce(this,n,t.data[r]))
return this._putDocument(e,o,i)}if(null===t.data)return this._putDocument(e,null,i)
const o=ce(this,n,t.data)
return this._putDocument(e,o,i)}_putDocument(e,t,i){const r=G(e)?function(e){const t={}
return e.content&&(ue(t,e.content),"errors"in e.content?t.errors=e.content.errors:"object"==typeof e.error&&"errors"in e.error?t.errors=e.error.errors:t.errors=[{title:e.message}]),t}(e):function(e){const t={},i=e.content
return i&&ue(t,i),t}(e)
void 0!==t&&(r.data=t),void 0!==i&&(r.included=i)
const s=e.request,n=s?this._capabilities.identifierCache.getOrCreateDocumentIdentifier(s):null
if(n){r.lid=n.lid,e.content=r
const t=this.__documents.has(n.lid)
this.__documents.set(n.lid,e),this._capabilities.notifyChange(n,t?"updated":"added",null)}if("findHasMany"===e.request?.op){const t=e.request.options?.identifier,i=e.request.options?.field
i&&t&&this.__graph.push({op:"updateRelationship",record:t,field:i.name,value:r})}return r}patch(e){Array.isArray(e)?(this._capabilities,this._capabilities._store._join((()=>{for(const t of e)fe(this,t)}))):fe(this,e)}mutate(e){this.__graph.update(e,!1)}peek(e){if("type"in e){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:i,id:r,lid:s}=e,n=Object.assign({},t.remoteAttrs,t.inflightAttrs,t.localAttrs),o={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach((t=>{a[t].definition.isImplicit||(o[t]=this.__graph.getData(e,t))})),this._capabilities
const l=this._capabilities._store
return this._capabilities.schema.fields(e).forEach(((t,i)=>{if("alias"===t.kind)return
if(i in n&&void 0!==n[i])return
const r=te(t,e,l)
void 0!==r&&(n[i]=r)})),{type:i,id:r,lid:s,attributes:n,relationships:o}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRemoteState(e){if("type"in e){const t=this.__safePeek(e,!1)
if(!t)return null
const{type:i,id:r,lid:s}=e,n=Object.assign({},t.remoteAttrs),o={},a=this.__graph.identifiers.get(e)
a&&Object.keys(a).forEach((t=>{a[t].definition.isImplicit||(o[t]=this.__graph.getData(e,t))})),this._capabilities
const l=this._capabilities._store
return this._capabilities.schema.fields(e).forEach(((t,i)=>{if(i in n&&void 0!==n[i])return
const r=te(t,e,l)
void 0!==r&&(n[i]=r)})),{type:i,id:r,lid:s,attributes:n,relationships:o}}const t=this.peekRequest(e)
return t&&"content"in t?t.content:null}peekRequest(e){return this.__documents.get(e.lid)||null}upsert(e,t,i){this._capabilities
const r=this._capabilities._store
if(!r._cbs){let s
return r._run((()=>{s=he(this,e,t,i)})),s}return he(this,e,t,i)}fork(){throw new Error("Not Implemented")}merge(e){throw new Error("Not Implemented")}diff(){throw new Error("Not Implemented")}dump(){throw new Error("Not Implemented")}hydrate(e){throw new Error("Not Implemented")}clientDidCreate(e,t){this._createCache(e).isNew=!0
const i={}
if(void 0!==t){const r=this._capabilities.schema.fields(e),s=this.__graph,n=Object.keys(t)
for(let o=0;o<n.length;o++){const a=n[o],l=t[a]
if("id"===a)continue
const c=r.get(a)
let d
switch(void 0!==c?"kind"in c?c.kind:"attribute":null){case"attribute":this.setAttr(e,a,l),i[a]=l
break
case"belongsTo":this.mutate({op:"replaceRelatedRecord",field:a,record:e,value:l}),d=s.get(e,a),d.state.hasReceivedData=!0,d.state.isEmpty=!1
break
case"hasMany":this.mutate({op:"replaceRelatedRecords",field:a,record:e,value:l}),d=s.get(e,a),d.state.hasReceivedData=!0,d.state.isEmpty=!1
break
default:i[a]=l}}}return this._capabilities.notifyChange(e,"added",null),i}willCommit(e){const t=this.__peek(e,!1)
t.inflightAttrs?t.localAttrs&&Object.assign(t.inflightAttrs,t.localAttrs):t.inflightAttrs=t.localAttrs,t.localAttrs=null}didCommit(e,t){const i=t.content,r=t.request.op,s=i&&i.data,{identifierCache:n}=this._capabilities,o=e.id,a="deleteRecord"!==r&&s?n.updateRecordIdentifier(e,s):e,l=this.__peek(a,!1)
l.isDeleted&&(this.__graph.push({op:"deleteRecord",record:a,isNew:!1}),l.isDeletionCommitted=!0,this._capabilities.notifyChange(a,"removed",null))
const c=this._capabilities.schema.fields(a)
let d
l.isNew=!1,s&&(s.id&&!l.id&&(l.id=s.id),a===e&&a.id!==o&&this._capabilities.notifyChange(a,"identity",null),s.relationships&&oe(this.__graph,c,a,s),d=s.attributes)
const u=d&&re(l,d,c)
l.remoteAttrs=Object.assign(l.remoteAttrs||Object.create(null),l.inflightAttrs,d),l.inflightAttrs=null,le(l,u),l.errors&&(l.errors=null,this._capabilities.notifyChange(a,"errors",null)),u?.size&&ie(this._capabilities,a,u),this._capabilities.notifyChange(a,"state",null)
const h=i&&i.included
if(h)for(let f=0,p=h.length;f<p;f++)ce(this,n,h[f])
return{data:a}}commitWasRejected(e,t){const i=this.__peek(e,!1)
if(i.inflightAttrs){const e=Object.keys(i.inflightAttrs)
if(e.length>0){const t=i.localAttrs=i.localAttrs||Object.create(null)
for(let r=0;r<e.length;r++)void 0===t[e[r]]&&(t[e[r]]=i.inflightAttrs[e[r]])}i.inflightAttrs=null}t&&(i.errors=t),this._capabilities.notifyChange(e,"errors",null)}unloadRecord(e){const t=this._capabilities
if(!this.__cache.has(e))return void K(t)?.unload(e)
const i=!this.isDeletionCommitted(e)
let r=!1
const s=this.__peek(e,!1)
s.isNew||s.isDeletionCommitted?K(t)?.push({op:"deleteRecord",record:e,isNew:s.isNew}):K(t)?.unload(e),s.localAttrs=null,s.remoteAttrs=null,s.defaultAttrs=null,s.inflightAttrs=null
const n=function(e,t){const i=[],r=[],s=new Set
for(r.push(t);r.length>0;){const n=r.shift()
i.push(n),s.add(n)
const o=de(e,t).iterator()
for(let e=o.next();!e.done;e=o.next()){const t=e.value
t&&!s.has(t)&&(s.add(t),r.push(t))}}return i}(t,e)
if(function(e,t){for(let i=0;i<t.length;++i){const r=t[i]
if(e.hasRecord(r))return!1}return!0}(t,n))for(let o=0;o<n.length;++o){const e=n[o]
t.notifyChange(e,"removed",null),r=!0,t.disconnectRecord(e)}this.__cache.delete(e),this.__destroyedCache.set(e,s),1===this.__destroyedCache.size&&setTimeout((()=>{this.__destroyedCache.clear()}),100),!r&&i&&t.notifyChange(e,"removed",null)}getAttr(e,t){const i=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),i){const i=t,r=this.__peek(e,!0)
if(!r)return
if(r.localAttrs&&i in r.localAttrs)return r.localAttrs[i]
if(r.inflightAttrs&&i in r.inflightAttrs)return r.inflightAttrs[i]
if(r.remoteAttrs&&i in r.remoteAttrs)return r.remoteAttrs[i]
if(r.defaultAttrs&&i in r.defaultAttrs)return r.defaultAttrs[i]
{const t=this._capabilities.schema.fields(e).get(i)
this._capabilities
const s=te(t,e,this._capabilities._store)
return X(t)&&(r.defaultAttrs=r.defaultAttrs||Object.create(null),r.defaultAttrs[i]=s),s}}const r=t,s=this.__peek(e,!0),n=r[0]
let o=s.localAttrs&&n in s.localAttrs?s.localAttrs[n]:void 0
if(void 0===o&&(o=s.inflightAttrs&&n in s.inflightAttrs?s.inflightAttrs[n]:void 0),void 0===o&&(o=s.remoteAttrs&&n in s.remoteAttrs?s.remoteAttrs[n]:void 0),void 0!==o){for(let e=1;e<r.length;e++)if(o=o[r[e]],void 0===o)return
return o}}getRemoteAttr(e,t){const i=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),i){const i=t,r=this.__peek(e,!0)
if(!r)return
if(r.remoteAttrs&&i in r.remoteAttrs)return r.remoteAttrs[i]
if(r.defaultAttrs&&i in r.defaultAttrs)return r.defaultAttrs[i]
{const t=this._capabilities.schema.fields(e).get(i)
this._capabilities
const s=te(t,e,this._capabilities._store)
return X(t)&&(r.defaultAttrs=r.defaultAttrs||Object.create(null),r.defaultAttrs[i]=s),s}}const r=t,s=this.__peek(e,!0),n=r[0]
let o=s.remoteAttrs&&n in s.remoteAttrs?s.remoteAttrs[n]:void 0
if(void 0!==o){for(let e=1;e<r.length;e++)if(o=o[r[e]],void 0===o)return
return o}}setAttr(e,t,i){const r=!Array.isArray(t)||1===t.length
if(Array.isArray(t)&&1===t.length&&(t=t[0]),r){const r=this.__peek(e,!1),s=t,n=r.inflightAttrs&&s in r.inflightAttrs?r.inflightAttrs[s]:r.remoteAttrs&&s in r.remoteAttrs?r.remoteAttrs[s]:void 0
return n!==i?(r.localAttrs=r.localAttrs||Object.create(null),r.localAttrs[s]=i,r.changes=r.changes||Object.create(null),r.changes[s]=[n,i]):r.localAttrs&&(delete r.localAttrs[s],delete r.changes[s]),r.defaultAttrs&&s in r.defaultAttrs&&delete r.defaultAttrs[s],void this._capabilities.notifyChange(e,"attributes",s)}const s=t,n=this.__peek(e,!1),o=s[0],a=n.inflightAttrs&&o in n.inflightAttrs?n.inflightAttrs[o]:n.remoteAttrs&&o in n.remoteAttrs?n.remoteAttrs[o]:void 0
let l
if(a){l=a[s[1]]
for(let e=2;e<s.length;e++)l=l[s[e]]}if(l!==i){n.localAttrs=n.localAttrs||Object.create(null),n.localAttrs[o]=n.localAttrs[o]||structuredClone(a),n.changes=n.changes||Object.create(null)
let e=n.localAttrs[o],t=1
for(;t<s.length-1;)e=e[s[t++]]
e[s[t]]=i,n.changes[o]=[a,n.localAttrs[o]]}else if(n.localAttrs)try{if(!a)return
JSON.stringify(a)!==JSON.stringify(n.localAttrs[o])&&(delete n.localAttrs[o],delete n.changes[o])}catch{}this._capabilities.notifyChange(e,"attributes",o)}changedAttrs(e){const t=this.__peek(e,!1)
return t&&t.changes||Object.create(null)}hasChangedAttrs(e){const t=this.__peek(e,!0)
return!!t&&(null!==t.inflightAttrs&&Object.keys(t.inflightAttrs).length>0||null!==t.localAttrs&&Object.keys(t.localAttrs).length>0)}rollbackAttrs(e){const t=this.__peek(e,!1)
let i
return t.isDeleted=!1,null!==t.localAttrs&&(i=Object.keys(t.localAttrs),t.localAttrs=null,t.changes=null),t.isNew&&(t.isDeletionCommitted=!0,t.isDeleted=!0,t.isNew=!1),t.inflightAttrs=null,t.defaultAttrs=null,t.errors&&(t.errors=null,this._capabilities.notifyChange(e,"errors",null)),this._capabilities.notifyChange(e,"state",null),i&&i.length&&ie(this._capabilities,e,new Set(i)),i||[]}changedRelationships(e){return this.__graph.getChanged(e)}hasChangedRelationships(e){return this.__graph.hasChanged(e)}rollbackRelationships(e){let t
return this._capabilities,this._capabilities._store._join((()=>{t=this.__graph.rollback(e)})),t}getRelationship(e,t){return this.__graph.getData(e,t)}getRemoteRelationship(e,t){return this.__graph.getRemoteData(e,t)}setIsDeleted(e,t){this.__peek(e,!1).isDeleted=t,this._capabilities.notifyChange(e,"state",null)}getErrors(e){return this.__peek(e,!0).errors||[]}isEmpty(e){const t=this.__safePeek(e,!0)
return!t||null===t.remoteAttrs&&null===t.inflightAttrs&&null===t.localAttrs}isNew(e){return this.__safePeek(e,!0)?.isNew||!1}isDeleted(e){return this.__safePeek(e,!0)?.isDeleted||!1}isDeletionCommitted(e){return this.__safePeek(e,!0)?.isDeletionCommitted||!1}_createCache(e){const t={id:null,remoteAttrs:null,localAttrs:null,defaultAttrs:null,inflightAttrs:null,changes:null,errors:null,isNew:!1,isDeleted:!1,isDeletionCommitted:!1}
return this.__cache.set(e,t),t}__safePeek(e,t){let i=this.__cache.get(e)
return!i&&t&&(i=this.__destroyedCache.get(e)),i}__peek(e,t){return this.__safePeek(e,t)}}function Q(e){return h(e)?e.remoteState?[e.remoteState]:[]:e.remoteState}function X(e){return!!e&&ee(e.options)}function ee(e){return!!e&&"function"==typeof e.defaultValue}function te(e,t,i){const r=e?.options
if(e&&(r||e.type)&&("attribute"===e.kind||"field"===e.kind)){if(ee(r))return r.defaultValue()
if(r&&"defaultValue"in r)return r.defaultValue
if("attribute"!==e.kind&&e.type){const s=i.schema.transformation(e)
if(s?.defaultValue)return s.defaultValue(r||null,t)}}}function ie(e,t,i){if(i)for(const r of i)e.notifyChange(t,"attributes",r)
else e.notifyChange(t,"attributes",null)}function re(e,t,i){const r=new Set,s=Object.keys(t),n=s.length,o=e.localAttrs,a=Object.assign(Object.create(null),e.remoteAttrs,e.inflightAttrs)
for(let l=0;l<n;l++){const e=s[l]
if(!i.has(e))continue
const n=t[e]
o&&void 0!==o[e]||a[e]!==n&&r.add(e)}return r}function se(e){return!e||null===e.remoteAttrs&&null===e.inflightAttrs&&null===e.localAttrs}function ne(e,t=!1){if(!e)return!1
const i=e.isNew,r=se(e)
return i?!e.isDeleted:!(t&&e.isDeletionCommitted||r)}function oe(e,t,i,r){for(const s in r.relationships){const n=r.relationships[s],o=t.get(s)
n&&o&&ae(o)&&e.push({op:"updateRelationship",record:i,field:s,value:n})}}function ae(e){const{kind:t}=e
return"hasMany"===t||"belongsTo"===t||"resource"===t||"collection"===t}function le(e,t){const{localAttrs:i,remoteAttrs:r,inflightAttrs:s,defaultAttrs:n,changes:o}=e
if(!i)return e.changes=null,!1
let a=!1
const l=Object.keys(i)
for(let c=0,d=l.length;c<d;c++){const e=l[c];(s&&e in s?s[e]:r&&e in r?r[e]:void 0)===i[e]&&(a=!0,t?.delete(e),delete i[e],delete o[e]),n&&e in n&&delete n[e]}return a}function ce(e,t,i){let r=t.peekRecordIdentifier(i)
return r=r?t.updateRecordIdentifier(r,i):t.getOrCreateRecordIdentifier(i),e.upsert(r,i,e._capabilities.hasRecord(r)),r}function de(e,t){const i=K(e),r=i?.identifiers.get(t)
if(!r)return Y
const s=[]
Object.keys(r).forEach((e=>{const t=r[e]
t&&!t.definition.isImplicit&&s.push(t)}))
let n=0,o=0,a=0
return{iterator:()=>({next:()=>{const e=(()=>{for(;n<s.length;){for(;o<2;){const t=0===o?h(e=s[n])?e.localState?[e.localState]:[]:e.additions?[...e.additions]:[]:Q(s[n])
for(;a<t.length;){const e=t[a++]
if(null!==e)return e}a=0,o++}o=0,n++}var e})()
return{value:e,done:void 0===e}}})}}function ue(e,t){"links"in t&&(e.links=t.links),"meta"in t&&(e.meta=t.meta)}function he(e,t,i,r){let s
const n=e.__safePeek(t,!1),o=!!n,a=n||e._createCache(t),l=function(e,t,i){const r=t._store.getRequestStateService()
return!ne(e)&&r.getPendingRequestsForRecord(i).some((e=>"query"===e.type))}(n,e._capabilities,t)||!ne(n),c=!function(e){if(!e)return!0
const t=e.isNew,i=e.isDeleted,r=se(e)
return(!t||i)&&r}(n)&&!l
a.isNew&&(a.isNew=!1,e._capabilities.notifyChange(t,"identity",null),e._capabilities.notifyChange(t,"state",null))
const d=e._capabilities.schema.fields(t)
return r&&o&&i.attributes&&(s=re(a,i.attributes,d)),a.remoteAttrs=Object.assign(a.remoteAttrs||Object.create(null),i.attributes),a.localAttrs&&le(a,s)&&e._capabilities.notifyChange(t,"state",null),c||e._capabilities.notifyChange(t,"added",null),i.id&&(a.id=i.id),i.relationships&&oe(e.__graph,d,t,i),s?.size&&ie(e._capabilities,t,s),s?.size?Array.from(s):void 0}function fe(e,t){const i=(0,o.i)(t.record)
switch(!i&&(0,o.f)(t.record),t.op){case"mergeIdentifiers":{const i=e.__cache.get(t.record)
i&&(e.__cache.set(t.value,i),e.__cache.delete(t.record)),e.__graph.update(t,!0)
break}case"update":i&&("field"in t?ae(e._capabilities.schema.fields(t.record).get(t.field))?e.__graph.push(t):e.upsert(t.record,{type:t.record.type,id:t.record.id,attributes:{[t.field]:t.value}},e._capabilities.hasRecord(t.record)):e.upsert(t.record,t.value,e._capabilities.hasRecord(t.record)))
break
case"add":i?"field"in t?e.__graph.push(t):e.upsert(t.record,t.value,e._capabilities.hasRecord(t.record)):function(e,t){const i=e.__documents.get(t.record.lid),{content:r}=i
if("data"===t.field){let i=!1
return Array.isArray(r.data)?Array.isArray(t.value)?void 0!==t.index?(i=!0,r.data.splice(t.index,0,...t.value)):(i=!0,r.data.push(...t.value)):void 0!==t.index?(i=!0,r.data.splice(t.index,0,t.value)):(i=!0,r.data.push(t.value)):(i=r.data!==t.value,i&&(r.data=t.value)),void(i&&e._capabilities.notifyChange(t.record,"updated",null))}r.included=r.included||[],Array.isArray(t.value)?r.included=r.included.concat(t.value):r.included.push(t.value)}(e,t)
break
case"remove":if(i)if("field"in t)e.__graph.push(t)
else{const i=e.__safePeek(t.record,!1)
i?(i.isDeleted=!0,i.isDeletionCommitted=!0,e.unloadRecord(t.record)):K(e._capabilities)?.push({op:"deleteRecord",record:t.record,isNew:!1})}else"field"in t&&function(e,t){const i=e.__documents.get(t.record.lid),{content:r}=i
if("data"===t.field){let i=!1
if(Array.isArray(r.data)){const e=Array.isArray(t.value)?t.value:[t.value]
for(let s=0;s<e.length;s++){const n=e[s]
if(void 0!==t.index){const e=t.index<r.data.length&&r.data[t.index]===n?t.index:r.data.indexOf(n);-1!==e&&(i=!0,r.data.splice(e,1))}else{const e=r.data.indexOf(n);-1!==e&&(i=!0,r.data.splice(e,1))}}}else i=r.data===t.value,i&&(r.data=null)
i&&e._capabilities.notifyChange(t.record,"updated",null)}else{r.included=r.included||[]
const e=Array.isArray(t.value)?t.value:[t.value]
for(const t of e){const e=r.included.indexOf(t);-1!==e&&r.included.splice(e,1)}}}(e,t)}}var pe=i(2294),ye=i(6730),me=i(4065),ge=i(7648)
function _e(e,t){return e.get(be(e,t))}function be(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}function ve(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const we=(0,a.vs)("PromiseCache",new WeakMap),ke=(0,a.vs)("RequestMap",new Map)
function Re(e,t){ke.set(e,t)}function Se(e){ke.delete(e)}function Ae(e,t){we.set(e,t)}const Me=(0,a.L1)("IS_CACHE_HANDLER",Symbol("IS_CACHE_HANDLER"))
function Ce(e){return e&&!0===e[ge.k0]}function Ee(e,t,i){return Ce(t)?t:i?{[ge.k0]:!0,request:e.request,response:e.getResponse(),error:t}:{[ge.k0]:!0,request:e.request,response:e.getResponse(),content:t}}function Te(e){return new DOMException(e||"The user aborted a request.","AbortError")}function Oe(e,t,i,r){const s=new Ne(t,r,0===i),n=(o=e[i],0===i&&Boolean(o[Me]))
var o
const a=new xe(s,n)
let l
try{l=e[i].request(a,(function(t){return s.nextCalled++,Oe(e,t,i+1,r)})),n&&a._finalize(),l&&n&&(l instanceof Promise||(Re(s.requestId,{isError:!1,result:Ee(s,l,!1)}),l=Promise.resolve(l)))}catch(e){n&&Re(s.requestId,{isError:!0,result:Ee(s,e,!0)}),l=Promise.reject(e)}const c=function(e){const t=qe()
let i,{promise:r}=t
return r=r.finally((()=>{e.resolveStream(),i&&i.forEach((e=>e()))})),r.onFinalize=e=>{i=i||[],i.push(e)},r[ge.J6]=!0,r.getStream=()=>e.getStream(),r.abort=t=>{e.abort(Te(t))},r.id=e.requestId,r.lid=e.god.identifier,t.promise=r,t}(s)
return d=l,Boolean(d&&d instanceof Promise&&!0===d[ge.J6])?function(e,t,i){return e.setStream(t.getStream()),t.then((t=>{const r={[ge.k0]:!0,request:e.request,response:t.response,content:t.content}
i.resolve(r)}),(t=>{if(Ce(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[ge.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,i.reject(t)})),i.promise}(s,l,c):function(e,t,i){return t.then((t=>{if(e.controller.signal.aborted)return void i.reject(Te(e.controller.signal.reason))
Ce(t)&&(e.setStream(e.god.stream),t=t.content)
const r={[ge.k0]:!0,request:e.request,response:e.getResponse(),content:t}
i.resolve(r)}),(t=>{if(Ce(t)&&e.setStream(e.god.stream),!(t&&t instanceof Error))try{throw new Error(t||"Request Rejected with an Unknown Error")}catch(e){t&&"object"==typeof t&&(Object.assign(e,t),e.message=t.message||"Request Rejected with an Unknown Error"),t=e}t[ge.k0]=!0,t.request=e.request,t.response=e.getResponse(),t.error=t.error||t.message,i.reject(t)})),i.promise}(s,l,c)
var d}function qe(){let e,t
const i=new Promise(((i,r)=>{e=i,t=r}))
return{resolve:e,reject:t,promise:i}}function De(e){return e.clone=()=>new Headers(e),e.toJSON=()=>Array.from(e),e}function je(e){const{headers:t,ok:i,redirected:r,status:s,statusText:n,type:o,url:a}=e
return De(t),{headers:t,ok:i,redirected:r,status:s,statusText:n,type:o,url:a}}class Ne{constructor(e,t,i=!1){ve(this,"hasSetStream",!1),ve(this,"hasSetResponse",!1),ve(this,"hasSubscribers",!1),ve(this,"stream",qe()),ve(this,"response",null),ve(this,"nextCalled",0),this.isRoot=i,this.requestId=t.id,this.controller=e.controller||t.controller,this.stream.promise.sizeHint=0,e.controller&&(e.controller!==t.controller&&t.controller.signal.addEventListener("abort",(()=>{this.controller.abort(t.controller.signal.reason)})),delete e.controller)
let r=Object.assign({signal:this.controller.signal},e)
e.headers&&De(e.headers),this.enhancedRequest=r,this.request=e,this.god=t,this.stream.promise=this.stream.promise.then((e=>(this.god.stream===e&&this.hasSubscribers&&(this.god.stream=null),e)))}get hasRequestedStream(){return this.god.hasRequestedStream}getResponse(){return this.hasSetResponse?this.response:1===this.nextCalled?this.god.response:null}getStream(){if(this.isRoot&&(this.god.hasRequestedStream=!0),!this.hasSetResponse){const e=this.god.response?.headers?.get("content-length")
this.stream.promise.sizeHint=e?parseInt(e,10):0}return this.hasSubscribers=!0,this.stream.promise}abort(e){this.controller.abort(e)}setStream(e){this.hasSetStream||(this.hasSetStream=!0,e instanceof Promise||(this.god.stream=e),this.stream.resolve(e))}resolveStream(){this.setStream(1===this.nextCalled?this.god.stream:null)}setResponse(e){if(!this.hasSetResponse)if(this.hasSetResponse=!0,e instanceof Response){let t=je(e)
this.response=t,this.god.response=t
const i=e.headers?.get("content-length")
this.stream.promise.sizeHint=i?parseInt(i,10):0}else this.response=e,this.god.response=e}}var Pe=new WeakMap
class xe{constructor(e,t){var i,r;(function(e,t){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,void 0)})(this,Pe),this.id=e.requestId,r=e,(i=Pe).set(be(i,this),r),this.request=e.enhancedRequest,this._isCacheHandler=t,this._finalized=!1}setStream(e){_e(Pe,this).setStream(e)}setResponse(e){_e(Pe,this).setResponse(e)}setIdentifier(e){_e(Pe,this).god.identifier=e}get hasRequestedStream(){return _e(Pe,this).hasRequestedStream}_finalize(){this._finalized=!0}}function Fe(e,t){return e.get(function(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}(e,t))}new Map([["records","array"],["data","json"],["body",{type:"string",klass:["Blob","ArrayBuffer","TypedArray","DataView","FormData","URLSearchParams","ReadableStream"]}],["disableTestWaiter","boolean"],["options","object"],["cacheOptions","object"],["op","string"],["store","object"],["url","string"],["cache",["default","force-cache","no-cache","no-store","only-if-cached","reload"]],["credentials",["include","omit","same-origin"]],["destination",["","object","audio","audioworklet","document","embed","font","frame","iframe","image","manifest","paintworklet","report","script","sharedworker","style","track","video","worker","xslt"]],["headers","headers"],["integrity","string"],["keepalive","boolean"],["method",["QUERY","GET","PUT","PATCH","DELETE","POST","OPTIONS","HEAD","CONNECT","TRACE"]],["mode",["same-origin","cors","navigate","no-cors"]],["redirect",["error","follow","manual"]],["referrer","string"],["signal","AbortSignal"],["controller","AbortController"],["referrerPolicy",["","same-origin","no-referrer","no-referrer-when-downgrade","origin","origin-when-cross-origin","strict-origin","strict-origin-when-cross-origin","unsafe-url"]]]),(0,a.L1)("IS_FROZEN",Symbol("FROZEN")),(0,a.L1)("IS_COLLECTION",Symbol.for("Collection")),new Set([])
var Ie=new WeakMap
class $e{constructor(e){var t,i
i=[],function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t=Ie),t.set(this,i),Object.assign(this,e),this._pending=new Map,this._deduped=new Map}useCache(e){return e[Me]=!0,Fe(Ie,this).unshift(e),this}use(e){return Fe(Ie,this).push(...e),this}request(e){const t=Fe(Ie,this),i=e.controller||new AbortController
e.controller&&delete e.controller
const r=(0,a.dN)("REQ_ID")??0;(0,a.ml)("REQ_ID",r+1)
const s=Oe(t,e,0,{controller:i,response:null,stream:null,hasRequestedStream:!1,id:r,identifier:null}),n=function(e){return ke.get(e)}(r),o=function(e,t){return e[ge.J6]=!0,e.getStream=t.getStream,e.abort=t.abort,e.onFinalize=t.onFinalize,e.id=t.id,e.lid=t.lid,e}(s.then((e=>(Ae(o,{isError:!1,result:e}),Se(r),e)),(e=>{throw Ae(o,{isError:!0,result:e}),Se(r),e})),s)
return n&&Ae(o,n),o}static create(e){return new this(e)}}function ze(e){return e?.__esModule?e:{default:e,...e}}globalThis.setWarpDriveLogging=me.q,globalThis.getWarpDriveRuntimeConfig=me.P
class Le{constructor(e,t,i={}){this.__store=e,this._snapshots=null,this.modelName=t,this.adapterOptions=i.adapterOptions,this.include=i.include}get _recordArray(){return this.__store.peekAll(this.modelName)}get length(){return this._recordArray.length}snapshots(){if(null!==this._snapshots)return this._snapshots
this.__store
const{_fetchManager:e}=this.__store
return this._snapshots=this._recordArray[o.l].map((t=>e.createSnapshot(t))),this._snapshots}}function Be(e,t,i,r,s,n){return e?e.normalizeResponse(t,i,r,s,n):r}class Ue{constructor(e,t,i){this._store=i,this.__attributes=null,this._belongsToRelationships=Object.create(null),this._belongsToIds=Object.create(null),this._hasManyRelationships=Object.create(null),this._hasManyIds=Object.create(null)
const r=!!i._instanceCache.peek(t)
if(this.modelName=t.type,this.identifier=t,r&&this._attributes,this.id=t.id,this.adapterOptions=e.adapterOptions,this.include=e.include,this.modelName=t.type,r){const e=this._store.cache
this._changedAttributes=e.changedAttrs(t)}}get record(){return this._store.peekRecord(this.identifier)}get _attributes(){if(null!==this.__attributes)return this.__attributes
const e=this.__attributes=Object.create(null),{identifier:t}=this,i=this._store.schema.fields(t),r=this._store.cache
return i.forEach(((i,s)=>{"attribute"===i.kind&&(e[s]=r.getAttr(t,s))})),e}get isNew(){const e=this._store.cache
return e?.isNew(this.identifier)||!1}attr(e){if(e in this._attributes)return this._attributes[e]}attributes(){return{...this._attributes}}changedAttributes(){const e=Object.create(null)
if(!this._changedAttributes)return e
const t=Object.keys(this._changedAttributes)
for(let i=0,r=t.length;i<r;i++){const r=t[i]
e[r]=this._changedAttributes[r].slice()}return e}belongsTo(e,t){const i=!(!t||!t.id)
let s
const n=this._store
if(!0===i&&e in this._belongsToIds)return this._belongsToIds[e]
if(!1===i&&e in this._belongsToRelationships)return this._belongsToRelationships[e]
n.schema.fields({type:this.modelName}).get(e)
const o=ze(r).graphFor,{identifier:a}=this,l=o(this._store).getData(a,e),c=l&&l.data,d=c?n.identifierCache.getOrCreateRecordIdentifier(c):null
if(l&&void 0!==l.data){const e=n.cache
s=d&&!e.isDeleted(d)?i?d.id:n._fetchManager.createSnapshot(d):null}return i?this._belongsToIds[e]=s:this._belongsToRelationships[e]=s,s}hasMany(e,t){const i=!(!t||!t.ids)
let s
const n=this._hasManyIds[e],o=this._hasManyRelationships[e]
if(!0===i&&e in this._hasManyIds)return n
if(!1===i&&e in this._hasManyRelationships)return o
const a=this._store,l=(a.schema.fields({type:this.modelName}).get(e),ze(r).graphFor),{identifier:c}=this,d=l(this._store).getData(c,e)
return d.data&&(s=[],d.data.forEach((e=>{const t=a.identifierCache.getOrCreateRecordIdentifier(e)
a.cache.isDeleted(t)||(i?s.push(t.id):s.push(a._fetchManager.createSnapshot(t)))}))),i?this._hasManyIds[e]=s:this._hasManyRelationships[e]=s,s}eachAttribute(e,t){this._store.schema.fields(this.identifier).forEach(((i,r)=>{"attribute"===i.kind&&e.call(t,r,i)}))}eachRelationship(e,t){this._store.schema.fields(this.identifier).forEach(((i,r)=>{"belongsTo"!==i.kind&&"hasMany"!==i.kind||e.call(t,r,i)}))}serialize(e){return this._store,this._store.serializerFor(this.modelName).serialize(this,e)}}const Ve=(0,a.L1)("SaveOp",Symbol("SaveOp"))
class We{constructor(e){this._store=e,this._pendingFetch=new Map,this.requestCache=e.getRequestStateService(),this.isDestroyed=!1}createSnapshot(e,t={}){return new Ue(t,e,this._store)}scheduleSave(e,t){const i=qe(),r={data:[{op:"saveRecord",recordIdentifier:e,options:t}]},s={snapshot:this.createSnapshot(e,t),resolver:i,identifier:e,options:t,queryRequest:r},n=this.requestCache._enqueue(i.promise,s.queryRequest)
return function(e,t){const{snapshot:i,resolver:r,identifier:s,options:n}=t,o=e.adapterFor(s.type),a=n[Ve],l=i.modelName,c=e.modelFor(l)
let d=Promise.resolve().then((()=>o[a](e,c,i)))
const u=e.serializerFor(l)
d=d.then((t=>{if(t)return Be(u,e,c,t,i.id,a)})),r.resolve(d)}(this._store,s),n}scheduleFetch(e,t,i){const s={data:[{op:"findRecord",recordIdentifier:e,options:t}]},n=this.getPendingFetch(e,t)
if(n)return n
const o=e.type,a=qe(),l={identifier:e,resolver:a,options:t,queryRequest:s},c=a.promise,d=this._store,u=!d._instanceCache.recordIsLoaded(e)
let h=this.requestCache._enqueue(c,l.queryRequest).then((i=>{i.data&&!Array.isArray(i.data)&&(i.data.lid=e.lid)
const r=d._push(i,t.reload)
return r&&!Array.isArray(r)?r:e}),(t=>{const i=d.cache
if(!i||i.isEmpty(e)||u){let t=!0
if(!i){const i=(0,ze(r).graphFor)(d)
t=i.isReleasable(e),t||i.unload(e,!0)}(i||t)&&(d._enableAsyncFlush=!0,d._instanceCache.unloadRecord(e),d._enableAsyncFlush=null)}throw t}))
0===this._pendingFetch.size&&new Promise((e=>setTimeout(e,0))).then((()=>{this.flushAllPendingFetches()}))
const f=this._pendingFetch
let p=f.get(o)
p||(p=new Map,f.set(o,p))
let y=p.get(e)
return y||(y=[],p.set(e,y)),y.push(l),l.promise=h,h}getPendingFetch(e,t){const i=this._pendingFetch.get(e.type)?.get(e)
if(i){const e=i.find((e=>function(e={},t={}){return i=e.adapterOptions,r=t.adapterOptions,(!i||i===r||0===Object.keys(i).length)&&function(e,t){if(!e?.length)return!0
if(!t?.length)return!1
const i=(Array.isArray(e)?e:e.split(",")).sort(),r=(Array.isArray(t)?t:t.split(",")).sort()
if(i.join(",")===r.join(","))return!0
for(let s=0;s<i.length;s++)if(!r.includes(i[s]))return!1
return!0}(e.include,t.include)
var i,r}(t,e.options)))
if(e)return e.promise}}flushAllPendingFetches(){if(this.isDestroyed)return
const e=this._store
this._pendingFetch.forEach(((t,i)=>function(e,t,i){const r=e.adapterFor(i)
if(r.findMany&&r.coalesceFindRequests){const s=[]
t.forEach(((e,i)=>{e.length>1||(t.delete(i),s.push(e[0]))}))
const n=s.length
if(n>1){const t=new Array(n),o=new Map
for(let i=0;i<n;i++){const r=s[i]
t[i]=e._fetchManager.createSnapshot(r.identifier,r.options),o.set(t[i],r)}let a
a=r.groupRecordsForFindMany?r.groupRecordsForFindMany(e,t):[t]
for(let s=0,n=a.length;s<n;s++)Je(e,o,a[s],r,i)}else 1===n&&Ke(e,r,s[0])}t.forEach((t=>{t.forEach((t=>{Ke(e,r,t)}))}))}(e,t,i))),this._pendingFetch.clear()}fetchDataIfNeededForIdentifier(e,t={},i){const r=function(e,t){const i=e.cache
if(!i)return!0
const r=i.isNew(t),s=i.isDeleted(t),n=i.isEmpty(t)
return(!r||s)&&n}(this._store._instanceCache,e),s=function(e,t){const i=e.store.getRequestStateService()
return!e.recordIsLoaded(t)&&i.getPendingRequestsForRecord(t).some((e=>"query"===e.type))}(this._store._instanceCache,e)
let n
return r?(t.reload=!0,n=this.scheduleFetch(e,t,i)):n=s?this.getPendingFetch(e,t):Promise.resolve(e),n}destroy(){this.isDestroyed=!0}}function He(e,t,i){for(let r=0,s=t.length;r<s;r++){const s=t[r],n=e.get(s)
n&&n.resolver.reject(i||new Error(`Expected: '<${s.modelName}:${s.id}>' to be present in the adapter provided payload, but it was not found.`))}}function Ke(e,t,i){const r=i.identifier,s=r.type,a=e._fetchManager.createSnapshot(r,i.options),l=e.modelFor(r.type),c=r.id
let d=Promise.resolve().then((()=>t.findRecord(e,l,r.id,a)))
d=d.then((t=>{const i=Be(e.serializerFor(s),e,l,t,c,"findRecord")
return(0,n.warn)(`You requested a record of type '${s}' with id '${c}' but the adapter returned a payload with primary data having an id of '${i.data.id}'. Use 'store.findRecord()' when the requested id is the same as the one returned by the adapter. In other cases use 'store.queryRecord()' instead.`,(0,o.h)(i.data.id)===(0,o.h)(c),{id:"ds.store.findRecord.id-mismatch"}),i})),i.resolver.resolve(d)}function Je(e,t,i,r,s){i.length>1?function(e,t,i,r){const s=e.modelFor(i)
return Promise.resolve().then((()=>{const i=r.map((e=>e.id))
return t.findMany(e,s,i,r)})).then((t=>Be(e.serializerFor(i),e,s,t,null,"findMany")))}(e,r,s,i).then((r=>{!function(e,t,i,r){const s=new Map
for(let n=0;n<i.length;n++){const e=i[n].id
let t=s.get(e)
t||(t=[],s.set(e,t)),t.push(i[n])}const o=Array.isArray(r.included)?r.included:[],a=r.data
for(let n=0,c=a.length;n<c;n++){const e=a[n],i=s.get(e.id)
s.delete(e.id),i?i.forEach((i=>{t.get(i).resolver.resolve({data:e})})):o.push(e)}if(o.length>0&&e._push({data:null,included:o},!0),0===s.size)return
const l=[]
s.forEach((e=>{l.push(...e)})),(0,n.warn)('Ember Data expected to find records with the following ids in the adapter response from findMany but they were missing: [ "'+[...s.values()].map((e=>e[0].id)).join('", "')+'" ]',{id:"ds.store.missing-records-from-adapter"}),He(t,l)}(e,t,i,r)})).catch((e=>{He(t,i,e)})):1===i.length&&Ke(e,r,t.get(i[0]))}function Ge(e){}function Ye(e,t,i,r){const s=t.data?(n=t.data,o=(t,s)=>{const{id:n,type:o}=t
return function(e,t,i,r){const{id:s,type:n}=e
e.relationships||(e.relationships={})
const{relationships:o}=e,a=function(e,t,i,r){const{name:s}=i,{type:n}=t,o=function(e,t,i){const r=e.schema.fields(t).get(i)
return r?r.options.inverse:null}(e,{type:n},s)
if(o)return{inverseKey:o,kind:e.schema.fields({type:r}).get(o).kind}}(i,t,r,n)
if(a){const{inverseKey:e,kind:i}=a,r=o[e]?.data
"hasMany"===i&&void 0===r||(o[e]=o[e]||{},o[e].data=function(e,t,{id:i,type:r}){const s={id:i,type:r}
let n=null
if("hasMany"===t){const t=e||[]
e&&e.find((e=>e.type===s.type&&e.id===s.id))||t.push(s),n=t}else{const t=e||{}
Object.assign(t,s),n=t}return n}(r??null,i,t))}}(t,i,e,r),{id:n,type:o}},Array.isArray(n)?n.map(o):o(n)):null
var n,o
const a={}
"meta"in t&&(a.meta=t.meta),"links"in t&&(a.links=t.links),"data"in t&&(a.data=s)
const l={id:i.id,type:i.type,relationships:{[r.name]:a}}
return Array.isArray(t.included)||(t.included=[]),t.included.push(l),t}const Ze=new Set(["findRecord","findAll","query","queryRecord","findBelongsTo","findHasMany","updateRecord","createRecord","deleteRecord"]),Qe={request(e,t){if(e.request.url||!e.request.op||!Ze.has(e.request.op))return t(e.request)
const{store:i}=e.request
switch(i._fetchManager||(i._fetchManager=new We(i)),e.request.op){case"findRecord":return function(e){const{store:t,data:i}=e.request,{record:r,options:s}=i
let n
if(t._instanceCache.recordIsLoaded(r))if(s.reload)n=t._fetchManager.scheduleFetch(r,s,e.request)
else{let i=null
const o=t.adapterFor(r.type)
void 0===s.reload&&o.shouldReloadRecord&&o.shouldReloadRecord(t,i=t._fetchManager.createSnapshot(r,s))?(s.reload=!0,n=t._fetchManager.scheduleFetch(r,s,e.request)):(!1===s.backgroundReload||!s.backgroundReload&&o.shouldBackgroundReloadRecord&&!o.shouldBackgroundReloadRecord(t,i=i||t._fetchManager.createSnapshot(r,s))||(s.backgroundReload=!0,t._fetchManager.scheduleFetch(r,s,e.request)),n=Promise.resolve(r))}else n=t._fetchManager.fetchDataIfNeededForIdentifier(r,s,e.request)
return n.then((e=>t.peekRecord(e)))}(e)
case"findAll":return function(e){const{store:t,data:i}=e.request,{type:r,options:s}=i,n=t.adapterFor(r),o=t.recordArrayManager._live.get(r),a=new Le(t,r,s)
let l
return s.reload||!1!==s.reload&&(n.shouldReloadAll&&n.shouldReloadAll(t,a)||!n.shouldReloadAll&&0===a.length)?(o&&(o.isUpdating=!0),l=et(n,t,r,a,e.request,!0)):(l=Promise.resolve(t.peekAll(r)),(s.backgroundReload||!1!==s.backgroundReload&&(!n.shouldBackgroundReloadAll||n.shouldBackgroundReloadAll(t,a)))&&(o&&(o.isUpdating=!0),et(n,t,r,a,e.request,!1))),l}(e)
case"query":return function(e){const{store:t,data:i}=e.request
let{options:r}=i
const{type:s,query:n}=i,o=t.adapterFor(s),a=r._recordArray||t.recordArrayManager.getCollection({type:s,query:n})
delete r._recordArray
const l=t.modelFor(s)
return Promise.resolve().then((()=>o.query(t,l,n,a,r))).then((e=>{const i=Be(t.serializerFor(s),t,l,e,null,"query"),r=t._push(i,!0)
return t.recordArrayManager.populateManagedArray(a,r,i),a}))}(e)
case"queryRecord":return function(e){const{store:t,data:i}=e.request,{type:r,query:s,options:n}=i,o=t.adapterFor(r),a=t.modelFor(r)
return Promise.resolve().then((()=>o.queryRecord(t,a,s,n))).then((e=>{const i=Be(t.serializerFor(r),t,a,e,null,"queryRecord"),s=t._push(i,!0)
return s?t.peekRecord(s):null}))}(e)
case"findBelongsTo":return function(e){const{store:t,data:i,records:r}=e.request,{options:s,record:n,links:o,useLink:a,field:l}=i,c=r?.[0],d=c&&t._fetchManager.getPendingFetch(c,s)
if(d)return d
if(a)return function(e,t,i,r,s){return Promise.resolve().then((()=>{const n=e.adapterFor(t.type),o=e._fetchManager.createSnapshot(t,s),a=i&&"string"!=typeof i?i.href:i
return n.findBelongsTo(e,o,a,r)})).then((i=>{const s=e.modelFor(r.type)
let n=Be(e.serializerFor(r.type),e,s,i,null,"findBelongsTo")
return n.data||n.links||n.meta?(n=Ye(e,n,t,r),e._push(n,!0)):null}),null)}(t,n,o.related,l,s)
const u=t._fetchManager
return s.reload?u.scheduleFetch(c,s,e.request):u.fetchDataIfNeededForIdentifier(c,s,e.request)}(e)
case"findHasMany":return function(e){const{store:t,data:i,records:r}=e.request,{options:s,record:n,links:o,useLink:a,field:l}=i
if(a)return function(e,t,i,r,s,n){return Promise.resolve().then((()=>{const o=t._fetchManager.createSnapshot(i,n),a=r&&"string"!=typeof r?r.href:r
return e.findHasMany(t,o,a,s)})).then((e=>{const r=t.modelFor(s.type)
let n=Be(t.serializerFor(s.type),t,r,e,null,"findHasMany")
return n=Ye(t,n,i,s),t._push(n,!0)}),null)}(t.adapterFor(n.type),t,n,o.related,l,s)
const c=new Array(r.length),d=t._fetchManager
for(let u=0;u<r.length;u++){const t=r[u]
c[u]=s.reload?d.scheduleFetch(t,s,e.request):d.fetchDataIfNeededForIdentifier(t,s,e.request)}return Promise.all(c)}(e)
case"updateRecord":case"createRecord":case"deleteRecord":return function(e){const{store:t,data:i,op:r}=e.request,{options:s,record:n}=i
t.cache.willCommit(n,e)
const o=Object.assign({[Ve]:r},s)
return t._fetchManager.scheduleSave(n,o).then((i=>{let s
return t._join((()=>{s=t.cache.didCommit(n,{request:e.request,content:i})})),t.lifetimes?.didRequest&&"createRecord"===r&&t.lifetimes.didRequest(e.request,{status:201},null,t),t.peekRecord(s.data)})).catch((e=>{let i=e
throw e?"string"==typeof e&&(i=new Error(e)):i=new Error("Unknown Error Occurred During Request"),function(e,t,i){if(i&&!0===i.isAdapterError&&"InvalidError"===i.code){const r=e.serializerFor(t.type)
if(r&&"function"==typeof r.extractErrors){const s=r.extractErrors(e,e.modelFor(t.type),i,t.id)
i.errors=function(e){const t=[]
return e&&Object.keys(e).forEach((i=>{const r=(s=e[i],Array.isArray(s)?s:[s])
var s
for(let e=0;e<r.length;e++){let s="Invalid Attribute",n=`/data/attributes/${i}`
i===Xe&&(s="Invalid Document",n="/data"),t.push({title:s,detail:r[e],source:{pointer:n}})}})),t}(s)}}const r=e.cache
if(i.errors){let e=i.errors
0===e.length&&(e=[{title:"Invalid Error",detail:"",source:{pointer:"/data"}}]),r.commitWasRejected(t,e)}else r.commitWasRejected(t)}(t,n,i),i}))}(e)
default:return t(e.request)}}},Xe="base"
function et(e,t,i,r,s,n){const o=t.modelFor(i)
let a=Promise.resolve().then((()=>e.findAll(t,o,null,r)))
return a=a.then((e=>{const s=Be(t.serializerFor(i),t,o,e,null,"findAll")
return t._push(s,n),r._recordArray.isUpdating=!1,r._recordArray})),a}function tt(e,t){this._adapterCache=this._adapterCache||Object.create(null)
const i=(0,o.v)(e),{_adapterCache:r}=this
let s=r[i]
if(s)return s
const n=(0,pe.getOwner)(this)
return s=n.lookup(`adapter:${i}`),void 0!==s?(r[i]=s,s):(s=r.application||n.lookup("adapter:application"),void 0!==s?(r[i]=s,r.application=s,s):void 0)}function it(e){this._serializerCache=this._serializerCache||Object.create(null)
const t=(0,o.v)(e),{_serializerCache:i}=this
let r=i[t]
if(r)return r
const s=(0,pe.getOwner)(this)
return r=s.lookup(`serializer:${t}`),void 0!==r?(i[t]=r,r):(r=i.application||s.lookup("serializer:application"),void 0!==r?(i[t]=r,i.application=r,r):null)}function rt(e,t){const i=(0,o.v)(e),r=this.serializerFor(i),s=this.modelFor(i)
return r.normalize(s,t)}function st(e,t){const i=t||e,r=t?(0,o.v)(e):"application"
this.serializerFor(r).pushPayload(this,i)}function nt(e,t){return this._fetchManager||(this._fetchManager=new We(this)),this._fetchManager.createSnapshot((0,ye.o)(e)).serialize(t)}function ot(){for(const e in this._adapterCache){const t=this._adapterCache[e]
"function"==typeof t.destroy&&t.destroy()}for(const e in this._serializerCache){const t=this._serializerCache[e]
"function"==typeof t.destroy&&t.destroy()}}var at,lt,ct,dt,ut,ht=i(3241),ft=i(4471),pt=i.n(ft),yt=i(8738),mt=i(8146),gt=i(1788),_t=i(1389),bt=i(8410),vt=i.n(bt),wt=i(3991),kt=i(9280),Rt=i.n(kt),St=i(7104),At=i.n(St),Mt=i(4666)
function Ct(e,t,i){(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,t),t.set(e,i)}function Et(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function Tt(e){{const t=(0,ht._k)(e)
return(0,n.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}const Ot=At().extend(Rt()),qt=new WeakMap
function Dt(e,t,i,r){let s={configurable:!0,enumerable:!0,writable:!0,initializer:null}
r&&(s.initializer=r)
for(let n of i)s=n(e,t,s)||s
void 0===s.initializer?Object.defineProperty(e,t,s):function(e,t,i){let r=qt.get(e)
r||(r=new Map,qt.set(e,r)),r.set(t,i)}(e,t,s)}function jt(e,t,i){let r={...Object.getOwnPropertyDescriptor(e,t)}
for(let s of i)r=s(e,t,r)||r
void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(e):void 0,r.initializer=void 0),Object.defineProperty(e,t,r)}function Nt(e,t){let i=function(e,t){var i
let r=e.prototype
for(;r;){let e=null==(i=qt.get(r))?void 0:i.get(t)
if(e)return e
r=r.prototype}}(e.constructor,t)
i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(e):void 0})}const Pt=Symbol.for("LegacyPromiseProxy"),xt=Ot
class Ft extends xt{constructor(...e){super(...e),Et(this,Pt,!0)}get id(){const{key:e,legacySupport:t}=this._belongsToState
return t.referenceFor("belongsTo",e).id()}get meta(){}async reload(e){const{key:t,legacySupport:i}=this._belongsToState
return await i.reloadBelongsTo(t,e),this}}jt((at=Ft).prototype,"id",[yt.PO]),jt(at.prototype,"meta",[(0,ft.computed)()])
class It{constructor(e,t){Et(this,Pt,!0),this._update(e,t),this.isDestroyed=!1}get length(){return this["[]"],this.content?this.content.length:0}forEach(e){this.content&&this.length&&this.content.forEach(e)}reload(e){return this.content.reload(e),this}then(e,t){return this.promise.then(e,t)}catch(e){return this.promise.catch(e)}finally(e){return this.promise.finally(e)}destroy(){this.isDestroyed=!0,this.content=null,this.promise=null}get links(){return this.content?this.content.links:void 0}get meta(){return this.content?this.content.meta:void 0}_update(e,t){void 0!==t&&(this.content=t),this.promise=function(e,t){return e.isPending=!0,e.isSettled=!1,e.isFulfilled=!1,e.isRejected=!1,Promise.resolve(t).then((t=>(e.isPending=!1,e.isFulfilled=!0,e.isSettled=!0,e.content=t,t)),(t=>{throw e.isPending=!1,e.isFulfilled=!1,e.isRejected=!0,e.isSettled=!0,t}))}(this,e)}static create({promise:e,content:t}){return new this(e,t)}}jt((lt=It).prototype,"length",[yt.Vv]),jt(lt.prototype,"links",[yt.Vv]),jt(lt.prototype,"meta",[yt.Vv]),(0,mt.sg)(It.prototype,"content",null),(0,mt.sg)(It.prototype,"isPending",!1),(0,mt.sg)(It.prototype,"isRejected",!1),(0,mt.sg)(It.prototype,"isFulfilled",!1),(0,mt.sg)(It.prototype,"isSettled",!1)
{const e={enumerable:!0,configurable:!1,get:function(){return this.content?.length&&this.content}};(0,yt.Vv)(e),Object.defineProperty(It.prototype,"[]",e)}class $t{constructor(e,t,i,r,s){Et(this,"___token",void 0),Et(this,"___identifier",void 0),Et(this,"___relatedTokenMap",void 0),this.graph=t,this.key=s,this.hasManyRelationship=r,this.type=r.definition.type,this.store=e,this.___identifier=i,this.___token=e.notifications.subscribe(i,((e,t,i)=>{"relationships"===t&&i===s&&this._ref++})),this.___relatedTokenMap=new Map}destroy(){this.store.notifications.unsubscribe(this.___token),this.___relatedTokenMap.forEach((e=>{this.store.notifications.unsubscribe(e)})),this.___relatedTokenMap.clear()}get identifiers(){Lt(this),this._ref
const e=this._resource(),t=this.___relatedTokenMap
return this.___relatedTokenMap=new Map,e&&e.data?e.data.map((e=>{const i=this.store.identifierCache.getOrCreateRecordIdentifier(e)
let r=t.get(i)
return r?t.delete(i):r=this.store.notifications.subscribe(i,((e,t,i)=>{("identity"===t||"attributes"===t&&"id"===i)&&this._ref++})),this.___relatedTokenMap.set(i,r),i})):(t.forEach((e=>{this.store.notifications.unsubscribe(e)})),t.clear(),[])}_resource(){return this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){const e=this._resource()
return e&&e.links&&e.links.related?"link":"ids"}ids(){return this.identifiers.map((e=>e.id))}link(){const e=this._resource()
if(t=e,Boolean(t&&t.links&&t.links.related)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}var t
return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}async push(e,t){const{store:i}=this,r=Array.isArray(e)?{data:e}:e,s=Array.isArray(r.data)&&r.data.length>0&&zt(r.data[0]),n=Array.isArray(r.data)?s?i._push(r,!0):r.data.map((e=>i.identifierCache.getOrCreateRecordIdentifier(e))):[],{identifier:o}=this.hasManyRelationship,a={}
if(Array.isArray(r.data)&&(a.data=n),"links"in r&&(a.links=r.links),"meta"in r&&(a.meta=r.meta),i._join((()=>{this.graph.push({op:"updateRelationship",record:o,field:this.key,value:a})})),!t)return this.load()}_isLoaded(){if(!this.hasManyRelationship.state.hasReceivedData)return!1
const e=this.graph.getData(this.hasManyRelationship.identifier,this.key)
return e.data?.every((e=>!0===this.store._instanceCache.recordIsLoaded(e,!0)))}value(){const e=Vt.get(this.___identifier)
return Lt(this)?e.getManyArray(this.key):(this._ref,null)}async load(e){const t=Vt.get(this.___identifier)
return this.hasManyRelationship.definition.isAsync||Gt(this.store,this._resource())?t.getHasMany(this.key,e):t.reloadHasMany(this.key,e)}reload(e){return Vt.get(this.___identifier).reloadHasMany(this.key,e)}}function zt(e){return Object.keys(e).filter((e=>"id"!==e&&"type"!==e&&"lid"!==e)).length>0}function Lt(e){return!!e._isLoaded()||(e.graph.get(e.___identifier,e.key).accessed=!0,!1)}function Bt(e){return Boolean(e&&e.links&&e.links.related)}jt($t.prototype,"identifiers",[yt.Vv,yt.PO]),(0,mt.sg)($t.prototype,"_ref",0)
class Ut{constructor(e,t,i,r,s){this.graph=t,this.key=s,this.belongsToRelationship=r,this.type=r.definition.type,this.store=e,this.___identifier=i,this.___relatedToken=null,this.___token=e.notifications.subscribe(i,((e,t,i)=>{"relationships"===t&&i===s&&this._ref++}))}destroy(){this.store.notifications.unsubscribe(this.___token),this.___token=null,this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)}get identifier(){this.___relatedToken&&(this.store.notifications.unsubscribe(this.___relatedToken),this.___relatedToken=null)
const e=this._resource()
if(e&&e.data){const t=this.store.identifierCache.getOrCreateRecordIdentifier(e.data)
return this.___relatedToken=this.store.notifications.subscribe(t,((e,t,i)=>{("identity"===t||"attributes"===t&&"id"===i)&&this._ref++})),t}return null}id(){return this.identifier?.id||null}link(){const e=this._resource()
if(Bt(e)&&e.links){const t=e.links.related
return t&&"string"!=typeof t?t.href:t}return null}links(){const e=this._resource()
return e&&e.links?e.links:null}meta(){let e=null
const t=this._resource()
return t&&t.meta&&"object"==typeof t.meta&&(e=t.meta),e}_resource(){return this._ref,this.store.cache.getRelationship(this.___identifier,this.key)}remoteType(){return Bt(this._resource())?"link":"id"}async push(e,t){const{store:i}=this,r=e.data&&zt(e.data)?i._push(e,!0):e.data?i.identifierCache.getOrCreateRecordIdentifier(e.data):null,{identifier:s}=this.belongsToRelationship,n={}
if((e.data||null===e.data)&&(n.data=r),"links"in e&&(n.links=e.links),"meta"in e&&(n.meta=e.meta),i._join((()=>{this.graph.push({op:"updateRelationship",record:s,field:this.key,value:n})})),!t)return this.load()}value(){const e=this._resource()
return e&&e.data?this.store.peekRecord(e.data):null}async load(e){const t=Vt.get(this.___identifier)
return this.belongsToRelationship.definition.isAsync||Gt(this.store,this._resource())?t.getBelongsTo(this.key,e):t.reloadBelongsTo(this.key,e).then((()=>this.value()))}reload(e){return Vt.get(this.___identifier).reloadBelongsTo(this.key,e).then((()=>this.value()))}}jt(Ut.prototype,"identifier",[yt.Vv,yt.PO]),(0,mt.sg)(Ut.prototype,"_ref",0)
const Vt=(0,a.L1)("LEGACY_SUPPORT",new Map)
function Wt(e){const t=(0,o.r)(e)
let i=Vt.get(t)
return i||(i=new Ht(e),Vt.set(t,i),Vt.set(e,i)),i}class Ht{constructor(e){this.record=e,this.store=(0,o.s)(e),this.identifier=(0,o.r)(e),this.cache=(0,o.p)(e)
{const e=ze(r).graphFor
this.graph=e(this.store)}this._manyArrayCache=Object.create(null),this._relationshipPromisesCache=Object.create(null),this._relationshipProxyCache=Object.create(null),this._pending=Object.create(null),this.references=Object.create(null)}_syncArray(e){if(this.isDestroyed||this.isDestroying)return
const t=e[o.l],i=this.identifier,[r,s]=this._getCurrentState(i,e.key)
s.meta&&(e.meta=s.meta),s.links&&(e.links=s.links),t.length=0,(0,o.m)(t,r)}mutate(e){this.cache.mutate(e)}_findBelongsTo(e,t,i,r){return this._findBelongsToByJsonApiResource(t,this.identifier,i,r).then((t=>Jt(this,e,i,t)),(t=>Jt(this,e,i,null,t)))}reloadBelongsTo(e,t){const i=this._relationshipPromisesCache[e]
if(i)return i
const r=this.graph.get(this.identifier,e),s=this.cache.getRelationship(this.identifier,e)
r.state.hasFailedLoadAttempt=!1,r.state.shouldForceReload=!0
const n=this._findBelongsTo(e,s,r,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("belongsTo",e,{promise:n}):n}getBelongsTo(e,t){const{identifier:i,cache:r}=this,s=r.getRelationship(this.identifier,e),n=s&&s.data?s.data:null,o=this.store,a=this.graph.get(this.identifier,e),l=a.definition.isAsync,c={key:e,store:o,legacySupport:this,modelName:a.definition.type}
if(l){if(a.state.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const i=this._findBelongsTo(e,s,a,t),r=n&&o._instanceCache.recordIsLoaded(n)
return this._updatePromiseProxyFor("belongsTo",e,{promise:i,content:r?o._instanceCache.getRecord(n):null,_belongsToState:c})}return null===n?null:o._instanceCache.getRecord(n)}setDirtyBelongsTo(e,t){return this.cache.mutate({op:"replaceRelatedRecord",record:this.identifier,field:e,value:(i=t,i?(0,o.r)(i):null)},!0)
var i}_getCurrentState(e,t){const i=this.cache.getRelationship(e,t),r=this.store._instanceCache,s=[]
if(i.data)for(let n=0;n<i.data.length;n++){const e=i.data[n]
r.recordIsLoaded(e,!0)&&s.push(e)}return[s,i]}getManyArray(e,t){{let i=this._manyArrayCache[e]
if(t||(t=this.graph.get(this.identifier,e).definition),!i){const[r,s]=this._getCurrentState(this.identifier,e)
i=new o.w({store:this.store,type:t.type,identifier:this.identifier,cache:this.cache,identifiers:r,key:e,meta:s.meta||null,links:s.links||null,isPolymorphic:t.isPolymorphic,isAsync:t.isAsync,_inverseIsAsync:t.inverseIsAsync,manager:this,isLoaded:!t.isAsync,allowMutation:!0}),this._manyArrayCache[e]=i}return i}}fetchAsyncHasMany(e,t,i,r){{let s=this._relationshipPromisesCache[e]
if(s)return s
const n=this.cache.getRelationship(this.identifier,e),o=this._findHasManyByJsonApiResource(n,this.identifier,t,r)
return o?(s=o.then((()=>Jt(this,e,t,i)),(r=>Jt(this,e,t,i,r))),this._relationshipPromisesCache[e]=s,s):(i.isLoaded=!0,Promise.resolve(i))}}reloadHasMany(e,t){{const i=this._relationshipPromisesCache[e]
if(i)return i
const r=this.graph.get(this.identifier,e),{definition:s,state:n}=r
n.hasFailedLoadAttempt=!1,n.shouldForceReload=!0
const o=this.getManyArray(e,s),a=this.fetchAsyncHasMany(e,r,o,t)
return this._relationshipProxyCache[e]?this._updatePromiseProxyFor("hasMany",e,{promise:a}):a}}getHasMany(e,t){{const i=this.graph.get(this.identifier,e),{definition:r,state:s}=i,n=this.getManyArray(e,r)
if(r.isAsync){if(s.hasFailedLoadAttempt)return this._relationshipProxyCache[e]
const r=this.fetchAsyncHasMany(e,i,n,t)
return this._updatePromiseProxyFor("hasMany",e,{promise:r,content:n})}return n}}_updatePromiseProxyFor(e,t,i){let r=this._relationshipProxyCache[t]
if("hasMany"===e){const{promise:e,content:s}=i
return r?r._update(e,s):r=this._relationshipProxyCache[t]=new It(e,s),r}if(r){const{promise:e,content:t}=i
void 0!==t&&r.set("content",t),r.set("promise",e)}else r=Ft.create(i),this._relationshipProxyCache[t]=r
return r}referenceFor(e,t){let i=this.references[t]
if(!i){const{graph:e,identifier:r}=this,s=e.get(r,t),n=s.definition.kind
"belongsTo"===n?i=new Ut(this.store,e,r,s,t):"hasMany"===n&&(i=new $t(this.store,e,r,s,t)),this.references[t]=i}return i}_findHasManyByJsonApiResource(e,t,i,r={}){{if(!e)return
const{definition:s,state:n}=i
this.store
const o=this.store.adapterFor?.(s.type),{isStale:a,hasDematerializedInverse:l,hasReceivedData:c,isEmpty:d,shouldForceReload:u}=n,h=Gt(this.store,e),f=e.data,p=e.links&&e.links.related&&("function"==typeof o?.findHasMany||void 0===f)&&(u||l||a||!h&&!d),y=this.store.schema.fields({type:s.inverseType}).get(s.key),m={useLink:p,field:y,links:e.links,meta:e.meta,options:r,record:t}
if(p){const t=y.options.linksMode?{url:Kt(e),op:"findHasMany",method:"GET",records:f||[],data:m,[ge._q]:!1}:{op:"findHasMany",records:f||[],data:m,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}
return this.store.request(t)}const g=c&&!d,_=l||d&&Array.isArray(f)&&f.length>0,b=!u&&!a&&(g||_)
if(b&&h)return
return b||c&&!d||_?(r.reload=r.reload||!b||void 0,this.store.request({op:"findHasMany",records:f,data:m,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}})):void 0}}_findBelongsToByJsonApiResource(e,t,i,r={}){if(!e)return Promise.resolve(null)
const s=i.definition.key
if(this._pending[s])return this._pending[s]
const n=e.data?e.data:null,{isStale:o,hasDematerializedInverse:a,hasReceivedData:l,isEmpty:c,shouldForceReload:d}=i.state,u=Gt(this.store,e),h=e.links?.related&&(d||a||o||!u&&!c),f=this.store.schema.fields(this.identifier).get(i.definition.key),p={useLink:h,field:f,links:e.links,meta:e.meta,options:r,record:t}
if(h){const t=f.options.linksMode?{url:Kt(e),op:"findBelongsTo",method:"GET",records:n?[n]:[],data:p,[ge._q]:!1}:{op:"findBelongsTo",records:n?[n]:[],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}},i=this.store.request(t)
return this._pending[s]=i.then((e=>f.options.linksMode?e.content.data:e.content)).finally((()=>{this._pending[s]=void 0})),this._pending[s]}const y=l&&u&&!c,m=a||c&&e.data,g=!d&&!o&&(y||m)
return g&&!n?Promise.resolve(null):g&&u||null===n?.id?Promise.resolve(n):n?(r.reload=r.reload||!g||void 0,this._pending[s]=this.store.request({op:"findBelongsTo",records:[n],data:p,cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then((e=>e.content)).finally((()=>{this._pending[s]=void 0})),this._pending[s]):Promise.resolve(null)}destroy(){this.isDestroying=!0
let e=this._manyArrayCache
this._manyArrayCache=Object.create(null),Object.keys(e).forEach((t=>{e[t].destroy()})),e=this._relationshipProxyCache,this._relationshipProxyCache=Object.create(null),Object.keys(e).forEach((t=>{const i=e[t]
i.destroy&&i.destroy()})),e=this.references,this.references=Object.create(null),Object.keys(e).forEach((t=>{e[t].destroy()})),this.isDestroyed=!0}}function Kt(e){const t=e.links?.related
return"object"==typeof t?t.href:t}function Jt(e,t,i,r,s){delete e._relationshipPromisesCache[t],i.state.shouldForceReload=!1
const n="hasMany"===i.definition.kind
if(n&&r.notify(),s){i.state.hasFailedLoadAttempt=!0
const r=e._relationshipProxyCache[t]
throw r&&!n&&(r.content&&r.content.isDestroying&&r.set("content",null),e.store.notifications._flush()),s}return n?r.isLoaded=!0:e.store.notifications._flush(),i.state.hasFailedLoadAttempt=!1,i.state.isStale=!1,n||!r?r:e.store.peekRecord(r)}function Gt(e,t){const i=e._instanceCache,r=t.data
return Array.isArray(r)?r.every((e=>i.recordIsLoaded(e))):!r||i.recordIsLoaded(r)}const Yt=vt()
var Zt=new WeakMap,Qt=new WeakMap
class Xt extends Yt{constructor(...e){super(...e),Ct(this,Zt,void Nt(this,"messages")),Ct(this,Qt,void Nt(this,"isEmpty"))}get errorsByAttributeName(){return new Map}errorsFor(e){const t=this.errorsByAttributeName
let i=t.get(e)
return void 0===i&&(i=(0,_t.A)(),t.set(e,i)),(0,ft.get)(i,"[]"),i}get content(){return(0,_t.A)()}unknownProperty(e){const t=this.errorsFor(e)
if(0!==t.length)return t}add(e,t){const i=this._findOrCreateMessages(e,t)
this.addObjects(i),this.errorsFor(e).addObjects(i),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e)}_findOrCreateMessages(e,t){const i=this.errorsFor(e),r=Array.isArray(t)?t:[t],s=new Array(r.length)
for(let n=0;n<r.length;n++){const t=r[n],o=i.findBy("message",t)
s[n]=o||{attribute:e,message:t}}return s}remove(e){if(this.isEmpty)return
const t=this.rejectBy("attribute",e)
this.content.setObjects(t)
const i=this.errorsFor(e)
for(let r=0;r<i.length;r++)i[r].attribute===e&&i.replace(r,1)
this.errorsByAttributeName.delete(e),this.__record.currentState.notify("isValid"),this.notifyPropertyChange(e),this.notifyPropertyChange("length")}clear(){if(this.isEmpty)return
const e=this.errorsByAttributeName,t=[]
e.forEach((function(e,i){t.push(i)})),e.clear(),t.forEach((e=>{this.notifyPropertyChange(e)})),this.__record.currentState.notify("isValid"),super.clear()}has(e){return this.errorsFor(e).length>0}}function ei(e,t,i,r){if("belongsTo"===r.kind)i.notifyPropertyChange(t)
else if("hasMany"===r.kind){const s=Vt.get(e),n=s&&s._manyArrayCache[t],o=s&&s._relationshipPromisesCache[t]
if(n&&o)return
n&&(n.notify(),r.options.async&&i.notifyPropertyChange(t))}}function ti(e,t,i,r){(0,Mt.cacheFor)(r,i)!==e.cache.getAttr(t,i)&&r.notifyPropertyChange(i)}jt((ct=Xt).prototype,"errorsByAttributeName",[(0,ft.computed)()]),Dt(ct.prototype,"messages",[(0,wt.mapBy)("content","message")]),jt(ct.prototype,"content",[(0,ft.computed)()]),Dt(ct.prototype,"isEmpty",[(0,wt.not)("length")])
const ii=/^\/?data\/(attributes|relationships)\/(.*)/,ri=/^\/?data/
function si(e){return!!e&&e instanceof Error&&"isAdapterError"in e&&!0===e.isAdapterError&&"code"in e&&"InvalidError"===e.code}class ni{constructor(e){const t=(0,ye.fV)(e),i=(0,o.r)(e)
this.identifier=i,this.record=e,this.cache=t.cache,this.pendingCount=0,this.fulfilledCount=0,this.rejectedCount=0,this._errorRequests=[],this._lastError=null
const r=t.getRequestStateService(),s=t.notifications,n=e=>{if("mutation"===e.type)switch(e.state){case"pending":this.isSaving=!0
break
case"rejected":this.isSaving=!1,this._lastError=e,e.response&&si(e.response.data)||this._errorRequests.push(e),oi(this)
break
case"fulfilled":this._errorRequests=[],this._lastError=null,this.isSaving=!1,this.notify("isDirty"),oi(this)}else switch(e.state){case"pending":this.pendingCount++,this.notify("isLoading")
break
case"rejected":this.pendingCount--,this._lastError=e,e.response&&si(e.response.data)||this._errorRequests.push(e),this.notify("isLoading"),oi(this)
break
case"fulfilled":this.pendingCount--,this.fulfilledCount++,this.notify("isLoading"),this.notify("isDirty"),oi(this),this._errorRequests=[],this._lastError=null}}
r.subscribeForRecord(i,n)
const a=r.getLastRequestForRecord(i)
a&&n(a),this.handler=s.subscribe(i,((e,t,i)=>{switch(t){case"state":this.notify("isSaved"),this.notify("isNew"),this.notify("isDeleted"),this.notify("isDirty")
break
case"attributes":this.notify("isEmpty"),this.notify("isDirty")
break
case"errors":this.updateInvalidErrors(this.record.errors),this.notify("isValid")}}))}destroy(){(0,ye.fV)(this.record).notifications.unsubscribe(this.handler)}notify(e){(0,yt.eM)(this,e)}updateInvalidErrors(e){const t=this.cache.getErrors(this.identifier)
e.clear()
for(let i=0;i<t.length;i++){const r=t[i]
if(r.source&&r.source.pointer){const t=r.source.pointer.match(ii)
let i
if(t?i=t[2]:-1!==r.source.pointer.search(ri)&&(i="base"),i){const t=r.detail||r.title
e.add(i,t)}}}}cleanErrorRequests(){this.notify("isValid"),this.notify("isError"),this.notify("adapterError"),this._errorRequests=[],this._lastError=null}get isLoading(){return!this.isLoaded&&this.pendingCount>0&&0===this.fulfilledCount}get isLoaded(){return!!this.isNew||this.fulfilledCount>0||!this.isEmpty}get isSaved(){const e=this.cache
return this.isDeleted?e.isDeletionCommitted(this.identifier):!(this.isNew||this.isEmpty||!this.isValid||this.isDirty||this.isLoading)}get isEmpty(){const e=this.cache
return!this.isNew&&e.isEmpty(this.identifier)}get isNew(){return this.cache.isNew(this.identifier)}get isDeleted(){return this.cache.isDeleted(this.identifier)}get isValid(){return 0===this.record.errors.length}get isDirty(){const e=this.cache
return!(this.isEmpty||e.isDeletionCommitted(this.identifier)||this.isDeleted&&this.isNew)&&(this.isDeleted||this.isNew||e.hasChangedAttrs(this.identifier))}get isError(){return!!this._errorRequests[this._errorRequests.length-1]}get adapterError(){const e=this._lastError
return e?"rejected"===e.state&&e.response.data:null}get isPreloaded(){return!this.isEmpty&&this.isLoading}get stateName(){return this.isLoading?"root.loading":this.isEmpty?"root.empty":this.isDeleted?this.isSaving?"root.deleted.inFlight":this.isSaved?"root.deleted.saved":this.isValid?"root.deleted.uncommitted":"root.deleted.invalid":this.isNew?this.isSaving?"root.loaded.created.inFlight":this.isValid?"root.loaded.created.uncommitted":"root.loaded.created.invalid":this.isSaving?"root.loaded.updated.inFlight":this.isValid?this.isDirty?"root.loaded.updated.uncommitted":"root.loaded.saved":"root.loaded.updated.invalid"}get dirtyType(){return this.isLoading||this.isEmpty?"":this.isDirty&&this.isDeleted?"deleted":this.isNew?"created":this.isSaving||!this.isValid||this.isDirty?"updated":""}}function oi(e){e.notify("isValid"),e.notify("isError"),e.notify("adapterError")}function ai(e,t,i){const r=new WeakMap,s=i.get
return i.get=function(){let e=r.get(this)
return e||(e={hasComputed:!1,value:void 0},r.set(this,e)),e.hasComputed||(e.value=s.call(this),e.hasComputed=!0),e.value},i}jt((dt=ni).prototype,"isLoading",[mt.vh]),jt(dt.prototype,"isLoaded",[mt.vh]),jt(dt.prototype,"isSaved",[mt.vh]),jt(dt.prototype,"isEmpty",[mt.vh]),jt(dt.prototype,"isNew",[mt.vh]),jt(dt.prototype,"isDeleted",[mt.vh]),jt(dt.prototype,"isValid",[mt.vh]),jt(dt.prototype,"isDirty",[mt.vh]),jt(dt.prototype,"isError",[mt.vh]),jt(dt.prototype,"adapterError",[mt.vh]),jt(dt.prototype,"isPreloaded",[yt.PO]),jt(dt.prototype,"stateName",[yt.PO]),jt(dt.prototype,"dirtyType",[yt.PO]),(0,mt.sg)(ni.prototype,"isSaving",!1)
class li extends(pt()){init(e){const t=e._createProps,i=e._secretInit
e._createProps=null,e._secretInit=null
const r=this.store=i.store
super.init(e),this[gt.pm]=r
const s=i.identifier
i.cb(this,i.cache,s,i.store),this.___recordState=null,this.setProperties(t)
const n=r.notifications
this.___private_notifications=n.subscribe(s,((e,t,i)=>{!function(e,t,i,r,s){switch(t){case"added":case"attributes":i?ti(s,e,i,r):r.eachAttribute((t=>{ti(s,e,t,r)}))
break
case"relationships":if(i){const t=r.constructor.relationshipsByName.get(i)
ei(e,i,r,t)}else r.eachRelationship(((t,i)=>{ei(e,t,r,i)}))
break
case"identity":r.notifyPropertyChange("id")}}(e,t,i,this,r)}))}destroy(){const e=(0,ye.o)(this)
this.___recordState?.destroy(),(0,ye.fV)(this).notifications.unsubscribe(this.___private_notifications),this.eachRelationship(((e,t)=>{"belongsTo"===t.kind&&this.notifyPropertyChange(e)})),Vt.get(this)?.destroy(),Vt.delete(this),Vt.delete(e),super.destroy()}get isEmpty(){return this.currentState.isEmpty}get isLoading(){return this.currentState.isLoading}get isLoaded(){return this.currentState.isLoaded}get hasDirtyAttributes(){return this.currentState.isDirty}get isSaving(){return this.currentState.isSaving}get isDeleted(){return this.currentState.isDeleted}get isNew(){return this.currentState.isNew}get isValid(){return this.currentState.isValid}get dirtyType(){return this.currentState.dirtyType}get isError(){return this.currentState.isError}set isError(e){}get id(){return(0,ye.o)(this).id}set id(e){const t=(0,o.h)(e),i=(0,ye.o)(this),r=t!==i.id
null!==t&&r&&(this.store._instanceCache.setRecordId(i,t),this.store.notifications.notify(i,"identity"))}toString(){return`<model::${this.constructor.modelName}:${this.id}>`}get currentState(){return this.___recordState||(this.___recordState=new ni(this)),this.___recordState}set currentState(e){throw new Error("cannot set currentState")}get errors(){const e=Xt.create({__record:this})
return this.currentState.updateInvalidErrors(e),e}get adapterError(){return this.currentState.adapterError}set adapterError(e){throw new Error("adapterError is not directly settable")}notifyPropertyChange(e){(0,yt.eM)(this,e),super.notifyPropertyChange(e)}attr(){}eachRelationship(e,t){this.constructor.eachRelationship(e,t)}relationshipFor(e){return this.constructor.relationshipsByName.get(e)}inverseFor(e){return this.constructor.inverseFor(e,(0,ye.fV)(this))}eachAttribute(e,t){this.constructor.eachAttribute(e,t)}static typeForRelationship(e,t){const i=this.relationshipsByName.get(e)
return i&&t.modelFor(i.type)}static get inverseMap(){return Object.create(null)}static inverseFor(e,t){const i=this.inverseMap
if(i[e])return i[e]
{const r=this._findInverseFor(e,t)
return i[e]=r,r}}static _findInverseFor(e,t){const i=this.relationshipsByName.get(e)
if(!i)return null
const{options:r}=i
return null===r.inverse?null:t.schema.hasResource(i)&&t.schema.fields(i).get(r.inverse)||null}static get relationships(){const e=new Map
return this.relationshipsByName.forEach((t=>{const{type:i}=t
e.has(i)||e.set(i,[]),e.get(i).push(t)})),e}static get relationshipNames(){const e={hasMany:[],belongsTo:[]}
return this.eachComputedProperty(((t,i)=>{ci(i)&&e[i.kind].push(t)})),e}static get relatedTypes(){const e=[],t=this.relationshipsObject,i=Object.keys(t)
for(let r=0;r<i.length;r++){const s=t[i[r]].type
e.includes(s)||e.push(s)}return e}static get relationshipsByName(){const e=new Map,t=this.relationshipsObject,i=Object.keys(t)
for(let r=0;r<i.length;r++){const s=t[i[r]]
e.set(s.name,s)}return e}static get relationshipsObject(){const e=Object.create(null)
return this.modelName,this.eachComputedProperty(((t,i)=>{ci(i)&&(i.key=t,i.name=t,e[t]=i)})),e}static get fields(){const e=new Map
return this.eachComputedProperty(((t,i)=>{ci(i)?e.set(t,i.kind):di(i)&&e.set(t,"attribute")})),e}static eachRelationship(e,t){this.relationshipsByName.forEach(((i,r)=>{e.call(t,r,i)}))}static eachRelatedType(e,t){const i=this.relatedTypes
for(let r=0;r<i.length;r++){const s=i[r]
e.call(t,s)}}static determineRelationshipType(e,t){const i=e.name,r=e.kind,s=this.inverseFor(i,t)
return s?"belongsTo"===s.kind?"belongsTo"===r?"oneToOne":"manyToOne":"belongsTo"===r?"oneToMany":"manyToMany":"belongsTo"===r?"oneToNone":"manyToNone"}static get attributes(){const e=new Map
return this.eachComputedProperty(((t,i)=>{di(i)&&(i.key=t,i.name=t,e.set(t,i))})),e}static get transformedAttributes(){const e=new Map
return this.eachAttribute(((t,i)=>{i.type&&e.set(t,i.type)})),e}static eachAttribute(e,t){this.attributes.forEach(((i,r)=>{e.call(t,r,i)}))}static eachTransformedAttribute(e,t){this.transformedAttributes.forEach(((i,r)=>{e.call(t,r,i)}))}static toString(){return`model:${this.modelName}`}}function ci(e){return"object"==typeof e&&null!==e&&"kind"in e&&"options"in e&&("hasMany"===e.kind||"belongsTo"===e.kind)}function di(e){return"object"==typeof e&&null!==e&&"kind"in e&&"attribute"===e.kind}jt((ut=li).prototype,"isEmpty",[yt.Vv]),jt(ut.prototype,"isLoading",[yt.Vv]),jt(ut.prototype,"isLoaded",[yt.Vv]),jt(ut.prototype,"hasDirtyAttributes",[yt.Vv]),jt(ut.prototype,"isSaving",[yt.Vv]),jt(ut.prototype,"isDeleted",[yt.Vv]),jt(ut.prototype,"isNew",[yt.Vv]),jt(ut.prototype,"isValid",[yt.Vv]),jt(ut.prototype,"dirtyType",[yt.Vv]),jt(ut.prototype,"isError",[yt.Vv]),jt(ut.prototype,"id",[mt.vh]),jt(ut.prototype,"currentState",[mt.vh]),jt(ut.prototype,"errors",[ai]),jt(ut.prototype,"adapterError",[yt.Vv]),Et(li,"isModel",!0),Et(li,"modelName",null),jt(ut,"inverseMap",[ai]),jt(ut,"relationships",[ai]),jt(ut,"relationshipNames",[ai]),jt(ut,"relatedTypes",[ai]),jt(ut,"relationshipsByName",[ai]),jt(ut,"relationshipsObject",[ai]),jt(ut,"fields",[ai]),jt(ut,"attributes",[ai]),jt(ut,"transformedAttributes",[ai]),li.prototype.save=function(e){let t
return this.currentState.isNew&&this.currentState.isDeleted?t=Promise.resolve(this):(this.errors.clear(),t=this[gt.pm].saveRecord(this,e)),t},li.prototype.destroyRecord=function(e){const{isNew:t}=this.currentState
return this.deleteRecord(),t?Promise.resolve(this):this.save(e).then((e=>(this.unloadRecord(),this)))},li.prototype.unloadRecord=function(){this.currentState.isNew&&(this.isDestroyed||this.isDestroying)||this[gt.pm].unloadRecord(this)},li.prototype.hasMany=function(e){return Wt(this).referenceFor("hasMany",e)},li.prototype.belongsTo=function(e){return Wt(this).referenceFor("belongsTo",e)},li.prototype.serialize=function(e){return this[gt.pm],this[gt.pm].serializeRecord(this,e)},li.prototype._createSnapshot=function(){const e=this[gt.pm]
if(!e._fetchManager){const t=ze(s).FetchManager
e._fetchManager=new t(e)}return e._fetchManager.createSnapshot((0,ye.o)(this))},li.prototype.deleteRecord=function(){this.currentState&&this[gt.pm].deleteRecord(this)},li.prototype.changedAttributes=function(){return(0,o.p)(this).changedAttrs((0,ye.o)(this))},li.prototype.rollbackAttributes=function(){const{currentState:e}=this,{isNew:t}=e
this[gt.pm]._join((()=>{(0,o.p)(this).rollbackAttrs((0,ye.o)(this)),this.errors.clear(),e.cleanErrorRequests(),t&&this.unloadRecord()}))},li.prototype.reload=function(e={}){e.isReloading=!0,e.reload=!0
const t=(0,ye.o)(this)
return this.isReloading=!0,this[gt.pm].request({op:"findRecord",data:{options:e,record:t},cacheOptions:{[Symbol.for("wd:skip-cache")]:!0}}).then((()=>this)).finally((()=>{this.isReloading=!1}))},(0,mt.sg)(li.prototype,"isReloading",!1),li.prototype._createProps=null,li.prototype._secretInit=null
class ui{constructor(e){this.store=e,this._schemas=new Map,this._typeMisses=new Set}resourceTypes(){return Array.from(this._schemas.keys())}hasTrait(e){return!1}resourceHasTrait(e,t){return!1}transformation(e){}derivation(e){}hashFn(e){}resource(e){const t=Tt(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).schema}registerResources(e){}registerResource(e){}registerTransformation(e){}registerDerivation(e){}registerHashFn(e){}_loadModelSchema(e){const t=this.store.modelFor(e),i=t.attributes,r=Object.create(null)
i.forEach(((e,t)=>r[t]=e))
const s=t.relationshipsObject||null,n=new Map
for(const a of Object.values(r))n.set(a.name,a)
for(const a of Object.values(s))n.set(a.name,a)
const o={schema:{legacy:!0,identity:{name:"id",kind:"@id"},type:e,fields:Array.from(n.values())},attributes:r,relationships:s,fields:n}
return this._schemas.set(e,o),o}fields(e){const t=Tt(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).fields}hasResource(e){const t=Tt(e.type)
return!!this._schemas.has(t)||!this._typeMisses.has(t)&&!(null===hi(this.store,t)&&(this._typeMisses.add(t),1))}}function hi(e,t){e._modelFactoryCache||(e._modelFactoryCache=Object.create(null))
const i=e._modelFactoryCache
let r=i[t]
if(!r){if(r=(0,pe.getOwner)(e).factoryFor(`model:${t}`),r||(r=function(e,t){const i=(0,pe.getOwner)(e),r=i.factoryFor(`mixin:${t}`),s=r&&r.class
if(s){const e=li.extend(s)
e.__isMixin=!0,e.__mixin=s,i.register(`model:${t}`,e)}return i.factoryFor(`model:${t}`)}(e,t)),!r)return null
const s=r.class
s.isModel&&(s.modelName&&Object.prototype.hasOwnProperty.call(s,"modelName")||Object.defineProperty(s,"modelName",{value:t})),i[t]=r}return r}function fi(e,t){const i=e.type,r={_createProps:t,_secretInit:{identifier:e,cache:this.cache,store:this,cb:mi}}
return(0,pe.setOwner)(r,(0,pe.getOwner)(this)),hi(this,i).class.create(r)}function pi(e){e.destroy()}function yi(e){const t=hi(this,Tt(e)),i=t&&t.class?t.class:null
if(i&&i.isModel&&!this._forceShim)return i}function mi(e,t,i,r){(0,o.q)(e,i),o.t.set(e,r),(0,o.u)(e,t)}ui.prototype.doesTypeExist=function(e){return(0,n.deprecate)("Use `schema.hasResource({ type })` instead of `schema.doesTypeExist(type)`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this.hasResource({type:e})},ui.prototype.attributesDefinitionFor=function(e){(0,n.deprecate)("Use `schema.fields({ type })` instead of `schema.attributesDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=Tt(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).attributes},ui.prototype.relationshipsDefinitionFor=function(e){(0,n.deprecate)("Use `schema.fields({ type })` instead of `schema.relationshipsDefinitionFor({ type })`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}})
const t=Tt(e.type)
return this._schemas.has(t)||this._loadModelSchema(t),this._schemas.get(t).relationships}
const gi="undefined"!=typeof fetch?(...e)=>fetch(...e):"undefined"!=typeof FastBoot?(...e)=>FastBoot.require("node-fetch")(...e):()=>{throw new Error("No Fetch Implementation Found")},_i=new Set(["updateRecord","createRecord","deleteRecord"]),bi=new Map([[400,"Bad Request"],[401,"Unauthorized"],[402,"Payment Required"],[403,"Forbidden"],[404,"Not Found"],[405,"Method Not Allowed"],[406,"Not Acceptable"],[407,"Proxy Authentication Required"],[408,"Request Timeout"],[409,"Conflict"],[410,"Gone"],[411,"Length Required"],[412,"Precondition Failed"],[413,"Payload Too Large"],[414,"URI Too Long"],[415,"Unsupported Media Type"],[416,"Range Not Satisfiable"],[417,"Expectation Failed"],[419,"Page Expired"],[420,"Enhance Your Calm"],[421,"Misdirected Request"],[422,"Unprocessable Entity"],[423,"Locked"],[424,"Failed Dependency"],[425,"Too Early"],[426,"Upgrade Required"],[428,"Precondition Required"],[429,"Too Many Requests"],[430,"Request Header Fields Too Large"],[431,"Request Header Fields Too Large"],[450,"Blocked By Windows Parental Controls"],[451,"Unavailable For Legal Reasons"],[500,"Internal Server Error"],[501,"Not Implemented"],[502,"Bad Gateway"],[503,"Service Unavailable"],[504,"Gateway Timeout"],[505,"HTTP Version Not Supported"],[506,"Variant Also Negotiates"],[507,"Insufficient Storage"],[508,"Loop Detected"],[509,"Bandwidth Limit Exceeded"],[510,"Not Extended"],[511,"Network Authentication Required"]]),vi={async request(e){let t
try{t=await gi(e.request.url,e.request)}catch(e){throw e instanceof DOMException&&"AbortError"===e.name?(e.statusText="Aborted",e.status=20,e.isRequestError=!0):(e.statusText="Unknown Network Error",e.status=0,e.isRequestError=!0),e}const i=!t.ok||t.status>=400,r=e.request.op,s=Boolean(r&&_i.has(r))
if(!i&&!s&&204!==t.status&&!t.headers.has("date")){const e=new Headers(t.headers)
e.set("date",(new Date).toUTCString()),t=function(e,t){const i=je(e)
return new Response(e.body,Object.assign(i,t))}(t,{headers:e})}if(e.setResponse(t),204===t.status)return null
let n=""
{const i=t.body.getReader(),r=new TextDecoder
let s=e.hasRequestedStream,o=s?new TransformStream:null,a=o?.writable.getWriter()
for(s&&(e.request.signal?.addEventListener("abort",(()=>{s&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))})),e.setStream(o.readable));;){const{done:t,value:l}=await i.read()
if(t){s&&(s=!1,await a.ready,await a.close())
break}if(n+=r.decode(l,{stream:!0}),s)await a.ready,await a.write(l)
else if(e.hasRequestedStream){const t=new TextEncoder
s=!0,o=new TransformStream,e.request.signal?.addEventListener("abort",(()=>{s&&(o.writable.abort("Request Aborted"),o.readable.cancel("Request Aborted"))})),e.setStream(o.readable),a=o.writable.getWriter(),await a.ready,await a.write(t.encode(n)),await a.ready,await a.write(l)}}s&&(s=!1,await a.ready,await a.close())}if(i){let i
try{i=JSON.parse(n)}catch{}const r=Array.isArray(i)?i:null!==(o=i)&&"object"==typeof o&&Array.isArray(i.errors)?i.errors:null,s=t.statusText||bi.get(t.status)||"Unknown Request Error",a=`[${t.status} ${s}] ${e.request.method??"GET"} (${t.type}) - ${t.url}`,l=r?new AggregateError(r,a):new Error(a)
throw l.status=t.status,l.statusText=s,l.isRequestError=!0,l.code=l.status,l.name=l.statusText.replaceAll(" ","")+"Error",l.content=i,l}return JSON.parse(n)
var o}}
function wi(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class ki extends ye.Ay{constructor(e){super(e),wi(this,"adapterFor",tt),wi(this,"serializerFor",it),wi(this,"pushPayload",st),wi(this,"normalize",rt),wi(this,"serializeRecord",nt),"requestManager"in this||(this.requestManager=new $e,this.requestManager.use([Qe,vi])),this.requestManager.useCache(ye.lL)}createSchemaService(){return new ui(this)}createCache(e){return new Z(e)}instantiateRecord(e,t){return fi.call(this,e,t)}teardownRecord(e){pi.call(this,e)}modelFor(e){return yi.call(this,e)||super.modelFor(e)}destroy(){ot.call(this),super.destroy()}}},81:(e,t,i)=>{"use strict"
function r(e,t,i){return(t="symbol"==typeof(r=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t))?r:String(r))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e
var r}function s(e,t,i,r){i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(r):void 0})}function n(e,t,i,r,s){var n={}
return Object.keys(r).forEach((function(e){n[e]=r[e]})),n.enumerable=!!n.enumerable,n.configurable=!!n.configurable,("value"in n||n.initializer)&&(n.writable=!0),n=i.slice().reverse().reduce((function(i,r){return r(e,t,i)||i}),n),s&&void 0!==n.initializer&&(n.value=n.initializer?n.initializer.call(s):void 0,n.initializer=void 0),void 0===n.initializer&&(Object.defineProperty(e,t,n),n=null),n}i.d(t,{_:()=>n,a:()=>s,b:()=>r})},89:(e,t,i)=>{"use strict"
i.d(t,{C:()=>Be,S:()=>Pe,f:()=>R,h:()=>p,i:()=>k,l:()=>he,m:()=>Re,p:()=>W,q:()=>G,r:()=>J,s:()=>Z,t:()=>Y,u:()=>U,v:()=>m,w:()=>We})
var r=i(1603),s=i(7648),n=i(4065),o=i(7375),a=i(1223),l=i(8146)
Symbol("record-originated-on-client"),Symbol("identifier-bucket"),Symbol("warpDriveStaleCache")
const c="__$co"
var d=i(3241),u=i(8738)
function h(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function f(e,t,i){if("function"==typeof e?e===t:e.has(t))return arguments.length<3?t:i
throw new TypeError("Private element is not present on this object")}function p(e){{let t
return t=null==e||""===e?null:String(e),(0,r.deprecate)(`The resource id '<${typeof e}> ${String(e)} ' is not normalized. Update your application code to use '${JSON.stringify(t)}' instead.`,t===e,{id:"ember-data:deprecate-non-strict-id",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function y(e){let t=null
return"string"==typeof e?t=e.length>0?e:null:"number"!=typeof e||isNaN(e)||(t=String(e)),t}function m(e){{const t=(0,d._k)(e)
return(0,r.deprecate)(`The resource type '${e}' is not normalized. Update your application code to use '${t}' instead of '${e}'.`,t===e,{id:"ember-data:deprecate-non-strict-types",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.3"}}),t}}function g(e){return Boolean(e&&"object"==typeof e)}function _(e,t){return Boolean(g(e)&&t in e&&"string"==typeof e[t]&&e[t].length)}function b(e){return _(e,"lid")}function v(e){return _(e,"id")||Boolean(g(e)&&"id"in e&&"number"==typeof e.id)}const w=(0,o.L1)("DOCUMENTS",new Set)
function k(e){return void 0!==e[c]}function R(e){return w.has(e)}const S="undefined"!=typeof FastBoot?FastBoot.require("crypto"):globalThis.crypto,A=new Map
let M=0
function C(e,t,i){"record"===i&&!e.id&&v(t)&&function(e,t,i){let r=e.get(t.type)
r||(r=new Map,e.set(t.type,r)),r.set(i,t.lid)}(A,e,t.id)}function E(e,t){const i=v(e)?p(e.id):null
return{type:function(e){return _(e,"type")}(e)?m(e.type):t?t.type:null,id:i}}function T(e,t){if("record"===t){if(b(e))return e.lid
if(v(e)){const t=m(e.type),i=A.get(t)?.get(e.id)
return i||`@lid:${t}-${e.id}`}return S.randomUUID()}if("document"===t)return e.url?e.method&&"GET"!==e.method.toUpperCase()?null:e.url:null}function O(...e){}function q(e,t,i){return e}class D{constructor(){this._generate=(0,o.Yj)("configuredGenerationMethod")||T,this._update=(0,o.Yj)("configuredUpdateMethod")||C,this._forget=(0,o.Yj)("configuredForgetMethod")||O,this._reset=(0,o.Yj)("configuredResetMethod")||O,this._merge=q,this._keyInfoForResource=(0,o.Yj)("configuredKeyInfoMethod")||E,this._id=M++,this._cache={resources:new Map,resourcesByType:Object.create(null),documents:new Map,polymorphicLidBackMap:new Map}}__configureMerge(e){this._merge=e||q}upgradeIdentifier(e){return this._getRecordIdentifier(e,2)}_getRecordIdentifier(e,t){if(k(e))return e
const i=this._generate(e,"record")
let r=N(this._cache,i)
if(null!==r)return r
if(0!==t){if(2===t)e.lid=i,e[c]=this._id,r=j(e)
else{const t=this._keyInfoForResource(e,null)
t.lid=i,t[c]=this._id,r=j(t)}return P(this._cache,r),r}}peekRecordIdentifier(e){return this._getRecordIdentifier(e,0)}getOrCreateDocumentIdentifier(e){let t=e.cacheOptions?.key
if(t||(t=this._generate(e,"document")),!t)return null
let i=this._cache.documents.get(t)
return void 0===i&&(i={lid:t},w.add(i),this._cache.documents.set(t,i)),i}getOrCreateRecordIdentifier(e){return this._getRecordIdentifier(e,1)}createIdentifierForNewRecord(e){const t=this._generate(e,"record"),i=j({id:e.id||null,type:e.type,lid:t,[c]:this._id})
return P(this._cache,i),i}updateRecordIdentifier(e,t){let i=this.getOrCreateRecordIdentifier(e)
const r=this._keyInfoForResource(t,i)
let s=function(e,t,i,r){const s=t.id,{id:n,type:o,lid:a}=i,l=e.resourcesByType[i.type]
if(null!==n&&n!==s&&null!==s){const e=l&&l.id.get(s)
return void 0!==e&&e}{const i=t.type
if(null!==n&&n===s&&i===o&&b(r)&&r.lid!==a)return N(e,r.lid)||!1
if(null!==n&&n===s&&i&&i!==o&&b(r)&&r.lid===a){const t=e.resourcesByType[i],r=t&&t.id.get(s)
return void 0!==r&&r}}return!1}(this._cache,r,i,t)
const n=b(t)
if(s||i.type!==r.type&&(n&&delete t.lid,s=this.getOrCreateRecordIdentifier(t)),s){const e=i
i=this._mergeRecordIdentifiers(r,e,s,t),n&&(t.lid=i.lid)}const o=i.id;(function(e,t,i,r){r(e,i,"record"),void 0!==i.id&&(e.id=p(i.id))})(i,0,t,this._update)
const a=i.id
if(o!==a&&null!==a){const e=this._cache.resourcesByType[i.type]
e.id.set(a,i),null!==o&&e.id.delete(o)}return i}_mergeRecordIdentifiers(e,t,i,r){const s=this._merge(t,i,r),n=s===t?i:t,o=this._cache.polymorphicLidBackMap.get(n.lid)
o&&this._cache.polymorphicLidBackMap.delete(n.lid),this.forgetRecordIdentifier(n),this._cache.resources.set(n.lid,s)
const a=this._cache.polymorphicLidBackMap.get(s.lid)??[]
return a.push(n.lid),o&&o.forEach((e=>{a.push(e),this._cache.resources.set(e,s)})),this._cache.polymorphicLidBackMap.set(s.lid,a),s}forgetRecordIdentifier(e){const t=this.getOrCreateRecordIdentifier(e),i=this._cache.resourcesByType[t.type]
null!==t.id&&i.id.delete(t.id),this._cache.resources.delete(t.lid),i.lid.delete(t.lid)
const r=this._cache.polymorphicLidBackMap.get(t.lid)
r&&(r.forEach((e=>{this._cache.resources.delete(e)})),this._cache.polymorphicLidBackMap.delete(t.lid)),t[c]=void 0,this._forget(t,"record")}destroy(){A.clear(),this._cache.documents.forEach((e=>{w.delete(e)})),this._reset()}}function j(e,t,i){return e}function N(e,t,i){return e.resources.get(t)||null}function P(e,t){e.resources.set(t.lid,t)
let i=e.resourcesByType[t.type]
i||(i={lid:new Map,id:new Map},e.resourcesByType[t.type]=i),i.lid.set(t.lid,t),t.id&&i.id.set(t.id,t)}function x(e){return"string"==typeof e?e:e.href}var F=new WeakSet
class I{constructor(e,t,i){var r;(function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(this,r=F),r.add(this),this._store=e,this._localCache=i,this.identifier=t,t&&e.notifications.subscribe(t,((e,t)=>{"updated"===t&&((0,l.eM)(this,"data"),(0,l.eM)(this,"links"),(0,l.eM)(this,"meta"),(0,l.eM)(this,"errors"))}))}fetch(e={}){return e.cacheOptions=e.cacheOptions||{},e.cacheOptions.key=this.identifier?.lid,f(F,this,$).call(this,this.links.related?"related":"self",e)}next(e={}){return f(F,this,$).call(this,"next",e)}prev(e={}){return f(F,this,$).call(this,"prev",e)}first(e={}){return f(F,this,$).call(this,"first",e)}last(e={}){return f(F,this,$).call(this,"last",e)}toJSON(){const e={}
return e.identifier=this.identifier,void 0!==this.data&&(e.data=this.data),void 0!==this.links&&(e.links=this.links),void 0!==this.errors&&(e.errors=this.errors),void 0!==this.meta&&(e.meta=this.meta),e}}async function $(e,t){const i=this.links?.[e]
return i?(t.method=t.method||"GET",Object.assign(t,{url:x(i)}),(await this._store.request(t)).content):null}(0,l.Ly)(I.prototype,"errors",{get(){const{identifier:e}=this
if(!e){const{document:e}=this._localCache
return"errors"in e?e.errors:void 0}const t=this._store.cache.peek(e)
return"errors"in t?t.errors:void 0}}),(0,l.Ly)(I.prototype,"data",{get(){const{identifier:e,_localCache:t}=this,i=e?this._store.cache.peek(e):t.document,r="data"in i?i.data:void 0
return Array.isArray(r)?this._store.recordArrayManager.getCollection({type:e?e.lid:t.request.url,identifiers:r.slice(),doc:e?void 0:i,identifier:e??null}):r?this._store.peekRecord(r):r}}),(0,l.Ly)(I.prototype,"links",{get(){const{identifier:e}=this
return e?this._store.cache.peek(e).links:this._localCache.document.links}}),(0,l.Ly)(I.prototype,"meta",{get(){const{identifier:e}=this
return e?this._store.cache.peek(e).meta:this._localCache.document.meta}})
class z{constructor(e,t){h(this,"___token",void 0),h(this,"___identifier",void 0),this.store=e,this.___identifier=t,this.___token=e.notifications.subscribe(t,((e,t,i)=>{("identity"===t||"attributes"===t&&"id"===i)&&this._ref++}))}destroy(){this.store.notifications.unsubscribe(this.___token)}get type(){return this.identifier().type}id(){return this._ref,this.___identifier.id}identifier(){return this.___identifier}remoteType(){return"identity"}push(e){return Promise.resolve(e).then((e=>this.store.push(e)))}value(){return this.store.peekRecord(this.___identifier)}load(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e)}reload(){const e=this.id()
if(null!==e)return this.store.findRecord(this.type,e,{reload:!0})}}(0,l.sg)(z.prototype,"_ref")
class L{constructor(e){this._store=e,this._willNotify=!1,this._pendingNotifies=new Map}get identifierCache(){return this._store.identifierCache}_scheduleNotification(e,t){let i=this._pendingNotifies.get(e)
i||(i=new Set,this._pendingNotifies.set(e,i)),i.add(t),!0!==this._willNotify&&(this._willNotify=!0,this._store._cbs?this._store._schedule("notify",(()=>this._flushNotifications())):this._flushNotifications())}_flushNotifications(){if(!1===this._willNotify)return
const e=this._pendingNotifies
this._pendingNotifies=new Map,this._willNotify=!1,e.forEach(((e,t)=>{e.forEach((e=>{this._store.notifications.notify(t,"relationships",e)}))}))}notifyChange(e,t,i){"relationships"===t&&i?this._scheduleNotification(e,i):this._store.notifications.notify(e,t,i)}get schema(){return this._store.schema}setRecordId(e,t){this._store._instanceCache.setRecordId(e,t)}hasRecord(e){return Boolean(this._store._instanceCache.peek(e))}disconnectRecord(e){this._store._instanceCache.disconnect(e),this._pendingNotifies.delete(e)}}L.prototype.getSchemaDefinitionService=function(){return this._store.schema}
const B=(0,o.L1)("CacheForIdentifierCache",new Map)
function U(e,t){B.set(e,t)}function V(e){B.delete(e)}function W(e){return B.has(e)?B.get(e):null}const H=(0,o.L1)("RecordCache",new Map)
function K(e){return H.get(e)}function J(e){return H.get(e)}function G(e,t){H.set(e,t)}const Y=(0,o.L1)("StoreMap",new Map)
function Z(e){return Y.get(e)}class Q{constructor(e){this.store=e,this.__instances={record:new Map,reference:new WeakMap,document:new Map},this._storeWrapper=new L(this.store),e.identifierCache.__configureMerge(((e,t,i)=>{let r=e
e.id!==t.id?r="id"in i&&e.id===i.id?e:t:e.type!==t.type&&(r="type"in i&&e.type===i.type?e:t)
const s=e===r?t:e,n=this.__instances.record.has(r),o=this.__instances.record.has(s)
if(n&&o&&"id"in i)throw new Error(`Failed to update the 'id' for the RecordIdentifier '${e.type}:${String(e.id)} (${e.lid})' to '${String(i.id)}', because that id is already in use by '${t.type}:${String(t.id)} (${t.lid})'`)
return this.store.cache.patch({op:"mergeIdentifiers",record:s,value:r}),this.unloadRecord(s),r}))}peek(e){return this.__instances.record.get(e)}getDocument(e){let t=this.__instances.document.get(e)
return t||(t=new I(this.store,e,null),this.__instances.document.set(e,t)),t}getRecord(e,t){let i=this.__instances.record.get(e)
if(!i){const r=this.store.cache
U(e,r),i=this.store.instantiateRecord(e,t||{}),G(i,e),U(i,r),Y.set(i,this.store),this.__instances.record.set(e,i)}return i}getReference(e){const t=this.__instances.reference
let i=t.get(e)
return i||(i=new z(this.store,e),t.set(e,i)),i}recordIsLoaded(e,t=!1){const i=this.cache
if(!i)return!1
const r=i.isNew(e),s=i.isEmpty(e)
return r?!i.isDeleted(e):!(t&&i.isDeletionCommitted(e)||s)}disconnect(e){this.__instances.record.get(e),this.store._graph?.remove(e),this.store.identifierCache.forgetRecordIdentifier(e),V(e),this.store._requestCache._clearEntries(e)}unloadRecord(e){this.store._join((()=>{const t=this.__instances.record.get(e),i=this.cache
t&&(this.store.teardownRecord(t),this.__instances.record.delete(e),Y.delete(t),H.delete(t),V(t)),i?(i.unloadRecord(e),V(e)):this.disconnect(e),this.store._requestCache._clearEntries(e)}))}clear(e){const t=this.store.identifierCache._cache
if(void 0===e)t.resources.forEach((e=>{this.unloadRecord(e)}))
else{const i=t.resourcesByType,r=i[e]?.lid
r&&r.forEach((e=>{this.unloadRecord(e)}))}}setRecordId(e,t){const{type:i,lid:s}=e,n=e.id
null===n||null!==t?(this.store.identifierCache.peekRecordIdentifier({type:i,id:t}),null===e.id&&this.store.identifierCache.updateRecordIdentifier(e,{type:i,id:t}),this.store.notifications.notify(e,"identity")):(0,r.warn)(`Your ${i} record was saved to the server, but the response does not have an id.`,!(null!==n&&null===t))}}function X(e,t){return"string"==typeof e||"number"==typeof e?{type:t,id:y(e)}:J(e)}const ee=(0,o.L1)("AvailableShims",new WeakMap)
class te{constructor(e,t){this.__store=e,this.modelName=t}get fields(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,i)=>{"attribute"!==t.kind&&"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(i,t.kind)})),e}get attributes(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,i)=>{"attribute"===t.kind&&e.set(i,t)})),e}get relationshipsByName(){const e=new Map
return this.__store.schema.fields({type:this.modelName}).forEach(((t,i)=>{"belongsTo"!==t.kind&&"hasMany"!==t.kind||e.set(i,t)})),e}eachAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((i,r)=>{"attribute"===i.kind&&e.call(t,r,i)}))}eachRelationship(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((i,r)=>{"belongsTo"!==i.kind&&"hasMany"!==i.kind||e.call(t,r,i)}))}eachTransformedAttribute(e,t){this.__store.schema.fields({type:this.modelName}).forEach(((i,r)=>{if("attribute"===i.kind){const s=i.type
s&&e.call(t,r,s)}}))}}function ie(e){return"added"===e||"state"===e||"updated"===e||"removed"===e||"invalidated"===e}function re(){return!!a._backburner.currentInstance&&!0!==a._backburner._autorun}class se{constructor(e){this.store=e,this.isDestroyed=!1,this._buffered=new Map,this._hasFlush=!1,this._cache=new Map}subscribe(e,t){let i=this._cache.get(e)
return t.for=e,i||(i=[],this._cache.set(e,i)),i.push(t),t}unsubscribe(e){this.isDestroyed||function(e,t){const i=e.for
if(i){const r=t.get(i)
if(!r)return
const s=r.indexOf(e)
if(-1===s)return
r.splice(s,1)}}(e,this._cache)}notify(e,t,i){if(!k(e)&&!R(e))return!1
const r=Boolean(this._cache.get(e)?.length)
if(ie(t)||r){let r=this._buffered.get(e)
r||(r=[],this._buffered.set(e,r)),r.push([t,i]),this._scheduleNotify()}return r}_onNextFlush(e){this._onFlushCB=e}_scheduleNotify(){const e=this.store._enableAsyncFlush
return!(this._hasFlush&&!1!==e&&!re()||(e&&!re()?(this._hasFlush=!0,1):(this._flush(),0)))}_flush(){const e=this._buffered
e.size&&(this._buffered=new Map,e.forEach(((e,t)=>{e.forEach((e=>{this._flushNotification(t,e[0],e[1])}))}))),this._hasFlush=!1,this._onFlushCB?.(),this._onFlushCB=void 0}_flushNotification(e,t,i){if(ie(t)){const i=this._cache.get(R(e)?"document":"resource")
i&&i.forEach((i=>{i(e,t)}))}const r=this._cache.get(e)
return!(!r||!r.length||(r.forEach((r=>{r(e,t,i)})),0))}destroy(){this.isDestroyed=!0,this._cache.clear()}}const ne=Proxy,oe=new Set([Symbol.iterator,"concat","entries","every","fill","filter","find","findIndex","flat","flatMap","forEach","includes","indexOf","join","keys","lastIndexOf","map","reduce","reduceRight","slice","some","values"]),ae=new Set(["push","pop","unshift","shift","splice","sort"]),le=new Set(["[]","length","links","meta"])
function ce(e){return oe.has(e)}function de(e,t){return t in e}const ue=(0,o.L1)("#signal",Symbol("#signal")),he=(0,o.L1)("#source",Symbol("#source")),fe=(0,o.L1)("#update",Symbol("#update")),pe=(0,o.L1)("#notify",Symbol("#notify")),ye=(0,o.L1)("IS_COLLECTION",Symbol.for("Collection"))
function me(e){(0,l.RH)(e[ue])}function ge(e){if("symbol"==typeof e)return null
const t=Number(e)
return isNaN(t)?null:t%1==0?t:null}class _e{[pe](){me(this)}destroy(e){this.isDestroying=!e,this[he].length=0,this[pe](),this.isDestroyed=!e}get length(){return this[he].length}set length(e){this[he].length=e}constructor(e){h(this,"isLoaded",!0),h(this,"isDestroying",!1),h(this,"isDestroyed",!1),h(this,"_updatingPromise",null),h(this,"identifier",void 0),h(this,ye,!0),h(this,he,void 0)
const t=this
this.modelName=e.type,this.store=e.store,this._manager=e.manager,this.identifier=e.identifier||null,this[he]=e.identifiers,this[ue]=(0,l.n5)(this,"length")
const i=e.store,r=new Map,s=this[ue],n={links:e.links||null,meta:e.meta||null}
let o=!1
const a=new ne(this[he],{get(a,c,d){const u=ge(c)
if(s.shouldReset&&(null!==u||le.has(c)||ce(c))&&(e.manager._syncArray(d),s.t=!1,s.shouldReset=!1),null!==u){const e=a[u]
return o||(0,l.B1)(s),e&&i._instanceCache.getRecord(e)}if("meta"===c)return(0,l.B1)(s),n.meta
if("links"===c)return(0,l.B1)(s),n.links
if("[]"===c)return(0,l.B1)(s),d
if(ce(c)){let e=r.get(c)
return void 0===e&&(e="forEach"===c?function(){(0,l.B1)(s),o=!0
const e=function(e,t,i,r,s){void 0===s&&(s=null)
const n=(t=t.slice()).length
for(let o=0;o<n;o++)r.call(s,i._instanceCache.getRecord(t[o]),o,e)
return e}(d,a,i,arguments[0],arguments[1])
return o=!1,e}:function(){(0,l.B1)(s),o=!0
const e=Reflect.apply(a[c],d,arguments)
return o=!1,e},r.set(c,e)),e}if(function(e){return ae.has(e)}(c)){let i=r.get(c)
return void 0===i&&(i=function(){if(!e.allowMutation)return
const i=Array.prototype.slice.call(arguments)
o=!0
const r=t[fe](a,d,c,i,s)
return o=!1,r},r.set(c,i)),i}if(de(t,c)){if(c===pe||c===ue||c===he)return t[c]
let e=r.get(c)
if(e)return e
const i=t[c]
return"function"==typeof i?(e=function(){return(0,l.B1)(s),Reflect.apply(i,d,arguments)},r.set(c,e),e):((0,l.B1)(s),i)}return a[c]},set(i,r,a,l){if("length"===r){if(!o&&0===a)return o=!0,t[fe](i,l,"length 0",[],s),o=!1,!0
if(o)return Reflect.set(i,r,a)}if("links"===r)return n.links=a||null,!0
if("meta"===r)return n.meta=a||null,!0
const c=ge(r)
if(null===c||c>i.length){if(null!==c&&o){const e=J(a)
return i[c]=e,!0}return!!de(t,r)&&(t[r]=a,!0)}if(!e.allowMutation)return!1
const d=i[c],u=(h=a)?J(h):null
var h
return o?i[c]=u:t[fe](i,l,"replace cell",[c,d,u],s),!0},deleteProperty:(e,t)=>!!o&&Reflect.deleteProperty(e,t),getPrototypeOf:()=>Array.prototype})
return(0,l.zs)(a,s),this[pe]=this[pe].bind(a),a}update(){if(this.isUpdating)return this._updatingPromise
this.isUpdating=!0
const e=this._update()
return e.finally((()=>{this._updatingPromise=null,this.isDestroying||this.isDestroyed||(this.isUpdating=!1)})),this._updatingPromise=e,e}_update(){return this.store.findAll(this.modelName,{reload:!0})}save(){return Promise.all(this.map((e=>this.store.saveRecord(e)))).then((()=>this))}}!function(e,t,i){let r={...Object.getOwnPropertyDescriptor(e,t)}
for(let s of i)r=s(e,t,r)||r
void 0!==r.initializer&&(r.value=r.initializer?r.initializer.call(e):void 0,r.initializer=void 0),Object.defineProperty(e,t,r)}(_e.prototype,"length",[u.Vv])
const be={enumerable:!0,configurable:!1,get:function(){return this}};(0,u.Vv)(be),Object.defineProperty(_e.prototype,"[]",be),(0,l.sg)(_e.prototype,"isUpdating",!1)
class ve extends _e{constructor(e){super(e),h(this,"query",null),this.query=e.query||null,this.isLoaded=e.isLoaded||!1}_update(){const{store:e,query:t}=this
return e.query(this.modelName,t,{_recordArray:this})}destroy(e){super.destroy(e),this._manager._managed.delete(this),this._manager._pending.delete(this)}}ve.prototype.query=null
const we=(0,o.L1)("FAKE_ARR",{}),ke=1200
function Re(e,t){let i=0
const r=t.length
for(;r-i>ke;)e.push.apply(e,t.slice(i,i+ke)),i+=ke
e.push.apply(e,t.slice(i))}class Se{constructor(e){this.store=e.store,this.isDestroying=!1,this.isDestroyed=!1,this._live=new Map,this._managed=new Set,this._pending=new Map,this._staged=new Map,this._keyedArrays=new Map,this._identifiers=new Map,this._set=new Map,this._visibilitySet=new Map,this._subscription=this.store.notifications.subscribe("document",((e,t)=>{if("updated"===t&&this._keyedArrays.has(e.lid)){const t=this._keyedArrays.get(e.lid)
this.dirtyArray(t,0,!0)}})),this._subscription=this.store.notifications.subscribe("resource",((e,t)=>{"added"===t?(this._visibilitySet.set(e,!0),this.identifierAdded(e)):"removed"===t?(this._visibilitySet.set(e,!1),this.identifierRemoved(e)):"state"===t&&this.identifierChanged(e)}))}_syncArray(e){const t=this._pending.get(e),i=function(e){return null!==e.identifier}(e)
if((i||t)&&!this.isDestroying&&!this.isDestroyed&&(t&&(function(e,t,i){const r=e[he],s=[],n=[]
t.forEach(((e,t)=>{if("add"===e){if(i.has(t))return
s.push(t),i.add(t)}else i.has(t)&&(n.push(t),i.delete(t))})),n.length&&(n.length===r.length?r.length=0:n.forEach((e=>{const t=r.indexOf(e);-1!==t&&(r.splice(t,1),i.delete(e))}))),s.length&&Re(r,s)}(e,t,this._set.get(e)),this._pending.delete(e)),i)){const t=e[ue]
if("cache-sync"===t.reason){t.reason=null
const i=this.store.cache.peek(e.identifier),r="data"in i&&Array.isArray(i.data)?i.data:[]
this.populateManagedArray(e,r,null)}}}mutate(e){this.store.cache.mutate(e)}liveArrayFor(e){let t=this._live.get(e)
const i=[],r=this._staged.get(e)
return r&&(r.forEach(((e,t)=>{"add"===e&&i.push(t)})),this._staged.delete(e)),t||(t=new _e({type:e,identifiers:i,store:this.store,allowMutation:!1,manager:this}),this._live.set(e,t),this._set.set(t,new Set(i))),t}getCollection(e){if(e.identifier&&this._keyedArrays.has(e.identifier.lid))return this._keyedArrays.get(e.identifier.lid)
const t={type:e.type,identifier:e.identifier||null,links:e.doc?.links||null,meta:e.doc?.meta||null,query:e.query||null,identifiers:e.identifiers||[],isLoaded:!!e.identifiers?.length,allowMutation:!1,store:this.store,manager:this},i=new ve(t)
return this._managed.add(i),this._set.set(i,new Set(t.identifiers||[])),e.identifier&&this._keyedArrays.set(e.identifier.lid,i),e.identifiers&&Ae(this._identifiers,i,e.identifiers),i}dirtyArray(e,t,i){if(e===we)return
const r=e[ue]
i&&(r.reason="cache-sync"),r.shouldReset?t>0&&!r.t&&(0,l.Fe)(e[pe]):(r.shouldReset=!0,(0,l.Fe)(e[pe]))}_getPendingFor(e,t,i){if(this.isDestroying||this.isDestroyed)return
const r=this._live.get(e.type),s=this._pending,n=new Map
if(t){const t=this._identifiers.get(e)
t&&t.forEach((e=>{let t=s.get(e)
t||(t=new Map,s.set(e,t)),n.set(e,t)}))}if(r&&0===r[he].length&&i){const e=s.get(r)
if(!e||0===e.size)return n}if(r){let e=s.get(r)
e||(e=new Map,s.set(r,e)),n.set(r,e)}else{let t=this._staged.get(e.type)
t||(t=new Map,this._staged.set(e.type,t)),n.set(we,t)}return n}populateManagedArray(e,t,i){this._pending.delete(e)
const r=e[he],s=r.slice()
r.length=0,Re(r,t),this._set.set(e,new Set(t)),me(e),e.meta=i?.meta||null,e.links=i?.links||null,e.isLoaded=!0,function(e,t,i){for(let r=0;r<i.length;r++)Me(e,t,i[r])}(this._identifiers,e,s),Ae(this._identifiers,e,t)}identifierAdded(e){const t=this._getPendingFor(e,!1)
t&&t.forEach(((t,i)=>{"del"===t.get(e)?t.delete(e):(t.set(e,"add"),this.dirtyArray(i,t.size,!1))}))}identifierRemoved(e){const t=this._getPendingFor(e,!0,!0)
t&&t.forEach(((t,i)=>{"add"===t.get(e)?t.delete(e):(t.set(e,"del"),this.dirtyArray(i,t.size,!1))}))}identifierChanged(e){const t=this.store._instanceCache.recordIsLoaded(e,!0)
this._visibilitySet.get(e)!==t&&(t?this.identifierAdded(e):this.identifierRemoved(e))}clear(e=!0){this._live.forEach((t=>t.destroy(e))),this._managed.forEach((t=>t.destroy(e))),this._managed.clear(),this._identifiers.clear(),this._pending.clear(),this._set.forEach((e=>e.clear())),this._visibilitySet.clear()}destroy(){this.isDestroying=!0,this.clear(!1),this._live.clear(),this.isDestroyed=!0,this.store.notifications.unsubscribe(this._subscription)}}function Ae(e,t,i){for(let r=0;r<i.length;r++){const s=i[r]
let n=e.get(s)
n||(n=new Set,e.set(s,n)),n.add(t)}}function Me(e,t,i){const r=e.get(i)
r&&r.delete(t)}const Ce=(0,o.L1)("Touching",Symbol("touching")),Ee=(0,o.L1)("RequestPromise",Symbol("promise")),Te=[]
class Oe{constructor(e){h(this,"_pending",new Map),h(this,"_done",new Map),h(this,"_subscriptions",new Map),h(this,"_toFlush",[]),h(this,"_store",void 0),this._store=e}_clearEntries(e){this._done.delete(e)}_enqueue(e,t){const i=t.data[0]
if("recordIdentifier"in i){const r=i.recordIdentifier,s="saveRecord"===i.op?"mutation":"query"
this._pending.has(r)||this._pending.set(r,[])
const n={state:"pending",request:t,type:s}
return n[Ce]=[i.recordIdentifier],n[Ee]=e,this._pending.get(r).push(n),this._triggerSubscriptions(n),e.then((e=>{this._dequeue(r,n)
const i={state:"fulfilled",request:t,type:s,response:{data:e}}
return i[Ce]=n[Ce],this._addDone(i),this._triggerSubscriptions(i),e}),(e=>{this._dequeue(r,n)
const i={state:"rejected",request:t,type:s,response:{data:e}}
throw i[Ce]=n[Ce],this._addDone(i),this._triggerSubscriptions(i),e}))}}_triggerSubscriptions(e){"pending"!==e.state?(this._toFlush.push(e),1===this._toFlush.length&&this._store.notifications._onNextFlush((()=>{this._flush()}))):this._flushRequest(e)}_flush(){this._toFlush.forEach((e=>{this._flushRequest(e)})),this._toFlush=[]}_flushRequest(e){e[Ce].forEach((t=>{const i=this._subscriptions.get(t)
i&&i.forEach((t=>t(e)))}))}_dequeue(e,t){const i=this._pending.get(e)
this._pending.set(e,i.filter((e=>e!==t)))}_addDone(e){e[Ce].forEach((t=>{const i=e.request.data[0].op
let r=this._done.get(t)
r&&(r=r.filter((e=>{let t
return t=Array.isArray(e.request.data)?e.request.data[0]:e.request.data,t.op!==i}))),r=r||[],r.push(e),this._done.set(t,r)}))}subscribeForRecord(e,t){let i=this._subscriptions.get(e)
i||(i=[],this._subscriptions.set(e,i)),i.push(t)}getPendingRequestsForRecord(e){return this._pending.get(e)||Te}getLastRequestForRecord(e){const t=this._done.get(e)
return t?t[t.length-1]:null}}function qe(e){return Boolean(e&&"string"==typeof e)}function De(e,t,i){if("object"==typeof e&&null!==e){const t=e
return k(t)||"id"in t&&(t.id=p(t.id)),t}{const r=p(t)
if(!qe(r)){if(qe(i))return{lid:i}
throw new Error("Expected either id or lid to be a valid string")}return qe(i)?{type:e,id:r,lid:i}:{type:e,id:r}}}globalThis.setWarpDriveLogging=n.q,globalThis.getWarpDriveRuntimeConfig=n.P
const je=class{constructor(e){}},Ne=je.default?je.default:je
Ne!==je&&(0,r.deprecate)("The Store class extending from EmberObject is deprecated.\nPlease remove usage of EmberObject APIs and mark your class as not requiring it.\n\nTo mark the class as no longer extending from EmberObject, in ember-cli-build.js\nset the following config:\n\n```js\nconst app = new EmberApp(defaults, {\n  emberData: {\n    deprecations: {\n      DEPRECATE_STORE_EXTENDS_EMBER_OBJECT: false\n    }\n  }\n});\n```\n",!1,{id:"ember-data:deprecate-store-extends-ember-object",until:"6.0",for:"ember-data",url:"https://deprecations.emberjs.com/id/ember-data-deprecate-store-extends-ember-object",since:{available:"4.13",enabled:"5.4"}})
class Pe extends Ne{get schema(){return this._schema||(this._schema=this.createSchemaService()),this._schema}get isDestroying(){return this._isDestroying}set isDestroying(e){this._isDestroying=e}get isDestroyed(){return this._isDestroyed}set isDestroyed(e){this._isDestroyed=e}constructor(e){super(e),Object.assign(this,e),this.identifierCache=new D,this.notifications=new se(this),this.recordArrayManager=new Se({store:this}),this._requestCache=new Oe(this),this._instanceCache=new Q(this),this.isDestroying=!1,this.isDestroyed=!1}_run(e){const t=this._cbs={}
e(),t.coalesce&&t.coalesce(),t.sync&&t.sync(),t.notify&&t.notify(),this._cbs=null}_join(e){this._cbs?e():this._run(e)}_schedule(e,t){this._cbs[e]=t}getRequestStateService(){return this._requestCache}_getAllPending(){}request(e){const t={store:this,[s._q]:e[s._q]??!0}
if(e.records){const i=this.identifierCache
t.records=e.records.map((e=>i.getOrCreateRecordIdentifier(e)))}const i=Object.assign({},e,t),r=this.requestManager.request(i)
return r.onFinalize((()=>{("findBelongsTo"!==e.op||e.url)&&this.notifications._flush()})),r}modelFor(e){return function(e,t){let i=ee.get(e)
i||(i=Object.create(null),ee.set(e,i))
let r=i[t]
return void 0===r&&(r=i[t]=new te(e,t)),r}(this,e)}createRecord(e,t){let i
return this._join((()=>{const r=m(e),s={...t}
let n=null
if(null===s.id||void 0===s.id){const e=this.adapterFor?.(r,!0)
n=e&&e.generateIdForRecord?s.id=p(e.generateIdForRecord(this,r,s)):s.id=null}else n=s.id=p(s.id)
const o={type:r,id:n}
o.id&&this.identifierCache.peekRecordIdentifier(o)
const a=this.identifierCache.createIdentifierForNewRecord(o),l=this.cache,c=function(e,t,i){if(void 0!==i){const{type:r}=t,s=e.schema.fields({type:r})
if(s.size){const e=Object.keys(i)
for(let t=0;t<e.length;t++){const r=e[t],n=s.get(r)
n&&("hasMany"===n.kind?i[r]=i[r].map((e=>Fe(e))):"belongsTo"===n.kind&&(i[r]=Fe(i[r])))}}}return i}(this,a,s),d=l.clientDidCreate(a,c)
i=this._instanceCache.getRecord(a,d)})),i}deleteRecord(e){const t=K(e),i=this.cache
this._join((()=>{i.setIsDeleted(t,!0),i.isNew(t)&&this._instanceCache.unloadRecord(t)}))}unloadRecord(e){const t=K(e)
t&&this._instanceCache.unloadRecord(t)}findRecord(e,t,i){xe(e)?i=t:e=De(m(e),y(t))
const r=this.identifierCache.getOrCreateRecordIdentifier(e)
return(i=i||{}).preload&&(this._instanceCache.recordIsLoaded(r)||(i.reload=!0),this._join((()=>{!function(e,t,i){const r={},s=e.schema.fields(t)
Object.keys(i).forEach((e=>{const t=i[e],n=s.get(e)
!n||"hasMany"!==n.kind&&"belongsTo"!==n.kind?(r.attributes||(r.attributes={}),r.attributes[e]=t):(r.relationships||(r.relationships={}),r.relationships[e]=function(e,t){const i=e.type
return"hasMany"===e.kind?{data:t.map((e=>X(e,i)))}:{data:t?X(t,i):null}}(n,t))}))
const n=e.cache,o=Boolean(e._instanceCache.peek(t))
n.upsert(t,r,o)}(this,r,i.preload)}))),this.request({op:"findRecord",data:{record:r,options:i},cacheOptions:{[s.ER]:!0}}).then((e=>e.content))}getReference(e,t){let i
i=1===arguments.length&&xe(e)?e:De(m(e),y(t))
const r=this.identifierCache.getOrCreateRecordIdentifier(i)
return this._instanceCache.getReference(r)}peekRecord(e,t){if(1===arguments.length&&xe(e)){const t=this.identifierCache.peekRecordIdentifier(e)
return t&&this._instanceCache.recordIsLoaded(t)?this._instanceCache.getRecord(t):null}const i={type:m(e),id:y(t)},r=this.identifierCache.peekRecordIdentifier(i)
return r&&this._instanceCache.recordIsLoaded(r)?this._instanceCache.getRecord(r):null}query(e,t,i={}){return this.request({op:"query",data:{type:m(e),query:t,options:i},cacheOptions:{[s.ER]:!0}}).then((e=>e.content))}queryRecord(e,t,i){return this.request({op:"queryRecord",data:{type:m(e),query:t,options:i||{}},cacheOptions:{[s.ER]:!0}}).then((e=>e.content))}findAll(e,t={}){return this.request({op:"findAll",data:{type:m(e),options:t||{}},cacheOptions:{[s.ER]:!0}}).then((e=>e.content))}peekAll(e){return this.recordArrayManager.liveArrayFor(m(e))}unloadAll(e){this._join((()=>{void 0===e?(this._graph?.identifiers.clear(),this.recordArrayManager.clear(),this._instanceCache.clear()):this._instanceCache.clear(m(e))}))}push(e){const t=this._push(e,!1)
return Array.isArray(t)?t.map((e=>this._instanceCache.getRecord(e))):null===t?null:this._instanceCache.getRecord(t)}_push(e,t){let i
return t&&(this._enableAsyncFlush=!0),this._join((()=>{i=this.cache.put({content:e})})),this._enableAsyncFlush=null,"data"in i?i.data:null}saveRecord(e,t={}){const i=J(e),r=this.cache
if(!i)return Promise.reject(new Error("Record Is Disconnected"))
if(function(e,t){const i=e.cache
return!i||function(e,t){return t.isDeletionCommitted(e)||t.isNew(e)&&t.isDeleted(e)}(t,i)}(this._instanceCache,i))return Promise.resolve(e)
t||(t={})
let n="updateRecord"
r.isNew(i)?n="createRecord":r.isDeleted(i)&&(n="deleteRecord")
const o={op:n,data:{options:t,record:i},records:[i],cacheOptions:{[s.ER]:!0}}
return this.request(o).then((e=>e.content))}get cache(){let{cache:e}=this._instanceCache
return e||(e=this._instanceCache.cache=this.createCache(this._instanceCache._storeWrapper)),e}destroy(){this.isDestroyed||(this.isDestroying=!0,this._graph?.destroy(),this._graph=void 0,this.notifications.destroy(),this.recordArrayManager.destroy(),this.identifierCache.destroy(),this.unloadAll(),this.isDestroyed=!0)}static create(e){return new this(e)}}function xe(e){return Boolean(null!==e&&"object"==typeof e&&("id"in e&&"type"in e&&e.id&&e.type||e.lid))}function Fe(e){return e?J(e):null}Pe.prototype.getSchemaDefinitionService=function(){return(0,r.deprecate)("Use `store.schema` instead of `store.getSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema},Pe.prototype.registerSchemaDefinitionService=function(e){(0,r.deprecate)("Use `store.createSchemaService` instead of `store.registerSchemaDefinitionService()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema=e},Pe.prototype.registerSchema=function(e){(0,r.deprecate)("Use `store.createSchemaService` instead of `store.registerSchema()`",!1,{id:"ember-data:schema-service-updates",until:"6.0",for:"ember-data",since:{available:"4.13",enabled:"5.4"}}),this._schema=e}
const Ie=new Set(["createRecord","updateRecord","deleteRecord"])
function $e(e){return Boolean(e.op&&Ie.has(e.op))}function ze(e){const t=function(e){return e instanceof AggregateError||"AggregateError"===e.name&&Array.isArray(e.errors)}(e),i=t?new AggregateError(structuredClone(e.errors),e.message):new Error(e.message)
return i.stack=e.stack,i.error=e.error,Object.assign(i,e),i}function Le(e,t,i){if(e){const i=t.get(e)
if(i)return i.priority}return i}const Be={request(e,t){if(!e.request.store||e.request.cacheOptions?.[s.ER])return t(e.request)
const{store:i}=e.request,r=i.identifierCache.getOrCreateDocumentIdentifier(e.request)
r&&e.setIdentifier(r)
const n=i.requestManager._deduped,o=r&&n.get(r),a=r?i.cache.peekRequest(r):null
if(function(e,t,i,r){const{cacheOptions:s}=t
return t.op&&Ie.has(t.op)||s?.reload||!i||!(!e.lifetimes||!r)&&e.lifetimes.isHardExpired(r,e)}(i,e.request,!!a,r)){if(o)return o.priority={blocking:!0},o.promise
let s=Ve(t,e,r,{blocking:!0})
return r&&(s=s.finally((()=>{n.delete(r),i.notifications.notify(r,"state")})),n.set(r,{priority:{blocking:!0},promise:s}),i.notifications.notify(r,"state")),s}if(function(e,t,i,r){const{cacheOptions:s}=t
return s?.backgroundReload||!(!e.lifetimes||!r)&&e.lifetimes.isSoftExpired(r,e)}(i,e.request,0,r)){let s=o?.promise||Ve(t,e,r,{blocking:!1})
r&&!o&&(s=s.finally((()=>{n.delete(r),i.notifications.notify(r,"state")})),n.set(r,{priority:{blocking:!1},promise:s}),i.notifications.notify(r,"state")),i.requestManager._pending.set(e.id,s)}const l=e.request[s._q]||!1
if(e.setResponse(a.response),"error"in a){const t=l?Ue(i,e.request,{shouldHydrate:l,identifier:r},a.content):a.content,s=ze(a)
throw s.content=t,s}return l?Ue(i,e.request,{shouldHydrate:l,identifier:r},a.content):a.content}}
function Ue(e,t,i,r){const{identifier:s}=i
return r&&i.shouldHydrate?s?e._instanceCache.getDocument(s):new I(e,null,{request:t,document:r}):r}function Ve(e,t,i,r){const{store:n}=t.request,o={shouldHydrate:t.request[s._q]||!1,identifier:i,priority:r}
let a=!1
if($e(t.request)){a=!0
const e=t.request.data?.record||t.request.records?.[0]
e&&n.cache.willCommit(e,t)}n.lifetimes?.willRequest&&n.lifetimes.willRequest(t.request,i,n)
const l=e(t.request).then((e=>function(e,t,i,r){const{request:s}=t
let n
if(e.requestManager._pending.delete(t.id),e._enableAsyncFlush=!0,e._join((()=>{n=function(e,t,i,r){let s=null
if($e(t)){const i=t.data?.record||t.records?.[0]
i?s=e.cache.didCommit(i,r):function(e){return!$e(e.request)||("createRecord"===e.request.op&&201===e.response?.status?!!e.content&&Object.keys(e.content).length>0:204!==e.response?.status)}(r)&&(s=e.cache.put(r))}else s=e.cache.put(r)
return Ue(e,t,i,s)}(e,s,i,r)})),e._enableAsyncFlush=null,e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,r.response,i.identifier,e),Le(i.identifier,e.requestManager._deduped,i.priority).blocking)return n
e.notifications._flush()}(n,t,o,e)),(e=>function(e,t,i,r){if(e.requestManager._pending.delete(t.id),t.request.signal?.aborted)throw r
let s
if(e._enableAsyncFlush=!0,e._join((()=>{s=function(e,t,i,r){let s
if(!$e(t.request))return s=e.cache.put(r),Ue(e,t.request,i,s)
{const i=r&&r.content&&"object"==typeof r.content&&"errors"in r.content&&Array.isArray(r.content.errors)?r.content.errors:void 0,s=t.request.data?.record||t.request.records?.[0]
e.cache.commitWasRejected(s,i)}}(e,t,i,r)})),e._enableAsyncFlush=null,i.identifier&&e.lifetimes?.didRequest&&e.lifetimes.didRequest(t.request,r.response,i.identifier,e),$e(t.request))throw r
if(Le(i.identifier,e.requestManager._deduped,i.priority).blocking){const e=ze(r)
throw e.content=s,e}e.notifications._flush()}(n,t,o,e)))
if(!a)return l
const c=t.request.data?.record||t.request.records?.[0]
return n._requestCache._enqueue(l,{data:[{op:"saveRecord",recordIdentifier:c,options:void 0}]})}class We extends _e{constructor(e){super(e),this.isLoaded=e.isLoaded||!1,this.isAsync=e.isAsync||!1,this.isPolymorphic=e.isPolymorphic||!1,this.identifier=e.identifier,this.key=e.key}[fe](e,t,i,r,s){switch(i){case"length 0":return Reflect.set(e,"length",0),Ze(this,[],s),!0
case"replace cell":{const[t,i,n]=r
return e[t]=n,function(e,t,i){Qe(e,{op:"replaceRelatedRecord",record:e.identifier,field:e.key,...t},i)}(this,{value:n,prior:i,index:t},s),!0}case"push":{const n=He(r)
Je(this,e,(e=>e.push(...n)),"Cannot push duplicates to a hasMany's state.")
{const n=new Set(e),o=new Set
r.forEach((e=>{const t=J(e)
n.has(t)||(n.add(t),o.add(e))}))
const a=Array.from(o),l=Reflect.apply(e[i],t,a)
return a.length&&Ge(this,{value:He(a)},s),l}}case"pop":{const n=Reflect.apply(e[i],t,r)
return n&&Ye(this,{value:J(n)},s),n}case"unshift":{const n=He(r)
Je(this,e,(e=>e.unshift(...n)),"Cannot unshift duplicates to a hasMany's state.")
{const n=new Set(e),o=new Set
r.forEach((e=>{const t=J(e)
n.has(t)||(n.add(t),o.add(e))}))
const a=Array.from(o),l=Reflect.apply(e[i],t,a)
return a.length&&Ge(this,{value:He(a),index:0},s),l}}case"shift":{const n=Reflect.apply(e[i],t,r)
return n&&Ye(this,{value:J(n),index:0},s),n}case"sort":{const n=Reflect.apply(e[i],t,r)
return function(e,t,i){Qe(e,{op:"sortRelatedRecords",record:e.identifier,field:e.key,value:t},i)}(this,n.map(J),s),n}case"splice":{const[n,o,...a]=r
if(0===n&&o===this[he].length){const r=He(a)
Je(this,e,(e=>e.splice(n,o,...r)),"Cannot replace a hasMany's state with a new state that contains duplicates.")
{const r=new Set(a),l=Array.from(r),c=[n,o].concat(l),d=Reflect.apply(e[i],t,c)
return Ze(this,He(l),s),d}}const l=He(a)
Je(this,e,(e=>e.splice(n,o,...l)),"Cannot splice a hasMany's state with a new state that contains duplicates.")
{const r=e.slice()
r.splice(n,o)
const l=new Set(r),c=[]
a.forEach((e=>{const t=J(e)
l.has(t)||(l.add(t),c.push(e))}))
const d=[n,o,...c],u=Reflect.apply(e[i],t,d)
return o>0&&Ye(this,{value:u.map(J),index:n},s),c.length>0&&Ge(this,{value:He(c),index:n},s),u}}}}notify(){this[ue].shouldReset=!0,me(this)}reload(e){return this._manager.reloadHasMany(this.key,e)}createRecord(e){const{store:t}=this,i=t.createRecord(this.modelName,e)
return this.push(i),i}destroy(){super.destroy(!1)}}function He(e){return e.map(Ke)}function Ke(e){return J(e)}function Je(e,t,i,s){const n=t.slice()
if(i(n),n.length!==new Set(n).size){const t=n.filter(((e,t)=>n.indexOf(e)!==t));(0,r.deprecate)(`${s} This behavior is deprecated. Found duplicates for the following records within the new state provided to \`<${e.identifier.type}:${e.identifier.id||e.identifier.lid}>.${e.key}\`\n\t- ${Array.from(new Set(t)).map((e=>k(e)?e.lid:J(e).lid)).sort(((e,t)=>e.localeCompare(t))).join("\n\t- ")}`,!1,{id:"ember-data:deprecate-many-array-duplicates",for:"ember-data",until:"6.0",since:{enabled:"5.3",available:"4.13"}})}}function Ge(e,t,i){Qe(e,{op:"add",record:e.identifier,field:e.key,...t},i)}function Ye(e,t,i){Qe(e,{op:"remove",record:e.identifier,field:e.key,...t},i)}function Ze(e,t,i){Qe(e,{op:"replaceRelatedRecords",record:e.identifier,field:e.key,value:t},i)}function Qe(e,t,i){e._manager.mutate(t),(0,l.RH)(i)}We.prototype.isAsync=!1,We.prototype.isPolymorphic=!1,We.prototype.identifier=null,We.prototype.cache=null,We.prototype._inverseIsAsync=!1,We.prototype.key="",We.prototype.DEPRECATED_CLASS_NAME="ManyArray"},456:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>s})
var r=i(5670)
function s(e,t){return(0,r.A)(e)!==(0,r.A)(t)}},650:(e,t,i)=>{"use strict"
function r(e,t,i){return i?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>t}i.r(t),i.d(t,{default:()=>r})},651:(e,t,i)=>{"use strict"
function r(e,t){return e===t}i.r(t),i.d(t,{default:()=>r})},685:(e,t,i)=>{"use strict"
function r(e,t,i){return i?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<t}i.r(t),i.d(t,{default:()=>r})},1678:(e,t,i)=>{"use strict"
i.r(t),i(1603),i(7262)},1788:(e,t,i)=>{"use strict"
i.d(t,{k5:()=>n,pm:()=>s})
var r=i(7375)
const s=(0,r.L1)("Store",Symbol("Store")),n=(0,r.L1)("$type",Symbol("$type"));(0,r.L1)("RequestSignature",Symbol("RequestSignature"))},2139:(e,t,i)=>{"use strict"
function r(e,t){let i=e.load(t)
if(!i)throw new Error(t+" must export an initializer.")
let r=i.default
if(!r)throw new Error(t+" must have a default export")
return r.name||(r.name=t.slice(t.lastIndexOf("/")+1)),r}function s(e,t,i){var s=t+"/initializers/",n=t+"/instance-initializers/",o=[],a=[]
let l
l=i?{names:()=>Object.keys(i),load:e=>i[e]}:{names(){let e=globalThis.requirejs
if(!e||!e._eak_seen)throw new Error("No global AMD loader found. To use loadInitializers without a global AMD loader you must provide explicit modules")
return Object.keys(e._eak_seen)},load:e=>globalThis.require(e,null,null,!0)}
for(let r of l.names())r.startsWith(s)&&!r.endsWith("-test")?o.push(r):r.startsWith(n)&&!r.endsWith("-test")&&a.push(r)
!function(e,t,i){for(let s of i)e.initializer(r(t,s))}(e,l,o),function(e,t,i){for(let s of i)e.instanceInitializer(r(t,s))}(e,l,a)}i.r(t),i.d(t,{default:()=>s})},3241:(e,t,i)=>{"use strict"
i.d(t,{ZH:()=>r.h,_k:()=>r.f,z9:()=>r.j})
var r=i(7262)},3299:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>g})
var r,s,n,o,a,l=i(81),c=i(1223),d=i(2735),u=i.n(d),h=i(9553),f=i(1603)
const p="undefined"!=typeof FastBoot,y="routeDidChange",m=["separator","prepend","replace"]
let g=(r=(0,d.service)("router"),s=(0,d.service)("-document"),n=class extends(u()){constructor(e){if(super(e),(0,l.a)(this,"router",o,this),(0,l.a)(this,"document",a,this),(0,l.b)(this,"tokens",[]),(0,l.b)(this,"_defaultConfig",{separator:" | ",prepend:!0,replace:null}),(0,l.b)(this,"scheduleTitleUpdate",(()=>{(0,c.scheduleOnce)("afterRender",this,this._updateTitle)})),this._validateExistingTitleElement(),function(e){return"resolveRegistration"in e}(e)){const i=e.resolveRegistration("config:environment")
"object"==typeof(t=i)&&null!==t&&"pageTitle"in t&&m.forEach((e=>{if(!(0,h.isEmpty)(i.pageTitle[e])){const t=i.pageTitle[e]
this._defaultConfig[e]=t}}))}var t
this.router.on(y,this.scheduleTitleUpdate)}applyTokenDefaults(e){const t=this._defaultConfig.separator,i=this._defaultConfig.prepend,r=this._defaultConfig.replace
e.previous??=null,e.next??=null,null==e.separator&&(e.separator=t),null==e.prepend&&null!=i&&(e.prepend=i),null==e.replace&&null!=r&&(e.replace=r)}inheritFromPrevious(e){const t=e.previous
t&&(null==e.separator&&(e.separator=t.separator),null==e.prepend&&(e.prepend=t.prepend))}push(e){const t=this._findTokenById(e.id)
if(t){const i=this.tokens.indexOf(t),r=[...this.tokens],s=t.previous
return e.previous=s,e.next=t.next,this.inheritFromPrevious(e),this.applyTokenDefaults(e),r.splice(i,1,e),void(this.tokens=r)}const i=this.tokens.slice(-1)[0]
i&&(e.previous=i??null,i.next=e,this.inheritFromPrevious(e)),this.applyTokenDefaults(e),this.tokens=[...this.tokens,e]}remove(e){const t=this._findTokenById(e)
if(!t)return
const{next:i,previous:r}=t
i&&(i.previous=r),r&&(r.next=i),t.previous=t.next=null
const s=[...this.tokens]
s.splice(s.indexOf(t),1),this.tokens=s}get visibleTokens(){const e=this.tokens
let t=e?e.length:0
const i=[]
for(;t--;){const r=e[t]
if(r){if(r.replace){i.unshift(r)
break}i.unshift(r)}}return i}get sortedTokens(){const e=this.visibleTokens
if(!e)return[]
let t=!0,i=[]
const r=[i],s=[]
return e.forEach((e=>{if(e.front)s.unshift(e)
else if(e.prepend){t&&(t=!1,i=[],r.push(i))
const s=i[0]
s&&((e={...e}).separator=s.separator),i.unshift(e)}else t||(t=!0,i=[],r.push(i)),i.push(e)})),s.concat(r.reduce(((e,t)=>e.concat(t)),[]))}toString(){const e=this.sortedTokens,t=[]
for(let i=0,r=e.length;i<r;i++){const s=e[i]
s&&s.title&&(t.push(s.title),i+1<r&&t.push(s.separator))}return t.join("")}willDestroy(){super.willDestroy(),this.router.off(y,this.scheduleTitleUpdate)}_updateTitle(){const e=this.toString()
p?this.updateFastbootTitle(e):this.document.title=e,this.titleDidUpdate(e)}_validateExistingTitleElement(){p||(0,f.assert)("[ember-page-title]: Multiple title elements found. Check for other addons like ember-cli-head updating <title> as well.",document.head.querySelectorAll("title").length<=1)}_findTokenById(e){return this.tokens.find((t=>t.id===e))}updateFastbootTitle(e){if(!p)return
const t=this.document.head,i=t.childNodes
for(let n=0;n<i.length;n++){const e=i[n]
e&&"title"===e.nodeName.toLowerCase()&&t.removeChild(e)}const r=this.document.createElement("title"),s=this.document.createTextNode(e)
r.appendChild(s),t.appendChild(r)}titleDidUpdate(e){}},o=(0,l._)(n.prototype,"router",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=(0,l._)(n.prototype,"document",[s],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),n)},3445:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>y})
var r=i(2663),s=i(1130),n=i(1223),o=i(1115)
function a(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const l=new WeakMap,c=new WeakMap
let d=class{constructor(e,t){a(this,"args",void 0),this.args=t,l.set(this,!1),c.set(this,!1)}get isDestroying(){return l.get(this)||!1}get isDestroyed(){return c.get(this)||!1}willDestroy(){}}
class u{constructor(e){a(this,"owner",void 0),this.owner=e}createComponent(e,t){return new e(this.owner,t.named)}getContext(e){return e}}const h=(0,r.capabilities)("3.13",{destructor:!0,asyncLifecycleCallbacks:!1,updateHook:!1})
function f(e){e.isDestroyed||((0,s.destroy)(e),function(e){c.set(e,!0)}(e))}class p extends u{constructor(...e){super(...e),a(this,"capabilities",h)}destroyComponent(e){e.isDestroying||(function(e){l.set(e,!0)}(e),(0,n.schedule)("actions",e,e.willDestroy),(0,n.schedule)("destroy",this,f,e))}}class y extends d{constructor(e,t){super(e,t),(0,o.setOwner)(this,e)}}(0,r.setComponentManager)((e=>new p(e)),y)},3588:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>o})
var r=i(5670),s=i(336),n=i.n(s)
class o extends(n()){compute(e){for(let t=0,i=e.length;t<i;t++)if(!0===(0,r.A)(e[t]))return e[t]
return e[e.length-1]}}},3692:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>s})
var r=i(5670)
function s(...e){return e.every((e=>!(0,r.A)(e)))}},4065:(e,t,i)=>{"use strict"
i.d(t,{P:()=>o,q:()=>a})
const r=(0,i(7375).vs)("WarpDriveRuntimeConfig",{debug:{}}),s=function(){try{return globalThis.sessionStorage}catch{return}}(),n=s?.getItem("WarpDriveRuntimeConfig")
function o(){return r}function a(e){Object.assign(r.debug,e),s?.setItem("WarpDriveRuntimeConfig",JSON.stringify(r))}n&&Object.assign(r,JSON.parse(n))},4389:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>s})
var r=i(1389)
function s(...e){return e.every(r.isArray)}},4943:(e,t,i)=>{"use strict"
function r(e,t){return e!==t}i.r(t),i.d(t,{default:()=>r})},5088:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>r.isEqual})
var r=i(9553)},5113:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{BooleanTransform:()=>l,DateTransform:()=>c,NumberTransform:()=>u,StringTransform:()=>h,default:()=>a})
var r=i(4471),s=i.n(r),n=i(1788)
function o(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const a=s()
class l{deserialize(e,t){return null==e&&!0===t?.allowNull?null:"boolean"==typeof e?e:"string"==typeof e?/^(true|t|1)$/i.test(e):"number"==typeof e&&1===e}serialize(e,t){return null==e&&!0===t?.allowNull?null:Boolean(e)}static create(){return new this}}class c{constructor(){o(this,n.k5,"date")}deserialize(e,t){if("string"==typeof e){let t=e.indexOf("+")
return-1!==t&&e.length-5===t?(t+=3,new Date(e.slice(0,t)+":"+e.slice(t))):new Date(e)}return"number"==typeof e?new Date(e):null==e?e:null}serialize(e,t){return e instanceof Date&&!isNaN(e)?e.toISOString():null}static create(){return new this}}function d(e){return e==e&&e!==1/0&&e!==-1/0}class u{constructor(){o(this,n.k5,"number")}deserialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return d(t)?t:null}}serialize(e,t){if(""===e||null==e)return null
{const t=Number(e)
return d(t)?t:null}}static create(){return new this}}class h{constructor(){o(this,n.k5,"string")}deserialize(e,t){return e||""===e?String(e):null}serialize(e,t){return e||""===e?String(e):null}static create(){return new this}}},5266:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>u})
var r,s,n,o=i(81),a=i(2735),l=i(336),c=i.n(l),d=i(4666)
let u=(r=(0,a.service)("page-title"),s=class extends(c()){constructor(e){super(e),(0,o.a)(this,"tokens",n,this),(0,o.b)(this,"tokenId",(0,d.guidFor)(this)),this.tokens.push({id:this.tokenId})}compute(e,t){const i={...t,id:this.tokenId,title:e.join("")}
return this.tokens.push(i),this.tokens.scheduleTitleUpdate(),""}willDestroy(){super.willDestroy(),this.tokens.remove(this.tokenId),this.tokens.scheduleTitleUpdate()}},n=(0,o._)(s.prototype,"tokens",[r],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),s)},5670:(e,t,i)=>{"use strict"
i.d(t,{A:()=>s})
var r=i(1389)
function s(e){return"object"==typeof e&&e&&"isTruthy"in e&&"boolean"==typeof e.isTruthy?e.isTruthy:(0,r.isArray)(e)?0!==e.length:!!e}},6730:(e,t,i)=>{"use strict"
i.d(t,{Ay:()=>r.S,fV:()=>r.s,lL:()=>r.C,o:()=>r.r})
var r=i(89)
i(1603),i(3241)},6941:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>r.isEmpty})
var r=i(9553)},7262:(e,t,i)=>{"use strict"
i.d(t,{f:()=>y,h:()=>g,j:()=>m})
const r={plurals:[[/$/,"s"],[/s$/i,"s"],[/^(ax|test)is$/i,"$1es"],[/(octop|vir)us$/i,"$1i"],[/(octop|vir)i$/i,"$1i"],[/(alias|status|bonus)$/i,"$1es"],[/(bu)s$/i,"$1ses"],[/(buffal|tomat)o$/i,"$1oes"],[/([ti])um$/i,"$1a"],[/([ti])a$/i,"$1a"],[/sis$/i,"ses"],[/(?:([^f])fe|([lr])f)$/i,"$1$2ves"],[/(hive)$/i,"$1s"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/(x|ch|ss|sh)$/i,"$1es"],[/(matr|vert|ind)(?:ix|ex)$/i,"$1ices"],[/^(m|l)ouse$/i,"$1ice"],[/^(m|l)ice$/i,"$1ice"],[/^(ox)$/i,"$1en"],[/^(oxen)$/i,"$1"],[/(quiz)$/i,"$1zes"]],singular:[[/s$/i,""],[/(ss)$/i,"$1"],[/(n)ews$/i,"$1ews"],[/([ti])a$/i,"$1um"],[/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i,"$1sis"],[/(^analy)(sis|ses)$/i,"$1sis"],[/([^f])ves$/i,"$1fe"],[/(hive)s$/i,"$1"],[/(tive)s$/i,"$1"],[/([lr])ves$/i,"$1f"],[/([^aeiouy]|qu)ies$/i,"$1y"],[/(s)eries$/i,"$1eries"],[/(m)ovies$/i,"$1ovie"],[/(x|ch|ss|sh)es$/i,"$1"],[/^(m|l)ice$/i,"$1ouse"],[/(bus)(es)?$/i,"$1"],[/(o)es$/i,"$1"],[/(shoe)s$/i,"$1"],[/(cris|test)(is|es)$/i,"$1is"],[/^(a)x[ie]s$/i,"$1xis"],[/(octop|vir)(us|i)$/i,"$1us"],[/(alias|status|bonus)(es)?$/i,"$1"],[/^(ox)en/i,"$1"],[/(vert|ind)ices$/i,"$1ex"],[/(matr)ices$/i,"$1ix"],[/(quiz)zes$/i,"$1"],[/(database)s$/i,"$1"]],irregularPairs:[["person","people"],["man","men"],["child","children"],["sex","sexes"],["move","moves"],["cow","kine"],["zombie","zombies"]],uncountable:["equipment","information","rice","money","species","series","fish","sheep","jeans","police"]}
class s{constructor(e,t){this.size=t||1e4,this.state=new Map,this.doWork=e}get(e){const t=this.state.get(e)
if(t)return this.state.delete(e),this.state.set(e,t),t
const i=this.doWork(e)
return this.set(e,i),i}set(e,t){if(this.state.size===this.size)for(const[i]of this.state){this.state.delete(i)
break}this.state.set(e,t)}clear(){this.state.clear()}}const n=/[ _]/g,o=/([a-z\d])([A-Z])/g,a=new s((e=>e.replace(o,"$1_$2").toLowerCase().replace(n,"-"))),l=/(\-|\_|\.|\s)+(.)?/g,c=/(^|\/)([A-Z])/g,d=(new s((e=>e.replace(l,((e,t,i)=>i?i.toUpperCase():"")).replace(c,(e=>e.toLowerCase())))),/([a-z\d])([A-Z]+)/g),u=/\-|\s+/g,h=new s((e=>e.replace(d,"$1_$2").replace(u,"_").toLowerCase())),f=/(^|\/)([a-z\u00C0-\u024F])/g,p=new s((e=>e.replace(f,(e=>e.toUpperCase()))))
function y(e){return a.get(e)}function m(e){return h.get(e)}function g(e){return p.get(e)}const _=/^\s*$/,b=/([\w/-]+[_/\s-])([a-z\d]+$)/,v=/([\w/\s-]+)([A-Z][a-z\d]*$)/,w=/[A-Z][a-z\d]*$/,k=(new s((e=>function(e){return C(e,A,S)}(e))),new s((e=>function(e){return C(e,M,R)}(e))),new Set(r.uncountable)),R=new Map,S=new Map,A=new Map(r.singular.reverse()),M=new Map(r.plurals.reverse())
function C(e,t,i){if(!e||_.test(e))return e
const r=e.toLowerCase()
if(k.has(r))return e
const s=b.exec(e)||v.exec(e),n=s?s[2].toLowerCase():null
if(n&&k.has(n))return e
const o=w.test(e)
for(let[a,l]of i)if(r.match(a+"$"))return o&&n&&i.has(n)&&(l=g(l),a=g(a)),e.replace(new RegExp(a,"i"),l)
for(const[a,l]of t)if(a.test(e))return e.replace(a,l)
return e}r.irregularPairs.forEach((e=>{R.set(e[0].toLowerCase(),e[1]),R.set(e[1].toLowerCase(),e[1]),S.set(e[1].toLowerCase(),e[0]),S.set(e[0].toLowerCase(),e[0])}))},7375:(e,t,i)=>{"use strict"
i.d(t,{L1:()=>l,Yj:()=>c,dN:()=>h,dV:()=>d,ml:()=>f,vs:()=>u})
const r="@warp-drive/core-types",s=globalThis,n=s.__warpDrive_universalCache=s.__warpDrive_universalCache??{}
s[r]=s[r]??{__version:"5.4.1"}
const o=s[r],a=o.__warpDrive_ModuleScopedCaches??{}
if(o.__warpDrive_hasOtherCopy)throw new Error("Multiple copies of EmberData detected, the application will malfunction.")
function l(e,t){return t}function c(e){return a[`(transient) ${e}`]??null}function d(e,t){return a[`(transient) ${e}`]=t}function u(e,t){return t}function h(e){return n[`(transient) ${e}`]??null}function f(e,t){return n[`(transient) ${e}`]=t}o.__warpDrive_hasOtherCopy=!0},7388:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>m})
var r=i(1389),s=i(1806),n=i.n(s),o=i(123),a=i(2735),l=i(3241),c=i(6730)
const d=new WeakMap,u=a.service??a.inject,h=new WeakMap
function f(){const e={},t=[],i=(0,c.o)(this),r=this.store.schema.fields(i),s={name:"Attributes",properties:["id"],expand:!0},n=s.properties,o=[s]
for(const a of r.values())switch(a.kind){case"attribute":n.push(a.name)
break
case"belongsTo":case"hasMany":{let i=e[a.kind]
void 0===i&&(i=e[a.kind]=[],o.push({name:a.kind,properties:i,expand:!0})),i.push(a.name),t.push(a.name)
break}}return o.push({name:"Flags",properties:["isLoaded","hasDirtyAttributes","isSaving","isDeleted","isError","isNew","isValid"],expand:!1}),{propertyInfo:{includeOtherProperties:!0,groups:o,expensiveProperties:t}}}var p=new WeakMap
class y extends(n()){constructor(...e){var t,i
super(...e),t=p,i=void function(e,t){let i=function(e,t){var i
let r=e.prototype
for(;r;){let e=null==(i=d.get(r))?void 0:i.get(t)
if(e)return e
r=r.prototype}}(e.constructor,t)
i&&Object.defineProperty(e,t,{enumerable:i.enumerable,configurable:i.configurable,writable:i.writable,value:i.initializer?i.initializer.call(e):void 0})}(this,"store"),function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}(this,t),t.set(this,i)}getFilters(){return[{name:"isNew",desc:"New"},{name:"isModified",desc:"Modified"},{name:"isClean",desc:"Clean"}]}_nameToClass(e){return this.store.modelFor(e)}watchModelTypes(e,t){const{store:i}=this,r=function(e){let t=h.get(e)
return void 0===t&&(t=new Map,h.set(e,t)),t}(i),s=i.notifications.subscribe("resource",((s,o)=>{"added"===o&&this.watchTypeIfUnseen(i,r,s.type,e,t,n)})),n=[()=>{i.notifications.unsubscribe(s)}]
Object.keys(i.identifierCache._cache.resourcesByType).forEach((e=>{r.set(e,!1)})),r.forEach(((s,o)=>{this.watchTypeIfUnseen(i,r,o,e,t,n)}))
const o=()=>{n.forEach((e=>e())),r.forEach(((e,t)=>{r.set(t,!1)})),this.releaseMethods.removeObject(o)}
return this.releaseMethods.pushObject(o),o}watchTypeIfUnseen(e,t,i,r,s,n){if(!0!==t.get(i)){const o=e.modelFor(i)
o.prototype._debugInfo=f
const a=this.wrapModelType(o,i)
n.push(this.observeModelType(i,s)),r([a]),t.set(i,!0)}}columnNameToDesc(e){return(0,l.ZH)((0,l.z9)(e).replace(/_/g," ").trim())}columnsForType(e){const t=[{name:"id",desc:"Id"}]
let i=0
return e.attributes.forEach(((e,r)=>{if(i++>this.attributeLimit)return!1
const s=this.columnNameToDesc(r)
t.push({name:r,desc:s})})),t}getRecords(e,t){if(arguments.length<2){const i=e._debugContainerKey
if(i){const e=i.match(/model:(.*)/)
null!==e&&(t=e[1])}}return this.store.peekAll(t)}getRecordColumnValues(e){let t=0
const i={id:e.id}
return e.eachAttribute((r=>{if(t++>this.attributeLimit)return!1
i[r]=e[r]})),i}getRecordKeywords(e){const t=[e.id]
return e.eachAttribute((i=>{t.push(e[i])})),(0,r.A)(t)}getRecordFilterValues(e){return{isNew:e.isNew,isModified:e.hasDirtyAttributes&&!e.isNew,isClean:!e.hasDirtyAttributes}}getRecordColor(e){let t="black"
return e.isNew?t="green":e.hasDirtyAttributes&&(t="blue"),t}observeRecord(e,t){const i=[],r=["id","isNew","hasDirtyAttributes"]
return e.eachAttribute((e=>r.push(e))),r.forEach((r=>{const s=()=>{t(this.wrapRecord(e))};(0,o.addObserver)(e,r,s),i.push((function(){(0,o.removeObserver)(e,r,s)}))})),function(){i.forEach((e=>e()))}}}!function(e,t,i){let r={configurable:!0,enumerable:!0,writable:!0,initializer:null}
for(let s of i)r=s(e,t,r)||r
void 0===r.initializer?Object.defineProperty(e,t,r):function(e,t,i){let r=d.get(e)
r||(r=new Map,d.set(e,r)),r.set(t,i)}(e,t,r)}(y.prototype,"store",[u("store")])
const m=y},7648:(e,t,i)=>{"use strict"
i.d(t,{ER:()=>s,J6:()=>o,_q:()=>n,k0:()=>a})
var r=i(7375)
const s=(0,r.vs)("SkipCache",Symbol.for("wd:skip-cache")),n=(0,r.vs)("EnableHydration",Symbol.for("wd:enable-hydration")),o=(0,r.L1)("IS_FUTURE",Symbol("IS_FUTURE")),a=(0,r.L1)("DOC",Symbol("DOC"))},8146:(e,t,i)=>{"use strict"
i.d(t,{B1:()=>c,Fe:()=>u,Ly:()=>p,RH:()=>d,eM:()=>b,n5:()=>m,sg:()=>f,vh:()=>_,zs:()=>y})
var r=i(4463),s=i(394),n=i(5606),o=i(7375)
function a(e){e&&(0,n.consumeTag)(e)}function l(e){e&&(0,n.dirtyTag)(e)}function c(e){const t=(0,o.Yj)("TRANSACTION")
t?t.sub.add(e):"tag"in e?(a(e["[]"]),a(e["@length"]),(0,n.consumeTag)(e.tag)):e.ref}function d(e){const t=(0,o.Yj)("TRANSACTION")
t?t.props.add(e):function(e){"tag"in e?(l(e["[]"]),l(e["@length"]),(0,n.dirtyTag)(e.tag)):e.ref=null}(e)}function u(e){const t=(0,o.Yj)("TRANSACTION")
t?t.cbs.add(e):e()}const h=(0,o.L1)("Signals",Symbol("Signals"))
function f(e,t,i){Object.defineProperty(e,t,{enumerable:!0,configurable:!1,get(){const e=this[h]=this[h]||new Map,r=e.has(t),s=function(e,t,i){let r=e.get(i)
return r||(r=m(t,i),e.set(i,r)),c(r),r}(e,this,t)
return r||void 0===i||(s.lastValue=i),s.lastValue},set(e){const i=this[h]=this[h]||new Map
let r=i.get(t)
r||(r=m(this,t),i.set(t,r)),r.lastValue!==e&&(r.lastValue=e,d(r))}})}function p(e,t,i){const r=Object.assign({enumerable:!0,configurable:!1},_(0,t,i))
Object.defineProperty(e,t,r)}function y(e,t){t["[]"]=(0,r.tagForProperty)(e,"[]"),t["@length"]=(0,r.tagForProperty)(e,"length")}function m(e,t){return{key:t,tag:(0,r.tagForProperty)(e,t),reason:null,t:!1,shouldReset:!1,"[]":null,"@length":null,lastValue:void 0}}function g(e,t,i){let r=e[h]
r||(r=new Map,e[h]=r)
let s=r.get(t)
return s||(s=m(e,t),s.shouldReset=i,r.set(t,s)),s}function _(e,t,i){const r=i.get,n=i.set
return i.get=function(){const e=g(this,t,!0)
return c(e),e.shouldReset&&(e.shouldReset=!1,e.lastValue=r.call(this)),e.lastValue},i.set=function(e){g(this,t,!0),n.call(this,e)},(0,s.dependentKeyCompat)(i),i}function b(e,t){const i=function(e,t){const i=e[h]
if(i)return i.get(t)}(e,t)
i&&(i.shouldReset=!0,d(i))}},8411:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{ModuleRegistry:()=>m,default:()=>g})
class r{constructor(e,t,i){this.limit=e,this.func=t,this.store=i,this.size=0,this.misses=0,this.hits=0,this.store=i||new Map}get(e){let t=this.store.get(e)
return this.store.has(e)?(this.hits++,this.store.get(e)):(this.misses++,t=this.set(e,this.func(e)),t)}set(e,t){return this.limit>this.size&&(this.size++,this.store.set(e,t)),t}purge(){this.store.clear(),this.size=0,this.hits=0,this.misses=0}}const s=/[ _]/g,n=new r(1e3,(e=>{return(t=e,p.get(t)).replace(s,"-")
var t})),o=/^(\-|_)+(.)?/,a=/(.)(\-|\_|\.|\s)+(.)?/g,l=/(^|\/|\.)([a-z])/g,c=new r(1e3,(e=>{const t=(e,t,i)=>i?`_${i.toUpperCase()}`:"",i=(e,t,i,r)=>t+(r?r.toUpperCase():""),r=e.split("/")
for(let s=0;s<r.length;s++)r[s]=r[s].replace(o,t).replace(a,i)
return r.join("/").replace(l,(e=>e.toUpperCase()))})),d=/([a-z\d])([A-Z]+)/g,u=/\-|\s+/g,h=new r(1e3,(e=>e.replace(d,"$1_$2").replace(u,"_").toLowerCase())),f=/([a-z\d])([A-Z])/g,p=new r(1e3,(e=>e.replace(f,"$1_$2").toLowerCase()))
function y(e,t,i){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e
var t=e[Symbol.toPrimitive]
if(void 0!==t){var i=t.call(e,"string")
if("object"!=typeof i)return i
throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e)
return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class m{constructor(e){this._entries=e||globalThis.requirejs.entries}moduleNames(){return Object.keys(this._entries)}has(e){return e in this._entries}get(...e){return globalThis.require(...e)}}class g{static create(e){return new this(e)}static withModules(e){var t
return y(t=class extends(this){},"explicitModules",e),t}constructor(e){if(y(this,"moduleBasedResolver",!0),y(this,"_deprecatedPodModulePrefix",!1),y(this,"_normalizeCache",Object.create(null)),y(this,"moduleNameLookupPatterns",[this.podBasedModuleName,this.podBasedComponentsInSubdir,this.mainModuleName,this.defaultModuleName,this.nestedColocationComponentModuleName]),Object.assign(this,e),!this._moduleRegistry){let e=this.constructor.explicitModules
e?this._moduleRegistry={moduleNames:()=>Object.keys(e),has:t=>Boolean(e[t]),get:t=>e[t],addModules(t){e=Object.assign({},e,t)}}:(void 0===globalThis.requirejs.entries&&(globalThis.requirejs.entries=globalThis.requirejs._eak_seen),this._moduleRegistry=new m)}this.pluralizedTypes=this.pluralizedTypes||Object.create(null),this.pluralizedTypes.config||(this.pluralizedTypes.config="config")}makeToString(e,t){return this.namespace.modulePrefix+"@"+t+":"}shouldWrapInClassFactory(){return!1}parseName(e){if(!0===e.parsedName)return e
let t,i,r,s=e.split("@")
if(3===s.length){if(0===s[0].length){t=`@${s[1]}`
let e=s[2].split(":")
i=e[0],r=e[1]}else t=`@${s[1]}`,i=s[0].slice(0,-1),r=s[2]
"template:components"===i&&(r=`components/${r}`,i="template")}else if(2===s.length){let e=s[0].split(":")
if(2===e.length)0===e[1].length?(i=e[0],r=`@${s[1]}`):(t=e[1],i=e[0],r=s[1])
else{let e=s[1].split(":")
t=s[0],i=e[0],r=e[1]}"template"===i&&0===t.lastIndexOf("components/",0)&&(r=`components/${r}`,t=t.slice(11))}else s=e.split(":"),i=s[0],r=s[1]
let n=r,o=this.namespace
return{parsedName:!0,fullName:e,prefix:t||this.prefix({type:i}),type:i,fullNameWithoutType:n,name:r,root:o,resolveMethodName:"resolve"+(a=i,c.get(a))}
var a}resolveOther(e){_("`modulePrefix` must be defined",this.namespace.modulePrefix)
let t=this.findModuleName(e)
if(t){let r=this._extractDefaultExport(t,e)
if(void 0===r)throw new Error(` Expected to find: '${e.fullName}' within '${t}' but got 'undefined'. Did you forget to 'export default' within '${t}'?`)
return this.shouldWrapInClassFactory(r,e)&&(i=r,r={create:e=>"function"==typeof i.extend?i.extend(e):i}),r}var i}normalize(e){return this._normalizeCache[e]||(this._normalizeCache[e]=this._normalize(e))}resolve(e){if("resolver:current"===e)return{create:()=>this}
let t,i=this.parseName(e),r=i.resolveMethodName
return"function"==typeof this[r]&&(t=this[r](i)),null==t&&(t=this.resolveOther(i)),t}addModules(e){if(!this._moduleRegistry.addModules)throw new Error("addModules is only supported when your Resolver has been configured to use static modules via Resolver.withModules()")
this._moduleRegistry.addModules(e)}_normalize(e){let t=e.split(":")
if(t.length>1){let e=t[0]
return"component"===e||"helper"===e||"modifier"===e||"template"===e&&0===t[1].indexOf("components/")?e+":"+t[1].replace(/_/g,"-"):e+":"+(i=t[1].replace(/\./g,"/"),n.get(i))}return e
var i}pluralize(e){return this.pluralizedTypes[e]||(this.pluralizedTypes[e]=e+"s")}podBasedLookupWithPrefix(e,t){let i=t.fullNameWithoutType
return"template"===t.type&&(i=i.replace(/^components\//,"")),e+"/"+i+"/"+t.type}podBasedModuleName(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
return this.podBasedLookupWithPrefix(t,e)}podBasedComponentsInSubdir(e){let t=this.namespace.podModulePrefix||this.namespace.modulePrefix
if(t+="/components","component"===e.type||/^components/.test(e.fullNameWithoutType))return this.podBasedLookupWithPrefix(t,e)}resolveEngine(e){let t=e.fullNameWithoutType+"/engine"
if(this._moduleRegistry.has(t))return this._extractDefaultExport(t)}resolveRouteMap(e){let t=e.fullNameWithoutType,i=t+"/routes"
if(this._moduleRegistry.has(i)){let e=this._extractDefaultExport(i)
return _(`The route map for ${t} should be wrapped by 'buildRoutes' before exporting.`,e.isRouteMap),e}}resolveTemplate(e){return this.resolveOther(e)}mainModuleName(e){if("main"===e.fullNameWithoutType)return e.prefix+"/"+e.type}defaultModuleName(e){return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType}nestedColocationComponentModuleName(e){if("component"===e.type)return e.prefix+"/"+this.pluralize(e.type)+"/"+e.fullNameWithoutType+"/index"}prefix(e){let t=this.namespace.modulePrefix
return this.namespace[e.type+"Prefix"]&&(t=this.namespace[e.type+"Prefix"]),t}findModuleName(e){let t,i=this.moduleNameLookupPatterns
for(let r=0,s=i.length;r<s;r++){let s=i[r].call(this,e)
if(s&&(s=this.chooseModuleName(s)),s&&this._moduleRegistry.has(s)&&(t=s),t)return t}}chooseModuleName(e){let t=(i=e,h.get(i))
var i
if(e!==t&&this._moduleRegistry.has(e)&&this._moduleRegistry.has(t))throw new TypeError(`Ambiguous module names: '${e}' and '${t}'`)
return this._moduleRegistry.has(e)?e:this._moduleRegistry.has(t)?t:void 0}knownForType(e){let t=this._moduleRegistry.moduleNames(),i=Object.create(null)
for(let r=0,s=t.length;r<s;r++){let s=t[r],n=this.translateToContainerFullname(e,s)
n&&(i[n]=!0)}return i}translateToContainerFullname(e,t){let i=this.prefix({type:e}),r=i+"/",s="/"+e,n=t.indexOf(r),o=t.indexOf(s)
if(0===n&&o===t.length-s.length&&t.length>r.length+s.length)return e+":"+t.slice(n+r.length,o)
let a=i+"/"+this.pluralize(e)+"/"
return 0===t.indexOf(a)&&t.length>a.length?e+":"+t.slice(a.length):void 0}_extractDefaultExport(e){let t=this._moduleRegistry.get(e,null,null,!0)
return t&&t.default&&(t=t.default),t}}function _(e,t){if(!t)throw new Error(e)}y(g,"moduleBasedResolver",!0)},8604:function(e){var t
t=function(){"use strict"
function e(e,t){return e(t={exports:{}},t.exports),t.exports}"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self
var t=e((function(e){e.exports&&(e.exports=function(){var e=3,t=4,i=12,r=13,s=16,n=17
function o(e,t){void 0===t&&(t=0)
var i=e.charCodeAt(t)
if(55296<=i&&i<=56319&&t<e.length-1){var r=i
return 56320<=(s=e.charCodeAt(t+1))&&s<=57343?1024*(r-55296)+(s-56320)+65536:r}if(56320<=i&&i<=57343&&t>=1){var s=i
return 55296<=(r=e.charCodeAt(t-1))&&r<=56319?1024*(r-55296)+(s-56320)+65536:s}return i}function a(o,a,l){var c=[o].concat(a).concat([l]),d=c[c.length-2],u=l,h=c.lastIndexOf(14)
if(h>1&&c.slice(1,h).every((function(t){return t==e}))&&-1==[e,r,n].indexOf(o))return 2
var f=c.lastIndexOf(t)
if(f>0&&c.slice(1,f).every((function(e){return e==t}))&&-1==[i,t].indexOf(d))return c.filter((function(e){return e==t})).length%2==1?3:4
if(0==d&&1==u)return 0
if(2==d||0==d||1==d)return 14==u&&a.every((function(t){return t==e}))?2:1
if(2==u||0==u||1==u)return 1
if(6==d&&(6==u||7==u||9==u||10==u))return 0
if(!(9!=d&&7!=d||7!=u&&8!=u))return 0
if((10==d||8==d)&&8==u)return 0
if(u==e||15==u)return 0
if(5==u)return 0
if(d==i)return 0
var p=-1!=c.indexOf(e)?c.lastIndexOf(e)-1:c.length-2
return-1!=[r,n].indexOf(c[p])&&c.slice(p+1,-1).every((function(t){return t==e}))&&14==u||15==d&&-1!=[s,n].indexOf(u)?0:-1!=a.indexOf(t)?2:d==t&&u==t?0:1}function l(o){return 1536<=o&&o<=1541||1757==o||1807==o||2274==o||3406==o||69821==o||70082<=o&&o<=70083||72250==o||72326<=o&&o<=72329||73030==o?i:13==o?0:10==o?1:0<=o&&o<=9||11<=o&&o<=12||14<=o&&o<=31||127<=o&&o<=159||173==o||1564==o||6158==o||8203==o||8206<=o&&o<=8207||8232==o||8233==o||8234<=o&&o<=8238||8288<=o&&o<=8292||8293==o||8294<=o&&o<=8303||55296<=o&&o<=57343||65279==o||65520<=o&&o<=65528||65529<=o&&o<=65531||113824<=o&&o<=113827||119155<=o&&o<=119162||917504==o||917505==o||917506<=o&&o<=917535||917632<=o&&o<=917759||918e3<=o&&o<=921599?2:768<=o&&o<=879||1155<=o&&o<=1159||1160<=o&&o<=1161||1425<=o&&o<=1469||1471==o||1473<=o&&o<=1474||1476<=o&&o<=1477||1479==o||1552<=o&&o<=1562||1611<=o&&o<=1631||1648==o||1750<=o&&o<=1756||1759<=o&&o<=1764||1767<=o&&o<=1768||1770<=o&&o<=1773||1809==o||1840<=o&&o<=1866||1958<=o&&o<=1968||2027<=o&&o<=2035||2070<=o&&o<=2073||2075<=o&&o<=2083||2085<=o&&o<=2087||2089<=o&&o<=2093||2137<=o&&o<=2139||2260<=o&&o<=2273||2275<=o&&o<=2306||2362==o||2364==o||2369<=o&&o<=2376||2381==o||2385<=o&&o<=2391||2402<=o&&o<=2403||2433==o||2492==o||2494==o||2497<=o&&o<=2500||2509==o||2519==o||2530<=o&&o<=2531||2561<=o&&o<=2562||2620==o||2625<=o&&o<=2626||2631<=o&&o<=2632||2635<=o&&o<=2637||2641==o||2672<=o&&o<=2673||2677==o||2689<=o&&o<=2690||2748==o||2753<=o&&o<=2757||2759<=o&&o<=2760||2765==o||2786<=o&&o<=2787||2810<=o&&o<=2815||2817==o||2876==o||2878==o||2879==o||2881<=o&&o<=2884||2893==o||2902==o||2903==o||2914<=o&&o<=2915||2946==o||3006==o||3008==o||3021==o||3031==o||3072==o||3134<=o&&o<=3136||3142<=o&&o<=3144||3146<=o&&o<=3149||3157<=o&&o<=3158||3170<=o&&o<=3171||3201==o||3260==o||3263==o||3266==o||3270==o||3276<=o&&o<=3277||3285<=o&&o<=3286||3298<=o&&o<=3299||3328<=o&&o<=3329||3387<=o&&o<=3388||3390==o||3393<=o&&o<=3396||3405==o||3415==o||3426<=o&&o<=3427||3530==o||3535==o||3538<=o&&o<=3540||3542==o||3551==o||3633==o||3636<=o&&o<=3642||3655<=o&&o<=3662||3761==o||3764<=o&&o<=3769||3771<=o&&o<=3772||3784<=o&&o<=3789||3864<=o&&o<=3865||3893==o||3895==o||3897==o||3953<=o&&o<=3966||3968<=o&&o<=3972||3974<=o&&o<=3975||3981<=o&&o<=3991||3993<=o&&o<=4028||4038==o||4141<=o&&o<=4144||4146<=o&&o<=4151||4153<=o&&o<=4154||4157<=o&&o<=4158||4184<=o&&o<=4185||4190<=o&&o<=4192||4209<=o&&o<=4212||4226==o||4229<=o&&o<=4230||4237==o||4253==o||4957<=o&&o<=4959||5906<=o&&o<=5908||5938<=o&&o<=5940||5970<=o&&o<=5971||6002<=o&&o<=6003||6068<=o&&o<=6069||6071<=o&&o<=6077||6086==o||6089<=o&&o<=6099||6109==o||6155<=o&&o<=6157||6277<=o&&o<=6278||6313==o||6432<=o&&o<=6434||6439<=o&&o<=6440||6450==o||6457<=o&&o<=6459||6679<=o&&o<=6680||6683==o||6742==o||6744<=o&&o<=6750||6752==o||6754==o||6757<=o&&o<=6764||6771<=o&&o<=6780||6783==o||6832<=o&&o<=6845||6846==o||6912<=o&&o<=6915||6964==o||6966<=o&&o<=6970||6972==o||6978==o||7019<=o&&o<=7027||7040<=o&&o<=7041||7074<=o&&o<=7077||7080<=o&&o<=7081||7083<=o&&o<=7085||7142==o||7144<=o&&o<=7145||7149==o||7151<=o&&o<=7153||7212<=o&&o<=7219||7222<=o&&o<=7223||7376<=o&&o<=7378||7380<=o&&o<=7392||7394<=o&&o<=7400||7405==o||7412==o||7416<=o&&o<=7417||7616<=o&&o<=7673||7675<=o&&o<=7679||8204==o||8400<=o&&o<=8412||8413<=o&&o<=8416||8417==o||8418<=o&&o<=8420||8421<=o&&o<=8432||11503<=o&&o<=11505||11647==o||11744<=o&&o<=11775||12330<=o&&o<=12333||12334<=o&&o<=12335||12441<=o&&o<=12442||42607==o||42608<=o&&o<=42610||42612<=o&&o<=42621||42654<=o&&o<=42655||42736<=o&&o<=42737||43010==o||43014==o||43019==o||43045<=o&&o<=43046||43204<=o&&o<=43205||43232<=o&&o<=43249||43302<=o&&o<=43309||43335<=o&&o<=43345||43392<=o&&o<=43394||43443==o||43446<=o&&o<=43449||43452==o||43493==o||43561<=o&&o<=43566||43569<=o&&o<=43570||43573<=o&&o<=43574||43587==o||43596==o||43644==o||43696==o||43698<=o&&o<=43700||43703<=o&&o<=43704||43710<=o&&o<=43711||43713==o||43756<=o&&o<=43757||43766==o||44005==o||44008==o||44013==o||64286==o||65024<=o&&o<=65039||65056<=o&&o<=65071||65438<=o&&o<=65439||66045==o||66272==o||66422<=o&&o<=66426||68097<=o&&o<=68099||68101<=o&&o<=68102||68108<=o&&o<=68111||68152<=o&&o<=68154||68159==o||68325<=o&&o<=68326||69633==o||69688<=o&&o<=69702||69759<=o&&o<=69761||69811<=o&&o<=69814||69817<=o&&o<=69818||69888<=o&&o<=69890||69927<=o&&o<=69931||69933<=o&&o<=69940||70003==o||70016<=o&&o<=70017||70070<=o&&o<=70078||70090<=o&&o<=70092||70191<=o&&o<=70193||70196==o||70198<=o&&o<=70199||70206==o||70367==o||70371<=o&&o<=70378||70400<=o&&o<=70401||70460==o||70462==o||70464==o||70487==o||70502<=o&&o<=70508||70512<=o&&o<=70516||70712<=o&&o<=70719||70722<=o&&o<=70724||70726==o||70832==o||70835<=o&&o<=70840||70842==o||70845==o||70847<=o&&o<=70848||70850<=o&&o<=70851||71087==o||71090<=o&&o<=71093||71100<=o&&o<=71101||71103<=o&&o<=71104||71132<=o&&o<=71133||71219<=o&&o<=71226||71229==o||71231<=o&&o<=71232||71339==o||71341==o||71344<=o&&o<=71349||71351==o||71453<=o&&o<=71455||71458<=o&&o<=71461||71463<=o&&o<=71467||72193<=o&&o<=72198||72201<=o&&o<=72202||72243<=o&&o<=72248||72251<=o&&o<=72254||72263==o||72273<=o&&o<=72278||72281<=o&&o<=72283||72330<=o&&o<=72342||72344<=o&&o<=72345||72752<=o&&o<=72758||72760<=o&&o<=72765||72767==o||72850<=o&&o<=72871||72874<=o&&o<=72880||72882<=o&&o<=72883||72885<=o&&o<=72886||73009<=o&&o<=73014||73018==o||73020<=o&&o<=73021||73023<=o&&o<=73029||73031==o||92912<=o&&o<=92916||92976<=o&&o<=92982||94095<=o&&o<=94098||113821<=o&&o<=113822||119141==o||119143<=o&&o<=119145||119150<=o&&o<=119154||119163<=o&&o<=119170||119173<=o&&o<=119179||119210<=o&&o<=119213||119362<=o&&o<=119364||121344<=o&&o<=121398||121403<=o&&o<=121452||121461==o||121476==o||121499<=o&&o<=121503||121505<=o&&o<=121519||122880<=o&&o<=122886||122888<=o&&o<=122904||122907<=o&&o<=122913||122915<=o&&o<=122916||122918<=o&&o<=122922||125136<=o&&o<=125142||125252<=o&&o<=125258||917536<=o&&o<=917631||917760<=o&&o<=917999?e:127462<=o&&o<=127487?t:2307==o||2363==o||2366<=o&&o<=2368||2377<=o&&o<=2380||2382<=o&&o<=2383||2434<=o&&o<=2435||2495<=o&&o<=2496||2503<=o&&o<=2504||2507<=o&&o<=2508||2563==o||2622<=o&&o<=2624||2691==o||2750<=o&&o<=2752||2761==o||2763<=o&&o<=2764||2818<=o&&o<=2819||2880==o||2887<=o&&o<=2888||2891<=o&&o<=2892||3007==o||3009<=o&&o<=3010||3014<=o&&o<=3016||3018<=o&&o<=3020||3073<=o&&o<=3075||3137<=o&&o<=3140||3202<=o&&o<=3203||3262==o||3264<=o&&o<=3265||3267<=o&&o<=3268||3271<=o&&o<=3272||3274<=o&&o<=3275||3330<=o&&o<=3331||3391<=o&&o<=3392||3398<=o&&o<=3400||3402<=o&&o<=3404||3458<=o&&o<=3459||3536<=o&&o<=3537||3544<=o&&o<=3550||3570<=o&&o<=3571||3635==o||3763==o||3902<=o&&o<=3903||3967==o||4145==o||4155<=o&&o<=4156||4182<=o&&o<=4183||4228==o||6070==o||6078<=o&&o<=6085||6087<=o&&o<=6088||6435<=o&&o<=6438||6441<=o&&o<=6443||6448<=o&&o<=6449||6451<=o&&o<=6456||6681<=o&&o<=6682||6741==o||6743==o||6765<=o&&o<=6770||6916==o||6965==o||6971==o||6973<=o&&o<=6977||6979<=o&&o<=6980||7042==o||7073==o||7078<=o&&o<=7079||7082==o||7143==o||7146<=o&&o<=7148||7150==o||7154<=o&&o<=7155||7204<=o&&o<=7211||7220<=o&&o<=7221||7393==o||7410<=o&&o<=7411||7415==o||43043<=o&&o<=43044||43047==o||43136<=o&&o<=43137||43188<=o&&o<=43203||43346<=o&&o<=43347||43395==o||43444<=o&&o<=43445||43450<=o&&o<=43451||43453<=o&&o<=43456||43567<=o&&o<=43568||43571<=o&&o<=43572||43597==o||43755==o||43758<=o&&o<=43759||43765==o||44003<=o&&o<=44004||44006<=o&&o<=44007||44009<=o&&o<=44010||44012==o||69632==o||69634==o||69762==o||69808<=o&&o<=69810||69815<=o&&o<=69816||69932==o||70018==o||70067<=o&&o<=70069||70079<=o&&o<=70080||70188<=o&&o<=70190||70194<=o&&o<=70195||70197==o||70368<=o&&o<=70370||70402<=o&&o<=70403||70463==o||70465<=o&&o<=70468||70471<=o&&o<=70472||70475<=o&&o<=70477||70498<=o&&o<=70499||70709<=o&&o<=70711||70720<=o&&o<=70721||70725==o||70833<=o&&o<=70834||70841==o||70843<=o&&o<=70844||70846==o||70849==o||71088<=o&&o<=71089||71096<=o&&o<=71099||71102==o||71216<=o&&o<=71218||71227<=o&&o<=71228||71230==o||71340==o||71342<=o&&o<=71343||71350==o||71456<=o&&o<=71457||71462==o||72199<=o&&o<=72200||72249==o||72279<=o&&o<=72280||72343==o||72751==o||72766==o||72873==o||72881==o||72884==o||94033<=o&&o<=94078||119142==o||119149==o?5:4352<=o&&o<=4447||43360<=o&&o<=43388?6:4448<=o&&o<=4519||55216<=o&&o<=55238?7:4520<=o&&o<=4607||55243<=o&&o<=55291?8:44032==o||44060==o||44088==o||44116==o||44144==o||44172==o||44200==o||44228==o||44256==o||44284==o||44312==o||44340==o||44368==o||44396==o||44424==o||44452==o||44480==o||44508==o||44536==o||44564==o||44592==o||44620==o||44648==o||44676==o||44704==o||44732==o||44760==o||44788==o||44816==o||44844==o||44872==o||44900==o||44928==o||44956==o||44984==o||45012==o||45040==o||45068==o||45096==o||45124==o||45152==o||45180==o||45208==o||45236==o||45264==o||45292==o||45320==o||45348==o||45376==o||45404==o||45432==o||45460==o||45488==o||45516==o||45544==o||45572==o||45600==o||45628==o||45656==o||45684==o||45712==o||45740==o||45768==o||45796==o||45824==o||45852==o||45880==o||45908==o||45936==o||45964==o||45992==o||46020==o||46048==o||46076==o||46104==o||46132==o||46160==o||46188==o||46216==o||46244==o||46272==o||46300==o||46328==o||46356==o||46384==o||46412==o||46440==o||46468==o||46496==o||46524==o||46552==o||46580==o||46608==o||46636==o||46664==o||46692==o||46720==o||46748==o||46776==o||46804==o||46832==o||46860==o||46888==o||46916==o||46944==o||46972==o||47e3==o||47028==o||47056==o||47084==o||47112==o||47140==o||47168==o||47196==o||47224==o||47252==o||47280==o||47308==o||47336==o||47364==o||47392==o||47420==o||47448==o||47476==o||47504==o||47532==o||47560==o||47588==o||47616==o||47644==o||47672==o||47700==o||47728==o||47756==o||47784==o||47812==o||47840==o||47868==o||47896==o||47924==o||47952==o||47980==o||48008==o||48036==o||48064==o||48092==o||48120==o||48148==o||48176==o||48204==o||48232==o||48260==o||48288==o||48316==o||48344==o||48372==o||48400==o||48428==o||48456==o||48484==o||48512==o||48540==o||48568==o||48596==o||48624==o||48652==o||48680==o||48708==o||48736==o||48764==o||48792==o||48820==o||48848==o||48876==o||48904==o||48932==o||48960==o||48988==o||49016==o||49044==o||49072==o||49100==o||49128==o||49156==o||49184==o||49212==o||49240==o||49268==o||49296==o||49324==o||49352==o||49380==o||49408==o||49436==o||49464==o||49492==o||49520==o||49548==o||49576==o||49604==o||49632==o||49660==o||49688==o||49716==o||49744==o||49772==o||49800==o||49828==o||49856==o||49884==o||49912==o||49940==o||49968==o||49996==o||50024==o||50052==o||50080==o||50108==o||50136==o||50164==o||50192==o||50220==o||50248==o||50276==o||50304==o||50332==o||50360==o||50388==o||50416==o||50444==o||50472==o||50500==o||50528==o||50556==o||50584==o||50612==o||50640==o||50668==o||50696==o||50724==o||50752==o||50780==o||50808==o||50836==o||50864==o||50892==o||50920==o||50948==o||50976==o||51004==o||51032==o||51060==o||51088==o||51116==o||51144==o||51172==o||51200==o||51228==o||51256==o||51284==o||51312==o||51340==o||51368==o||51396==o||51424==o||51452==o||51480==o||51508==o||51536==o||51564==o||51592==o||51620==o||51648==o||51676==o||51704==o||51732==o||51760==o||51788==o||51816==o||51844==o||51872==o||51900==o||51928==o||51956==o||51984==o||52012==o||52040==o||52068==o||52096==o||52124==o||52152==o||52180==o||52208==o||52236==o||52264==o||52292==o||52320==o||52348==o||52376==o||52404==o||52432==o||52460==o||52488==o||52516==o||52544==o||52572==o||52600==o||52628==o||52656==o||52684==o||52712==o||52740==o||52768==o||52796==o||52824==o||52852==o||52880==o||52908==o||52936==o||52964==o||52992==o||53020==o||53048==o||53076==o||53104==o||53132==o||53160==o||53188==o||53216==o||53244==o||53272==o||53300==o||53328==o||53356==o||53384==o||53412==o||53440==o||53468==o||53496==o||53524==o||53552==o||53580==o||53608==o||53636==o||53664==o||53692==o||53720==o||53748==o||53776==o||53804==o||53832==o||53860==o||53888==o||53916==o||53944==o||53972==o||54e3==o||54028==o||54056==o||54084==o||54112==o||54140==o||54168==o||54196==o||54224==o||54252==o||54280==o||54308==o||54336==o||54364==o||54392==o||54420==o||54448==o||54476==o||54504==o||54532==o||54560==o||54588==o||54616==o||54644==o||54672==o||54700==o||54728==o||54756==o||54784==o||54812==o||54840==o||54868==o||54896==o||54924==o||54952==o||54980==o||55008==o||55036==o||55064==o||55092==o||55120==o||55148==o||55176==o?9:44033<=o&&o<=44059||44061<=o&&o<=44087||44089<=o&&o<=44115||44117<=o&&o<=44143||44145<=o&&o<=44171||44173<=o&&o<=44199||44201<=o&&o<=44227||44229<=o&&o<=44255||44257<=o&&o<=44283||44285<=o&&o<=44311||44313<=o&&o<=44339||44341<=o&&o<=44367||44369<=o&&o<=44395||44397<=o&&o<=44423||44425<=o&&o<=44451||44453<=o&&o<=44479||44481<=o&&o<=44507||44509<=o&&o<=44535||44537<=o&&o<=44563||44565<=o&&o<=44591||44593<=o&&o<=44619||44621<=o&&o<=44647||44649<=o&&o<=44675||44677<=o&&o<=44703||44705<=o&&o<=44731||44733<=o&&o<=44759||44761<=o&&o<=44787||44789<=o&&o<=44815||44817<=o&&o<=44843||44845<=o&&o<=44871||44873<=o&&o<=44899||44901<=o&&o<=44927||44929<=o&&o<=44955||44957<=o&&o<=44983||44985<=o&&o<=45011||45013<=o&&o<=45039||45041<=o&&o<=45067||45069<=o&&o<=45095||45097<=o&&o<=45123||45125<=o&&o<=45151||45153<=o&&o<=45179||45181<=o&&o<=45207||45209<=o&&o<=45235||45237<=o&&o<=45263||45265<=o&&o<=45291||45293<=o&&o<=45319||45321<=o&&o<=45347||45349<=o&&o<=45375||45377<=o&&o<=45403||45405<=o&&o<=45431||45433<=o&&o<=45459||45461<=o&&o<=45487||45489<=o&&o<=45515||45517<=o&&o<=45543||45545<=o&&o<=45571||45573<=o&&o<=45599||45601<=o&&o<=45627||45629<=o&&o<=45655||45657<=o&&o<=45683||45685<=o&&o<=45711||45713<=o&&o<=45739||45741<=o&&o<=45767||45769<=o&&o<=45795||45797<=o&&o<=45823||45825<=o&&o<=45851||45853<=o&&o<=45879||45881<=o&&o<=45907||45909<=o&&o<=45935||45937<=o&&o<=45963||45965<=o&&o<=45991||45993<=o&&o<=46019||46021<=o&&o<=46047||46049<=o&&o<=46075||46077<=o&&o<=46103||46105<=o&&o<=46131||46133<=o&&o<=46159||46161<=o&&o<=46187||46189<=o&&o<=46215||46217<=o&&o<=46243||46245<=o&&o<=46271||46273<=o&&o<=46299||46301<=o&&o<=46327||46329<=o&&o<=46355||46357<=o&&o<=46383||46385<=o&&o<=46411||46413<=o&&o<=46439||46441<=o&&o<=46467||46469<=o&&o<=46495||46497<=o&&o<=46523||46525<=o&&o<=46551||46553<=o&&o<=46579||46581<=o&&o<=46607||46609<=o&&o<=46635||46637<=o&&o<=46663||46665<=o&&o<=46691||46693<=o&&o<=46719||46721<=o&&o<=46747||46749<=o&&o<=46775||46777<=o&&o<=46803||46805<=o&&o<=46831||46833<=o&&o<=46859||46861<=o&&o<=46887||46889<=o&&o<=46915||46917<=o&&o<=46943||46945<=o&&o<=46971||46973<=o&&o<=46999||47001<=o&&o<=47027||47029<=o&&o<=47055||47057<=o&&o<=47083||47085<=o&&o<=47111||47113<=o&&o<=47139||47141<=o&&o<=47167||47169<=o&&o<=47195||47197<=o&&o<=47223||47225<=o&&o<=47251||47253<=o&&o<=47279||47281<=o&&o<=47307||47309<=o&&o<=47335||47337<=o&&o<=47363||47365<=o&&o<=47391||47393<=o&&o<=47419||47421<=o&&o<=47447||47449<=o&&o<=47475||47477<=o&&o<=47503||47505<=o&&o<=47531||47533<=o&&o<=47559||47561<=o&&o<=47587||47589<=o&&o<=47615||47617<=o&&o<=47643||47645<=o&&o<=47671||47673<=o&&o<=47699||47701<=o&&o<=47727||47729<=o&&o<=47755||47757<=o&&o<=47783||47785<=o&&o<=47811||47813<=o&&o<=47839||47841<=o&&o<=47867||47869<=o&&o<=47895||47897<=o&&o<=47923||47925<=o&&o<=47951||47953<=o&&o<=47979||47981<=o&&o<=48007||48009<=o&&o<=48035||48037<=o&&o<=48063||48065<=o&&o<=48091||48093<=o&&o<=48119||48121<=o&&o<=48147||48149<=o&&o<=48175||48177<=o&&o<=48203||48205<=o&&o<=48231||48233<=o&&o<=48259||48261<=o&&o<=48287||48289<=o&&o<=48315||48317<=o&&o<=48343||48345<=o&&o<=48371||48373<=o&&o<=48399||48401<=o&&o<=48427||48429<=o&&o<=48455||48457<=o&&o<=48483||48485<=o&&o<=48511||48513<=o&&o<=48539||48541<=o&&o<=48567||48569<=o&&o<=48595||48597<=o&&o<=48623||48625<=o&&o<=48651||48653<=o&&o<=48679||48681<=o&&o<=48707||48709<=o&&o<=48735||48737<=o&&o<=48763||48765<=o&&o<=48791||48793<=o&&o<=48819||48821<=o&&o<=48847||48849<=o&&o<=48875||48877<=o&&o<=48903||48905<=o&&o<=48931||48933<=o&&o<=48959||48961<=o&&o<=48987||48989<=o&&o<=49015||49017<=o&&o<=49043||49045<=o&&o<=49071||49073<=o&&o<=49099||49101<=o&&o<=49127||49129<=o&&o<=49155||49157<=o&&o<=49183||49185<=o&&o<=49211||49213<=o&&o<=49239||49241<=o&&o<=49267||49269<=o&&o<=49295||49297<=o&&o<=49323||49325<=o&&o<=49351||49353<=o&&o<=49379||49381<=o&&o<=49407||49409<=o&&o<=49435||49437<=o&&o<=49463||49465<=o&&o<=49491||49493<=o&&o<=49519||49521<=o&&o<=49547||49549<=o&&o<=49575||49577<=o&&o<=49603||49605<=o&&o<=49631||49633<=o&&o<=49659||49661<=o&&o<=49687||49689<=o&&o<=49715||49717<=o&&o<=49743||49745<=o&&o<=49771||49773<=o&&o<=49799||49801<=o&&o<=49827||49829<=o&&o<=49855||49857<=o&&o<=49883||49885<=o&&o<=49911||49913<=o&&o<=49939||49941<=o&&o<=49967||49969<=o&&o<=49995||49997<=o&&o<=50023||50025<=o&&o<=50051||50053<=o&&o<=50079||50081<=o&&o<=50107||50109<=o&&o<=50135||50137<=o&&o<=50163||50165<=o&&o<=50191||50193<=o&&o<=50219||50221<=o&&o<=50247||50249<=o&&o<=50275||50277<=o&&o<=50303||50305<=o&&o<=50331||50333<=o&&o<=50359||50361<=o&&o<=50387||50389<=o&&o<=50415||50417<=o&&o<=50443||50445<=o&&o<=50471||50473<=o&&o<=50499||50501<=o&&o<=50527||50529<=o&&o<=50555||50557<=o&&o<=50583||50585<=o&&o<=50611||50613<=o&&o<=50639||50641<=o&&o<=50667||50669<=o&&o<=50695||50697<=o&&o<=50723||50725<=o&&o<=50751||50753<=o&&o<=50779||50781<=o&&o<=50807||50809<=o&&o<=50835||50837<=o&&o<=50863||50865<=o&&o<=50891||50893<=o&&o<=50919||50921<=o&&o<=50947||50949<=o&&o<=50975||50977<=o&&o<=51003||51005<=o&&o<=51031||51033<=o&&o<=51059||51061<=o&&o<=51087||51089<=o&&o<=51115||51117<=o&&o<=51143||51145<=o&&o<=51171||51173<=o&&o<=51199||51201<=o&&o<=51227||51229<=o&&o<=51255||51257<=o&&o<=51283||51285<=o&&o<=51311||51313<=o&&o<=51339||51341<=o&&o<=51367||51369<=o&&o<=51395||51397<=o&&o<=51423||51425<=o&&o<=51451||51453<=o&&o<=51479||51481<=o&&o<=51507||51509<=o&&o<=51535||51537<=o&&o<=51563||51565<=o&&o<=51591||51593<=o&&o<=51619||51621<=o&&o<=51647||51649<=o&&o<=51675||51677<=o&&o<=51703||51705<=o&&o<=51731||51733<=o&&o<=51759||51761<=o&&o<=51787||51789<=o&&o<=51815||51817<=o&&o<=51843||51845<=o&&o<=51871||51873<=o&&o<=51899||51901<=o&&o<=51927||51929<=o&&o<=51955||51957<=o&&o<=51983||51985<=o&&o<=52011||52013<=o&&o<=52039||52041<=o&&o<=52067||52069<=o&&o<=52095||52097<=o&&o<=52123||52125<=o&&o<=52151||52153<=o&&o<=52179||52181<=o&&o<=52207||52209<=o&&o<=52235||52237<=o&&o<=52263||52265<=o&&o<=52291||52293<=o&&o<=52319||52321<=o&&o<=52347||52349<=o&&o<=52375||52377<=o&&o<=52403||52405<=o&&o<=52431||52433<=o&&o<=52459||52461<=o&&o<=52487||52489<=o&&o<=52515||52517<=o&&o<=52543||52545<=o&&o<=52571||52573<=o&&o<=52599||52601<=o&&o<=52627||52629<=o&&o<=52655||52657<=o&&o<=52683||52685<=o&&o<=52711||52713<=o&&o<=52739||52741<=o&&o<=52767||52769<=o&&o<=52795||52797<=o&&o<=52823||52825<=o&&o<=52851||52853<=o&&o<=52879||52881<=o&&o<=52907||52909<=o&&o<=52935||52937<=o&&o<=52963||52965<=o&&o<=52991||52993<=o&&o<=53019||53021<=o&&o<=53047||53049<=o&&o<=53075||53077<=o&&o<=53103||53105<=o&&o<=53131||53133<=o&&o<=53159||53161<=o&&o<=53187||53189<=o&&o<=53215||53217<=o&&o<=53243||53245<=o&&o<=53271||53273<=o&&o<=53299||53301<=o&&o<=53327||53329<=o&&o<=53355||53357<=o&&o<=53383||53385<=o&&o<=53411||53413<=o&&o<=53439||53441<=o&&o<=53467||53469<=o&&o<=53495||53497<=o&&o<=53523||53525<=o&&o<=53551||53553<=o&&o<=53579||53581<=o&&o<=53607||53609<=o&&o<=53635||53637<=o&&o<=53663||53665<=o&&o<=53691||53693<=o&&o<=53719||53721<=o&&o<=53747||53749<=o&&o<=53775||53777<=o&&o<=53803||53805<=o&&o<=53831||53833<=o&&o<=53859||53861<=o&&o<=53887||53889<=o&&o<=53915||53917<=o&&o<=53943||53945<=o&&o<=53971||53973<=o&&o<=53999||54001<=o&&o<=54027||54029<=o&&o<=54055||54057<=o&&o<=54083||54085<=o&&o<=54111||54113<=o&&o<=54139||54141<=o&&o<=54167||54169<=o&&o<=54195||54197<=o&&o<=54223||54225<=o&&o<=54251||54253<=o&&o<=54279||54281<=o&&o<=54307||54309<=o&&o<=54335||54337<=o&&o<=54363||54365<=o&&o<=54391||54393<=o&&o<=54419||54421<=o&&o<=54447||54449<=o&&o<=54475||54477<=o&&o<=54503||54505<=o&&o<=54531||54533<=o&&o<=54559||54561<=o&&o<=54587||54589<=o&&o<=54615||54617<=o&&o<=54643||54645<=o&&o<=54671||54673<=o&&o<=54699||54701<=o&&o<=54727||54729<=o&&o<=54755||54757<=o&&o<=54783||54785<=o&&o<=54811||54813<=o&&o<=54839||54841<=o&&o<=54867||54869<=o&&o<=54895||54897<=o&&o<=54923||54925<=o&&o<=54951||54953<=o&&o<=54979||54981<=o&&o<=55007||55009<=o&&o<=55035||55037<=o&&o<=55063||55065<=o&&o<=55091||55093<=o&&o<=55119||55121<=o&&o<=55147||55149<=o&&o<=55175||55177<=o&&o<=55203?10:9757==o||9977==o||9994<=o&&o<=9997||127877==o||127938<=o&&o<=127940||127943==o||127946<=o&&o<=127948||128066<=o&&o<=128067||128070<=o&&o<=128080||128110==o||128112<=o&&o<=128120||128124==o||128129<=o&&o<=128131||128133<=o&&o<=128135||128170==o||128372<=o&&o<=128373||128378==o||128400==o||128405<=o&&o<=128406||128581<=o&&o<=128583||128587<=o&&o<=128591||128675==o||128692<=o&&o<=128694||128704==o||128716==o||129304<=o&&o<=129308||129310<=o&&o<=129311||129318==o||129328<=o&&o<=129337||129341<=o&&o<=129342||129489<=o&&o<=129501?r:127995<=o&&o<=127999?14:8205==o?15:9792==o||9794==o||9877<=o&&o<=9878||9992==o||10084==o||127752==o||127806==o||127859==o||127891==o||127908==o||127912==o||127979==o||127981==o||128139==o||128187<=o&&o<=128188||128295==o||128300==o||128488==o||128640==o||128658==o?s:128102<=o&&o<=128105?n:11}return this.nextBreak=function(e,t){if(void 0===t&&(t=0),t<0)return 0
if(t>=e.length-1)return e.length
for(var i,r,s=l(o(e,t)),n=[],c=t+1;c<e.length;c++)if(r=c-1,!(55296<=(i=e).charCodeAt(r)&&i.charCodeAt(r)<=56319&&56320<=i.charCodeAt(r+1)&&i.charCodeAt(r+1)<=57343)){var d=l(o(e,c))
if(a(s,n,d))return c
n.push(d)}return e.length},this.splitGraphemes=function(e){for(var t,i=[],r=0;(t=this.nextBreak(e,r))<e.length;)i.push(e.slice(r,t)),r=t
return r<e.length&&i.push(e.slice(r)),i},this.iterateGraphemes=function(e){var t=0,i={next:function(){var i,r
return(r=this.nextBreak(e,t))<e.length?(i=e.slice(t,r),t=r,{value:i,done:!1}):t<e.length?(i=e.slice(t),t=e.length,{value:i,done:!1}):{value:void 0,done:!0}}.bind(this)}
return"undefined"!=typeof Symbol&&Symbol.iterator&&(i[Symbol.iterator]=function(){return i}),i},this.countGraphemes=function(e){for(var t,i=0,r=0;(t=this.nextBreak(e,r))<e.length;)r=t,i++
return r<e.length&&i++,i},this})})),i=new t,r=function(e,t,r){for(var s=i.iterateGraphemes(e.substring(t)),n="",o=0;o<r-t;o++){var a=s.next()
if(n+=a.value,a.done)break}return n},s=function(e,t,i,r,s,n,o){return{start:{line:e,column:t,offset:i},end:{line:r,column:s,offset:n},source:o||null}},n=e((function(e,t){e.exports=function(){var e,t="",i=function(i,r){if("string"!=typeof i)throw new TypeError("expected a string")
if(1===r)return i
if(2===r)return i+i
var s=i.length*r
if(e!==i||void 0===e)e=i,t=""
else if(t.length>=s)return t.substr(0,s)
for(;s>t.length&&r>1;)1&r&&(t+=i),r>>=1,i+=i
return t=(t+=i).substr(0,s)},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t]
for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}
function s(e,t,r,s){var n=function(e,t){if(null==e||null==t)return e
var i=String(e),r="number"==typeof t?t:parseInt(t,10)
if(isNaN(r)||!isFinite(r))return i
var s=i.length
if(s>=r)return i
var n=String(" ")
""===n&&(n=" ")
for(var o=r-s;n.length<o;)n+=n
return(n.length>o?n.substr(0,o):n)+i}(String(t),r),o=i(" ",s.tabSize)
return n+" | "+e.replace(/\t/g,o)}function n(e,t,i,r,n){return e.slice(t,i).map((function(e,i){return s(e,t+i+1,r,n)})).join("\n")}var o={extraLines:2,tabSize:4}
return function(e,t,a,l){l=r({},o,l)
var c=e.split(/\r\n?|\n|\f/),d=Math.max(1,t-l.extraLines)-1,u=Math.min(t+l.extraLines,c.length),h=String(u).length,f=n(c,d,t,h,l),p=s(c[t-1].substring(0,a-1),t,h,l)
return[f,i(" ",p.length)+"^",n(c,t,u,h,l)].filter(Boolean).join("\n")}}()})),o=(new Error).stack,a=function(e,t,i,r,s){throw function(e){var t=Object.create(SyntaxError.prototype)
return Object.assign(t,e,{name:"SyntaxError"}),Object.defineProperty(t,"stack",{get:function(){return o?o.replace(/^(.+\n){1,3}/,String(t)+"\n"):""}}),t}({message:r?e+"\n"+n(t,r,s):e,rawMessage:e,source:i,line:r,column:s})},l=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r]
return"Unexpected token <"+e+"> at "+i.filter(Boolean).join(":")},c=function(e){for(var t=arguments.length,i=Array(t>1?t-1:0),r=1;r<t;r++)i[r-1]=arguments[r]
return"Unexpected symbol <"+e+"> at "+i.filter(Boolean).join(":")},d={"{":0,"}":1,"[":2,"]":3,":":4,",":5},u={true:8,false:9,null:10},h={'"':0,"\\":1,"/":2,b:3,f:4,n:5,r:6,t:7,u:8}
function f(e){return e>="1"&&e<="9"}function p(e){return e>="0"&&e<="9"}function y(e){return p(e)||e>="a"&&e<="f"||e>="A"&&e<="F"}function m(e){return"e"===e||"E"===e}function g(e,t,i,r){var s=e.charAt(t)
if("\r"===s)t++,i++,r=1,"\n"===e.charAt(t)&&t++
else if("\n"===s)t++,i++,r=1
else{if("\t"!==s&&" "!==s)return null
t++,r++}return{index:t,line:i,column:r}}function _(e,t,i,r){var s=e.charAt(t)
return s in d?{type:d[s],line:i,column:r+1,index:t+1,value:null}:null}function b(e,t,i,r){for(var s in u)if(u.hasOwnProperty(s)&&e.substr(t,s.length)===s)return{type:u[s],line:i,column:r+s.length,index:t+s.length,value:s}
return null}function v(e,t,i,r){for(var s=t,n=0;t<e.length;){var o=e.charAt(t)
switch(n){case 0:if('"'!==o)return null
t++,n=1
break
case 1:if("\\"===o)t++,n=2
else{if('"'===o)return{type:6,line:i,column:r+ ++t-s,index:t,value:e.slice(s,t)}
t++}break
case 2:if(!(o in h))return null
if(t++,"u"===o)for(var a=0;a<4;a++){var l=e.charAt(t)
if(!l||!y(l))return null
t++}n=1}}}function w(e,t,i,r){var s=t,n=t,o=0
e:for(;t<e.length;){var a=e.charAt(t)
switch(o){case 0:if("-"===a)o=1
else if("0"===a)n=t+1,o=2
else{if(!f(a))return null
n=t+1,o=3}break
case 1:if("0"===a)n=t+1,o=2
else{if(!f(a))return null
n=t+1,o=3}break
case 2:if("."===a)o=4
else{if(!m(a))break e
o=6}break
case 3:if(p(a))n=t+1
else if("."===a)o=4
else{if(!m(a))break e
o=6}break
case 4:if(!p(a))break e
n=t+1,o=5
break
case 5:if(p(a))n=t+1
else{if(!m(a))break e
o=6}break
case 6:if("+"===a||"-"===a)o=7
else{if(!p(a))break e
n=t+1,o=7}break
case 7:if(!p(a))break e
n=t+1}t++}return n>0?{type:7,line:i,column:r+n-s,index:n,value:e.slice(s,n)}:null}var k={loc:!0,source:null}
function R(e,t,i){var r=t.length>0?t[t.length-1].loc.end:{line:1,column:1}
a("Unexpected end of input",e,i.source,r.line,r.column)}function S(e){for(var t=0,i=0;i<4;i++)t=16*t+parseInt(e[i],16)
return String.fromCharCode(t)}var A={b:"\b",f:"\f",n:"\n",r:"\r",t:"\t"},M=['"',"\\","/"]
function C(e){for(var t="",i=0;i<e.length;i++){var r=e.charAt(i)
if("\\"===r){i++
var s=e.charAt(i)
if("u"===s)t+=S(e.substr(i+1,4)),i+=4
else if(-1!==M.indexOf(s))t+=s
else{if(!(s in A))break
t+=A[s]}}else t+=r}return t}function E(e,t,i,n){for(var o=void 0,c={type:"Object",children:[]},d=0;i<t.length;){var u=t[i]
switch(d){case 0:if(0!==u.type)return null
o=u,d=1,i++
break
case 1:if(1===u.type)return n.loc&&(c.loc=s(o.loc.start.line,o.loc.start.column,o.loc.start.offset,u.loc.end.line,u.loc.end.column,u.loc.end.offset,n.source)),{value:c,index:i+1}
var h=T(e,t,i,n)
c.children.push(h.value),d=2,i=h.index
break
case 2:if(1===u.type)return n.loc&&(c.loc=s(o.loc.start.line,o.loc.start.column,o.loc.start.offset,u.loc.end.line,u.loc.end.column,u.loc.end.offset,n.source)),{value:c,index:i+1}
5===u.type?(d=3,i++):a(l(r(e,u.loc.start.offset,u.loc.end.offset),n.source,u.loc.start.line,u.loc.start.column),e,n.source,u.loc.start.line,u.loc.start.column)
break
case 3:var f=T(e,t,i,n)
f?(i=f.index,c.children.push(f.value),d=2):a(l(r(e,u.loc.start.offset,u.loc.end.offset),n.source,u.loc.start.line,u.loc.start.column),e,n.source,u.loc.start.line,u.loc.start.column)}}R(e,t,n)}function T(e,t,i,n){for(var o=void 0,c={type:"Property",key:null,value:null},d=0;i<t.length;){var u=t[i]
switch(d){case 0:if(6!==u.type)return null
var h={type:"Identifier",value:C(e.slice(u.loc.start.offset+1,u.loc.end.offset-1)),raw:u.value}
n.loc&&(h.loc=u.loc),o=u,c.key=h,d=1,i++
break
case 1:4===u.type?(d=2,i++):a(l(r(e,u.loc.start.offset,u.loc.end.offset),n.source,u.loc.start.line,u.loc.start.column),e,n.source,u.loc.start.line,u.loc.start.column)
break
case 2:var f=D(e,t,i,n)
return c.value=f.value,n.loc&&(c.loc=s(o.loc.start.line,o.loc.start.column,o.loc.start.offset,f.value.loc.end.line,f.value.loc.end.column,f.value.loc.end.offset,n.source)),{value:c,index:f.index}}}}function O(e,t,i,n){for(var o=void 0,c={type:"Array",children:[]},d=0,u=void 0;i<t.length;)switch(u=t[i],d){case 0:if(2!==u.type)return null
o=u,d=1,i++
break
case 1:if(3===u.type)return n.loc&&(c.loc=s(o.loc.start.line,o.loc.start.column,o.loc.start.offset,u.loc.end.line,u.loc.end.column,u.loc.end.offset,n.source)),{value:c,index:i+1}
var h=D(e,t,i,n)
i=h.index,c.children.push(h.value),d=2
break
case 2:if(3===u.type)return n.loc&&(c.loc=s(o.loc.start.line,o.loc.start.column,o.loc.start.offset,u.loc.end.line,u.loc.end.column,u.loc.end.offset,n.source)),{value:c,index:i+1}
5===u.type?(d=3,i++):a(l(r(e,u.loc.start.offset,u.loc.end.offset),n.source,u.loc.start.line,u.loc.start.column),e,n.source,u.loc.start.line,u.loc.start.column)
break
case 3:var f=D(e,t,i,n)
i=f.index,c.children.push(f.value),d=2}R(e,t,n)}function q(e,t,i,r){var s=t[i],n=null
switch(s.type){case 6:n=C(e.slice(s.loc.start.offset+1,s.loc.end.offset-1))
break
case 7:n=Number(s.value)
break
case 8:n=!0
break
case 9:n=!1
break
case 10:n=null
break
default:return null}var o={type:"Literal",value:n,raw:s.value}
return r.loc&&(o.loc=s.loc),{value:o,index:i+1}}function D(e,t,i,s){var n=t[i],o=q.apply(void 0,arguments)||E.apply(void 0,arguments)||O.apply(void 0,arguments)
if(o)return o
a(l(r(e,n.loc.start.offset,n.loc.end.offset),s.source,n.loc.start.line,n.loc.start.column),e,s.source,n.loc.start.line,n.loc.start.column)}return function(e,t){var i=function(e,t){for(var i=1,n=1,o=0,l=[];o<e.length;){var d=[e,o,i,n],u=g.apply(void 0,d)
if(u)o=u.index,i=u.line,n=u.column
else{var h=_.apply(void 0,d)||b.apply(void 0,d)||v.apply(void 0,d)||w.apply(void 0,d)
if(h){var f={type:h.type,value:h.value,loc:s(i,n,o,h.line,h.column,h.index,t.source)}
l.push(f),o=h.index,i=h.line,n=h.column}else a(c(r(e,o,o+1),t.source,i,n),e,t.source,i,n)}}return l}(e,t=Object.assign({},k,t))
0===i.length&&R(e,i,t)
var n=D(e,i,0,t)
if(n.index===i.length)return n.value
var o=i[n.index]
a(l(r(e,o.loc.start.offset,o.loc.end.offset),t.source,o.loc.start.line,o.loc.start.column),e,t.source,o.loc.start.line,o.loc.start.column)}},e.exports=t()},8738:(e,t,i)=>{"use strict"
i.d(t,{PO:()=>o,Vv:()=>n.dependentKeyCompat,eM:()=>s.eM})
var r=i(4217),s=i(8146),n=i(394)
function o(e,t,i){const s=new WeakMap,n=i.get
i.get=function(){return s.has(this)||s.set(this,(0,r.createCache)(n.bind(this))),(0,r.getValue)(s.get(this))}}},9024:(e,t,i)=>{"use strict"
i.r(t),i.d(t,{default:()=>o})
var r=i(336),s=i.n(r),n=i(5670)
class o extends(s()){compute(e){for(let t=0,i=e.length;t<i;t++)if(!1===(0,n.A)(e[t]))return e[t]
return e[e.length-1]}}},9230:(e,t,i)=>{"use strict"
function r(e,t,i){return i?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e<=t}i.r(t),i.d(t,{default:()=>r})},9379:(e,t,i)=>{"use strict"
function r(e,t,i){return i?.forceNumber&&("number"!=typeof e&&(e=Number(e)),"number"!=typeof t&&(t=Number(t))),e>=t}i.r(t),i.d(t,{default:()=>r})}}])

import{r as u,j as a,c as i,L as h}from"./index-tAxGdBJP.js";import{a as o,A as N}from"./Anchor-6US6y0OC.js";const b=u.forwardRef(({bsPrefix:s,active:r=!1,children:e,className:c,as:m="li",linkAs:t=N,linkProps:l={},href:n,title:d,target:x,...j},p)=>{const B=o(s,"breadcrumb-item");return a.jsx(m,{ref:p,...j,className:i(B,c,{active:r}),"aria-current":r?"page":void 0,children:r?e:a.jsx(t,{...l,href:n,title:d,target:x,children:e})})});b.displayName="BreadcrumbItem";const I=b,f=u.forwardRef(({bsPrefix:s,className:r,listProps:e={},children:c,label:m="breadcrumb",as:t="nav",...l},n)=>{const d=o(s,"breadcrumb");return a.jsx(t,{"aria-label":m,className:r,ref:n,...l,children:a.jsx("ol",{...e,className:i(d,e==null?void 0:e.className),children:c})})});f.displayName="Breadcrumb";const g=Object.assign(f,{Item:I});function k({items:s}){let r=[{label:"Home",url:"/"}];return r=r.concat(s),a.jsx(g,{children:r.map((e,c)=>a.jsx("li",{className:"breadcrumb-item",children:a.jsx(h,{to:e.url,children:e.label})},c))})}export{k as B};
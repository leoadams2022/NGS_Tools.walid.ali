const o="./",r=`${o}api/med_conditions/med_conditons_array.json`,c=`${o}api/med_conditions/med_conditons_date_string.json`,d=`${o}api/dups/dups_array.json`,i=`${o}api/dups/dups_date_string.json`;function _(n){return new Promise((a,e)=>{try{const t=localStorage.getItem(n);if(t!==null){const s=JSON.parse(t);a(s)}else a(!1)}catch(t){e(t)}})}function u(n,a){return new Promise((e,t)=>{try{const s=JSON.stringify(a);localStorage.setItem(n,s),e(!0)}catch(s){t(s)}})}export{r as a,d as b,i as d,_ as g,c as m,u as s};
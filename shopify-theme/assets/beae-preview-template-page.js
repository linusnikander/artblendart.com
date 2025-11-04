
window.BEAEPAGEJS = () => { let BeaeUseHooks = {};
      try {
        let argid = 'beae-ehi7qscdsection-js',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-ehi7qscd',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-ehi7qscd');
        args.el = args.els[0];
        ((t) => { var o;if((o=t.el.querySelector(".beae-grid-system"))==null||o.addEventListener("scroll",a=>{var s,l;let r=a.target;if(!r.classList.contains("beae-grid-carousel"))return;let n=Math.round((r.scrollLeft+r.querySelector(".beae-grid-carousel__snaps").offsetLeft)/(r.offsetWidth*.8))+1;(s=t.el.querySelector(".beae-grid-carousel__pagination div.active"))==null||s.classList.remove("active"),(l=t.el.querySelector('.beae-grid-carousel__pagination div[data-index="'+n+'"]'))==null||l.classList.add("active")}),t.mode.value=="live"){const a=t.el.querySelector('.beae-section-background-video[data-device="desktop"]'),r=t.el.querySelector('.beae-section-background-video[data-device="mobile"]'),n=[];if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(window.innerWidth>=768){if(a){const s=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);s&&(a.innerHTML=s.html,n.push("desktop"))}}else if(r){const s=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,r);s&&(r.innerHTML=s.html,n.push("mobile"))}}(a||r)&&window.addEventListener("resize",()=>{if(window.BEAEVIDEO&&window.BEAEVIDEO.convertBackgroundSection){if(!n.includes("desktop")&&window.innerWidth>=768&&a){const s=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideo,a);s&&(a.innerHTML=s.html,n.push("desktop"))}if(!n.includes("mobile")&&window.innerWidth<768&&r){const s=window.BEAEVIDEO.convertBackgroundSection(t.optionsVideoMobile,r);s&&(r.innerHTML=s.html,n.push("mobile"))}}})} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-ehi7qscd: ', ex)
      };
    

      try {
        let argid = 'beae-d56eo7fnblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-d56eo7fn',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-d56eo7fn');
        args.el = args.els[0];
        ((S) => { if(S.el){let M,L=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let N=function(z){let E=0,q,D,Q;T(),L?S.el.onmouseover=function(F){I(F)}:z.onmousedown=function(F){I(F)},S.el.onmouseup=function(){j()},z.ontouchstart=function(F){I(F)},S.el.ontouchend=function(){j()};function T(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{M=B.offsetWidth})}).observe(B),z.style.left&&(D=parseInt(z.style.left))}function I(F){check=!1,F.preventDefault(),F.clientX?q=F.clientX:q=F.touches[0].clientX,E=1,S.el.onmousemove=function(X){U(X)},S.el.ontouchmove=function(X){U(X)}}function j(){E=0,isNaN(Q)||(D=Q),check=!0}function U(F){if(E==0||L&&!(F.target==B||F.target==S.el.querySelector(".beae-image-secondary")))return!1;Q=Z(F),Q<0&&(Q=0),Q>100&&(Q=100),P(Q)}function Z(F){F=F.changedTouches?F.changedTouches[0]:F;let X;return L?X=Math.round(F.offsetX*100/M):X=Math.round(D-(q-F.pageX)*100/M),X}function P(F){z.style.left=F+"%",B.style.clipPath=`polygon(${F}% 0%, ${F}% 100%, 100% 100%, 100% 0)`}};V&&B&&N(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{M=B.offsetWidth})}).observe(B),N(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-d56eo7fn: ', ex)
      };
    

      try {
        let argid = 'beae-v38sjr04block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-v38sjr04',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-v38sjr04');
        args.el = args.els[0];
        ((S) => { if(S.el){let M,L=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let N=function(z){let E=0,q,D,Q;T(),L?S.el.onmouseover=function(F){I(F)}:z.onmousedown=function(F){I(F)},S.el.onmouseup=function(){j()},z.ontouchstart=function(F){I(F)},S.el.ontouchend=function(){j()};function T(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{M=B.offsetWidth})}).observe(B),z.style.left&&(D=parseInt(z.style.left))}function I(F){check=!1,F.preventDefault(),F.clientX?q=F.clientX:q=F.touches[0].clientX,E=1,S.el.onmousemove=function(X){U(X)},S.el.ontouchmove=function(X){U(X)}}function j(){E=0,isNaN(Q)||(D=Q),check=!0}function U(F){if(E==0||L&&!(F.target==B||F.target==S.el.querySelector(".beae-image-secondary")))return!1;Q=Z(F),Q<0&&(Q=0),Q>100&&(Q=100),P(Q)}function Z(F){F=F.changedTouches?F.changedTouches[0]:F;let X;return L?X=Math.round(F.offsetX*100/M):X=Math.round(D-(q-F.pageX)*100/M),X}function P(F){z.style.left=F+"%",B.style.clipPath=`polygon(${F}% 0%, ${F}% 100%, 100% 100%, 100% 0)`}};V&&B&&N(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{M=B.offsetWidth})}).observe(B),N(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-v38sjr04: ', ex)
      };
    

      try {
        let argid = 'beae-1zwakmz8block-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-1zwakmz8',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-1zwakmz8');
        args.el = args.els[0];
        ((S) => { if(S.el){let M,L=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let N=function(z){let E=0,q,D,Q;T(),L?S.el.onmouseover=function(F){I(F)}:z.onmousedown=function(F){I(F)},S.el.onmouseup=function(){j()},z.ontouchstart=function(F){I(F)},S.el.ontouchend=function(){j()};function T(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{M=B.offsetWidth})}).observe(B),z.style.left&&(D=parseInt(z.style.left))}function I(F){check=!1,F.preventDefault(),F.clientX?q=F.clientX:q=F.touches[0].clientX,E=1,S.el.onmousemove=function(X){U(X)},S.el.ontouchmove=function(X){U(X)}}function j(){E=0,isNaN(Q)||(D=Q),check=!0}function U(F){if(E==0||L&&!(F.target==B||F.target==S.el.querySelector(".beae-image-secondary")))return!1;Q=Z(F),Q<0&&(Q=0),Q>100&&(Q=100),P(Q)}function Z(F){F=F.changedTouches?F.changedTouches[0]:F;let X;return L?X=Math.round(F.offsetX*100/M):X=Math.round(D-(q-F.pageX)*100/M),X}function P(F){z.style.left=F+"%",B.style.clipPath=`polygon(${F}% 0%, ${F}% 100%, 100% 100%, 100% 0)`}};V&&B&&N(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{M=B.offsetWidth})}).observe(B),N(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-1zwakmz8: ', ex)
      };
    

      try {
        let argid = 'beae-nyjbvzmiblock-image',
          args = window.BEAEARGS[argid];
        if (!args) {
          args = {
            id: 'beae-nyjbvzmi',
            mode: {value: 'live'}
          }
        };
        args.els = document.querySelectorAll('.beae-nyjbvzmi');
        args.el = args.els[0];
        ((S) => { if(S.el){let M,L=S.autoHover;var V=S.el.querySelector(".beae-img-ratio-control"),B=S.el.querySelector(".beae-image-secondary img");if(V&&B){let N=function(z){let E=0,q,D,Q;T(),L?S.el.onmouseover=function(F){I(F)}:z.onmousedown=function(F){I(F)},S.el.onmouseup=function(){j()},z.ontouchstart=function(F){I(F)},S.el.ontouchend=function(){j()};function T(){new ResizeObserver(()=>{window.requestAnimationFrame(()=>{M=B.offsetWidth})}).observe(B),z.style.left&&(D=parseInt(z.style.left))}function I(F){check=!1,F.preventDefault(),F.clientX?q=F.clientX:q=F.touches[0].clientX,E=1,S.el.onmousemove=function(X){U(X)},S.el.ontouchmove=function(X){U(X)}}function j(){E=0,isNaN(Q)||(D=Q),check=!0}function U(F){if(E==0||L&&!(F.target==B||F.target==S.el.querySelector(".beae-image-secondary")))return!1;Q=Z(F),Q<0&&(Q=0),Q>100&&(Q=100),P(Q)}function Z(F){F=F.changedTouches?F.changedTouches[0]:F;let X;return L?X=Math.round(F.offsetX*100/M):X=Math.round(D-(q-F.pageX)*100/M),X}function P(F){z.style.left=F+"%",B.style.clipPath=`polygon(${F}% 0%, ${F}% 100%, 100% 100%, 100% 0)`}};V&&B&&N(V),window.addEventListener("resize",function(){V&&B&&(new ResizeObserver(()=>{window.requestAnimationFrame(()=>{M=B.offsetWidth})}).observe(B),N(V))})}} })(args);
      }  catch (ex) {
        console.error('BEAE JS ERROR ID beae-nyjbvzmi: ', ex)
      };
    }; if (window.BEAEBASE) {window.BEAEPAGEJS()}window.addEventListener("load", () => {let brd = document.createElement("div"),id = Math.random().toString(36).substr(2, 5);brd.setAttribute(`data-${id}`, "");brd.setAttribute("style","position:fixed;bottom: 10px;left:14px;z-index:99999999999999;display:flex;align-items:center;gap:10px");brd.innerHTML = `<a href="https://apps.shopify.com/beae/?utm_source=customersite&utm_medium=page&utm_campaign=traffic" target="_blank" style="box-shadow:rgb(0 0 0 / 25%) 0px 54px 55px, rgb(0 0 0 / 12%) 0px -12px 30px, rgb(0 0 0 / 12%) 0px 4px 6px, rgb(0 0 0 / 17%) 0px 12px 13px, rgb(0 0 0 / 9%) 0px -3px 5px;background:#fafafa;border-radius: 6px;padding: 3px 8px;text-decoration: none;font-family: system-ui, arial;font-size: 12px;color: #292929;font-weight: 500;display: flex;align-items: center;letter-spacing: 0;white-space: nowrap;">Made in <img src="https://app.beae.com/dist/images/beae-next-logo-80.png" height="14" style="border-radius: 0px;margin-left:3px;height:14px !important" /></a> `;document.body.appendChild(brd);}); 
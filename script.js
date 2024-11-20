const cursor=document.querySelector("div.cursor")
const cursorpp=document.querySelector("div.cursorpp")
const dot=document.querySelector("div.dot")
const code=document.querySelector("div.code")
const cours=document.querySelector("div.cours")
const dna=document.querySelector("div.dna")
const hbd=document.querySelector("div.hpb")
const download=document.querySelector("button.download")
const btnvid=document.querySelector("button.vid")
const player=document.querySelector("div.player")
const video=document.querySelector("div.player video")
const svg1=document.querySelector("div.player .cursorpp svg:nth-child(1)")
const svg2=document.querySelector("div.player .cursorpp svg:nth-child(2)")
console.log(svg1,svg2);

let i=0

//hide the cursor on 1000px
if (window.innerWidth<=1000){
  cursor.style.display='none'
  cursorpp.style.display='none'
  dot.style.display='none'
  video.setAttribute("controls","controls")
}
else{
  cursor.style.display='flex'
  cursorpp.style.display='flex'
  dot.style.display='flex'
  video.removeAttribute("controls")
}
window.addEventListener('resize',()=>{
  if (window.innerWidth<=1000){
    cursor.style.display='none'
    cursorpp.style.display='none'
    dot.style.display='none'
    video.setAttribute("controls","controls")
  }
  else{
    cursor.style.display='flex'
    cursorpp.style.display='flex'
    dot.style.display='flex'
    video.removeAttribute("controls")
  }
},true)

//cursor folow on all the web site
document.body.addEventListener("mouseenter",()=>{
  gsap.to(dot,.5,{
    top:'-5px',
    left:'-5px',
  })
})
document.body.addEventListener("mousemove",(e)=>{
  gsap.to(dot,.5,{
    x:e.clientX,
    y:e.clientY,
  })
})

//discover on the code section
code.addEventListener("mousemove",(e)=>{
  gsap.to(cursor,.5,{
    x:e.clientX,
    y:e.clientY,
  })
})
code.addEventListener("mouseenter",()=>{
  gsap.to(cursor,.5,{
    opacity:1,
    scale:1,
    rotation:0,
    top:'-50px',
    left:'-50px',
  })
  gsap.to(dot,.5,{opacity:0})
})
code.addEventListener("mouseleave",()=>{
  gsap.to(cursor,.5,{
    opacity:0,
    scale:0,
    rotation:-45,
    top:'0',
    left:'0',
  })
  gsap.to(dot,.5,{opacity:1})
})

//discover on the dna section
dna.addEventListener("mousemove",(e)=>{
  gsap.to(cursor,.5,{
    x:e.clientX,
    y:e.clientY,
    opacity:1,
    scale:1,
  })
})
dna.addEventListener("mouseenter",()=>{
  gsap.to(cursor,.5,{
    opacity:1,
    scale:1,
    rotation:0,
    top:'-50px',
    left:'-50px',
  })
  gsap.to(dot,.5,{opacity:0})
})
dna.addEventListener("mouseleave",()=>{
  gsap.to(cursor,.5,{
    opacity:0,
    scale:0,
    rotation:-45,
    top:'0',
    left:'0',
  })
  gsap.to(dot,.5,{opacity:1})
})

//redirection on click
code.addEventListener('click',()=>{
  window.location.href="./#thecode"
})
dna.addEventListener('click',()=>{
  window.location.href="./#"
})

//change the color of the dot in th HBF section
hbd.addEventListener('mouseenter',()=>{
  gsap.to(dot,.5,{
    backgroundColor:'#27AC4B',
  })
})
hbd.addEventListener('mouseleave',()=>{
  gsap.to(dot,.5,{
    backgroundColor:'#131A35',
  })
})
hbd.addEventListener('click',()=>{
  hbd.classList.toggle("bigf")
})

//diasable cursor on the cours section
cours.addEventListener('mouseenter',()=>{
  gsap.to(dot,.5,{
    backgroundColor:'#A1A1A1',
  })
})
cours.addEventListener('mouseleave',()=>{
  gsap.to(dot,.5,{
    backgroundColor:'#131A35',
  })
})

//change the color on the download butt
download.addEventListener('mouseenter',()=>{
  gsap.to(dot,.5,{
    backgroundColor:'#27AC4B',
  })
})
download.addEventListener('mouseleave',()=>{
  gsap.to(dot,.5,{
    backgroundColor:'#131A35',
  })
})

//change the color on the see video butt
btnvid.addEventListener('mouseenter',()=>{
  gsap.to(dot,.5,{
    backgroundColor:'#27AC4B',
  })
})
btnvid.addEventListener('mouseleave',()=>{
  gsap.to(dot,.5,{
    backgroundColor:'#131A35',
  })
})

//show the video player
btnvid.addEventListener('click',()=>{
  player.style.pointerEvents='All'
  gsap.to(player,.5,{
    opacity:1,
  })
  document.body.style.overflow='hidden'
})

player.addEventListener('click',(e)=>{
  if (e.target==video){
    return 0
  }
  player.style.pointerEvents='none'
  gsap.to(player,.5,{
    opacity:0,
  })
  document.body.style.overflow=''
  video.pause()
  i=0
  gsap.to(svg1,.5,{scale:0,})
  gsap.to(svg2,.5,{scale:1,})
})

video.addEventListener("mousemove",(e)=>{
  gsap.to(cursorpp,.5,{
    x:e.clientX,
    y:e.clientY,
    opacity:1,
    scale:1,
  })
})
video.addEventListener("mouseenter",()=>{
  gsap.to(cursorpp,.5,{
    opacity:1,
    scale:1,
    rotation:0,
    top:'-50px',
    left:'-50px',
  })
  gsap.to(dot,.5,{opacity:0})
})
video.addEventListener("mouseleave",()=>{
  gsap.to(cursorpp,.5,{
    opacity:0,
    scale:0,
    rotation:-45,
    top:'0',
    left:'0',
  })
  gsap.to(dot,.5,{opacity:1})
})
video.addEventListener('click',()=>{
  if (i%2==0){
    video.play()
    gsap.to(svg1,.5,{scale:1,})
    gsap.to(svg2,.5,{scale:0,})
  }else{
    video.pause()
    gsap.to(svg1,.5,{scale:0,})
    gsap.to(svg2,.5,{scale:1,})
  }
  i++
})
video.addEventListener('ended',()=>{
  player.style.pointerEvents='none'
  gsap.to(player,.5,{
    opacity:0,
  })
  document.body.style.overflow=''
  video.pause()
  i=0
  gsap.to(svg1,.5,{scale:0,})
  gsap.to(svg2,.5,{scale:1,})
})


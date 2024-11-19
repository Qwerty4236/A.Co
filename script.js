const cursor=document.querySelector("div.cursor")
const code=document.querySelector("div.code")
const dna=document.querySelector("div.dna")
const hbd=document.querySelector("div.hpb")

window.addEventListener('resize',()=>{
  if (window.innerWidth<=1000){
    cursor.style.display='none'
  }
  else{
    cursor.style.display='flex'
  }
},true)


code.addEventListener("mousemove",(e)=>{
  gsap.to(cursor,.3,{
    x:e.clientX,
    y:e.clientY,
  })
})
code.addEventListener("mouseenter",()=>{
  gsap.to(cursor,.3,{
    opacity:1,
    scale:1,
    rotation:0,
    top:'-50px',
    left:'-50px',
  })
})
code.addEventListener("mouseleave",()=>{
  gsap.to(cursor,.3,{
    opacity:0,
    scale:0,
    rotation:-45,
    top:'0',
    left:'0',
  })
})

dna.addEventListener("mousemove",(e)=>{
  gsap.to(cursor,.3,{
    x:e.clientX,
    y:e.clientY,
  })
})
dna.addEventListener("mouseenter",()=>{
  gsap.to(cursor,.3,{
    opacity:1,
    scale:1,
    rotation:0,
    top:'-50px',
    left:'-50px',
  })
})
dna.addEventListener("mouseleave",()=>{
  gsap.to(cursor,.3,{
    opacity:0,
    scale:0,
    rotation:-45,
    top:'0',
    left:'0',
  })
})

code.addEventListener('click',()=>{
  window.location.href="./#"
})
dna.addEventListener('click',()=>{
  window.location.href="./#"
})
hbd.addEventListener('click',()=>{
  hbd.classList.toggle("bigf")
})
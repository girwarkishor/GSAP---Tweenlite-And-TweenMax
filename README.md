# GSAP
## GreenSock Animation Platform
  
## Why GSAP?  
Fast & Performant  
tons of features  
compatible with older browsers  
compatible with various frameworks and libraries  
can almost animate every single property  
lightwight and expandable  
and much more...  
  
## GSAP Tools  
  
## TweenLite  
**The lightweight core of the engine which animates any property of any object. It can be expanded using optional plugins.**  
  
## TweenMax
**Includes a package of features without the need to import them one at a time (tweenlite included).**  
  
## TimeLineLite  
**Sequencing tool, making it simple to control entire groups of animations and precisely manage relative timing.**  
  
## TimeLineMax  
**Same as TimeLineLite but with more features.**  
  
## Extras/Plugins  
**A veriety of plugins can be added to these 4 tools to add extra features.**  
   
# GSAP 3  
  
In GSAP 3 TweenLite, TweenMax, TimeLineLite, TimeLineMax is replaced by gsap object.  
The gsap object is your access point to everything the engine does.  
- Create animations  
- Configure settings
- Register plugins, eases, and effects  
- Global control over all animations  
  
The **GSAP** object has 3 main methods for creating Tweens and optionally adding them to Timelines.  
1. gsap.to()  
2. gsap.from()  
3. gsap.fromTo()  
  
A **Tween** can change a single property of a single object over time.  
```
gsap.to(".star", {x: 750, duration: 3});
```  
  
A **Tween** can change multiple properties of a single object over time.  
```
gsap.to(".star", {x: 750, scale: 2, rotation: 360, fill: "yellow", duration: 3});
```  
  
A **Tween** can change multiple properties of multiple objects over time.  
```
gsap.to(".star", {x: 750, rotation: 360, fill: "yellow", duration: 3});
```  
  
A **Tween** can animate multiple objects with staggered start times.  
```
gsap.to(".star", {stagger: 1, x: 750, rotation: 360, fill: "yellow", duration: 3});
```  
  
###Timeline  
A **Timeline** is a container for multiple tweens.  

TiKevin83's GitHub IO Page for experimenting with LoSlide, a CSS focused lazy loading slideshow.

# LoSlide

A mashup of Apoorv Saxena's [Lozad](https://github.com/ApoorvSaxena/lozad.js) and Avi Kohn's [CSS Image Slider](https://codepen.io/AMKohn/pen/EKJHf).

Live [here](https://tikevin83.github.io/) and available in [CodePen](https://codepen.io/tikevin83/pen/BPvQMz)

### Performance Goals

Lozad's IntersectionObservers allow for loading images when they are needed on-screen, without complex scroll listeners or sacrificing page size by loading all the images immediately.

Concepts from Avi Kohn's CSS Image Slider are used to minimize reliance on JS, such that the only strictly needed JS is Lozad.

Modularized JS lets developers grab the specific functions they need for their use case.

Autoplay (scrolls through the slides without user input)

ImagePreload (force load images after window.onload).

### No Loss in Quality

Images taken from free 4K dumps and cropped to 3200x2400, then downscaled to 1600x1200, 800x600, and 400x300 for sourcesets.

WebP encoding using cwebp 1.0.0 -q 84 -m 6 -sharp_yuv -noalpha

JPG encoding using mozjpjeg 3.3.1 with -quality 80 -quant-table 4 -baseline to optimize for decode speed

-q 84 in WebP in my uses has led to images slightly smaller than JPG -quality 80 with indistinguishable/better observable quality.

A long term goal would be to have a custom image CDN which can serve these high quality image types dynamically based on vary: accept-encoding headers.  This would save code in the HTML and provide a better user experience for users sharing images within the slides.

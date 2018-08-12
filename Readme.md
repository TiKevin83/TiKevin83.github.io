GitHub IO Page for experimenting with LoSlide, a CSS based lazy loading image slider.
A mashup of Lozad and concepts from Avi Kohn's CSS Image Slider.

The goal is to have it lazy load every slide after the first via Lozad

Modularized Javascript code bits for certain functions like autoplay
Other developers can grab only the JS components they need for each function

Images taken from free 4K wallpaper dumps, cropped to a multiple of 800x600, and downscaled
WebP encoding using cwebp 1.0.0 with target size to match the jpgs for fair comparison, also with sharp_yuv -m 6 -noalpha
JPG encoding using mozjpjeg 3.3.1 with -quant-table 4 for personally preferred quality and -baseline to optimize for decode speed

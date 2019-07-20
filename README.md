# WebGL Ray Tracer

I attended a talk given by Eric Haines at GDC 2019 titled 'A Fast Forward Through [Ray Tracing Gems](http://www.realtimerendering.com/raytracinggems)'. Real-time ray tracing was a hot topic at GDC 2019 and Peter Shirley's series of tutorials [writing a ray tracer in just one weekend](http://in1weekend.blogspot.com/2016/01/ray-tracing-in-one-weekend.html) was mentioned in passing.

Inspired by what I'd seen I started this project to see if it was possible to write a ray tracer utilzing the awesome compute power of the GPU and put it on the World Wide Web.


![shot1](./screenshots/shot1.png)

![shot2](./screenshots/shot2.png)


What I ended up with in ray tracing terminology is a path tracer. It requires a large quantity of rays to be fired through each pixel in a stochastic manner. You pay for it in terms of time and compute power but it does produce really nice visuals like soft shadows, ambient occlusion and accurate blurred reflections. These effects are difficult to achieve using a 3D rasterizer but here you essentially get them for free with a path tracer.

To allow anyone to easily view my handiwork, it made sense again to use Javascript, WebGL and GLSL. There's no install requirement, which is one of the reasons why I think the web browser reigns supreme.

#Technical Details

This web app makes use of several features introduced in WebGL 2 including:
- Removal of loop restrictions (very important).
- Use of new texture formats to hold random seed, mesh, material and BVH data.
- Texture arrays to store multiple BVH trees.
- Direct texel lookup using texelFetch.


![shot3](./screenshots/shot3.png)


The Javascript portion of the app reads Wavefront OBJ files, creates one or more BVH trees before pushing all this data on to the GPU. It's other purpose is to handle user input as well as user interaction with the camera.

The main GLSL fragment shader is the beating heart of the program. It handles:

- Pseudo random number generation.
- Bounding volume hierarchy traversal.
- Ray to AABB intersection testing.
- Ray to triangle intersection testing.
- Barycentric coordinates.
- Recursion (via looping).


![shot4](./screenshots/shot4.png)


This rather long shader is used to progressively build the final image via multiple rendering passes. It's done this way so the browser doesn't kill the program thinking it's gone rogue, which would happen if the shader took too long to finish. As a side bonus it also allows a decent level of real-time interaction.

# OpenAI-React-App
OpenAI Project to build AI applications using the OpenAI APIs. Learn how to generate or manipulate images with DALL·E models 
using React.js and Node.js

## Image generation
The Images API provides three methods for interacting with images:
1. Creating images from scratch based on a text prompt
2. Creating edits of an existing image based on a new text prompt
3. Creating Variations of an existing image

This guide covers the basics of using these three API endpoints with useful code samples.

### Usage
#### 1. Generations
The image generations endpoint allows you to create an original image given a text prompt. Generated images can have a size of 
256x256, 512x512, or 1024x1024 pixels. Smaller sizes are faster to generate. You can request 1-10 images at a time using 
the n parameter.

```
const response = await openai.createImage({
  prompt: "mona lisa",
  n: 1,
  size: "1024x1024",
});
image_url = response.data.data[0].url;
```

The more detailed the description, the more likely you are to get the result that you or your end user want.

#### 2. Edits
The image edits endpoint allows you to edit and extend an image by uploading a mask. The transparent areas of the mask indicate where 
the image should be edited, and the prompt should describe the full new image, **not just the erased area**.

```
const response = await openai.createImageEdit(
  fs.createReadStream("sunlit_lounge.png"),
  fs.createReadStream("mask.png"),
  "A sunlit indoor lounge area with a pool containing a flamingo",
  1,
  "1024x1024"
);
image_url = response.data.data[0].url;
```
The uploaded image and mask must both be square PNG images less than 4MB in size, and also must have the same dimensions as each other.

#### 3. Variations
The image variations endpoint allows you to generate a variation of a given image.

```
const response = await openai.createImageVariation(
  fs.createReadStream("corgi_and_cat_paw.png"),
  1,
  "1024x1024"
);
image_url = response.data.data[0].url;
```
Similar to the edits endpoint, the input image must be a square PNG image less than 4MB in size.

### Content Moderation
Prompts and images are filtered based on the OpenAI [content policy](https://labs.openai.com/policies/content-policy), returning an error when a prompt or image is flagged. 
If you have any feedback on false positives or related issues, please contact us through [OpenAI help center](https://help.openai.com/en/).

### Error Handling
API requests can potentially return errors due to invalid inputs, rate limits, or other issues. These errors can be handled with a 
`try...catch` statement, and the error details can be found in either `error.response` or `error.message`:

```
try {
  const response = await openai.createImageVariation(
    fs.createReadStream("image.png"),
    1,
    "1024x1024"
  );
  console.log(response.data.data[0].url);
} catch (error) {
  if (error.response) {
    console.log(error.response.status);
    console.log(error.response.data);
  } else {
    console.log(error.message);
  }
}
```
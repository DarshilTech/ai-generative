const fabric = require("fabric").fabric;
import { toast } from 'react-toastify';
import React, { use } from 'react';

var canvas: any = '';
const loadCanvas = () => {
  if (!canvas) {
    canvas = new fabric.Canvas('canvas', {
      // Name of the wrapper class to be used on the canvas
      containerClass: "border",
      // Width of the canvas
      width: 1200,
      // Height of the canvas
      height: 500,
    });
  }
}
function keyEvent(event: any) {
  if (event.keyCode === 46) {
    deleteObject();
  }
}
const Addtextbox = () => {
  const text = new fabric.IText('Tap and Type', {
    left: 50,
    top: 100,
    fill: 'red'
  });
  canvas.add(text);
  canvas.setActiveObject(text);
  canvas.renderAll();
  canvasOnload();
}
const handleClick = () => {
  console.log('testss')
}
const fiePutOnCanvas = (e: any) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function (f: any) {
    const data = f.target.result;
    fabric.Image.fromURL(data, function (img: any) {
      img.scaleToWidth(200);
      img.scaleToHeight(200);
      canvas.add(img);
      canvas.setActiveObject(img);
      canvas.renderAll();
      canvasOnload();
    });
  }
  reader.readAsDataURL(file);

}
const downloadImage = () => {
  const data = canvas.toDataURL({
    format: 'png',
    quality: 1
  });
  const a = document.createElement('a');
  a.href = data;
  a.download = 'image.png';
  a.click();
}
function onObjectSelected(event: any) {
  if (event.target == null) return;
  console.log('onObjectSelected');
}
function objectScaling() {
  console.log('objectScaling');
}
function onSelectedCleared() {
  console.log('onSelectedCleared');
}
function onCanvasmousedown() {
  console.log('onCanvasmousedown');
  console.log(canvas.getActiveObject());
}
function updateModifications() {
  console.log('updateModifications');
  canvasAnyBobjectOutOfAlert();
}
function onObjectMoving() {
  console.log('onObjectMoving');
  // canvasAnyBobjectOutOfAlert();

}
function deleteObject() {
  if (!canvas.getActiveObject()) alert('Please select object to delete');
  canvas.remove(canvas.getActiveObject());
  canvas.renderAll();
}
function canvasOnload() {
  document.addEventListener('keydown', keyEvent);
  canvas.on({
    "object:scaling": objectScaling,
    "object:selected": onObjectSelected,
    "selection:cleared": onSelectedCleared,
    "mouse:down": onCanvasmousedown,
    "object:added": updateModifications,
    "object:modified": updateModifications,
    "object:moving": onObjectMoving,
  });
  /**
   * Custom Functionality Developed
   */
  canvas.on({
    "selection:updated": handleClick(),
    "selection:created": handleClick(),
    "after:render": function () {
      console.log('after:render');
      //  canvasAnyBobjectOutOfAlert();
    },
  });
  canvas.on("object:over", function (e: any) {
    console.log('object:over');
  });
  canvas.on("object:out", function (e: any) {
    console.log('object:out');
  });
  canvas.renderAll();
}
function canvasAnyBobjectOutOfAlert() {

  if (canvas) {
    if (canvas._objects.length) {
      var canvasObjStatusWar = true;
      canvas._objects.forEach((obj: object) => {
        if (canvasObjStatusWar && obj) {
          if (objectOutOfCanvasDisplayAlert(obj)) {
            // toast.remove();
            toast.dismiss()
            toast.error('Object is out of canvas');
            console.log('objectOutOfCanvasDisplayAlert');
            canvasObjStatusWar = false;
          }
        }
      });
    } else {
      console.log('canvasObjStatusWar');
    }
  }
}
function objectOutOfCanvasDisplayAlert(obj: any) {
  obj.setCoords();
  if (
    obj.getBoundingRect().top < 0 ||
    obj.getBoundingRect().left < 0 ||
    obj.getBoundingRect().top + obj.getBoundingRect().height >
    obj.canvas.height ||
    obj.getBoundingRect().left + obj.getBoundingRect().width >
    obj.canvas.width
  ) {
    return true;
  } else {
    return false;
  }
}
export default function Main({ reset }: { reset: any }) {
  if (reset) {
    canvas = '';
  }
  setTimeout(() => {
    loadCanvas();
  }, 300)

  return (
    <div className="w-full">
      <div className="w-full flex justify-center items-center" >
        <canvas id="canvas" />
      </div>
      <div className="flex gap-2 mt-2 justify-center">
        <button className="border p-1 hover:bg-[#0E122D] transition-all ease-in delay-75" type="button" onClick={Addtextbox}>Add text Box</button>
        <input type="file" name="file" id="file" className="border p-1 hover:bg-[#0E122D] transition-all ease-in delay-75" onChange={fiePutOnCanvas} />
        <button className="border p-1 hover:bg-[#0E122D] transition-all ease-in delay-75" type="button" onClick={downloadImage}>Download Image</button>
        <button className="border p-1 hover:bg-[#0E122D] transition-all ease-in delay-75" type="button" onClick={deleteObject}>Delete!</button>
      </div>
    </div>
  )
}
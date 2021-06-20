class SvgToPngConverter {
    init = () => {
      this.canvas = document.createElement("canvas");
      this.imgPreview = document.createElement("img");
      this.imgPreview.style = "position: absolute; top: -9999px";
  
      document.body.appendChild(this.imgPreview);
      this.canvasCtx = this.canvas.getContext("2d");
    }
  
    cleanUp = () => {
      document.body.removeChild(this.imgPreview);
    }
  
    convertFromInput = (input, callback) => {
      this.init();
      let _this = this;
      this.imgPreview.onload = function() {
        const img = new Image();
        _this.canvas.width = _this.imgPreview.clientWidth;
        _this.canvas.height = _this.imgPreview.clientHeight;
        img.crossOrigin = "anonymous";
        img.src = _this.imgPreview.src;
        img.onload = function() {
          _this.canvasCtx.drawImage(img, 0, 0);
          let imgData = _this.canvas.toDataURL("image/png");
          if(typeof callback == "function"){
              callback(imgData)
          }
          _this.cleanUp();
        };
      };
  
      this.imgPreview.src = input;
    }
  }

  export default SvgToPngConverter

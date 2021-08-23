export default class PIXITextures {
  constructor() {
  }
  /**
     * Generate CSS Text of texture in-order to be used in Styles of html element
     * @param {PIXI.Texture} texture 
     * @param {Number} width 
     * @param {Number} height 
     * @param {String} transformOrigion 
     * @param {Object} marginOptions 
     * @returns String
     */
  texture2CSS(texture, width, height, transformOrigion = 'top left', marginOptions = {
        top: false,
        left: false,
        right: false,
        bottom: false
    }) {
        let value = 'background: url(\'' + texture.baseTexture.imageUrl + '\') -' + texture.orig.x + 'px -' + texture.orig.y +
            'px no-repeat; width: ' + texture.orig.width + 'px; height: ' + texture.orig.height + 'px; overflow: hidden;' +
            'transform: scaleX(' + (width / texture.orig.width) + ') scaleY(' + (height / texture.orig.height) + '); transform-origin: ' + transformOrigion + ';'; //  translate(' + distance + 'px, ' + distance + 'px)
        if (!marginOptions) return value;
        if (marginOptions.top === false && marginOptions.left === false && marginOptions.right === false && marginOptions.bottom === false) return value;
        if (marginOptions.top !== false) {
            let mTop = marginOptions.top;
            if (transformOrigion === 'center') mTop += (height - texture.orig.height) * 0.5;
            if (transformOrigion.indexOf('bottom') >= 0) mTop += (height - texture.orig.height);
            value += ' margin-top: ' + (mTop) + 'px;';
        }
        if (marginOptions.bottom !== false) {
            let mBottom = marginOptions.bottom;
            if (transformOrigion === 'center') mBottom += (height - texture.orig.height) * 0.5;
            if (transformOrigion.indexOf('top') >= 0) mBottom += (height - texture.orig.height);
            value += ' margin-bottom: ' + (mBottom) + 'px;';
        }
        if (marginOptions.left !== false) {
            let mLeft = marginOptions.left;
            if (transformOrigion === 'center') mLeft += (width - texture.orig.width) * 0.5;
            if (transformOrigion.indexOf('right') >= 0) mLeft += (width - texture.orig.width);
            value += ' margin-left: ' + (mLeft) + 'px;';
        }
        if (marginOptions.right !== false) {
            let mRight = marginOptions.right;
            if (transformOrigion === 'center') mRight += (width - texture.orig.width) * 0.5;
            if (transformOrigion.indexOf('left') >= 0) mRight += (width - texture.orig.width);
            value += ' margin-right: ' + (mRight) + 'px;';
        }
        return value;
    }
}

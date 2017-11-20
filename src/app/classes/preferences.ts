export class Preferences {

    /* ATTRIBUTES */
    theme: String = '#5d84b3';
    fontSize: String = '16px';
    scale: Number = 1;

    /**
     *  constructor
     */
    constructor(preferences?: any) {
      this.theme = preferences ? preferences.theme : '#5d84b3';
      this.scale = preferences ? preferences.scale : 1;
      this.fontSize = this.getFontSize();
    }

    /**
     * get font-size based on scale
     */
    getFontSize() {
      switch(this.scale) {
        case 1: return '14px';
        case 2: return '16px';
        case 3: return '18px';
        case 4: return '20px';
        case 5: return '22px';
        default: return '14px';
      }
    }
  }

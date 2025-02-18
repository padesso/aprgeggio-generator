export const scenes = {
    "happy": {
        "backgroundImage": "./images/happy/ocean-bg.jpg",
        "effectors" : [
            // {"effect": "chorus", "shader": "bloomShader", "position": [0, 0], "size" : [100, 100] }, 
            // {"effect": "bitCrusher", "shader": "pixelateShader", "position": [300, 0], "size" : [100, 100]  },
            // {"effect": "reverb", "shader": "glitchShader", "position": [600, 0], "size" : [100, 100]  },
            // {"effect": "delay", "shader": "trailsShader", "position": [900, 0], "size" : [100, 100]  },
            // {"effect": "distortion", "shader": "noiseShader", "position": [0, 300], "size" : [100, 100]  },
            { "effect": "phaser", "shader": "rippleShader", "position": [0, 474], "size" : [1280, 264] },
            // {"effect": "vibrato", "shader": "waveShader", "position": [600, 300], "size" : [100, 100]  }
        ],
        "particles": {
            "texture": "./images/particles/happy-particle.png",
            "color": 0xFFC0CB
        } //TODO: add other particle properties
    },
    "sad": {
        "backgroundImage": "./images/sad/sad-bg.jpg",
        "effectors" : [
            {"effect": "chorus", "shader": "bloomShader", "position": [0, 0], "size" : [100, 100] }, 
            {"effect": "bitCrusher", "shader": "pixelateShader", "position": [200, 0], "size" : [100, 100]  },
            {"effect": "reverb", "shader": "glitchShader", "position": [400, 0], "size" : [100, 100]  },
            {"effect": "delay", "shader": "trailsShader", "position": [600, 0], "size" : [100, 100]  },
            {"effect": "distortion", "shader": "noiseShader", "position": [0, 300], "size" : [100, 100]  },
            {"effect": "phaser", "shader": "rippleShader", "position": [200, 300], "size" : [100, 100]  },
            {"effect": "vibrato", "shader": "waveShader", "position": [400, 300], "size" : [100, 100]  }
        ],
        "particles": {
            "texture": "./images/particles/sad-particle.png",
            "color": 0x00ff00
        } //TODO: add other particle properties
    },
    "angry": {
        "backgroundImage": "./images/angry/angry-bg.jpg",
        "effectors" : [
            {"effect": "chorus", "shader": "bloomShader", "position": [0, 0], "size" : [100, 100] }, 
            {"effect": "bitCrusher", "shader": "pixelateShader", "position": [200, 0], "size" : [100, 100]  },
            {"effect": "reverb", "shader": "glitchShader", "position": [400, 0], "size" : [100, 100]  },
            {"effect": "delay", "shader": "trailsShader", "position": [600, 0], "size" : [100, 100]  },
            {"effect": "distortion", "shader": "noiseShader", "position": [0, 300], "size" : [100, 100]  },
            {"effect": "phaser", "shader": "rippleShader", "position": [200, 300], "size" : [100, 100]  },
            {"effect": "vibrato", "shader": "waveShader", "position": [400, 300], "size" : [100, 100]  }
        ],
        "particles": {
            "texture": "./images/particles/angry-particle.png",
            "color": 0xff0000
        } //TODO: add other particle properties
    },
    "nostalgic": {
        "backgroundImage": "./images/nostalgic/nostalgic-bg.jpg",
        "effectors" : [
            {"effect": "chorus", "shader": "bloomShader", "position": [0, 0], "size" : [100, 100] }, 
            {"effect": "bitCrusher", "shader": "pixelateShader", "position": [200, 0], "size" : [100, 100]  },
            {"effect": "reverb", "shader": "glitchShader", "position": [400, 0], "size" : [100, 100]  },
            {"effect": "delay", "shader": "trailsShader", "position": [600, 0], "size" : [100, 100]  },
            {"effect": "distortion", "shader": "noiseShader", "position": [0, 300], "size" : [100, 100]  },
            {"effect": "phaser", "shader": "rippleShader", "position": [200, 300], "size" : [100, 100]  },
            {"effect": "vibrato", "shader": "waveShader", "position": [400, 300], "size" : [100, 100]  }
        ],
        "particles": {
            "texture": "./images/particles/nostalgic-particle.png",
            "color": 0x000000
        } //TODO: add other particle properties
    },
    "serene": {
        "backgroundImage": "./images/serene/serene-bg.jpg",
        "effectors" : [
            {"effect": "chorus", "shader": "bloomShader", "position": [0, 0], "size" : [100, 100] }, 
            {"effect": "bitCrusher", "shader": "pixelateShader", "position": [200, 0], "size" : [100, 100]  },
            {"effect": "reverb", "shader": "glitchShader", "position": [400, 0], "size" : [100, 100]  },
            {"effect": "delay", "shader": "trailsShader", "position": [600, 0], "size" : [100, 100]  },
            {"effect": "distortion", "shader": "noiseShader", "position": [0, 300], "size" : [100, 100]  },
            {"effect": "phaser", "shader": "rippleShader", "position": [200, 300], "size" : [100, 100]  },
            {"effect": "vibrato", "shader": "waveShader", "position": [400, 300], "size" : [100, 100]  }
        ],
        "particles": {
            "texture": "./images/particles/serene-particle.png",
            "color": 0x00ff00
        } //TODO: add other particle properties
    },
    "spooky": {
        "backgroundImage": "./images/spooky/spooky-bg.jpg",
        "effectors" : [
            {"effect": "chorus", "shader": "bloomShader", "position": [0, 0], "size" : [100, 100] }, 
            {"effect": "bitCrusher", "shader": "pixelateShader", "position": [200, 0], "size" : [100, 100]  },
            {"effect": "reverb", "shader": "glitchShader", "position": [400, 0], "size" : [100, 100]  },
            {"effect": "delay", "shader": "trailsShader", "position": [600, 0], "size" : [100, 100]  },
            {"effect": "distortion", "shader": "noiseShader", "position": [0, 300], "size" : [100, 100]  },
            {"effect": "phaser", "shader": "rippleShader", "position": [200, 300], "size" : [100, 100]  },
            {"effect": "vibrato", "shader": "waveShader", "position": [400, 300], "size" : [100, 100]  }
        ],
        "particles": {
            "texture": "./images/particles/spooky-particle.png",
            "color": 0x00ff00
        } //TODO: add other particle properties
    },
};

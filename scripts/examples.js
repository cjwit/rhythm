import { createDrumSampler } from './audio.js';
var drumSampler = createDrumSampler();

//
// examples
//

 var example1 = {
  title: "Example 1: a basic rock beat",
  tag: "example1",
  loops: [
    {
      btnText: "Play loop",
      tempo: 108,
      parts: [
        {
          name: "High hat",
          note: "A1",
          source: drumSampler,
          show: true,
          pattern: [1, 1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: "Snare drum",
          note: "A2",
          source: drumSampler,
          show: true,
          pattern: [0, 0, 1, 0, 0, 0, 1, 0],
        },
        {
          name: "Kick drum",
          note: "A3",
          source: drumSampler,
          show: true,
          pattern: [1, 0, 0, 0, 1, 0, 0, 1],
        }
      ]  
    }
  ]
}

 var example2 = {
  title: "Example 2: a Cuban rumba clave pattern",
  tag: "example2",
  loops: [
    {
      btnText: "Play loop",
      tempo: 200,
      parts: [
        {
          name: "Clave",
          pattern: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
          note: "A4",
          show: false,
          source: drumSampler,
        }
      ]
    
    }
  ]
}

 var example3 = {
  title: "Example 3: a Cuban rumba clave pattern",
  tag: "example3",
  loops: [
    {
      btnText: "Play loop",
      tempo: 200,
      parts: [
        {
          name: "Clave",
          pattern: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
          note: "A4",
          source: drumSampler,
          show: true,
        },
        {
          name: "Start",
          pattern: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          note: "A3",
          source: drumSampler,
          show: false,
        }
      ]
    }
  ]
}

 var example4 = {
  title: "Example 4: a rumba pattern with a different marked starting point",
  tag: "example4",
  loops: [
    {
      btnText: "Play loop",
      tempo: 200,
      parts: [
        {
          name: "Clave",
          pattern: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
          note: "A4",
          source: drumSampler,
          show: true,
        },
        {
          name: "Start",
          pattern: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
          note: "A3",
          source: drumSampler,
          show: false,
        }
      ]
    }
  ]
}

 var example5 = {
  title: 'Example 5: the "American clave"',
  tag: "example5",
  loops: [
    {
      btnText: "Play loop",
      tempo: 200,
      parts: [
        {
          name: "Clave",
          pattern: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
          note: "A4",
          source: drumSampler,
          show: true,
        },
        {
          name: "Start",
          pattern: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          note: "A3",
          source: drumSampler,
          show: false,
        }
      ]
    
    }
  ]
}

 var example6 = {
  title: 'Example 6: the "dembow" pattern',
  tag: "example6",
  loops: [
    {
      btnText: "Play loop", 
      tempo: 200,
      parts: [
        {
          name: "Snare drum",
          pattern: [0, 0, 0, 1, 0, 0, 1, 0],
          note: "A2",
          source: drumSampler,
          show: true,
        },
        {
          name: "Kick drum",
          pattern: [1, 0, 0, 0, 1, 0, 0, 0],
          note: "A3",
          source: drumSampler,
          show: true,
        }
      ]    
    }
  ]
}

// part 2 examples
 var example7 = {
  title: "Example 7: Malhun drum pattern",
  tag: "example7",
  loops: [
    {
      btnText: "Play loop",
      tempo: 220,
      parts: [
        {
          name: "Drum 1",
          note: "A6",
          source: drumSampler,
          show: true,
          pattern: [1, 0, 0, 0, 1, 0, 0, 0],
        },
        {
          name: "Drum 2",
          note: "A7",
          source: drumSampler,
          show: true,
          pattern: [0, 0, 0, 1, 0, 0, 1, 0],
        }
      ]
    }
  ]
}

 var example8 = {
  title: "Example 8: Try it out",
  tag: "example8",
  loops: [
    {
      btnText: "Play loop",
      tempo: 220,
      parts: [
        {
          name: "Drum 1",
          note: "A6",
          source: drumSampler,
          show: true,
          pattern: [1, 0, 0, 0, 1, 0, 0, 0],
        },
        {
          name: "Drum 2",
          pattern: [0, 0, 0, 1, 0, 0, 1, 0],
          source: drumSampler,
          note: "A7",
          show: true,
        }
      ]    
    },
    {
      btnText: "Drum 1 alone",
      tempo: 220,
      parts: [
        {
          name: "Drum 1",
          pattern: [1, 0, 0, 0, 1, 0, 0, 0],
          source: drumSampler,
          note: "A6",
          show: true,
        },
      ]
    },
    {
      btnText: "Drum 2 alone",
      tempo: 220,
      parts: [
        {
          name: "Drum 2",
          pattern: [0, 0, 0, 1, 0, 0, 1, 0],
          source: drumSampler,
          note: "A7",
          show: true,
        }
      ]
    }
  ]
}

// part 3 examples
 var example9 = {
  title: "Example 9: An explicit pulse",
  tag: "example9",
  loops: [
    {
      btnText: "Play loop",
      tempo: 108,
      parts: [
        {
          name: "Snare drum",
          pattern: [0, 0, 1, 0, 0, 0, 1, 0],
          note: "A2",
          source: drumSampler,
          show: true,
        },
        {
          name: "Kick drum",
          pattern: [1, 0, 0, 1, 1, 0, 0, 0],
          note: "A3",
          source: drumSampler,
          show: true,
        },
        {
          name: "Clave",
          pattern: [1, 0, 1, 0, 1, 0, 1, 0],
          note: "A4",
          source: drumSampler,
          show: false,
        },
      ]    
    }
  ]
}

var example10 = {
  title: "Example 10: Can you feel it?",
  tag: "example10",
  loops: [
    {
      btnText: "Play loop",
      tempo: 108,
      parts: [
        {
          name: "Snare drum",
          pattern: [0, 0, 1, 0, 0, 0, 1, 0],
          note: "A2",
          source: drumSampler,
          show: true,
        },
        {
          name: "Kick drum",
          pattern: [1, 0, 0, 1, 0, 1, 0, 0],
          note: "A3",
          source: drumSampler,
          show: true,
        }
      ]    
    },
    {
      btnText: "Add pulse",
      tempo: 108,
      parts: [
        {
          name: "Snare drum",
          pattern: [0, 0, 1, 0, 0, 0, 1, 0],
          note: "A2",
          source: drumSampler,
          show: true,
        },
        {
          name: "Kick drum",
          pattern: [1, 0, 0, 1, 0, 1, 0, 0],
          note: "A3",
          source: drumSampler,
          show: true,
        },
        {
          name: "Clave",
          pattern: [1, 0, 1, 0, 1, 0, 1, 0],
          note: "A4",
          source: drumSampler,
          show: false,
        },
      ]    
    }
  ]
}

// TODO example 11

var example12 = {
  title: "Example 12: Different pulses",
  tag: "example12",
  loops: [
    {
      btnText: "Play loop",
      tempo: 108,
      parts: [
        {
          name: "Snare drum",
          pattern: [0, 0, 0, 0, 0, 1, 0, 0],
          note: "A2",
          source: drumSampler,
          show: true,
        },
        {
          name: "Kick drum",
          pattern: [1, 0, 0, 1, 1, 0, 0, 0],
          note: "A3",
          source: drumSampler,
          show: true,
        },
        {
          name: "Pulse 1",
          pattern: [1, 0, 1, 0, 1, 0, 1, 0],
          note: "A4",
          source: drumSampler,
          show: false,
        },
      ],  
    },
    {
      btnText: "Try a slower pulse",
      tempo: 108,
      parts: [
        {
          name: "Snare drum",
          pattern: [0, 0, 0, 0, 0, 1, 0, 0],
          note: "A2",
          source: drumSampler,
          show: true,
        },
        {
          name: "Kick drum",
          pattern: [1, 0, 0, 1, 1, 0, 0, 0],
          note: "A3",
          source: drumSampler,
          show: true,
        },
        {
          name: "Pulse 2",
          pattern: [1, 0, 0, 0, 1, 0, 0, 0],
          note: "A4",
          source: drumSampler,
          show: false,
        },
      ]
    },
  ]
}

var example13 = {
  title: "Example 13: The sama'i pattern",
  tag: "example13",
  loops: [
    {
      btnText: "Play loop",
      tempo: 52,
      parts: [
        {
          name: "Tek",
          pattern: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
          note: "A6",
          source: drumSampler,
          show: true,
        },
        {
          name: "Dum",
          pattern: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
          note: "A8",
          source: drumSampler,
          show: true,
        },
        {
          name: "Pulse",
          pattern: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
          note: "A4",
          source: drumSampler,
          show: false,
        }
      ]    
    }
  ]
}

var example14 = {
  title: "Example 14: a West African bell pattern",
  tag: "example14",
  loops: [
    {
      btnText: "Play loop",
      tempo: 108,
      parts: [
        {
          name: "Bell",
          pattern: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
          note: "A9",
          source: drumSampler,
          show: true,
        },
        {
          name: "Pulse 1",
          pattern: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          note: "A4",
          source: drumSampler,
          show: false,
        }
      ]    
    },
    {
      btnText: "Try a different pulse",
      tempo: 108,
      parts: [
        {
          name: "Bell",
          pattern: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
          note: "A9",
          source: drumSampler,
          show: true,
        },
        {
          name: "Pulse 2",
          pattern: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
          note: "A4",
          source: drumSampler,
          show: false,
        },
      ]    
    },
  ]
}

var example15 = {
  title: "Example 15: \"Mi Buenos Aires querido\" by Carlos Gardel (1934)",
  tag: "example15",
  loops: [
    {
      btnText: "Play (marking the beat)",
      tempo: 115,
      audio: "./mi-buenos-aires-querido.mp3",
      parts: [
        {
          name: "Measure",
          pattern: [1, 0, 0, 0, 0, 0, 0, 0],
          note: null,
          source: drumSampler,
          show: true,
        },
        {
          name: "Beat",
          pattern: [1, 0, 1, 0, 1, 0, 1, 0],
          note: "A4",
          source: drumSampler,
          show: true,
        },
        {
          name: "Subdivision",
          pattern: [1, 1, 1, 1, 1, 1, 1, 1],
          note: null,
          source: drumSampler,
          show: true,
        }
      ]    
    },
    {
      btnText: "Mark the measure",
      tempo: 115,
      audio: "./mi-buenos-aires-querido.mp3",
      parts: [
        {
          name: "Measure",
          pattern: [1, 0, 0, 0, 0, 0, 0, 0],
          note: "A4",
          source: drumSampler,
          show: true,
        },
        {
          name: "Beat",
          pattern: [1, 0, 1, 0, 1, 0, 1, 0],
          note: null,
          source: drumSampler,
          show: true,
        },
        {
          name: "Subdivision",
          pattern: [1, 1, 1, 1, 1, 1, 1, 1],
          note: null,
          source: drumSampler,
          show: true,
        }
      ]    
    },
    {
      btnText: "Mark the subdivision",
      tempo: 115,
      audio: "./mi-buenos-aires-querido.mp3",
      parts: [
        {
          name: "Measure",
          pattern: [1, 0, 0, 0, 0, 0, 0, 0],
          note: null,
          source: drumSampler,
          show: true,
        },
        {
          name: "Beat",
          pattern: [1, 0, 1, 0, 1, 0, 1, 0],
          note: null,
          source: drumSampler,
          show: true,
        },
        {
          name: "Subdivision",
          pattern: [1, 1, 1, 1, 1, 1, 1, 1],
          note: "A4",
          source: drumSampler,
          show: true,
        }
      ]    
    },
  ]
}

var example16 = {
  title: "Example 16: \"Honeymoon Waltz\" by Doc Watson",
  tag: "example16",
  loops: [
    {
      btnText: "Play (marking the beat)",
      tempo: 117.5,
      audio: "./honeymoon-waltz.mp3",
      parts: [
        {
          name: "Measure",
          pattern: [1, 0, 0, 0, 0, 0],
          note: null,
          source: drumSampler,
          show: true,
        },
        {
          name: "Beat",
          pattern: [1, 0, 1, 0, 1, 0],
          note: "A4",
          source: drumSampler,
          show: true,
        },
        {
          name: "Subdivision",
          pattern: [1, 1, 1, 1, 1, 1],
          note: null,
          source: drumSampler,
          show: true,
        }
      ]    
    },
    {
      btnText: "Mark the measure",
      tempo: 117.5,
      audio: "./honeymoon-waltz.mp3",
      parts: [
        {
          name: "Measure",
          pattern: [1, 0, 0, 0, 0, 0],
          note: "A4",
          source: drumSampler,
          show: true,
        },
        {
          name: "Beat",
          pattern: [1, 0, 1, 0, 1, 0],
          note: null,
          source: drumSampler,
          show: true,
        },
        {
          name: "Subdivision",
          pattern: [1, 1, 1, 1, 1, 1],
          note: null,
          source: drumSampler,
          show: true,
        }
      ]    
    },
    {
      btnText: "Mark the subdivision",
      tempo: 117.5,
      audio: "./honeymoon-waltz.mp3",
      parts: [
        {
          name: "Measure",
          pattern: [1, 0, 0, 0, 0, 0],
          note: null,
          source: drumSampler,
          show: true,
        },
        {
          name: "Beat",
          pattern: [1, 0, 1, 0, 1, 0],
          note: null,
          source: drumSampler,
          show: true,
        },
        {
          name: "Subdivision",
          pattern: [1, 1, 1, 1, 1, 1],
          note: "A4",
          source: drumSampler,
          show: true,
        }
      ]    
    },
  ]
}

var example17 = {
  title: "Example 17: Use the slider to change the subdivision",
  tag: "example17",
  loops: [
    {
      btnText: "Play loop",
      tempo: 100,
      parts: [
        {
          name: "Cymbal",
          pattern: [1, 1, 1, 1, 1, 1, 1, 1],
          note: "A1",
          source: drumSampler,
          show: true,
        },
        {
          name: "Snare drum",
          pattern: [0, 0, 0, 0, 1, 0, 0, 0],
          note: "A2",
          source: drumSampler,
          show: true,
        },
        {
          name: "Kick drum",
          pattern: [1, 0, 0, 0, 0, 0, 0, 0],
          note: "A3",
          source: drumSampler,
          show: true,
        }
      ]    
    }
  ]
}

// part 4 examples
var example18 = {
  title: "Example 18: A pattern from the Hamadsha",
  tag: "example18",
  loops: [
    {
      btnText: "Play loop",
      tempo: 108,
      parts: [
        {
          name: "Drum",
          pattern: [1, 0, 1, 0, 0],
          note: "A6",
          source: drumSampler,
          show: true,
        },
        {
          name: "Pulse",
          pattern: [1, 1, 1, 1, 1],
          note: "A4",
          source: drumSampler,
          show: false,
        }
      ]    
    }
  ]
}

var example21 = {
  title: "Example 21: A pattern with uneven beats",
  tag: "example21",
  loops: [
    {
      btnText: "Play loop",
      tempo: 108,
      parts: [
        {
          name: "Pulse",
          pattern: [1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0],
          boxWidths: [2.0/12, 3.0/12, 2.0/12, 2.0/12, 3.0/12],
          boxPattern: [1, 1, 1, 1, 1],
          note: "A4",
          source: drumSampler,
          show: true,
        }
      ]    
    }
  ]
}

var example22 = {
  title: "Example 22: Al-unasa al-saghira",
  tag: "example22",
  loops: [
    {
      btnText: "Play loop",
      tempo: 138,
      parts: [
        {
          name: "Drum 1",
          pattern: [1, 0, 0, 0, 
                    1, 0, 0, 0, 0, 0, 
                    1, 0, 0, 0,
                    1, 0, 0, 0,
                    0, 0, 0, 0, 0, 0],
          boxWidths: [2.0/24, 2.0/24, 
                      3.0/24, 3.0/24, 
                      2.0/24, 2.0/24, 
                      2.0/24, 2.0/24, 
                      3.0/24, 3.0/24],
          boxPattern: [1, 0, 1, 0, 1, 0, 1, 0, 0, 0],
          note: "A6",
          source: drumSampler,
          show: true,
        },
        {
          name: "Drum 2",
          pattern: [0, 0, 1, 0, 
                    0, 0, 0, 1, 0, 0, 
                    0, 0, 0, 0,
                    0, 0, 1, 0,
                    1, 0, 0, 0, 0, 0],
          boxWidths: [2.0/24, 2.0/24, 
                      3.0/24, 3.0/24, 
                      2.0/24, 2.0/24, 
                      2.0/24, 2.0/24, 
                      3.0/24, 3.0/24],
          boxPattern: [0, 1, 0, 1, 0, 0, 0, 1, 1, 0],
          note: "A7",
          source: drumSampler,
          show: true,
        },
        {
          name: "Pulse",
          pattern: [1, 0, 0, 0, 
                    1, 0, 0, 0, 0, 0, 
                    1, 0, 0, 0,
                    1, 0, 0, 0,
                    1, 0, 0, 0, 0, 0],
          boxWidths: [2.0/24, 2.0/24, 
                      3.0/24, 3.0/24, 
                      2.0/24, 2.0/24, 
                      2.0/24, 2.0/24, 
                      3.0/24, 3.0/24],
          boxPattern: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
          note: "A4",
          source: drumSampler,
          show: false,
        }
      ]    
    }
  ]
}

export var examples = {
  1: example1,
  2: example2,
  3: example3,
  4: example4,
  5: example5,
  6: example6,
  7: example7,
  8: example8,
  9: example9,
  10: example10,
  12: example12,
  13: example13,
  14: example14,
  15: example15,
  16: example16,
  17: example17,
  18: example18,
  21: example21,
  22: example22
}
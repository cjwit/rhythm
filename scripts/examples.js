import { createDrumSampler } from './audio.js';
var drumSampler = createDrumSampler();

//
// examples
//

 var example1Data = {
  title: "Example 1: a basic rock beat",
  tag: "example1",
  tempo: 108,
  parts: [
    {
      name: "High hat",
      pattern: [1, 1, 1, 1, 1, 1, 1, 1],
      note: "A1",
      show: true,
    },
    {
      name: "Snare drum",
      pattern: [0, 0, 1, 0, 0, 0, 1, 0],
      note: "A2",
      show: true,
    },
    {
      name: "Kick drum",
      pattern: [1, 0, 0, 0, 1, 0, 0, 1],
      note: "A3",
      show: true,
    }
  ]
}

 var example2Data = {
  title: "Example 2: a Cuban rumba clave pattern",
  tag: "example2",
  tempo: 200,
  parts: [
    {
      name: "Clave",
      pattern: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
      note: "A4",
      show: false,
    }
  ]
}

 var example3Data = {
  title: "Example 3: a Cuban rumba clave pattern",
  tag: "example3",
  tempo: 200,
  parts: [
    {
      name: "Clave",
      pattern: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
      note: "A4",
      show: true,
    },
    {
      name: "Start",
      pattern: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      note: "A3",
      show: false,
    }
  ]
}

 var example4Data = {
  title: "Example 4: a rumba pattern with a different marked starting point",
  tag: "example4",
  tempo: 200,
  parts: [
    {
      name: "Clave",
      pattern: [1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
      note: "A4",
      show: true,
    },
    {
      name: "Start",
      pattern: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      note: "A3",
      show: false,
    }
  ]
}

 var example5Data = {
  title: 'Example 5: the "American clave"',
  tag: "example5",
  tempo: 200,
  parts: [
    {
      name: "Clave",
      pattern: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
      note: "A4",
      show: true,
    },
    {
      name: "Start",
      pattern: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      note: "A3",
      show: false,
    }
  ]
}

 var example6Data = {
  title: 'Example 6: the "dembow" pattern',
  tag: "example6",
  tempo: 200,
  parts: [
    {
      name: "Snare drum",
      pattern: [0, 0, 0, 1, 0, 0, 1, 0],
      note: "A2",
      show: true,
    },
    {
      name: "Kick drum",
      pattern: [1, 0, 0, 0, 1, 0, 0, 0],
      note: "A3",
      show: true,
    }
  ]
}

// part 2 examples
 var example7 = {
  title: "Example 7: Malhun drum pattern",
  tag: "example7",
  tempo: 220,
  loops: [
    {
      btnText: "Play loop",
      listener: null,
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
      listener: null,
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
      listener: null,
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
      listener: null,
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
 var example9Data = {
  title: "Example 9: An explicit pulse",
  tag: "example9",
  tempo: 108,
  parts: [
    {
      name: "Snare drum",
      pattern: [0, 0, 1, 0, 0, 0, 1, 0],
      note: "A2",
      show: true,
    },
    {
      name: "Kick drum",
      pattern: [1, 0, 0, 1, 1, 0, 0, 0],
      note: "A3",
      show: true,
    },
    {
      name: "Clave",
      pattern: [1, 0, 1, 0, 1, 0, 1, 0],
      note: "A4",
      show: false,
    },
  ]
}

var example10Data = {
  title: "Example 10: Can you feel it?",
  tag: "example10",
  tempo: 108,
  parts: [
    {
      name: "Snare drum",
      pattern: [0, 0, 1, 0, 0, 0, 1, 0],
      note: "A2",
      show: true,
    },
    {
      name: "Kick drum",
      pattern: [1, 0, 0, 1, 0, 1, 0, 0],
      note: "A3",
      show: true,
    },
    {
      name: "Clave",
      pattern: [1, 0, 1, 0, 1, 0, 1, 0],
      note: "A4",
      show: false,
    },
  ]
}

// TODO example 11

var example12Data = {
  title: "Example 12: Different pulses",
  tag: "example12",
  tempo: 108,
  parts: [
    {
      name: "Snare drum",
      pattern: [0, 0, 1, 0, 0, 0, 1, 0],
      note: "A2",
      show: true,
    },
    {
      name: "Kick drum",
      pattern: [1, 0, 0, 1, 0, 1, 0, 0],
      note: "A3",
      show: true,
    },
    {
      name: "Pulse 1",
      pattern: [1, 0, 1, 0, 1, 0, 1, 0],
      note: "A4",
      show: false,
    },
    {
      name: "Pulse 2",
      pattern: [1, 0, 0, 0, 1, 0, 0, 0],
      note: "A4",
      show: false,
    },
  ]
}

var example13Data = {
  title: "Example 13: The sama'i pattern",
  tag: "example13",
  tempo: 52,
  parts: [
    {
      name: "Tek",
      pattern: [0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
      note: "A6",
      show: true,
    },
    {
      name: "Dum",
      pattern: [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      note: "A8",
      show: true,
    },
    {
      name: "Pulse",
      pattern: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      note: "A4",
      show: false,
    }
  ]
}

var example14Data = {
  title: "Example 14: a West African bell pattern",
  tag: "example14",
  tempo: 108,
  parts: [
    {
      name: "Bell",
      pattern: [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
      note: "A9",
      show: true,
    },
    {
      name: "Pulse 1",
      pattern: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      note: "A4",
      show: false,
    },
    {
      name: "Pulse 2",
      pattern: [1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0],
      note: "A4",
      show: false,
    },
  ]
}

var example15aData = {
  title: "\"Mi Buenos Aires querido\" by Carlos Gardel (1934)",
  tag: "example15",
  tempo: 115,
  audio: "./mi-buenos-aires-querido.mp3",
  parts: [
    {
      name: "Measure",
      pattern: [1, 0, 0, 0, 0, 0, 0, 0],
      note: "A3",
      show: true,
    },
    {
      name: "Beat",
      pattern: [1, 0, 1, 0, 1, 0, 1, 0],
      note: "A2",
      show: true,
    },
    {
      name: "Subdivision",
      pattern: [1, 1, 1, 1, 1, 1, 1, 1],
      note: "A4",
      show: true,
    }
  ]
}

// part 4 examples
var example18Data = {
  title: "Example 18: A pattern from the Hamadsha",
  tag: "example18",
  tempo: 108,
  parts: [
    {
      name: "Drum",
      pattern: [1, 0, 1, 0, 0],
      note: "A6",
      show: true,
    },
    {
      name: "Pulse",
      pattern: [1, 1, 1, 1, 1],
      note: "A4",
      show: false,
    }
  ]
}

var exampleDefault = {
  title: "Example ??: Not done yet",
  tag: "n/a",
  tempo: 108,
  parts: []
}

export var examples = {
  1: example1Data,
  2: example2Data,
  3: example3Data,
  4: example4Data,
  5: example5Data,
  6: example6Data,
  7: example7,
  8: example8,
  9: example9Data,
  10: example10Data,
  11: exampleDefault,
  12: example12Data,
  13: example13Data,
  14: example14Data,
  "15a": example15aData,
  18: example18Data,
  default: exampleDefault
}
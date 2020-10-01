//
// examples
//

export var example1Data = {
  title: "Example 1: a basic rock beat",
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

export var example2Data = {
  title: "Example 2: a Cuban rumba clave pattern",
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

export var example3Data = {
  title: "Example 3: a Cuban rumba clave pattern",
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

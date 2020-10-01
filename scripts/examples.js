//
// examples
//

export var example1Data = {
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

export var example2Data = {
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

export var example3Data = {
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

export var example4Data = {
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

export var example5Data = {
  title: 'Example 5: the "American clavé"',
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

export var example6Data = {
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

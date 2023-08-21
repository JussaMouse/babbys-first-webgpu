// the ping-pong method for simulations:
// start with 2 copies of the state. for each
// run of the simulation, read from one copy
// and write to the other. on the next run,
// read from the copy you just wrote to, etc.

// move the 1 to the right with each run

let stateA = [1, 0, 0, 0, 0, 0, 0, 0]
let stateB = [1, 0, 0, 0, 0, 0, 0, 0]

function simulate(in_, out_) {
  out_[0] = 0
  for (let i = 1; i < in_.length; i++) {
    out_[i] = in_[i - 1]
  }
}

for (let i = 0; i < 8; i++) {
  if (i % 2 == 0) {
    console.log(`run ${i} in:  ${stateA}`)
    simulate(stateA, stateB)
    console.log(`run ${i} out: ${stateB}`)
  } else {
    console.log(`run ${i} in:  ${stateB}`)
    simulate(stateB, stateA)
    console.log(`run ${i} out: ${stateA}`)
  }
  console.log('=========================')
}

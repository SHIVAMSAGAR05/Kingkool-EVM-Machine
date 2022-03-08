let bjpvotecount = 1;
let spvotecount = 1;
let bspvotecount = 1;

const bjpvote = () => {
  document.getElementById('bjpcount').innerText = bjpvotecount++;
}

const spvote = () => {
  document.getElementById('spcount').innerText = spvotecount++;
}


const bspvote = () => {
  document.getElementById('bspcount').innerText = bspvotecount++;
}


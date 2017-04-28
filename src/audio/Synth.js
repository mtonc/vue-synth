import audioCtx from './context.js';

function Synth() {
  this.ctx = audioCtx;
  this.osc = {}
  this.vol = this.ctx.createGain();
  this.playNote = function(freq, asdr, type = "sine") {
    this.osc = this.ctx.createOscillator();
    this.osc.frequency.value = freq;
    this.osc.type = type;
    this.vol.gain.value = 0.0;
    this.osc.connect(this.vol);
    this.vol.connect(this.ctx.destination);
    this.osc.start();
    this.vol.gain.linearRampToValueAtTime(
      1, this.ctx.currentTime + asdr.attack
    );
    this.vol.gain.linearRampToValueAtTime(
      0.6, this.ctx.currentTime + asdr.decay
    );
  }
  this.stopNote = function(asdr) {
    console.log(asdr);
    this.vol.gain.linearRampToValueAtTime(
      0, this.ctx.currentTime + asdr.release
    );
    this.osc.stop(this.ctx.currentTime + asdr.release);
  this.osc = {};
}
}

export default Synth;

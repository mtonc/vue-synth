import audioCtx from './context.js';

function Synth() {
  this.ctx = audioCtx;
  this.osc = {}
  this.vol = this.ctx.createGain();
  this.playNote = function(freq, type = "sine", volume = 1) {
    this.osc = this.ctx.createOscillator();
    this.osc.frequency.value = freq;
    this.osc.type = type;
    this.vol.gain.value = volume
    this.osc.connect(this.vol);
    this.vol.connect(this.ctx.destination);
    this.osc.start();
  }
  this.stopNote = function() {
    this.vol.gain.exponentialRampToValueAtTime(
      0.00001, this.ctx.currentTime + 0.04
    );
    this.osc.stop(this.ctx.currentTime + 0.04)
  }
  this.start = function() {
    this.osc.start();
  }
}

export default Synth;

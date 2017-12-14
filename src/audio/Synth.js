import audioCtx from './context.js';

function Synth() {
  this.ctx = audioCtx;
  this.osc = {}
  this.lfo = {}
  this.vol = this.ctx.createGain();
  this.filter = this.ctx.createBiquadFilter();
  this.playNote = function(freq, asdr, filter, type = "sine") {
    this.osc = this.ctx.createOscillator();
    this.lfo = this.ctx.createOscillator();
    this.osc.frequency.value = freq;
    this.osc.type = type;
    this.vol.gain.value = 0.0;
    this.filter.type = filter.type
    this.filter.frequency.value = filter.frequency;
    this.filter.gain.value = filter.gain;
    this.lfo.frequency.value = 200.0
    this.lfo.gain = 0.5
    this.lfo.connect(this.vol.gain)
    this.osc.connect(this.filter);
    this.filter.connect(this.vol);
    this.vol.connect(this.ctx.destination);
    this.osc.start(this.ctx.currentTime)
    this.lfo.start(this.ctx.currentTime);
    this.vol.gain.linearRampToValueAtTime(
      1, this.ctx.currentTime + asdr.attack
    );
    this.vol.gain.linearRampToValueAtTime(
      asdr.sustain, this.ctx.currentTime + asdr.decay
    );
  }
  this.stopNote = function(asdr) {
    this.vol.gain.exponentialRampToValueAtTime(
      0.04, this.ctx.currentTime + asdr.release
    );
    this.osc.stop(this.ctx.currentTime + asdr.release);
    this.lfo.stop(this.ctx.currentTime + asdr.release);
    this.osc = {}
    this.lfo = {}
  }
}

export default Synth;

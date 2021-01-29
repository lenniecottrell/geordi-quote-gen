let text = document.querySelector("#randomQuote");
let btn = document.querySelector(".box-3");
let btnText = document.querySelector("#btnText");

//generate a random integer
const randomInt  = (min, max) => {
  let num = Math.floor(Math.random() * (max-min) + min)
  return num;
}


//come back to this 
//https://stackoverflow.com/questions/17233804/how-to-prevent-sticky-hover-effects-for-buttons-on-touch-devices

// function fixMobileHover() {
//   var el = this;
//   var parent = el.parentNode;
//   var next = el.nextSibling;
//   parent.removeChild(el)
//   setTimeout(function() {parent.insertBefore(el, next);}, 0)
// }

const actions = ["refocus", "amplify", "synchronize", "redirect", "recalibrate", "modulate", "oscillate", "intensify", "nullify", "boost", "reverse", "reconfigure", "actuate", "focus", "invert", "reroute", "modify", "restrict", "reset", "extend"];

const descriptions = ["microscopic", "macroscopic", "linear", "non-linear", "isometric", "multivariant", "nano", "phased", "master", "auxiliary", "primary", "secondary", "tertiary", "back-up", "polynodal", "multiphasic", "emergency", "tri-fold", "balanced", "oscillating"];

const sources = ["quantum", "positronic", "thermionic", "osmotic", "neutrino", "spatial", "resonating", "thermal", "photon", "ionic", "plasma", "nucleonic", "verteron", "gravimetric", "nadion", "subspace", "baryon", "tetryon", "polaron", "tachyon"];

const effects = ["flux", "reaction", "field", "particle", "gradient", "induction", "conversion", "polarizing", "displacement", "feed", "imaging", "reciprocating", "frequency", "pulse", "phased", "harmonic", "interference", "distortion", "dampening", "invariance"];

const devices = ["inhibitor", "equalizer", "damper", "chamber", "catalyst", "coil", "unit", "grid", "regulator", "sustainer", "relay", "discriminator", "array", "coupler", "controller", "actuator", "harmonizer", "generator", "manifold", "stabilizer"];

const timeUnits = ["minutes", "hours", "days"];

const prompts = ["Commander La Forge, report!", "Bridge to Engineering - status!", "Engineering, come in!"]

//button function
btn.onclick = () => {
  let randomAction = actions[randomInt(0, actions.length)];
  let randomDescription = descriptions[randomInt(0, descriptions.length)];
  let randomSource = sources[randomInt(0, sources.length)];
  let randomEffect = effects[randomInt(0, effects.length)];
  let randomDevice = devices[randomInt(0, devices.length)];
  let randomTimeUnit = timeUnits[randomInt(0, timeUnits.length)];

  let quoteTemplate1 = `I can try to ${randomAction} the ${randomDescription} ${randomSource} ${randomEffect} ${randomDevice}. I'll need at least ${randomInt(2, 10)} ${randomTimeUnit}.`

  let quoteTemplate2 = `We need to ${randomAction} the ${randomDescription} ${randomSource} ${randomEffect} ${randomDevice}. It's gonna be at least ${randomInt(2, 10)} ${randomTimeUnit}, if we're lucky.`

  let quoteTemplate3 = `I'll need some help to ${randomAction} the ${randomDescription} ${randomSource} ${randomEffect} ${randomDevice}. I think it'll be ${randomInt(1, 3)}-${randomInt(4, 8)} ${randomTimeUnit}.`

  let quoteTemplate4 = `I'll see if we can ${randomAction} the ${randomDescription} ${randomSource} ${randomEffect} ${randomDevice}. It'll  take about ${randomInt(2, 10)} ${randomTimeUnit}.`

  let quotes = [quoteTemplate1, quoteTemplate2, quoteTemplate3, quoteTemplate4]

  text.innerHTML = quotes[randomInt(0, quotes.length)];
  btnText.innerHTML = prompts[randomInt(0, prompts.length)];

}


export function getChannels(name, cb) {
  fetch(`https://wind-bow.glitch.me/twitch-api/channels/${name}`)
  .then(d => d.json())
  .then(d => {
    return cb(null, d)
  });
}

export function getStreams(name, cb) {
  fetch(`https://wind-bow.glitch.me/twitch-api/streams/${name}`)
  .then(d => d.json())
  .then(d => {
    return cb(null, d)
  });
}

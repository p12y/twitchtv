
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
    return false;
  }
  return response;
}

export function getChannels(name, callback) {
  fetch(`https://wind-bow.glitch.me/twitch-api/channels/${name}`)
  .then(handleErrors)
  .then(data => data.json())
  .then(data => {
    return callback(null, data)
  });
}

export function getStreams(name, callback) {
  fetch(`https://wind-bow.glitch.me/twitch-api/streams/${name}`)
  .then(handleErrors)
  .then(data => data.json())
  .then(data => {
    return callback(null, data)
  });
}

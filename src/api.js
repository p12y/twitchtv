const channelNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
const baseUrl = "https://wind-bow.glitch.me/twitch-api/";
let channels = [];
let streams = [];

function getJSON(type, name, array) {
    fetch(baseUrl + `${type}/${name}`).then((response) => {
        if (response.status !== 200) {
            console.log(`Something went wrong. Status code: ${response.status}`);
            return;
        }
        response.json().then((data) => {
            array.push(data);
        });
    });
}

channelNames.forEach((name) => {
    getJSON('channels', name, channels);
    getJSON('streams', name, streams);
});

export { channels, streams };

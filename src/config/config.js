export const authEndpoint = "https://accounts.spotify.com/authorize";
export const clientId = "174c3b5763144a1885953d6e58be62bf";
export const liveURL = "...";
export const devURL = "http://localhost:3000/";
export const redirectURL = devURL;
export const scopes = [
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "streaming",
];

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURL}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

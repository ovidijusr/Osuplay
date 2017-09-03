export const test = text => {
  return {
    type: 'SET_VOLUME',
    volume: text,
  }
}
export const setSong = songName => (
  {
    type: 'SET_SONG',
    song: songName,
  }
)
export const togglePause = pause => (
  {
    type: 'TOGGLE_PAUSE'
  }
)
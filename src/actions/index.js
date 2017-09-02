export const test = text => {
  return {
    type: 'SET_VOLUME',
    volume: text,
  }
}
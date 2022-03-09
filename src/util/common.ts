export const formatDpsData = ({id, parameters : params}) => {
  if (!id) return;
  const dps = {}
  for(let item of params) {
    if (item.name !== 'softVersion' && item.name !== 'firmware') {
      dps[item.name] = item.value
    }
  }
  return dps;
}
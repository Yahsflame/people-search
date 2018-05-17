export function APIRequest(who) {
  if (who === 'datafinder') {
    return fetch('https://cors-anywhere.herokuapp.com/https://api.datafinder.com/qdf.php?service=phone&k2=9abbxna7d2b65ivia3p9vljs&cfg_maxrecs=100&d_first=ben&d_last=sigal&d_state=florida').then(res => res.json())
  } else {
    return 'no argument provided'
  }
}
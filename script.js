async function getTracks(){
  const response = await fetch("https://api.spotify.com/")
  const data = await response.json()
  console.log(data)
}
getTracks()

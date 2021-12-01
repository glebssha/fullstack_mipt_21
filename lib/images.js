export async function getNextImage(icao_code) {
    let server = 'http://localhost:3000'
    const res = await fetch(`${server}/api/next_image`)
    return res.json()
}
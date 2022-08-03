import { useEffect, useState } from 'react'

const getPic = async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const data1 = await response.json()
  return data1.message}

export default function Pics () {
  const [pic, setPic] = useState('')

  useEffect(() => {
    getPic().then(pic => setPic(pic))
  }, [])

  return (
    <div className='pics'>
      <img src={pic} />
      <button onClick={async e => setPic(await getPic())}>Next</button>
    </div>
  )
}
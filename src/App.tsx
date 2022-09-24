import { SetStateAction, useEffect, useState } from 'react'
import Map from "./components/Map"
import Info from './components/Info';


interface ApiResponse {
  city: string,
  isp: string,
  lat: number,
  lon: number,
  query: string,
  status: string,
  timezone: string,
  zip: string
}

function App() {

  const [ip, setIp] = useState("");
  const [data, setData] = useState<ApiResponse>();

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const url = `http://ip-api.com/json/${ip}?fields=status,city,zip,lat,lon,timezone,isp,query`
    const res = await fetch(url).then(res => res.json());
    setData(await res)
  }

  return (
    <>
      {/* Header Background */}
      <div className="bg-[url('../pattern-bg.png')]  
      bg-no-repeat bg-auto h-60 z-50 relative">

        {/* Header text */}
        <div className="flex flex-col items-center">

          <div className="text-white p-5 text-2xl font-semibold">
            IP Address Tracker
          </div>

          {/* Input */}
          <div
            className="flex h-10 w-80">
            <input
              className='rounded-tl-lg rounded-bl-lg p-4 w-full focus:outline-none'
              type="text"
              name="inputBox"
              id="input"
              value={ip}
              onChange={e => setIp(e.target.value)} />
            <span
              onClick={getData}
              className='rounded-tr-lg rounded-br-lg bg-black
               text-white text-2xl h-full px-3 hover:cursor-pointer'> › </span>
          </div>
        </div>

        {/* Info */}
        {data?.status === "success" && <Info
          city={data.city}
          isp={data.isp}
          query={data.query}
          timezone={data.timezone}
          zip={data.zip}
        />}
      </div>

      {/* Map */}
      {data && <Map lat={data.lat} lon={data.lon} />}
    </>
  )
}

export default App

import { SetStateAction, useEffect, useState } from 'react'
import Map from "./components/Map"
import Info from './components/Info';


interface ApiResponse {
  city: string,
  country: string,
  isp: string,
  lat: number,
  lon: number,
  query: string,
  status: string,
  message: string,
}

interface ApiError {
  message: string,
  status: string,
  query: string
}

function App() {

  const [ip, setIp] = useState("");
  const [data, setData] = useState<ApiResponse>();
  const [error, setError] = useState<ApiError | null>();

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const url = `http://ip-api.com/json/${ip}?fields=status,message,country,region,city,lat,lon,isp,query`;
    const res = await fetch(url).then(res => res.json());
    if (res.status !== "success") {
      setError(res);
    } else { 
      setError(null);
      setData(await res); 
    }
  }

  return (
    <>
      {/* Header Background */}
      <div className="bg-[url('../pattern-bg.png')]  
      bg-no-repeat bg-auto h-60 z-30 relative">
        {/* <div className="h-60 w-full bg-gradient-to-r from-blue-200 to-cyan-400  opacity-40 absolute"></div> */}

        {/* Header text */}
        <div className="flex flex-col items-center">

          <div className="text-white mt-3 text-2xl font-semibold">
            IP Address Lookup
          </div>

          {/* Input */}
          <div
            className="flex m-4 w-80">
            <form onSubmit={(e) => { e.preventDefault(); getData() }}>
              <input
                className='rounded-tl-lg rounded-bl-lg p-2 w-[290px] focus:outline-none'
                type="text"
                placeholder="Seach for any IP or domain"
                id="input"
                value={ip}
                onChange={e => setIp(e.target.value)} />
              <button
                type="submit"
                className='absolute rounded-tr-lg rounded-br-lg bg-black
              text-white text-2xl h-10 px-3 hover:cursor-pointer'> › </button>
            </form>
          </div>
        </div>

        {/* Info */}
        {data?.status === "success" && <Info
          city={data.city}
          isp={data.isp}
          query={data.query}
          country={data.country}
        />}
      </div>

      {/* Map */}
      {data && <Map lat={data.lat} lon={data.lon} />}
    </>
  )
}

export default App

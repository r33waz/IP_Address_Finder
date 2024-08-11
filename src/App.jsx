import { useEffect, useState } from "react";
import "./App.css";
import MapComponent from "./components/map";

function App() {
  const [ipData, setIpData] = useState(null);
  const [ip, setIp] = useState("");
  console.log(ipData);
  useEffect(() => {
    const fetchIpData = async () => {
      try {
        // Fetch additional data using the obtained IP address
        const apiResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        if (!apiResponse.ok) {
          throw new Error("Error fetching IP data");
        }

        const apiData = await apiResponse.json();
        setIpData(apiData);
      } catch (error) {
        console.error("Error fetching IP data:", error);
      }
    };

    fetchIpData();
  }, [ip]);

  return (
    <>
      <div className="w-full flex">
        {ipData ? (
          <>
            <div className="flex gap-4 w-full md:flex-nowrap flex-wrap">
              <div className="w-full flex flex-col gap-2">
                <input
                  type="text"
                  placeholder="Enter Ip address"
                  value={ip}
                  onChange={(e) => setIp(e.target.value)}
                  className="border w-full rounded-md h-10 pl-2 border-zinc-600"
                />
                <MapComponent ipDatas={ipData} />
              </div>
              <div className="w-[400px]   flex flex-col gap-3 bg-[#F5F4F4] ">
                <h1 className="text-3xl font-bold">Address Details</h1>
                <div className="overflow-x-auto h-[90vh]">
                  <table className="table-auto w-full ">
                    <tbody>
                      <tr>
                        <th className="px-4 py-2 text-left">Field</th>
                        <th className="px-4 py-2 text-left">Value</th>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">IP</td>
                        <td className="px-4 py-2">{ipData?.ip}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Network</td>
                        <td className="px-4 py-2">{ipData?.network}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Version</td>
                        <td className="px-4 py-2">{ipData?.version}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">City</td>
                        <td className="px-4 py-2">{ipData?.city}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Region</td>
                        <td className="px-4 py-2">{ipData?.region}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Region Code</td>
                        <td className="px-4 py-2">{ipData?.region_code}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Country</td>
                        <td className="px-4 py-2">{ipData?.country}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Country Code</td>
                        <td className="px-4 py-2">{ipData?.country_code}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Country Capital</td>
                        <td className="px-4 py-2">{ipData?.country_capital}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Latitude</td>
                        <td className="px-4 py-2">{ipData?.latitude}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Longitude</td>
                        <td className="px-4 py-2">{ipData?.longitude}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Timezone</td>
                        <td className="px-4 py-2">{ipData?.timezone}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">UTC Offset</td>
                        <td className="px-4 py-2">{ipData?.utc_offset}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Calling Code</td>
                        <td className="px-4 py-2">
                          {ipData?.country_calling_code}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Currency</td>
                        <td className="px-4 py-2">{ipData?.currency}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Currency Name</td>
                        <td className="px-4 py-2">{ipData?.currency_name}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Languages</td>
                        <td className="px-4 py-2">{ipData?.languages}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Country Area</td>
                        <td className="px-4 py-2">
                          {ipData?.country_area} sq km
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Country Population</td>
                        <td className="px-4 py-2">
                          {ipData?.country_population}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">ASN</td>
                        <td className="px-4 py-2">{ipData?.asn}</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Org</td>
                        <td className="px-4 py-2">{ipData?.org}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading data...</p>
        )}
      </div>
    </>
  );
}

export default App;

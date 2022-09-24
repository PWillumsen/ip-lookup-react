import Panel from "./Panel";

interface InfoProps {
    city: string,
    isp: string,
    timezone: string,
    zip: string
    query: string
}

function Info({ city, isp, timezone, zip, query }: InfoProps) {

    return (
        <>
            <div className="flex flex-col 
                            items-center justify-center m-auto
                            my-5 w-80">
                <Panel title="IP ADDRESS" data={query} />
                <Panel title="LOCATION" data={city + ", " + zip} />
                <Panel title="TIMEZONE" data={timezone} />
                <Panel title="ISP" data={isp} />
            </div>

        </>
    );
}

export default Info;
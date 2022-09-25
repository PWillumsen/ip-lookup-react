import Panel from "./Panel";

interface InfoProps {
    city: string,
    isp: string,
    country: string,

    query: string
}

function Info({ city, isp, country, query }: InfoProps) {

    return (
        <>
            <div className="flex flex-col 
                            items-center justify-center m-auto
                            my-6 w-80 md:flex-row md:w-auto md:mx-10">
                <Panel title="IP ADDRESS" data={query} />
                <Panel title="CITY" data={city} />
                <Panel title="COUNTRY" data={country} />
                <Panel title="ISP" data={isp} />
            </div>

        </>
    );
}

export default Info;
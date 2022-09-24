interface PanelProps {
    title: string,
    data: string,
}

function Panel(props: PanelProps) {
    const { title, data } = props;
    return (<>
        <div className="flex flex-col 
                        items-center justify-center
                        bg-white 
                        p-2 w-full 
                        first:rounded-t-lg last:rounded-b-lg">
            <div className="text-color-slate-400 text-[10px]">{title}</div>
            <div className="text-lg font-bold">{data}</div>
        </div>
    </>);
}

export default Panel;
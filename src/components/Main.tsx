import {MapPin , Wind , Droplet , Thermometer , Eye , CloudSun , Clock4 , Sunrise , Sunset} from 'lucide-react';
import {useState , useEffect} from 'react'
export default function Main(){
    const [move , setMove] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setMove((prev) => !prev);
        }, 1000);
        return () => clearInterval(interval);
    } , []);
    const weatherItems = [
        {
            id:1,
            icon:<Wind/>,
            item:`Wind`,
            quantity:`12 Km/h`,
        },
        {
            id:2,
            icon:<Droplet/>,
            item:`Hum`,
            quantity:`45%`,
        },
        {
            id:3,
            icon:<Thermometer/>,
            item:`Press`,
            quantity:`1012`,
        },
        {
            id:4,
            icon:<Eye/>,
            item:`Vis`,
            quantity:`10 Km`,
        },
    ]
    return (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-25 ">
                <div className="weather p-8 bg-sky-500 col-span-2 rounded-[40px] shadow-xl px-20">
                    <div>
                        <h2 className="flex relative gap-3 text-sky-50 font-bold text-3xl"><MapPin className="absolute -left-8 top-1"/> New York,US</h2>
                        <h4 className=" text-gray-200">Monday, 12 June 2024 . 10:30 AM</h4>
                    </div>
                    <div className="flex gap-50 py-15">
                        <div className="flex gap-10">
                            <h1 className=" text-9xl font-bold text-sky-50">24°</h1>
                            <div className="flex flex-col">
                                <span className="text-sky-50 font-bold text-3xl">Partly Cloudy</span>
                                <span className= "text-gray-200 text-xl">Feels like 26°C</span>
                            </div>
                            <div>
                                <CloudSun className={` transition-all duration-1000 text-white w-full h-60 ${
                                    move ? "-translate-y-6" : "translate-y-6"
                                }`}/>
                            </div>
                        </div>
                    </div>
                    <div className="flex font-bold text-sky-500 gap-8">
                        {
                        weatherItems.map((item)=> {
                            return(
                                <div className="bg-sky-50 w-30 py-10 rounded-xl flex flex-col items-center" key={item.id}>
                                    {item.icon}
                                    <h4 className="">{item.item}</h4>
                                    <h3>{item.quantity}</h3>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="col-span-1 bg-white rounded-[40px] px-10 py-7 shadow-xl w-full">
                        <div className="flex font-bold justify-between">
                            <h1>Sun Schedule</h1>
                            <Clock4 className="text-sky-500"/>
                        </div>
                        <div className="mt-40 flex flex-col gap-10">
                            <div className="flex gap-10 font-bold">
                                <Sunrise className="text-orange-400 bg-orange-100 w-12 h-12 px-2 rounded-xl"/>
                                <div>
                                    <h3 className="uppercase">Sunrise</h3>
                                    <h1 className="text-2xl">05:42 AM</h1>
                                </div>
                            </div>
                            <div className="flex gap-10 font-bold">
                                <Sunset className="text-purple-400 bg-purple-100 w-12 h-12 px-2 rounded-xl"/>
                                <div>
                                    <h3 className="uppercase">Sunset</h3>
                                    <h1 className="text-2xl">08:14 AM</h1>
                                </div>
                            </div>
                        </div>
                        <div className="mt-30">
                            <div className="flex justify-between text-sm text-gray-600 border-gray-100 border-t-2 p-2">
                            <h1 className="font-bold">Daylight</h1>
                            <span className="font-bold">14h 32m</span>
                            </div>
                            <span className="inline-block bg-sky-500 w-[180px] rounded-l-xl h-[7px]"></span>
                        </div>
                </div>
            </div>
    )
}
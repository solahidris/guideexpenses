import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowBigLeft, RotateCcwIcon } from "lucide-react";
import { useState } from "react";

const Home = () => {

  const [entryOption, setEntryOption] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientDate, setClientDate] = useState("20/02 - 24/02");
  const [clientStartDate, setClientStartDate] = useState(Date);
  const [clientEndDate, setClientEndDate] = useState(Date);
  const [clientStartEndDate, setClientStartEndDate] = useState(Date);
  const [currencyInRM, setCurrencyInRM] = useState(false);
  const buttonEntryCss = "border aspect-square p-4 rounded shadow capitalize";

  const handleAddClient = () => {
    setClientName("Fazrul");
    setClientDate("delete this line")
    setClientStartDate("20/02/2025");
    setClientEndDate("24/02/2025");
    setClientStartEndDate(clientStartDate.slice(0,10)+clientEndDate.slice(0,10)) // End Result exp: 20/02 - 24/02
  }

  return (
    <div className="flex flex-col justify-center items-center capitalize">
      
      <div className="font-medium capitalize text-lg bg-white drop-shadow-md w-full p-4 flex justify-between items-center">
        <p >Hello, Solah</p>
        <Button variant="outline">Logout</Button>
      </div>
      
      {clientName === "" ? 
        <div className="font-medium capitalize text-lg bg-white drop-shadow-md w-full p-4 flex flex-col gap-4">
          <Label className="text-lg text-center font-bold">Add New Client</Label>
          <div className="flex flex-col">
            <p className="text-xs">Client Name</p>
            <Input type="text" placeholder="Fazrul"/>
          </div>
          <div className="flex flex-col">
            <p className="text-xs">Start Date</p>
            <Input type="date" />
          </div>
          <div className="flex flex-col">
            <p className="text-xs">End Date</p>
            <Input type="date" />
          </div>
          <Button onClick={handleAddClient}>Save Client</Button>
        </div>
      :
        <div className="font-medium capitalize text-lg bg-white drop-shadow-md w-full p-2 flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col border-r pr-4">
              <p className="text-[10px] -mb-2">Client</p>
              <p className="text-sm">{clientName}</p>
            </div>
            <div className="flex flex-col">
              <p className="text-[10px] -mb-2">Date</p>
              <p className="text-sm">{clientDate}</p>
              <p className="text-sm">{clientStartEndDate}</p>
            </div>
          </div>
            <Button className="h-8 w-8"><RotateCcwIcon /></Button>
        </div>
      }

      <p className="font-bold capitalize text-2xl py-4">guide expenses</p>

      <div className="flex flex-col">

          {entryOption === "" &&
            <div>
              <div className="grid grid-cols-2 gap-4 rounded">
                <button className={buttonEntryCss} onClick={(e)=>setEntryOption(e.currentTarget.value)} value="food">food</button>
                <button className={buttonEntryCss} onClick={(e)=>setEntryOption(e.currentTarget.value)} value="car">car</button>
                <button className={buttonEntryCss} onClick={(e)=>setEntryOption(e.currentTarget.value)} value="train">train</button>
                <button className={buttonEntryCss} onClick={(e)=>setEntryOption(e.currentTarget.value)} value="ticket">ticket</button>
                <button className={buttonEntryCss} onClick={(e)=>setEntryOption(e.currentTarget.value)} value="other">other</button>
                <button className={buttonEntryCss} onClick={(e)=>setEntryOption(e.currentTarget.value)} value="personal">personal</button>
              </div>
            </div>
          }

          {entryOption !== "" &&
            <div className="p-4 rounded flex flex-col gap-4">
              <p className="font-bold text-center text-xl">{entryOption}</p>
              <div>
                <Label>Receipt Name<span className="text-red-500 ml-1">*</span></Label>
                <Input type="text" />
              </div>
              <div>
                <Label>{`Price (${currencyInRM ? "RM" : "¥"})`}<span className="text-red-500 ml-1">*</span></Label>
                <Input type="number" />
                <div className="flex gap-1 items-center mt-1">
                  <Checkbox onClick={()=>setCurrencyInRM(!currencyInRM)} className="h-4 w-4 border-gray-400" />
                  <span className="text-xs text-gray-400">Check if RM</span>
                </div>
              </div>
              <div>
                <Label>{`Picture`}</Label>
                <Input type="file" />
              </div>
              <Button>Add Entry</Button>
              <div><Button onClick={()=>setEntryOption("")}><ArrowBigLeft /></Button></div>
            </div>
          }



      </div>

    </div>
  );
}

export default Home;
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowBigLeft } from "lucide-react";
import { useState } from "react";

const Home = () => {

  const [entryOption, setEntryOption] = useState("");
  const buttonEntryCss = "border aspect-square p-4 rounded shadow capitalize";

  return (
    <div className="flex flex-col gap-4 p-4 justify-center items-center capitalize">
      
      <p className="font-bold capitalize text-2xl">guide expenses</p>

      <div className="flex flex-col border rounded shadow">

          {entryOption === "" &&
            <div className="grid grid-cols-2 gap-4 p-4 rounded">
              <button className={buttonEntryCss} onClick={(e)=>setEntryOption(e.currentTarget.value)} value="food">food</button>
              <button className={buttonEntryCss} onClick={(e)=>setEntryOption(e.currentTarget.value)} value="car">car</button>
              <button className={buttonEntryCss} onClick={(e)=>setEntryOption(e.currentTarget.value)} value="train">train</button>
              <button className={buttonEntryCss} onClick={(e)=>setEntryOption(e.currentTarget.value)} value="ticket">ticket</button>
              <button className={buttonEntryCss} onClick={(e)=>setEntryOption(e.currentTarget.value)} value="other">other</button>
              <button className={buttonEntryCss} onClick={(e)=>setEntryOption(e.currentTarget.value)} value="personal">personal</button>
            </div>
          }

          {entryOption !== "" &&
            <div className="p-4 rounded flex flex-col gap-4">
              <p className="font-bold text-center text-xl">{entryOption}</p>
              <div>
                <Label>Name</Label>
                <Input type="text" />
              </div>
              <div>
                <Label>{`Price (¥)`}</Label>
                <Input type="number" />
                <div className="flex gap-1 items-center mt-1">
                  <Checkbox className="h-4 w-4 border-gray-400" />
                  <span className="text-xs text-gray-400">Check if RM</span>
                </div>
              </div>
              <div>
                <Label>{`Picture (optional)`}</Label>
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
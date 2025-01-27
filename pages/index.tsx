import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link";

const Home = () => {

  return (
    <div className="flex flex-col gap-4 p-4 justify-center items-center capitalize">
      
      <p className="font-bold capitalize text-2xl">guide expenses</p>

      <Tabs defaultValue="login" className="w-[320px]">
        <TabsList className="w-full">
          <TabsTrigger value="login" className="w-full">Login</TabsTrigger>
          <TabsTrigger value="signup" className="w-full">Sign Up</TabsTrigger>
        </TabsList>
        <div className="flex flex-col border rounded shadow w-[320px] p-6 mt-2">
          <TabsContent value="login" className="flex flex-col gap-3">
            <p className="font-bold">Login</p>
            <span className="text-sm text-gray-500">Login here if you have an account</span>
            <div className="flex flex-col">
              <Label>email</Label>
              <Input type="email" />
            </div>
            <div className="flex flex-col">
              <Label>password</Label>
              <Input type="password" />
            </div>
            <Button>Login</Button>
          </TabsContent>
          <TabsContent value="signup" className="flex flex-col gap-3">
            <p className="font-bold">Sign up</p>
            <span className="text-sm text-gray-500">Create a new account</span>
            <div className="flex flex-col">
              <Label>email</Label>
              <Input type="email" />
            </div>
            <div className="flex flex-col">
              <Label>password</Label>
              <Input type="password" />
            </div>
            <Button>Sign Up</Button>
          </TabsContent>

        </div>
      </Tabs>

      <Link href="/user">
        <Button>Go to User Page</Button>
      </Link>
      
    </div>
  );
}

export default Home;
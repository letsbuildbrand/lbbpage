import { MadeWithDyad } from "@/components/made-with-dyad";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 sm:p-8">
      <Card className="w-full max-w-2xl bg-gray-800 border-gray-700 text-white shadow-2xl rounded-lg overflow-hidden">
        <CardHeader className="text-center p-6 sm:p-8">
          <div className="flex items-center justify-center mb-4">
            {/* Placeholder for your logo */}
            <Wrench className="h-12 w-12 text-yellow-500 mr-4" />
            <CardTitle className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              Your Agency Name
            </CardTitle>
          </div>
          <CardDescription className="text-lg sm:text-xl text-gray-400">
            Video Editing & Website Development Agency
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center p-6 sm:p-8">
          <Badge variant="destructive" className="text-xl sm:text-2xl px-6 py-2 mb-8 animate-pulse">
            Under Maintenance
          </Badge>
          <p className="text-md sm:text-lg text-gray-300 mb-6 leading-relaxed">
            We are currently enhancing our digital presence to bring you an even better experience.
            Our team is diligently working on exciting new features and a refreshed look.
          </p>
          <div className="flex items-center justify-center text-md sm:text-lg text-gray-300 mb-4">
            <Globe className="h-5 w-5 mr-2 text-blue-400" />
            Specializing in delivering top-tier video editing and bespoke website development solutions for foreign clients.
          </div>
          <p className="text-md sm:text-lg text-gray-300">
            Stay tuned for our grand relaunch!
          </p>
        </CardContent>
      </Card>
      <MadeWithDyad />
    </div>
  );
};

export default Index;
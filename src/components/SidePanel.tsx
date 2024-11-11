import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Settings, Users } from "lucide-react";

const SidePanel = () => {
  return (
    <div className="h-screen fixed left-0 top-0 w-64 glass-card border-r border-white/10">
      <div className="p-6">
        <h2 className="text-xl font-medium mb-6">Navigation</h2>
        <Tabs defaultValue="dashboard" orientation="vertical" className="w-full">
          <TabsList className="flex flex-col h-auto bg-transparent border-r border-white/10">
            <TabsTrigger 
              value="dashboard" 
              className="w-full justify-start gap-2 data-[state=active]:bg-white/10"
            >
              <LayoutDashboard className="w-4 h-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger 
              value="users" 
              className="w-full justify-start gap-2 data-[state=active]:bg-white/10"
            >
              <Users className="w-4 h-4" />
              Users
            </TabsTrigger>
            <TabsTrigger 
              value="settings" 
              className="w-full justify-start gap-2 data-[state=active]:bg-white/10"
            >
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard">
            {/* Dashboard content */}
          </TabsContent>
          <TabsContent value="users">
            {/* Users content */}
          </TabsContent>
          <TabsContent value="settings">
            {/* Settings content */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SidePanel;
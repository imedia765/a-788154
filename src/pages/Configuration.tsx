import React from 'react';
import { LLMConfiguration } from '@/components/configuration/LLMConfiguration';
import { FileSystemConfig } from '@/components/configuration/FileSystemConfig';
import { TerminalConfig } from '@/components/configuration/TerminalConfig';
import { VersionControlConfig } from '@/components/configuration/VersionControlConfig';
import { DatabaseConfig } from '@/components/configuration/DatabaseConfig';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';

const Configuration = () => {
  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#6E59A5] bg-clip-text text-transparent">
          Configuration
        </h1>
        <p className="text-muted-foreground">
          Manage your application settings and preferences
        </p>
      </div>

      <ScrollArea className="h-[calc(100vh-12rem)]">
        <div className="grid gap-8">
          {/* LLM Configuration Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-1 bg-gradient-to-b from-[#9b87f5] to-[#6E59A5] rounded-full" />
              <h2 className="text-2xl font-semibold">LLM Providers</h2>
            </div>
            <div className="pl-4">
              <LLMConfiguration />
            </div>
          </section>

          <Separator className="my-4 bg-gradient-to-r from-transparent via-[#7E69AB]/20 to-transparent" />

          {/* File System Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-1 bg-gradient-to-b from-[#33C3F0] to-[#1EAEDB] rounded-full" />
              <h2 className="text-2xl font-semibold">File System</h2>
            </div>
            <div className="pl-4">
              <FileSystemConfig />
            </div>
          </section>

          <Separator className="my-4 bg-gradient-to-r from-transparent via-[#7E69AB]/20 to-transparent" />

          {/* Terminal Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-1 bg-gradient-to-b from-[#D6BCFA] to-[#9b87f5] rounded-full" />
              <h2 className="text-2xl font-semibold">Terminal</h2>
            </div>
            <div className="pl-4">
              <TerminalConfig />
            </div>
          </section>

          <Separator className="my-4 bg-gradient-to-r from-transparent via-[#7E69AB]/20 to-transparent" />

          {/* Version Control Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-1 bg-gradient-to-b from-[#E5DEFF] to-[#D6BCFA] rounded-full" />
              <h2 className="text-2xl font-semibold">Version Control</h2>
            </div>
            <div className="pl-4">
              <VersionControlConfig />
            </div>
          </section>

          <Separator className="my-4 bg-gradient-to-r from-transparent via-[#7E69AB]/20 to-transparent" />

          {/* Database Section */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-1 bg-gradient-to-b from-[#7E69AB] to-[#6E59A5] rounded-full" />
              <h2 className="text-2xl font-semibold">Database</h2>
            </div>
            <div className="pl-4">
              <DatabaseConfig />
            </div>
          </section>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Configuration;
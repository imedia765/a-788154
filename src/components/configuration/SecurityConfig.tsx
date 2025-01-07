import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Users, Key, Lock } from "lucide-react";

export const SecurityConfig = () => {
  return (
    <div className="space-y-6">
      <Card className="border-[#8B5CF6]/20 bg-gradient-to-br from-background to-[#8B5CF6]/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-[#8B5CF6]" />
            <CardTitle>Row Level Security (RLS)</CardTitle>
          </div>
          <CardDescription>Configure row-level security policies and permissions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-medium">Enable RLS</label>
              <p className="text-sm text-muted-foreground">Enforce row-level security policies</p>
            </div>
            <Switch />
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Table</TableHead>
                <TableHead>Policy Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>users</TableCell>
                <TableCell>auth_users_policy</TableCell>
                <TableCell>SELECT, UPDATE</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">Edit</Button>
                  <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="border-[#D6BCFA]/20 bg-gradient-to-br from-background to-[#D6BCFA]/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Users className="w-6 h-6 text-[#D6BCFA]" />
            <CardTitle>Roles & Permissions</CardTitle>
          </div>
          <CardDescription>Manage user roles and access controls</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">New Role</label>
              <div className="flex gap-2">
                <Input placeholder="Role name" />
                <Button>Add Role</Button>
              </div>
            </div>
          </div>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Role</TableHead>
                <TableHead>Permissions</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>admin</TableCell>
                <TableCell>Full access</TableCell>
                <TableCell>2</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>editor</TableCell>
                <TableCell>Read, Write</TableCell>
                <TableCell>5</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">Edit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="border-[#E5DEFF]/20 bg-gradient-to-br from-background to-[#E5DEFF]/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Key className="w-6 h-6 text-[#E5DEFF]" />
            <CardTitle>API Keys</CardTitle>
          </div>
          <CardDescription>Manage API keys and access tokens</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button>Generate New API Key</Button>
          
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Key Name</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Used</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>prod_key_1</TableCell>
                <TableCell>2024-03-15</TableCell>
                <TableCell>2024-03-20</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm" className="text-destructive">Revoke</Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="border-[#9b87f5]/20 bg-gradient-to-br from-background to-[#9b87f5]/5">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Lock className="w-6 h-6 text-[#9b87f5]" />
            <CardTitle>Security Audit Log</CardTitle>
          </div>
          <CardDescription>View security-related events and activities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex justify-between items-center text-sm">
                <span>Failed login attempt</span>
                <span className="text-muted-foreground">2 minutes ago</span>
              </div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex justify-between items-center text-sm">
                <span>API key generated</span>
                <span className="text-muted-foreground">1 hour ago</span>
              </div>
            </div>
            <div className="bg-muted/50 p-4 rounded-lg">
              <div className="flex justify-between items-center text-sm">
                <span>Role permissions updated</span>
                <span className="text-muted-foreground">3 hours ago</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
"use client";

import React from "react";
import { Button } from "./ui/button";
import { useMediaQuery } from "usehooks-ts";
import Container from "./Container";
import * as selectComponent from "@/components/ui/select";

const sidebar = {
  filters: ["All", "Shirts", "Hoodies", "Caps", "Bags"],
  sortBy: ["Popularity", "Price: Low to High", "Price: High to Low", "Newest"],
};

function SidebarDesktop() {
  return (
    <aside className="w-full space-y-8 px-4 md:w-48 md:px-8">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Filters</h2>
        <ul className="space-y-2 pl-2">
          {sidebar.filters.map((filter) => (
            <li key={filter}>
              <Button
                variant="link"
                className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground md:text-base"
              >
                {filter}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Sort By</h2>
        <ul className="space-y-2 pl-2">
          {sidebar.sortBy.map((parameter) => (
            <li key={parameter}>
              <Button
                variant="link"
                className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground md:text-base"
              >
                {parameter}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function SidebarMobile() {
  return (
    <Container className="w-full">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Filters</h2>
          <selectComponent.Select>
            <selectComponent.SelectTrigger className="w-full">
              <selectComponent.SelectValue placeholder="Select filter parameters" />
            </selectComponent.SelectTrigger>
            <selectComponent.SelectContent>
              {sidebar.filters.map((filter) => (
                <selectComponent.SelectItem value={filter} key={filter}>
                  {filter}
                </selectComponent.SelectItem>
              ))}
            </selectComponent.SelectContent>
          </selectComponent.Select>
        </div>
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-foreground">Sort By</h2>
          <selectComponent.Select>
            <selectComponent.SelectTrigger className="w-full">
              <selectComponent.SelectValue placeholder="Select sorting parameters" />
            </selectComponent.SelectTrigger>
            <selectComponent.SelectContent>
              {sidebar.sortBy.map((parameter) => (
                <selectComponent.SelectItem value={parameter} key={parameter}>
                  {parameter}
                </selectComponent.SelectItem>
              ))}
            </selectComponent.SelectContent>
          </selectComponent.Select>
        </div>
      </div>
    </Container>
  );
}

export default function Sidebar() {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return !isDesktop ? <SidebarMobile /> : <SidebarDesktop />;
}

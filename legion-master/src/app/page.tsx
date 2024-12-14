"use client";
import Image from "next/image";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Link from "next/link";
import {
  MdAccessAlarm,
  MdScreenRotation,
  MdCheckCircle,
  MdOutlinePendingActions,
  MdAttachFile,
  MdCheckCircleOutline, MdChatBubbleOutline,
} from "react-icons/md";
import React, { useState } from "react";

const ProductTracker = () => {
  const [expandedBoxes, setExpandedBoxes] = useState<{ [key: string]: boolean }>({});
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const toggleBox = (key: string) => {
    setExpandedBoxes((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle the expanded state
    }));
  };

  const rows = 3; // Number of rows
  const cols = 2; // Number of columns (grid)

  return (
    <section id="product-tracker" className="mb-6">
      <h2 className="text-lg font-semibold mb-4">Sampling</h2>
      <div className="grid grid-cols-2 gap-6"> {/* Adjusted gap for better spacing */}
        {Array.from({ length: rows }).map((_, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {Array.from({ length: cols }).map((_, colIndex) => {
              const boxKey = `${rowIndex}-${colIndex}`; // Unique key for each box
              const isExpanded = expandedBoxes[boxKey]; // Check if the box is expanded
              const isFirstRow = rowIndex === 0; // Check if it's the first row

              return (
                <div
                  key={boxKey}
                  className={`p-4 border rounded-lg shadow-sm bg-white transition-all duration-300 ${
                    isExpanded ? 'h-auto' : 'h-48' // Increased default height slightly
                  }`}
                >

<div className="flex justify-between items-center">
                    {/* Overdue Badge - Strike Off for First Row */}
                    {isFirstRow ? (
                      <span className="text-xs font-medium text-pink-600 bg-pink-100 rounded-full px-2 py-1">
                        Strike Off
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-pink-600 bg-pink-100 rounded-full px-2 py-1">
                        OVERDUE
                      </span>
                    )}
                    {/* Date Range */}
                    <span className="text-xs text-gray-600">Mar 30 - Apr 13</span>
                  </div>

                  {/* Box Title */}
                  <h3 className="text-sm font-bold mb-3">Initial Review</h3>

                  {/* Stats Section */}
                  <div className="flex items-center space-x-3 text-xs text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <MdAttachFile />
                      <span>2</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MdCheckCircleOutline />
                      <span>1/4</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MdChatBubbleOutline />
                      <span>34</span>
                    </div>
                  </div>

                  {/* Tags Section */}
                  <div className="relative flex flex-wrap items-center text-xs mb-3">
                    <span 
                      className="bg-black text-white rounded-full px-2 py-1 mr-2"
                      onMouseEnter={() => setHoveredCard("Packaging")}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      Packaging
                    </span>
                    {hoveredCard === "Packaging" && (
                      <div className="absolute top-full mt-1 left-0 bg-white border rounded shadow-md p-2 text-xs">
                        PP Solid - Green Cap Material
                      </div>
                    )}
                    <span className="bg-black text-white rounded-full px-2 py-1 mr-2">Packaging</span>
                    <span className="bg-black text-white rounded-full px-2 py-1 mr-2">Packaging</span>
                    <button 
                      className="text-blue-500"
                      onMouseEnter={() => setHoveredButton("2-more")}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      2 more
                    </button>
                    {hoveredButton === "2-more" && (
                      <div className="absolute top-full mt-1 left-0 bg-white border rounded shadow-md p-2 text-xs">
                        <ul>
                          <li>Artwork</li>
                          <li>Packaging</li>
                          <li>Accessories</li>
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div className="mt-4 p-4 border-t bg-gray-50">
                      <h4 className="text-xs font-semibold mb-2">Materials</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-xs p-2 border rounded bg-white">PP Solid - Green Cap</div>
                        <div className="text-xs p-2 border rounded bg-white">PP Solid - Green Cap</div>
                        <div className="text-xs p-2 border rounded bg-white">PP Solid - Green Cap</div>
                        <div className="text-xs p-2 border rounded bg-white">PP Solid - Green Cap</div>
                      </div>
                      <h4 className="text-xs font-semibold mt-4 mb-2">Accessories</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-xs p-2 border rounded bg-white">PP Solid - Green Cap</div>
                        <div className="text-xs p-2 border rounded bg-white">PP Solid - Green Cap</div>
                        <div className="text-xs p-2 border rounded bg-white">PP Solid - Green Cap</div>
                        <div className="text-xs p-2 border rounded bg-white">PP Solid - Green Cap</div>
                      </div>
                    </div>
                  )}

                  {/* View Details Button */}
                  <div className="flex justify-center mt-3">
                    <button
                      className="text-blue-500 text-xs"
                      onClick={() => toggleBox(boxKey)}
                      disabled={isFirstRow} // Disable button for the first row
                    >
                      {isExpanded ? 'Collapse' : 'View Details'}
                    </button>
                  </div>
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};





export default function Home() {
  return (
    <SidebarProvider>
      {/* Header Section */}
      <header className="fixed top-0 left-80 right-0 z-50 bg-white shadow-md p-4 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">Demo Project: August 2024</h1>
        <div className="flex items-center space-x-4">
          <button className="text-sm font-medium text-gray-700 hover:text-blue-500">Product Manager</button>
          <div className="relative">
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">5</span>
            <button className="text-gray-600">
              <i className="fas fa-bell"></i>
            </button>
          </div>
          <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center font-bold">PM</div>
        </div>
      </header>

      {/* Menu Bar */}
      <nav className="fixed top-16 left-80 right-0 z-40 bg-gray-100 border-b p-3">
        <ul className="flex justify-start space-x-6 px-4">
          <li>
            <Link href="#product-tracker" className="text-sm font-medium text-gray-700 hover:text-blue-500">
              Product Tracker
            </Link>
          </li>
          <li>
            <Link href="#products" className="text-sm font-medium text-gray-700 hover:text-blue-500">
              Products
            </Link>
          </li>
          <li>
            <Link href="#activities" className="text-sm font-medium text-gray-700 hover:text-blue-500">
              Activities
            </Link>
          </li>
          <li>
            <Link href="#workflow-members" className="text-sm font-medium text-gray-700 hover:text-blue-500">
              Workflow Members
            </Link>
          </li>
          <li>
            <Link href="#settings" className="text-sm font-medium text-gray-700 hover:text-blue-500">
              Settings
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main Layout */}
      <div className="flex h-screen pt-28 overflow-x-auto">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content: Flex container for three sections */}
        <div className="flex w-[900px] ml-4 p-4 space-x-4 overflow-y-100">
          {/* Products Section */}
          <aside className="flex-none w-[300px] h-full bg-gray-100 border-r p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Products</h2>
            <div className="grid grid-cols-1 gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-sm bg-white">
                  <h3 className="text-sm font-bold mb-2">Pink Water Color Bibs</h3>
                  <p className="text-xs text-gray-500">BBU-WCF-BIB-AOPPNK</p>
                  <div className="mt-2">
                    <button className="text-blue-500 text-sm">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </aside>


          {/* Product Tracker Section */}
          <section className="flex-none w-[600px] h-full p-6 bg-gray-100 overflow-y-full">
            <ProductTracker />
          </section>

          {/* Sampling Section */}
          <section className="flex-none w-[600px] h-full p-6 bg-gray-100 overflow-y-full">
            <h2 className="text-lg font-semibold mb-4">Sampling</h2>
            <div className="grid grid-cols-2 gap-4">
              {Array.from({ length: 2 }).map((_, index) => (
                <div key={index} className="p-3 border rounded-lg shadow-sm bg-white">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-medium text-gray-600 bg-gray-200 rounded-full px-2 py-1">Strike-off</span>
                    <button className="text-blue-500 text-xs">View all</button>
                  </div>
                  <h3 className="text-sm font-bold mt-2">Initial Review</h3>
                  <p className="text-sm text-gray-600">Initial Review</p>
                  <div className="flex items-center mt-4 space-x-3 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MdAccessAlarm />
                      <span>2</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MdScreenRotation />
                      <span>1/4</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MdCheckCircle />
                      <span>34</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MdOutlinePendingActions />
                      <span>4 Card</span>
                    </div>
                  </div>
                </div>
              ))}
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="p-3 border rounded-lg shadow-sm bg-green-100">
                  <h3 className="text-sm font-bold mb-2">Done</h3>
                  <p className="text-sm">Initial Review</p>
                  <div className="flex items-center mt-4 space-x-3 text-xs text-gray-600">
                    <div className="flex items-center space-x-1">
                      <MdAccessAlarm />
                      <span>2</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MdScreenRotation />
                      <span>1/4</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MdCheckCircle />
                      <span>34</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MdOutlinePendingActions />
                      <span>4 Card</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </SidebarProvider>
  );
}

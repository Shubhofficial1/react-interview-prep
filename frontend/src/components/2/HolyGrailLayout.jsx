import React from "react";

const HolyGrailLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="w-full flex items-center justify-center h-[60px] bg-slate-600 text-white font-semibold">
        <h1>Header</h1>
      </header>
      <div className="flex flex-1 flex-col md:flex-row">
        <aside className="order-2 md:order-1 min-h-[100px] bg-pink-300 flex items-center justify-center text-white font-semibold md:min-w-[200px]">
          <h1>Left Sidebar</h1>
        </aside>
        <main className="order-1 md:order-2 flex flex-1 items-center justify-center font-semibold ">
          <h1>Main Content</h1>
        </main>
        <aside className="order-3 md:order-3 min-h-[100px] bg-cyan-200 flex items-center justify-center text-white font-semibold md:min-w-[200px]">
          <h1>Right Sidebar</h1>
        </aside>
      </div>
      <footer className="w-full flex items-center justify-center h-[60px] bg-emerald-400 text-white font-semibold">
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

export default HolyGrailLayout;

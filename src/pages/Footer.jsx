import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-container px-4 py-4">
      <div className="py-2">
        <p className="mt-5 text-center text-sm leading-6 text-slate-500">
          Developed by IT Team © 2023 PT. Pura Barutama - Unit Coating Adhesive.
          All rights reserved.
        </p>
        <div className="mt-3 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
          <a href="/privacy-policy">Privacy policy</a>
          <div className="h-4 w-px bg-slate-500/20" />
          <a href="/changelog">Changelog</a>
        </div>
      </div>
    </footer>
  );
}

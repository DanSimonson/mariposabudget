import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-primary-foreground rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 &nbsp;{" "}
          <a href="https://mariposaweb.net/" className="hover:underline">
            mariposaweb
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

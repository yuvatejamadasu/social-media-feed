import React from "react";
export const Avatar = ({ children, className = "" }) => (
  <div className={`inline-flex items-center justify-center rounded-full bg-gray-100 border-2 border-blue-200 shadow-sm overflow-hidden ${className}`} style={{width: 40, height: 40}}>{children}</div>
);
export const AvatarImage = ({ src, alt }) => (
  <img src={src} alt={alt} className="w-full h-full object-cover rounded-full" onError={e => {e.target.style.display='none';}} />
);
export const AvatarFallback = ({ children, className = "" }) => (
  <span className={`flex items-center justify-center w-full h-full text-blue-700 font-bold text-lg ${className}`}>{children}</span>
); 
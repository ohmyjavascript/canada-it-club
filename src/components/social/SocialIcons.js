import React from "react"
import { FaTwitterSquare, FaLinkedin, FaYoutube } from "react-icons/fa"

const SOCIAL_ICONS = [
  {
    id: 1,
    item: "Twitter",
    url: "/twitter",
    icon: <FaTwitterSquare size={24} />,
  },
  { id: 2, item: "LinkedIn", url: "/linkedin", icon: <FaLinkedin size={24} /> },
  {
    id: 3,
    item: "Youtube",
    url: "/youtube",
    icon: <FaYoutube size={24} />,
  },
]
export const SocialIcons = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-2 text-sm text-gray-600 md:mb-2">Follow us</div>
      <div className="flex items-center space-x-4">
        {SOCIAL_ICONS.map(item => {
          return (
            <div key={item.id} className="flex items-center">
              <a alt="social-link" href={item.url}>
                {item.icon}
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

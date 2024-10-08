import React, { useEffect } from "react"
import { gsap } from "gsap"
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin"
// import { navigate } from "gatsby"

export const logoMaskArray = [
  {
    d:
      "M11.4 71.2S2.9 60.1 1.6 54.8C.4 49.6 2.1 38.1 9 30.3c8.5-9.7 26.1-19.3 44.5-17.6C68.3 14 95.8 24.7 95 46.2c-.3 7.3-17.5 14.2-28.2 14.3-11.3.1-22.3-1.8-38.2.5",
    strokeWidth: "4",
  },
  {
    d: "M28.8 60c13-3.3 29 6.8 34.4 14.4 4.8 6.8 6.7 25.8.4 33.3",
    strokeWidth: "4",
  },
  {
    d:
      "M67.2 103.6c-2.6 4.1-4.3 2.6-4.7 1.3-3.7-10.7-.7-30.3 1.5-41.2 1.3-6.7 5-27.6 5-27.6",
    strokeWidth: "4",
  },
  {
    d:
      "M67 38.5c.8-1 2.7-3.7 3.2-2.9 3.8 5.3-5.4 21.1-8.7 26.8-4.1 7.1-22 24.7-22 24.7",
    strokeWidth: "4",
  },
  {
    d:
      "M67.3 42.7s5 18.6 7.3 25.3c1.3 4 5.1 13.3 4.8 18.1-.1.9-2.8-1.6-2.8-1.6",
    strokeWidth: "3",
  },
  {
    d:
      "M80.4 86.9c-2-.9-4-2.4-4.7-3.7-2.5-4.7-1.9-16-1.3-21.3.8-7.5 5.3-29.1 17.1-42.2 4-4.4 16.8-13.3 21.6-15.3 3.3-1.4 10.4-2.6 13.9-2.8 3-.2 9 .1 11.9 1.1 3.9 1.4 14.5 8.3 14.5 8.3",
    strokeWidth: "4",
  },
]
// 225.085 + 74.007 + 76.157 + 66.827 + 48.657 + 143.305
// 35.50 % + 11.67% + 12.01% + 10.53% + 7.67% + 22.60%
// 634.038
const pathArray = []
// const tl = new TimelineMax({ paused: true, repeat: 1 });
// const tl = useState(gsap.timeline( { paused: true }));

let dur = 1.3

const tl = gsap.timeline({ repeat: 0 })
gsap.registerPlugin(DrawSVGPlugin)

// const toggleDraw = () => {
//   // const url = typeof window !== 'undefined' ? window.location.pathname : '';
//   // console.log(url)
//   tl.restart();
//   // if (url !== "/") {
//   //   console.log(url)
//   //   navigate("/")
//   // }

// };

export default function Logo(props) {
  useEffect(() => {
    tl.from(pathArray[0], { drawSVG: "0%", duration: dur * 0.355 })
      .from(pathArray[1], { drawSVG: "0%", duration: dur * 0.116 })
      .from(pathArray[2], { drawSVG: "0%", duration: dur * 0.12 })
      .from(pathArray[3], { drawSVG: "0%", duration: dur * 0.105 })
      .from(pathArray[4], { drawSVG: "0%", duration: dur * 0.076 })
      .from(pathArray[5], { drawSVG: "0%", duration: dur * 0.226 })

    tl.play()
  }, [])
  return (
    <svg
      className="prefix__logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 155 111.1"
      // onMouseEnter={toggleDraw}
      {...props}
    >
      <defs>
        {logoMaskArray.map((path, index) => {
          return (
            <mask
              id={`brush__0${index}`}
              key={`s-${index}`}
              fill="none"
              stroke="#FFF"
              strokeWidth={path.strokeWidth}
              strokeMiterlimit={10}
            >
              <path
                key={`path-${index}`}
                d={path.d}
                ref={e => (pathArray[index] = e)}
              />
            </mask>
          )
        })}
      </defs>
      <path
        id="s-01"
        fill="currentColor"
        d="M95.2 41.1c-1.3-4.9-4.2-9.3-7.6-13.1-.7-.7-1.6-1.7-2.1-2.2-4.9-4.6-18.8-17.5-47-13-12.6 2-32.7 12.2-36.7 27-2.6 9.4-.2 21.3 6.9 28.3.5.5 1.2.8 1.7 1.3C3.9 63 1.6 52.7 2.9 44c2.2-14.4 21.5-26.5 38.2-29.6 18.2-3.4 37.4 5.2 43.8 11.7l.2.2c.7.6 1.6 1.7 2.1 2.3 3.5 4.1 6.4 9 6.8 14.3.6 7.4-6.5 11.1-12.4 13.4-1.8.7-3.6 1.2-5.4 1.7-.6.2-1.9.4-2.6.5-.6.1-1.1.2-1.9.3-1.9.3-3.6.5-5.5.6-.8 0-3.2.2-4.9.2H55c-8-.1-16.2-1-24.2.3-1.1.3-1.6 1-.9.9 6.7-.2 9.6-.1 10.8-.2 6.3-.2 12.7.3 19 .3H64c.5 0 1.4-.1 1.9-.1 2.1-.1 4.1-.3 6.2-.5.3 0 2.9-.4 3.8-.6 4.4-.9 8.7-2.3 12.6-4.5 2.8-1.6 5.6-3.6 6.7-6.6.9-2.4.6-5.1 0-7.5z"
        mask="url(#brush__00)"
      />
      <path
        id="s-02"
        fill="currentColor"
        d="M63.6 75c-.6-.9-2-2.9-2.2-3.2-1.1-1.4-2.3-2.6-3.5-3.7-.6-.5-1.1-.9-1.5-1.2-4.1-3.5-8.9-5.2-15.7-6.3-2.1-.2-5.8-.7-9.7-.6-1 .1-1.8.9-1.1.8 9.3-.5 21.8 2.3 26.4 6.3.3.3.9.7 1.2 1 .2.1.4.3.5.5.8.9 1.7 2 2.7 3.2l1 1.6c.1.2 1.1 1.9 1.7 3.1.3.7.6 1.5.9 2.3 2.8 7.6 3.2 17.4.4 25.1-.1.3-.5 1.3-.9 1.8-.2.3-.7.2-1 .2.5.7 1.4 1.3 2 1.6.5.2 1-.9 1.2-1.3 1.4-2.8 1.8-6.3 2-9.5.6-7.4-.6-15.3-4.4-21.7z"
        mask="url(#brush__01)"
      />
      <path
        id="s-03"
        fill="currentColor"
        d="M65.9 60.8c.1-.6.2-1.1.3-1.4.5-2.9 1-5.8 1.5-8.6.4-2.9.5-6.3 1.1-11.2.1-1.9.3-2.3 1.5-2-.5-.3-1-.6-1.4-.6-.6.1-1.3.3-1.4 1.2-.4 2.4-.5 4.5-.8 6.7-.3 1.7-.5 3.5-.8 5.2-.5 2.4-1.1 5.7-1.2 6.6-.1.9-.7 4.2-.7 4.2-.7 3.9-1.4 7.8-2 11.7-.1.3-.4 3.4-.4 3.4-1.3 9.7-2.1 20.1 1 29.5.3.8 1.5 1.7 2.2 2 .5.2 1-.9 1.2-1.3v-.1c-.5-.8-.9-1.7-1.2-2.6 0 .1-.1.3-.1.4-.1.3-.5 1.3-.9 1.8-.3-1-.4-2.2-.6-2.9-.7-3.4-.9-6.9-1-10.3 0-5.4.5-10.7 1.2-16 .1-.5.1-1.1.2-1.5.2-1.6.5-3.2.7-4.8.5-3.2 1.1-6.3 1.6-9.4z"
        mask="url(#brush__02)"
      />
      <path
        id="s-04"
        fill="currentColor"
        d="M71.4 38.9c-.1-.7-1.7-1.9-2.5-1.9-.6.1-1.3.3-1.4 1.2 0 .1 0 .3-.1.4.7-1.3 1.7-.9 2.5 0 1.2 1.2-3.3 9.8-4 11.5-1.2 2.9-2.5 5.7-4 8.4-.2.4-.4.7-.6 1.1l-.7 1.3c-1.1 1.8-2.3 3.7-4.2 6l-.1.2c-2.5 3.2-6.3 7.3-12.6 13.5-5.6 5.5-3.3 8.5.2 4.9 6.2-6.3 8.9-10.3 12.4-15.1l1.5-2.1.1-.2c1.6-2.3 3.1-4.7 4.5-7.2l.8-1.4c.5-.9 1-1.8 1.5-2.8.3-.7 2.1-3.9 3-5.9.5-1.2 1-2.3 1.5-3.5 0 0 .3-.8.5-1.2.4-1 .6-1.5.9-2.5.5-1.4 1.2-3.2.8-4.7z"
        mask="url(#brush__03)"
      />
      <path
        id="s-05"
        fill="currentColor"
        d="M75.1 66.7c-.4-1.3-2.1-6.2-2.1-6.5-.1-.5-.3-1.3-.4-1.6-1.1-3.8-1.9-8.3-2.9-12.5-.3-1.4-.7-2.5-1-2.4-.3.1-.5.5-.7 1-.4 1.4.7.6 1.1 2.5.8 3.8 1.5 7.6 2.5 11.5.1.4 2.4 9.5 3.4 11.6 1.8 3.9 4.4 15.6 2.7 14-.2.4-.2 1 .1 1.4.8.9 1.6 1.5 1.8 1.1 2-3.9-3.1-15.3-4.5-20.1z"
        mask="url(#brush__04)"
      />
      <path
        id="s-06"
        fill="currentColor"
        d="M150.3 8.4c-8.6-5.8-18.8-8.7-29.3-7.3-11.2 1.6-21 8.4-28.8 16.3-2.6 2.6-4.7 5.2-6.6 8.2l-.5.7c-3 4.8-5.4 10-7.3 15.4-1.9 5.4-3.4 11.1-4.2 16.8 0 .5-.6 5.5-.6 5.7-.1 2-.1 3.5-.1 5.4.1 4.9.7 11.7 4.3 15.5.8.9 2.2 2.2 2.4 1.7.2-.4.3-.9.4-1.4-.8-.1-1.9-.7-2.4-1.2-1.6-2-2.3-5.2-2.6-7.7-.3-1.7-.5-4.4-.3-6.1.1-1 .2-2.4.3-3.7.1-2.3.5-4.7.9-7 .1-.6.2-1.2.3-1.7.5-2.9 1.2-5.7 1.9-8.4 2.1-7.4 5.1-14.5 9.1-21l.4-.6c4.6-7.1 11-13.2 18.1-17.8 6.9-4.6 15-7.3 23.4-7.2 8.3 0 17.3 3.7 24.3 8.1-1-1.1-2.2-2.2-3.1-2.7z"
        mask="url(#brush__05)"
      />
    </svg>
  )
}

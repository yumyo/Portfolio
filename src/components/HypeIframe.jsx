/**
 * @name Hype Component
 * @param {string} animationName
 */

import React, { useRef } from "react"
import IframeResizer from "iframe-resizer-react"
import { InView } from "react-intersection-observer"

const HypeIframe = ({ animationName }) => {
  const ref = useRef(null)

  /**
   * @param {String='Play Hype','Continue Hype','Continue Hype Always'}
   * hypeDocument.continueTimelineNamed(timelineName, direction, canRestartTimeline)
   * hypeDocument.startTimelineNamed('Main Timeline', hypeDocument.kDirectionForward)
   * hypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward, true)
   * hypeDocument.continueTimelineNamed('Main Timeline', hypeDocument.kDirectionForward, false)
   */
  const trigPlay = data => {
    ref.current.sendMessage(data)
  }

  return (
    <InView
      as="div"
      onChange={(inView, entry) => trigPlay("Continue Hype Always")}
    >
      <IframeResizer
        frameBorder="0"
        forwardRef={ref}
        onMessage={trigPlay}
        className="mt-3 mb-3"
        src={`/hype/${animationName}/index.html`}
        style={{ width: "1px", minWidth: "100%" }}
      />
    </InView>
  )
}

export default HypeIframe

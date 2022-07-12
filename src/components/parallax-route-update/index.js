import { useEffect } from "react"
import { useLocation } from "@reach/router"
import { useParallaxController } from "react-scroll-parallax"

function useUpdateControllerOnRouteChange() {
  const location = useLocation()
  const parallaxController = useParallaxController()

  useEffect(() => {
    parallaxController.update()
  }, [location.pathname])
}

export const ParallaxRouteUpdate = () => {
  useUpdateControllerOnRouteChange()
  return null
}

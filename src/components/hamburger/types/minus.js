import React from "react"
import { createGlobalStyle } from "styled-components"
import Base from "../base"

let defaultProps = {
  width: 40,
  lineHeight: 4,
  lineSpacing: 6,
  color: "#000",
  borderRadius: 0,
  active: false,
  padding: "15px",
}

export default class Minus extends React.Component {
  render() {
    let { width } = this.props

    const widthFraction = width / 3

    const GlobalStyle = createGlobalStyle`
    .BurgerMinus {
      .BurgerInner {
        width: ${width - widthFraction}px;
        &:before,
        &:after {
        }
        &:before {
          width: ${width}px;
        }
        &:after {
          width: ${width - widthFraction * 2}px;
        }
      }

      &.BurgerActive {
        .BurgerInner {
          transition: all 0.3s ease-out;
          &:before,
          &:after {
            transition: all 0.3s ease-out;
          }
          /* width: ${width}px;
          
          &:before,
          &:after {
            opacity: 0;
            transition: all 0.3s ease-out;
                    width: ${width}px;
          }
          */
          &:before {
            transform: translateY(0);
          }
          &:after {
            transform: translateY(0);
          } 
        }
      }
    }
    `

    return (
      <Base
        typeClassName="BurgerMinus mt-k1 translate -translate-y-2"
        {...this.props}
      >
        <GlobalStyle />
      </Base>
    )
  }
}

Minus.defaultProps = defaultProps

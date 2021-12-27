import React from 'react'
import { createGlobalStyle } from 'styled-components'

export default class Base extends React.Component {
	formattedSize(size) {
		return isNaN(parseInt(size)) ? size : `${size}px`
	}
	render(){
		let {
			width,
			lineHeight,
			color,
			active,
			onClick,
			borderRadius,
			lineSpacing,
			padding,
			className,
			typeClassName,
			children,
		} = this.props

		const height = lineSpacing * 2 + lineHeight * 3
		const formattedWidth = this.formattedSize(width)
		const formattedHeight = this.formattedSize(height)

		const customProps = this.props.customProps || {}

		const classes = [typeClassName, 'Burger']
		if(active) classes.push('BurgerActive')
		if(className) classes.push(className)

    const GlobalStyle = createGlobalStyle`
      .Burger{
        /* padding: ${padding}; */
        cursor: pointer;
        font: inherit;
        color: inherit;
        text-transform: none;
        background-color: transparent;
        border: 0;
        margin: 0;
        overflow: visible;
        outline: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        span {
          margin-right: 1em;
        }
      }

      .BurgerBox{
        width: ${formattedWidth};
        height: ${formattedHeight};
        display: inline-block;
        position: relative;
      }

      .BurgerInner{
        top: 50%;
        margin-top: ${(lineHeight / 2) * -1}px;

        &:before,
        &:after{
          content: '';
          display: block;
        }

        &,
        &:before,
        &:after{
          position: absolute;
          width: 100%;
          background-color: currentColor;
          height: ${lineHeight}px;
          border-radius: ${borderRadius}px;
          transition-property: transform;
          transition-duration: 0.15s;
          transition-timing-function: ease;
        }

        &:before{
          transform: translateY(${(lineSpacing + lineHeight) * -1}px);
        }

        &:after{
          transform: translateY(${(lineSpacing + lineHeight) * 1}px);
        }
      }
    `

		return (
			<button className={classes.join(' ')} onClick={onClick} {...customProps}>
         <span>Menu </span>
				<div className='BurgerBox'>
					<div className='BurgerInner text-violet-400' />
				</div>
				{children}
				<GlobalStyle />
			</button>
		)
	}
}
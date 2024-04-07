//Crop and Zoom Image Hover

```css
.image-clip {
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  cursor: pointer;
  img {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all 0.3s ease !important;
    -o-transition: all 0.3s ease !important;
    transition: all 0.3s ease !important;
  }
  &:hover {
    -webkit-clip-path: polygon(2% 2%, 98% 2%, 98% 98%, 2% 98%);
    clip-path: polygon(2% 2%, 98% 2%, 98% 98%, 2% 98%);
    img {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }
}
```

```jsx
export const RevealParallax = () => {
  const [entered, setEntered] = useState(0)
  return (
    <Parallax
      onEnter={() => setEntered(true)}
      onExit={() => setEntered(false)}
      startScroll={200}
      className={
        "transition-opacity delay-500 duration-500 " +
        (entered ? " opacity-1" : " opacity-0")
      }
    >
      <ProjectDetail
        label="Wireframings"
        content="<p>The wireframes were created in Sketch and then shared in InVision, to gather comments and further iterate each board.</p><p>I decided to use a monochrome style (one colour against white) to obtain a straightforward form of wireframing that matches its function. You can read more about it on the UX Movement website at this link: <a href='https://uxmovement.com/wireframes/why-the-best-wireframe-style-is-no-style/' target='_blank' title='UX Movement: “Why the Best Wireframe Style Is No Style'>“Why the Best Wireframe Style Is No Style.”</a></p>"
      />
    </Parallax>
  )
}
```

```jsx
<Parallax speed={-5}>
  <div className=" pr-4 pl-4 ml-4 mt-16 text-center">
    <DeviceFrameset device="iPhone 5s" color="black" className="">
      <GatsbyImage
        alt="green doggo"
        placeholder="blurred"
        layout="fixed"
        className="pippo"
        image={getImage(props.remoteImages[6])}
      />
    </DeviceFrameset>
  </div>
</Parallax>

<div className=" pr-4 pl-4 ml-4 mt-16 text-center">
  <DeviceFrameset device="MacBook Pro" color="black">
    <Parallax speed={-15}>
      <GatsbyImage
        alt="green doggo"
        placeholder="blurred"
        layout="fixed"
        image={getImage(props.remoteImages[7])}
      />
    </Parallax>
  </DeviceFrameset>
</div>


<div className="mx-auto w-k7 block mt-8 mb-8 text-center">
  <div>
    <GatsbyImage
      alt="green doggo"
      placeholder="blurred"
      layout="fixed"
      image={getImage(props.remoteImages[2])}
    />
  </div>
</div>
```

## An alternative to the Case History Slides

```js
<ListItem key={childMdx.id}>
  <TransitionLink
    className={`relative mx-auto block w-full  h-[50vh] md:w-k8 lg:w-k7 xl:w-k7 overflow-hidden`}
    partiallyActive={true}
    activeClassName="active"
    to={`${childMdx.slug}`}
    exit={{
      length: 0.5,
    }}
    entry={{
      appearAfter: 0.5,
      length: 0.5,
    }}
  >
    <GatsbyImage
      image={getImage(childMdx.frontmatter.banner)}
      alt={childMdx.frontmatter.title}
      className={`absolute bottom-0 w-full`}
      objectFit='contain'
    />
  </TransitionLink>
  <div className="mx-auto w-full lg:w-k7 xl:w-k7 flex flex-row justify-between items-center">
    <div className="">
      <Title>{childMdx.frontmatter.title}</Title>
      <p className="max-w-prose mb-0">
        {childMdx.frontmatter.description}
      </p>
    </div>
    {/* <List>
    {childMdx.frontmatter.tags
      ? childMdx.frontmatter.tags.map((tag, index) => {
          return (
            <Tag key={index}>
              <span className="text-black-shade-500">#</span>
              {tag}
            </Tag>
          )
        })
      : null}
  </List> */}
    <div className="">
      <TransitionLink
        className={`mt-4 inline-block ${GhostButton}`}
        partiallyActive={true}
        activeClassName="active"
        to={`${childMdx.slug}`}
        exit={{
          length: 0.5,
        }}
        entry={{
          appearAfter: 0.5,
          length: 0.5,
        }}
      >
        View Case
      </TransitionLink>
    </div>
  </div>
</ListItem>
```

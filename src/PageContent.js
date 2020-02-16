import React from 'react'
import Project from './Project'
import './PageContent.css'



function PageContent() {
 return (
 <div className="PageContent">
 <Project title="Cutest Puppy" image="/images/cute_dog.jpg" link="#" />
 <Project title="Ganesha" image="/images/ganesha.jpg" link="#" />
 <Project title="Fender Telecaster" image="/images/Fender.jpg" link="#" />
 <Project title="Gibson Les Paul" image="/images/Gibson.jpg" link="#" />
 <Project title="Yours Truly" image="/images/shoze.jpg" link="#" />
 <Project title="Sydney Opera House" image="/images/sydney.jpeg" link="#" />
 </div>
 )
}

export default PageContent

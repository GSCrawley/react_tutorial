import data from './data'
import React from 'react'
import Project from './Project'
import './PageContent.css'


function PageContent() {
 return (
 <div className="PageContent">
 <Project title="Cutest Puppy" image="/images/cute_dog.jpg" link="/puppies" />
 <Project title="Ganesha" image="/images/ganesha.png" link="/hindu_gods" />
 <Project title="Fender Telecaster" image="/images/Fender.jpg" link="/guitars" />
 <Project title="Gibson Les Paul" image="/images/Gibson.jpg" link="/guitars" />
 <Project title="Yours Truly" image="/images/shoze.jpg" link="/me" />
 <Project title="Sydney Opera House" image="/images/sydney.jpeg" link="/landmarks" />
 </div>
 )
}

export default PageContent

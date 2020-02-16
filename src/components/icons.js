import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import githubIconLight from "../images/github-light.svg"
import linkedinIconLight from "../images/linkedin-light.svg"
import soundcloudIconLight from "../images/soundcloud-light.svg"
import githubIconDark from "../images/github-dark.svg"
import linkedinIconDark from "../images/linkedin-dark.svg"
import soundcloudIconDark from "../images/soundcloud-dark.svg"

const IconList = styled.ul`
  list-style-type: none;
  display: flex;
  margin-bottom: 0;
`;
const IconItem = styled.li`
  margin-left: calc( 1.45rem / 2 );
  margin-bottom: 0;
  line-height: 0;
`;
const IconItemLink = styled.a``;

const Icons = ({theme}) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        id
        siteMetadata {
          links {
            github
            linkedin
            soundcloud
          }
        }
      }
    }
  `)

  const getIcon = (type, theme) => {
    switch ( type ) {
      case 'github':
        if ( theme === 'light' )
          return <img src={githubIconLight} alt="Link to Github" />
        return <img src={githubIconDark} alt="Link to Github" />
      case 'linkedin':
        if ( theme === 'light' )
          return <img src={linkedinIconLight} alt="Link to LinkedIn" />
        return <img src={linkedinIconDark} alt="Link to LinkedIn" />
      case 'soundcloud':
        if ( theme === 'light' )
          return <img src={soundcloudIconLight} alt="Link to SoundCloud" />
        return <img src={soundcloudIconDark} alt="Link to SoundCloud" />
      default:
        return;
    }
  }

  return (
    <IconList>
      <IconItem>
        <IconItemLink href={ site.siteMetadata.links.github } target="_blank" rel="noopener noreferrer">
          { getIcon('github', theme) }
        </IconItemLink>
      </IconItem>
      <IconItem>
        <IconItemLink href={ site.siteMetadata.links.linkedin } target="_blank" rel="noopener noreferrer">
          { getIcon('linkedin', theme) }
        </IconItemLink>
      </IconItem>
      <IconItem>
        <IconItemLink href={ site.siteMetadata.links.soundcloud } target="_blank" rel="noopener noreferrer">
          { getIcon('soundcloud', theme) }
        </IconItemLink>
      </IconItem>
    </IconList>
  )
}


export default Icons

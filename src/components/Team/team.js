import React from "react"
import { Card } from "antd"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import CardStyle from "./team.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const { Meta } = Card

const TeamCard = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeamCard {
        edges {
          node {
            name
            about {
              json
            }
            profileImage {
              file {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {data.allContentfulTeamCard.edges.map(edge => {
        return (
          // <div className={CardStyle.card}>
          //   <img  alt="Card image cap" />
          //   <div className={CardStyle.container}>{}</div>
          // </div>
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt={edge.node.profileImage.title}
                src={edge.node.profileImage.file.url}
              />
            }
          >
            <Meta
              title={edge.node.name}
              description={documentToReactComponents(edge.node.about.json)}
            />
          </Card>
        )
      })}
    </div>
  )
}

export default TeamCard

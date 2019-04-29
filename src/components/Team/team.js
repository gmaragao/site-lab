import React from "react"
import { Card, Avatar } from "antd"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import CardStyle from "./team.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const { Meta } = Card

const TeamCard = props => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulTeamCard(sort: { fields: [role] }) {
        edges {
          node {
            name
            about {
              json
            }
            role
            roleImage {
              title
              file {
                url
              }
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
            // style={{ width: 200, height: 400 }}
            className={CardStyle.cardPosition}
            cover={
              <img
                style={{
                  borderRadius: 80,
                  height: 150,
                  marginTop: 10,
                  marginLeft: 25,
                  width: 200,
                }}
                alt={edge.node.profileImage.title}
                src={edge.node.profileImage.file.url}
              />
            }
          >
            <Meta
              avatar={
                <Avatar
                  style={{ height: 40, width: 40 }}
                  src={edge.node.roleImage.file.url}
                />
              }
              title={edge.node.name}
              description={edge.node.role}
            />
            <Card title={`About`} className={CardStyle.contentCard}>
              {documentToReactComponents(edge.node.about.json)}
            </Card>
          </Card>
        )
      })}
    </div>
  )
}

export default TeamCard

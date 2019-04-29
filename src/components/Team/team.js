import React from "react"
import { Card, Avatar, Row, Col } from "antd"
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
      <Card bordered={false}>
        <Row>
          <h2>Co-Founders</h2>
          {data.allContentfulTeamCard.edges.map(edge => {
            if (edge.node.role === "Co-founder") {
              return (
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
            }
          })}
        </Row>
        <Row>
          <h2>Developers</h2>
          {data.allContentfulTeamCard.edges.map(edge => {
            if (edge.node.role === "Developer") {
              return (
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
            }
          })}
        </Row>
      </Card>
    </div>
  )
}

export default TeamCard

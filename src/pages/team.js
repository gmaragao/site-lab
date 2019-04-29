import React from "react"
import Layout from "../components/layout"
import TeamCard from "../components/Team/team"
import { Card } from "antd"
const TeamPage = () => {
  return (
    <div>
      <Layout>
        <Card bordered={false}>
          <TeamCard />
        </Card>
      </Layout>
    </div>
  )
}

export default TeamPage

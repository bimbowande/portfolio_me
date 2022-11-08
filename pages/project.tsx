import type { NextPage } from 'next'
import React from 'react'
import { PageContent, PageHeader } from '../common/Project/styles'
import { Layout } from '../components/Layout/Layout'

 const Project: NextPage = () => {
  return (
    <Layout>
        <div>
          <PageHeader>Projects</PageHeader>
          <PageContent>Projects i have worked on.</PageContent>
        </div>
    </Layout>
  )
}

export default Project